import { getGameById } from "@/entities/game/services/get-game";
import { sseStream } from "@/shared/lib/sse/server";
import { NextRequest } from "next/server";
import { gameEvents } from "../services/game-event";

export async function getGameStream(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { response, addCloseListener, write } = sseStream(req);
    const { id } = await params;
    const game = await getGameById(id);
    if (!game) {
        return new Response("Game not found", {
            status: 404,
        });
    }
    write(game);
    const unwatch = await gameEvents.addGameChangedListener(
        game.id,
        (event) => {
            write(event.data);
        }
    );

    addCloseListener(async () => {
        unwatch();
    });
    return response;
}
