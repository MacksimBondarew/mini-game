import { GameId, UserId } from "@/kernel/ids";

export type PlayerEntity = {
    id: UserId;
    login: string;
    rating: number;
}

export type GameIdleEntity = {
    id: GameId;
    creator: PlayerEntity;
    status: "idle";
    field: FieldEntity;
}

export type GameInProgressEntity = {
    id: GameId;
    field: FieldEntity;
    players: PlayerEntity[];
    status: "inProgress";  
};

export type GameOverEntity = {
    id: GameId;
    players: PlayerEntity[];
    field: FieldEntity;
    status: "gameOver";
    winner: PlayerEntity;
}

export type GameOverDrawEntity = {
    id: GameId;
    field: FieldEntity;
    players: PlayerEntity[];
    status: "gameOverDraw";
}

export type FieldEntity = (GameSymbolEntity | null)[];
export type GameSymbolEntity = string;

export type GameEntity = GameIdleEntity | GameInProgressEntity | GameOverEntity | GameOverDrawEntity;

export const GameSymbol = {
    X: "X",
    O: "O",
}

export const getGameCurrentStep = (game: GameInProgressEntity | GameOverDrawEntity | GameOverEntity) => {
    const symbols = game.field.filter(s => s !== null).length;
    return symbols % 2 === 0 ? GameSymbol.X : GameSymbol.O;
};
export const getNextSymbol = (sameSymbol: GameSymbolEntity) => {
    if (sameSymbol === GameSymbol.X) {
        return GameSymbol.O;
    }
    return GameSymbol.X;
}