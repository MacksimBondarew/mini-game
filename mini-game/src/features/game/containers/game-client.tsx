"use client";

import { GameLayout } from "../ui/layout";
import { GamePlayers } from "../ui/players";
import { GameStatus } from "../ui/status";
import { GameField } from "../ui/field";
import { useGame } from "../model/use-game";
import { GameEntity } from "@/entities/game";

export function GameClient({ defaultGame }: { defaultGame: GameEntity }) {
    const { data: game = defaultGame } = useGame(defaultGame.id);
    if (!game) {
        return (
            <div className="text-gray-400 text-center text-lg">
                Loading game...
            </div>
        );
    }
    return (
        <GameLayout
            players={<GamePlayers game={game} />}
            status={<GameStatus game={game} />}
            field={<GameField game={game} />}
        />
    );
}
