import { prisma } from "@/shared/lib/db";
import { GameEntity, GameIdleEntity, GameOverEntity } from "../domain";
import { Game, GameStatus, User } from "@prisma/client";
import { z } from "zod";

const fieldSchema = z.array(z.union([z.string(), z.null()]));

function dbGameToGameEntity(
    game: Game & {
        players: User[];
        winner: User | null;
    }
): GameEntity {
    console.log(game)
    switch (game.status) {
        case "idle": {
            const [creator] = game.players;
            if (!creator) {
                throw new Error("Creator should be in idle game");
            }
            return {
                id: game.id,
                creator,
                status: game.status,
            } satisfies GameIdleEntity;
        }
        case "inProgress":
        case "gameOverDraw":
            return {
                id: game.id,
                players: game.players,
                status: game.status,
                field: fieldSchema.parse(game.field),
            };
        case "gameOver": {
            if (!game.winner) {
                throw new Error("Winner should be in game over");
            }
            return {
                id: game.id,
                players: game.players,
                status: game.status,
                field: fieldSchema.parse(game.field),
                winner: game.winner,
            } satisfies GameOverEntity;
        }
    }
}

async function gamesList({
    status,
}: {
    status?: GameStatus;
}): Promise<GameEntity[]> {
    const games = await prisma.game.findMany({
        where: {
            status
        },
        include: {
            winner: true,
            players: true,
        },
    });
    return games.map(dbGameToGameEntity);
}

export const gameRepository = {
    gamesList,
};
