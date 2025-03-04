import { GameId } from "@/kernel/ids";
import {
    GameInProgressEntity,
    GameSymbol,
    getGameCurrentStep,
    getNextSymbol,
    PlayerEntity,
} from "../domain";
import { gameRepository } from "../repositories/game";
import { left, right } from "@/shared/lib/either";
import { gameEvents } from "@/features/game/services/game-event";

export async function stepGame(
    gameId: GameId,
    player: PlayerEntity,
    index: number
) {
    const game = await gameRepository.getGame({ id: gameId });
    if (!game) {
        return left("game-not-found" as const);
    }

    if (game.status !== "inProgress") {
        return left("game-is-not-in-progress" as const);
    }

    if (!game.players.some((p) => p.id === player.id)) {
        return left("player-is-not-in-game" as const);
    }

    const newGame = await gameRepository.saveGame({
        ...game,
        status: "gameOver",
        winner: game.players.find((p) => p.id !== player.id)!,
    });
    await gameEvents.emit({
        type: "game-changed",
        data: newGame,
    });
    console.log(index)

    return right(newGame);
}

export const getPlayerSymbol = (
    player: PlayerEntity,
    game: GameInProgressEntity
) => {
    const index = game.players.findIndex((p) => p.id === player.id);
    return { 0: GameSymbol.X, 1: GameSymbol.O }[index];
};

export const doStep = (
    game: GameInProgressEntity,
    index: number,
    player: PlayerEntity
) => {
    const currentSymbol = getGameCurrentStep(game);
    const nextSymbol = getNextSymbol(currentSymbol);

    if (nextSymbol !== getPlayerSymbol(player, game)) {
        return left("not-player-symbol" as const);
    }
    if (game.field[index]) {
        return left("game-cell-allready-taken" as const);
    }
    const newField = game.field.map((cell, i) => i === index ? nextSymbol : cell);
    console.log(newField);
};
