import { getIdleGames } from "@/entities/game/server";
import { Layout } from "../ui/layout";
import { GameCard } from "../ui/game-card";
import { CreateButton } from "../containers/create-button";

export async function GamesList() {
    const games = await getIdleGames();
    return (
        <Layout actions={<CreateButton />}>
            {games.map((game) => {
                return (
                    <GameCard
                        key={game.id}
                        login={game.creator.login}
                        rating={game.creator.rating}
                    />
                );
            })}
        </Layout>
    );
}
