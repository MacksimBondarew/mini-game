import { Input } from "@/shared/ui/input";
import { Label } from "@radix-ui/react-label";
import { useId } from "react";

export function AuthFields() {
    const loginId = useId();
    const passwordId = useId();
    return (
        <>
            <div className="space-y-2">
                <Label htmlFor={loginId}>Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    autoComplete="email"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor={passwordId}>Password</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="new-password"
                />
            </div>
        </>
    );
}
