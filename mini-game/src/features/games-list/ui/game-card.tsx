import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export async function GameCard({
    login,
    rating,
}: {
    login: string;
    rating: number;
}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-bold">
                    Game with creator: {login}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p>Rating: {rating}</p>
            </CardContent>
        </Card>
    );
}
