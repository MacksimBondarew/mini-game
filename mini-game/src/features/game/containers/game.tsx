import { GameId } from "@/kernel/ids";
import { GameClient } from "./game-client";
import { startGame } from "@/entities/game/server";
import { getCurrentUser } from "@/entities/user/server";
import { redirect } from "next/navigation";
import { gameEvents } from "../services/game-event";
import { getGameById } from "@/entities/game/services/get-game";

export async function Game({ gameId }: { gameId: GameId }) {
    const user = await getCurrentUser();

    let game = await getGameById(gameId);

    if (!game) {
        redirect("/");
    }

    if (user) {
        const startGameResult = await startGame(gameId, user);

        if (startGameResult.type === "right") {
            game = startGameResult.value;
            gameEvents.emit(startGameResult.value);
        }
    }

    return <GameClient defaultGame={game} />;
}
