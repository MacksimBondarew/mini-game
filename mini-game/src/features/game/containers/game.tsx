import { getCurrentUser } from "@/entities/user/server";
import { GameClient } from "./game-client";
import { startGame } from "@/entities/game/server";
import { getGameById } from "@/entities/game/services/get-game";
import { redirect } from "next/navigation";
import { gameEvents } from "../services/game-event";

export async function Game({ gameId }: { gameId: string }) {
    const user = await getCurrentUser();
    let game = await getGameById(gameId);
    if (!game || !user) {
        redirect("/");
    }

    if (user) {
        const startGameResult = await startGame(gameId, user);

        if (startGameResult.type === "right") {
            game = await startGameResult.value;
            gameEvents.emit({ type: "game-changed", data: game }); 
        }
    }
    return <GameClient defaultGame={game} />;
}
