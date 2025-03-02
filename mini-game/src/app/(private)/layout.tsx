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
        <div className="flex flex-col grow">
            <header className="border-b border-b-primary/50">
                <div className="container mx-auto px-2 py-3 p flex flex-row gap-4 justify-between items-center">
                    <Link href="/" className="text-xl">tik-tak-toe</Link>
                    <div className="flex gap-4 items-center">
                        <div className="text-lg">{session.login}</div>
                        <form
                            action={async () => {
                                "use server";
                                sessionService.deleteSession();
                                redirect(routes.signIn());
                            }}>
                            <Button>Sign out</Button>
                        </form>
                    </div>
                </div>
            </header>
            {children}
        </div>
    );
}
