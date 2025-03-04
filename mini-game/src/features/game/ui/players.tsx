import { GameEntity } from "@/entities/game";
import { motion } from "framer-motion";

export function GamePlayers({ game }: { game: GameEntity }) {
    if (!game) {
        return (
            <div className="text-gray-400 text-center text-lg">
                Loading players...
            </div>
        );
    }

    const firstPlayer = game.status === "idle" ? game.creator : game.players[0];
    const secondPlayer = game.status === "idle" ? null : game.players[1];

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center py-6 backdrop-blur-md border border-gray-800 shadow-md rounded-lg">
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center mb-4 gap-1">
                <p className="text-2xl font-bold text-red-400">
                    ❌ {firstPlayer.login}
                </p>
                <span className="text-sm text-gray-400">
                    Rating: {firstPlayer.rating}
                </span>
            </motion.div>
            <div className="w-full border-t border-gray-600 mb-4"></div>
            {secondPlayer ? (
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center">
                    <p className="text-2xl font-bold text-blue-400">
                        ⭕ {secondPlayer.login}
                    </p>
                    <span className="text-sm text-gray-400">
                        Rating: {secondPlayer.rating}
                    </span>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="text-gray-400 text-lg">
                    ⏳ Waiting for player...
                </motion.div>
            )}
        </motion.div>
    );
}
