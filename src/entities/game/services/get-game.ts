import { gameRepository } from "../repositories/game";

export const getGameById = (gameId: string) => {
    return gameRepository.getGame({ id: gameId });
}