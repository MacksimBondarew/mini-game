import Link from "next/link";

export function BottomLink({ text, linkText, url  }: { text: string, linkText: string, url: string}) {
    return (
        <p className="text-sm text-muted-foreground text-center">
            {text}{" "}
            <Link
                href={url}
                className="text-primary underline-offset-4 hover:underline">
                {linkText}
            </Link>
        </p>
    );
}
