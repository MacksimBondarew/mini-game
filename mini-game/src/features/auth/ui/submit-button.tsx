"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/shared/ui/button";
import { useState } from "react";

export function SubmitButton({
    children,
    isPending,
}: {
    children: React.ReactNode;
    isPending?: boolean;
}) {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <motion.div className="relative w-full h-[50px] min-h-[50px] flex items-center justify-center">
            <motion.div
                layout
                whileHover={!isPending ? { scale: 1.02 } : {}}
                whileTap={!isPending ? { scale: 0.98 } : {}}
                transition={{ duration: 0.2 }}
                className="relative w-full"
            >
                <motion.div
                    className="absolute top-0 left-0 w-full h-full rounded-md bg-gradient-to-r opacity-30"
                    animate={{
                        opacity: isPressed ? 0.6 : 0.3,
                        scale: isPressed ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                />
                <Button
                    className="relative overflow-hidden w-full h-10 px-6 py-3 font-bold text-white bg-gradient-to-r from-black to-gray-900 border border-gray-700 shadow-md rounded-md transition-all duration-300 ease-in-out flex items-center justify-center"
                    onMouseDown={() => setIsPressed(true)}
                    onMouseUp={() => setIsPressed(false)}
                    onMouseLeave={() => setIsPressed(false)}
                >
                    <AnimatePresence mode="wait">
                        {isPending ? (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center"
                            >
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        repeat: Number.POSITIVE_INFINITY,
                                        duration: 0.8,
                                        ease: "linear",
                                    }}
                                    className="mr-2 h-5 w-5 border-2 border-current border-t-transparent rounded-full"
                                />
                                Processing...
                            </motion.div>
                        ) : (
                            <motion.div
                                key="button-text"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                {children}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Button>
            </motion.div>
        </motion.div>
    );
}
