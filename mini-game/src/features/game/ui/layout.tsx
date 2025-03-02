import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card";

export function GameLayout({ status, field, actions, players }: { players?: React.ReactNode, status?: React.ReactNode, field?: React.ReactNode, actions?: React.ReactNode }) {
    return (
        <Card className="max-w-xl w-full">
            <CardHeader>
                <CardTitle>tik-tak-toe 3x3</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                {players}
                {status}
                <div className="flex items-center justify-center">{field}</div>
            </CardContent>
            <CardFooter>{actions}</CardFooter>
        </Card>
    );
}
