"use client";

import { motion } from "framer-motion";
import { Input } from "@/shared/ui/input";
import { Label } from "@radix-ui/react-label";
import { useId } from "react";

export function AuthFields() {
    const loginId = useId();
    const passwordId = useId();

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="space-y-2 relative"
            >
                <Label htmlFor={loginId} className="text-gray-300">
                    Email
                </Label>
                <div className="relative w-full">
                    <Input
                        id={loginId}
                        name="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        autoComplete="email"
                        className="w-full bg-black text-white border border-gray-700 rounded-md px-3 py-2 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                    />
                    <motion.div
                        className="absolute inset-0 border-2 border-transparent rounded-md pointer-events-none"
                        animate={{
                            borderColor: ["transparent", "rgba(139, 92, 246, 0.7)", "transparent"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
                className="space-y-2 relative"
            >
                <Label htmlFor={passwordId} className="text-gray-300">
                    Password
                </Label>
                <div className="relative w-full">
                    <Input
                        id={passwordId}
                        name="password"
                        type="password"
                        required
                        autoComplete="new-password"
                        className="w-full bg-black text-white border border-gray-700 rounded-md px-3 py-2 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                    />
                    <motion.div
                        className="absolute inset-0 border-2 border-transparent rounded-md pointer-events-none"
                        animate={{
                            borderColor: ["transparent", "rgba(139, 92, 246, 0.7)", "transparent"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </motion.div>
        </>
    );
}
