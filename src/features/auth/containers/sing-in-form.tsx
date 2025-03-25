"use client";

import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthFields } from "../ui/fields";
import { SubmitButton } from "../ui/submit-button";
import { BottomLink } from "../ui/bottom-link";
import { signInAction } from "../actions/sign-in";
import { mapLeft, right } from "@/shared/lib/either";
import { ErrorMessage } from "../ui/error-message";
import { useActionState } from "@/shared/lib/react";
import { routes } from "@/kernel/routes";

export function SignInForm() {
    const [formState, action, isPending] = useActionState(
        signInAction,
        right(undefined)
    );
    const formStateErrors = mapLeft(
        formState,
        (e) =>
            ({
                "login-or-password-incorrect": "login or password incorrect",
                "invalid-form-data": "Please enter only string values",
                "error-form-data": [
                    "Invalid form data. Please check your input.",
                    "Only string values are allowed",
                ].join("\n"),
            }[e] || "An unknown error occurred. Please try again.")
    );
    return (
        <AuthFormLayout
            title="Sign in"
            action={action}
            fields={<AuthFields />}
            error={<ErrorMessage error={formStateErrors} />}
            actions={<SubmitButton isPending={isPending}>Sign in</SubmitButton>}
            link={
                <BottomLink
                    linkText="Sign up"
                    text="Don't have an account?"
                    url={routes.signUp()}
                />
            }
        />
    );
}
