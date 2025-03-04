import { Game } from "@/features/game/server";

export default async function Page({ params }: { params: Promise<{id: string}> }) {
    const { id } = await params;
    return <main className="flex justify-center pt-4 px-2"><Game gameId={id} /></main>
}