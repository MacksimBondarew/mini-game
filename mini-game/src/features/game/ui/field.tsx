"use client";

import { GameEntity } from "@/entities/game";

export function GameField({ game, onCellClick }: { game: GameEntity, onCellClick: (index: number) => void }) {
    if (!game) {
        return <div>Loading players...</div>
    }
    if (game.field) {
        return (
            <div className="grid grid-cols-3">
                {game.field.map((symbol, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => onCellClick(index)}
                            className="border border-primary w-10 h-10 flex justify-center items-center">
                            {symbol ?? ""}
                        </button>
                    );
                })}
            </div>
        );
    }
}
