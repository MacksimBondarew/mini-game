import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/shared/ui/card";
import { motion } from "framer-motion";

export function AuthFormLayout({
    title,
    fields,
    actions,
    link,
    action,
    error,
}: {
    title: string;
    fields: React.ReactNode;
    actions: React.ReactNode;
    link: React.ReactNode;
    error?: React.ReactNode;
    action: (formData: FormData) => void | void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center w-full">
            <Card className="w-full py-5 max-w-sm border border-gray-800 shadow-md rounded-lg relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardHeader className="relative text-center pb-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        whileHover={{
                            textShadow: "0px 0px 12px rgba(255, 255, 255, 0.3)",
                            scale: 1.02,
                        }}
                        className="text-3xl font-semibold text-gray-200 tracking-wide transition-all duration-300">
                        {title}
                    </motion.h2>
                </CardHeader>

                <form action={action} className="relative">
                    <CardContent className="space-y-6 px-6">
                        {fields}
                        {error}
                        {actions}
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4 px-6 pb-6">
                        {link}
                    </CardFooter>
                </form>
            </Card>
        </motion.div>
    );
}
