import { routes } from "@/kernel/routes";
import { useEventSource } from "@/shared/lib/sse/client";
import { redirect } from "next/navigation";

export function useGame(gameId: string) {
    const eventData = useEventSource(routes.gameStream(gameId));
    if (!eventData) {
        return redirect("/");
    }
    return eventData;
}
