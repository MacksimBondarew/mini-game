import { sessionService } from "@/entities/user/server";
import { routes } from "@/kernel/routes";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default async function PrivateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { session } = await sessionService.verifySession();

    return (
        <div className="flex flex-col grow min-h-screen bg-gray-950 text-gray-200">
            <header className="border-b border-gray-800 shadow-md">
                <div className="container mx-auto px-2 py-4 flex flex-row gap-6 justify-between items-center">
                    <Link
                        href="/"
                        className="text-2xl font-extrabold tracking-wide text-white transition-all duration-300 hover:text-purple-400"
                    >
                        🎮 tik-tak-toe
                    </Link>
                    <div className="flex gap-6 items-center">
                        <div className="text-lg font-medium text-gray-300">
                            {session.login}
                        </div>
                        <form
                            action={async () => {
                                "use server";
                                sessionService.deleteSession();
                                redirect(routes.signIn());
                            }}
                        >
                            <Button className="px-5 py-2 bg-gray-800 border border-gray-600 hover:border-red-500 text-white font-medium rounded-md shadow-sm transition-all duration-300 hover:bg-red-600 hover:text-white">
                                Sign out
                            </Button>
                        </form>
                    </div>
                </div>
            </header>
            <main className="flex-grow container mx-auto px-2 py-4">{children}</main>
        </div>
    );
}
