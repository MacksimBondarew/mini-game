"use client";

import { GameEntity } from "@/entities/game";
import { motion } from "framer-motion";

export function GameField({
    game,
    onCellClick,
}: {
    game: GameEntity;
    onCellClick: (index: number) => void;
}) {
    if (!game) {
        return (
            <div className="text-gray-400 text-center text-lg">
                Loading game...
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-3 gap-1 backdrop-blur-md border border-gray-800 p-3 rounded-lg relative">
            {game.field.map((symbol, index) => (
                <motion.button
                    key={index}
                    onClick={() => onCellClick(index)}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 flex justify-center items-center border border-gray-600 bg-gray-900 text-2xl font-bold text-white transition-all duration-300 hover:bg-gray-700">
                    {symbol === "X" ? (
                        <motion.span
                            className="text-red-400"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.5 }}>
                            ❌
                        </motion.span>
                    ) : symbol === "O" ? (
                        <motion.span
                            className="text-blue-400"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.5 }}>
                            ⭕
                        </motion.span>
                    ) : (
                        ""
                    )}
                </motion.button>
            ))}
        </motion.div>
    );
}
