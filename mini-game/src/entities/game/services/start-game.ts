import { left, right } from "@/shared/lib/either";
import { PlayerEntity } from "../domain";
import { gameRepository } from "../repositories/game";

export async function startGame(gameId: string, player: PlayerEntity) {
    const game = await gameRepository.getGameById({ id: gameId });
    if (!game) {
        return left("game not found");
    }
    if (game.status !== "idle") {
        return left("game-status-not-idle");
    }
    if (game.creator.id === player.id) {
        return left("creator-can-not-start-game");
    }
    return right(gameRepository.startGame(gameId, player));
}