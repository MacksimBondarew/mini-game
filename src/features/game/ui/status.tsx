import { GameEntity } from "@/entities/game";
import { getGameCurrentSymbol } from "@/entities/game/domain";
import { motion } from "framer-motion";

export function GameStatus({ game }: { game: GameEntity }) {
    let currentSymbol: string | null = null;

    if (!game) {
        return (
            <div className="text-gray-400 text-center text-lg">
                Loading game...
            </div>
        );
    }

    if (game.status === "inProgress" || game.status === "gameOver") {
        currentSymbol = getGameCurrentSymbol(game);
    }

    return (
        <motion.div
            key={game.status}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center text-center text-xl font-semibold rounded-lg">
            {game.status === "idle" && (
                <motion.div
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="flex flex-col items-center text-gray-300 text-lg font-medium">
                    Searching for an opponent...
                    <br />
                    Invite a friend or wait for a challenger!
                </motion.div>
            )}

            {game.status === "inProgress" && (
                <motion.span
                    className="text-3xl font-bold"
                    animate={{
                        textShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",
                    }}>
                    Current Turn: {currentSymbol === "X" ? "❌" : "⭕"}
                </motion.span>
            )}

            {game.status === "gameOver" && (
                <motion.span
                    className="text-3xl font-bold text-green-400"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}>
                    🎉 Winner: {currentSymbol === "O" ? "❌" : "⭕"}
                </motion.span>
            )}

            {game.status === "gameOverDraw" && (
                <motion.span
                    className="text-3xl font-bold text-yellow-400"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}>
                    🤝 Draw! No winner.
                </motion.span>
            )}
        </motion.div>
    );
}
