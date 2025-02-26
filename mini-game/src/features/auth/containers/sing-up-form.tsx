"use client";

import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthFields } from "../ui/fields";
import { SubmitButton } from "../ui/submit-button";
import { BottomLink } from "../ui/bottom-link";
import { signUpAction } from "../actions/sign-up";
import { useActionState } from "@/shared/lib/react";
import { mapLeft, right } from "@/shared/lib/either";
import { ErrorMessage } from "../ui/error-message";

export function SignUpForm() {
    const [formState, action, isPending] = useActionState(
        signUpAction,
        right(undefined)
    );
    console.log(formState);
    const formStateErrors = mapLeft(formState, (e) => ({
        ['login-allready-taken']: "User is already existing",
    })[e] || "Unknown error");
    return (
        <AuthFormLayout
            title="Sign up"
            action={action}
            fields={<AuthFields />}
            actions={<SubmitButton isPending={isPending}>Sign up</SubmitButton>}
            error={<ErrorMessage error={formStateErrors} />}
            link={
                <BottomLink
                    linkText="Sign in"
                    text="Already have an account?"
                    url="/sign-in"
                />
            }
        />
    );
}
