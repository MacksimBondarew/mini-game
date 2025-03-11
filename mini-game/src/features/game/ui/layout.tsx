import {
    Card,
    CardContent,
    CardFooter,
} from "@/shared/ui/card";
import { motion } from "framer-motion";

export function GameLayout({
    status,
    field,
    actions,
    players,
}: {
    players?: React.ReactNode;
    status?: React.ReactNode;
    field?: React.ReactNode;
    actions?: React.ReactNode;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-xl w-full mx-auto">
            <Card className="backdrop-blur-md border border-gray-800 shadow-md rounded-lg">
                <CardContent className="flex flex-col gap-4">
                    {players}
                    {status}
                    <div className="flex items-center justify-center p-6">
                        {field}
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    {actions}
                </CardFooter>
            </Card>
        </motion.div>
    );
}
