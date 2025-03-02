import { GamesList } from "@/features/games-list/server";

export default async function Home() {
    return (
        <div className="flex flex-col gap-8 container px-2 mx-auto pt-24">
            <h1 className="text-3xl font-bold">Games</h1>
            <GamesList />
        </div>
    );
}
