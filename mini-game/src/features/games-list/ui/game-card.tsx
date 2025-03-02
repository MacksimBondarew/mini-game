import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card";

export async function GameCard({
    login,
    rating,
    actions
}: {
    login: string;
    rating: number;
    actions: React.ReactNode;
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
            <CardFooter>{actions}</CardFooter>
        </Card>
    );
}
