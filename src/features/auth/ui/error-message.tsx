import { Either, matchEither } from "@/shared/lib/either";
import { motion } from "framer-motion";
import { Alert, AlertDescription } from "@/shared/ui/alert";
import React from "react";

export function ErrorMessage({ error }: { error?: Either<string, unknown> }) {
    if (!error) return null;

    return matchEither(error, {
        right: () => null,
        left: (e) => (
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full flex justify-center">
                <Alert
                    variant="destructive"
                    className="relative flex items-center justify-between p-4 border border-red-500 bg-red-900/20 text-red-400 rounded-lg shadow-md backdrop-blur-md">
                    <AlertDescription className="text-sm font-medium">
                        {typeof e === "string" ? e : "An error occurred"}
                    </AlertDescription>
                </Alert>
            </motion.div>
        ),
    });
}
