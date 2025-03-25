import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shared/ui/card";

export async function GameCard({
    login,
    rating,
    actions,
}: {
    login: string;
    rating: number;
    actions: React.ReactNode;
}) {
    return (
        <Card
            className="relative p-3 w-full mx-auto backdrop-blur-md border border-gray-800 shadow-lg 
            rounded-lg text-gray-200 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-blue-700/10 to-transparent rounded-lg opacity-40"></div>

            <CardHeader className="relative text-center mb-3">
                <CardTitle className="text-xl flex flex-col gap-2 font-bold tracking-wide text-gray-100">
                    🎮 Game with <span>{login}</span>
                </CardTitle>
            </CardHeader>

            <CardContent className="relative flex flex-col items-center mb-5 gap-2">
                <p className="text-lg font-semibold">
                    ⭐ Rating: {rating}
                </p>
            </CardContent>

            <CardFooter className="relative flex justify-center">
                {actions}
            </CardFooter>
        </Card>
    );
}
