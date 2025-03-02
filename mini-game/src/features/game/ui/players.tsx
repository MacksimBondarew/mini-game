import { GameEntity } from "@/entities/game";

export function GamePlayers({ game }: { game: GameEntity }) {
    if (!game) {
        return <div className="text-gray-400 text-center">Loading players...</div>;
    }
    const firstPlayer = game.status === "idle" ? game.creator : game.players[0];
    const secondPlayer = game.status === "idle" ? undefined : game.players[1];
    return (
        <div className="flex flex-row gap-4 justify-between">
            <div className="flex flex-col gap-1">
                <p className="text-xl">X -{firstPlayer.login}</p>
                <span className="text-sm text-gray-400">
                    rating {firstPlayer.rating}
                </span>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-xl">
                    O - {secondPlayer?.login}
                </p>
                <span className="text-sm text-gray-400">
                    {!secondPlayer ? "" : `rating ${secondPlayer.rating}`}
                </span>
            </div>
        </div>
    );
}
