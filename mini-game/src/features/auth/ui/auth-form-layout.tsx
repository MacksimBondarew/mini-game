import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shared/ui/card";

export function AuthFormLayout({
    title,
    fields,
    actions,
    link,
    action,
    error
}: {
    title: string;
    fields: React.ReactNode;
    actions: React.ReactNode;
    link: React.ReactNode;
    error?: React.ReactNode; 
    action: ((formData: FormData) => void | void);
}) {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl text-center">{title}</CardTitle>
            </CardHeader>
            <form action={action}>
                <CardContent className="space-y-4">
                    {fields}
                    {error}
                    {actions}
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    {link}
                </CardFooter>
            </form>
        </Card>
    );
}
