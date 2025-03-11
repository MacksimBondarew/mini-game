import { surrenderGame } from "@/entities/game/server";
import { GameId } from "@/kernel/ids";
import { sseStream } from "@/shared/lib/sse/server";
import { NextRequest } from "next/server";
import { getCurrentUser } from "@/entities/user/server";
import { getGameById } from "@/entities/game/services/get-game";
import { gameEvents } from "../services/game-event";

export async function getGameStream(
    req: NextRequest,
    { params }: { params: Promise<{ id: GameId }> }
) {
    const { id } = await params;
    const user = await getCurrentUser();
    const game = await getGameById(id);

    if (!game || !user) {
        return new Response(`Game not found`, {
            status: 404,
        });
    }

    const { addCloseListener, response, write } = sseStream(req);

    write(game);

    const unwatch = await gameEvents.addListener(game.id, (event) => {
        write(event.data);
    });

    addCloseListener(async () => {
        const result = await surrenderGame(id, user);
        if (result.type === "right") {
            gameEvents.emit(result.value);
        }
        unwatch();
    });

    return response;
}
