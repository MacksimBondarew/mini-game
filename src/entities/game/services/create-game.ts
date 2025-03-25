import { left, right } from "@/shared/lib/either";
import { PlayerEntity } from "../domain";
import { gameRepository } from "../repositories/game";
import cuid from "cuid";

export async function createGame(user: PlayerEntity) {
    const playerGames = await gameRepository.gamesList({
        players: { some: { id: user.id } },
        status: "idle",
    });

    const isGameInIdleStatus = playerGames.some(
        (game) => game.status === "idle" && game.creator.id === user.id
    );

    if (isGameInIdleStatus) {
        return left("can-create-only-one-game" as const);
    }

    const createdGame = await gameRepository.createGame({
        id: cuid(),
        status: "idle",
        creator: user,
        field: Array(9).fill(null),
    });
    return right(createdGame);
}
