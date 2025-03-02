import { prisma } from "@/shared/lib/db";
import {
    GameEntity,
    GameIdleEntity,
    GameOverEntity,
    PlayerEntity,
} from "../domain";
import { Game, Prisma, User } from "@prisma/client";
import { z } from "zod";
import { removePassword } from "@/shared/lib/password";

const fieldSchema = z.array(z.union([z.string(), z.null()]));

async function getGameById(where?: Prisma.GameWhereInput) {
    const game = await prisma.game.findFirst({
        where,
        include: {
            winner: true,
            players: true,
        },
    });
    if (game) {
        return dbGameToGameEntity(game);
    }
    return undefined;
}

function dbGameToGameEntity(
    game: Game & {
        players: User[];
        winner: User | null;
    }
): GameEntity {
    const players = game.players.map(removePassword);
    switch (game.status) {
        case "idle": {
            const [creator] = game.players;
            if (!creator) {
                throw new Error("Creator should be in idle game");
            }
            return {
                id: game.id,
                creator: removePassword(creator),
                status: game.status,
                field: fieldSchema.parse(game.field),
            } satisfies GameIdleEntity;
        }
        case "inProgress":
        case "gameOverDraw":
            return {
                id: game.id,
                players: players,
                status: game.status,
                field: fieldSchema.parse(game.field),
            };
        case "gameOver": {
            if (!game.winner) {
                throw new Error("Winner should be in game over");
            }
            return {
                id: game.id,
                players: players,
                status: game.status,
                field: fieldSchema.parse(game.field),
                winner: removePassword(game.winner),
            } satisfies GameOverEntity;
        }
    }
}

async function gamesList(where?: Prisma.GameWhereInput): Promise<GameEntity[]> {
    const games = await prisma.game.findMany({
        where,
        include: {
            winner: true,
            players: true,
        },
    });
    return games.map(dbGameToGameEntity);
}

async function createGame(game: GameIdleEntity): Promise<GameEntity> {
    const createdGame = await prisma.game.create({
        data: {
            status: game.status,
            id: game.id,
            field: game.field,
            players: {
                connect: { id: game.creator.id },
            },
        },
        include: {
            players: true,
            winner: true,
        },
    });
    return dbGameToGameEntity(createdGame);
}

async function startGame(gameId: string, player: PlayerEntity) {
    return dbGameToGameEntity(
        await prisma.game.update({
            where: {
                id: gameId,
            },
            data: {
                players: {
                    connect: {
                        id: player.id,
                    },
                },
                status: "inProgress",
            },
            include: {
                winner: true,
                players: true,
            },
        })
    );
}

export const gameRepository = {
    gamesList,
    createGame,
    getGameById,
    startGame,
};
