import { GamesList } from "@/features/games-list/server";
import { prisma } from "@/shared/lib/db";

export default async function Home() {
    const games = prisma.game.findMany();
    console.log(games);
    return (
        <div>
            <GamesList />
        </div>
    );
}
