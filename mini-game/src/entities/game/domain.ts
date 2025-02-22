export type PlayerEntity = {
    id: string;
    login: string;
    rating: number;
}

export type GameIdleEntity = {
    id: string;
    creator: PlayerEntity;
    status: "idle";
}

export type GameInProgressEntity = {
    id: string;
    field: FieldEntity;
    players: PlayerEntity[];
    status: "inProgress";  
};

export type GameOverEntity = {
    id: string;
    players: PlayerEntity[];
    field: FieldEntity;
    status: "gameOver";
    winner: PlayerEntity;
}

export type GameOverDrawEntity = {
    id: string;
    field: FieldEntity;
    players: PlayerEntity[];
    status: "gameOverDraw";
}

export type FieldEntity = (GameSymbolEntity | null)[];
export type GameSymbolEntity = string;

export type GameEntity = GameIdleEntity | GameInProgressEntity | GameOverEntity | GameOverDrawEntity;