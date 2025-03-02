import { GameEntity } from "@/entities/game";
import { useEffect, useState } from "react";

export function useEventSource(url: string) {
    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState<GameEntity | null>(null);

    useEffect(() => {

        const gameEvents = new EventSource(url);

        gameEvents.addEventListener("message", (event) => {
            try {
                const parsedData: GameEntity = JSON.parse(event.data);
                setData(parsedData);
                setIsPending(false);
            } catch (error) {
                console.error("Error parsing SSE data:", error);
            }
        });

        return () => {
            gameEvents.close();
        };
    }, [url]);

    return {
        data, 
        isPending
    };
}
