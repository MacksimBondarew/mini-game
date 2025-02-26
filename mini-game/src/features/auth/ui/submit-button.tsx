import { Button } from "@/shared/ui/button"; 

export function SubmitButton({ children, isPending }: { children: React.ReactNode, isPending?: boolean}) {
    return (
        <Button type="submit" disabled={isPending} className="w-full">
            {children}
        </Button>
    );
}
