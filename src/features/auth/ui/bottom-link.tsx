import Link from "next/link";
import { motion } from "framer-motion";

export function BottomLink({ text, linkText, url }: { text: string; linkText: string; url: string }) {
    return (
        <div className="text-sm text-gray-400 text-center">
            <span>{text} </span>
            <motion.span
                whileHover={{
                    scale: 1.05, 
                    textShadow: "0px 0px 10px rgba(255, 255, 255, 0.6)",
                }}
                transition={{ duration: 0.25 }}
                className="inline-block relative"
            >
                <Link
                    href={url}
                    className="relative text-primary font-medium transition-all duration-300"
                >
                    {linkText}
                    <motion.span
                        className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-primary origin-center"
                        whileHover={{ width: "100%", left: 0 }} 
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                </Link>
            </motion.span>
        </div>
    );
}
