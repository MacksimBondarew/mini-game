import { GameEntity, getGameCurrentStep } from "@/entities/game";

export function GameStatus({ game }: { game: GameEntity }) {
    let currentSymbol: string | null = null;
    if (!game) {
        return <div>Loading game...</div>
    }

    if (game.status === "inProgress" || game.status === "gameOver") {
        currentSymbol = getGameCurrentStep(game);
    }

    switch (game.status) {
        case "idle":
            return <div>Pending player</div>;

        case "inProgress":
            return <div className="text-lg">{currentSymbol}</div>;

        case "gameOver":
            return <div className="text-lg">Winner {currentSymbol}</div>;

        case "gameOverDraw":
            return <div className="text-lg">Draw</div>;

        default:
            return null;
    }
}
