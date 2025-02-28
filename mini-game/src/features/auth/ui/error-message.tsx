import { Either, matchEither } from "@/shared/lib/either";
import { Alert, AlertDescription } from "@/shared/ui/alert";
import React from "react";

export function ErrorMessage({ error }: { error?: Either<string, unknown> }) {
    if (error) {
        return matchEither(error, {
            right: () => null,
            left: (e) => (
                <Alert variant="destructive">
                    <AlertDescription style={{ whiteSpace: "pre-line" }}>
                        {e}
                    </AlertDescription>
                </Alert>
            ),
        });
    }
    return null;
}
