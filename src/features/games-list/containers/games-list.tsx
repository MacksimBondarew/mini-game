import { getIdleGames } from "@/entities/game/server";
import { Layout } from "../ui/layout";
import { CreateButton } from "../containers/create-button";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { routes } from "@/kernel/routes";
import { GameCard } from "../ui/game-card";

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
                        actions={
                            <Link href={routes.game(game.id)}>
                                <Button>Connect</Button>
                            </Link>
                        }
                    />
                );
            })}
        </Layout>
    );
}
