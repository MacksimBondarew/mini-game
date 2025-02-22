import { getIdleGames } from "@/entities/game/server";
import { Card, CardContent, CardTitle } from "@/shared/ui/card";

export async function GamesList() {
    const games = await getIdleGames();
    return (
        <div className="grid grid-cols-2 gap-4">
            {games.map((game) => {
                return (
                    <Card key={game.id}>
                        <CardTitle>{game.creator.login}</CardTitle>
                        <CardContent>
                            <p>Rating: {game.creator.rating}</p>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}
