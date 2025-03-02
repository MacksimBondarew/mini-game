"use client";

import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthFields } from "../ui/fields";
import { SubmitButton } from "../ui/submit-button";
import { BottomLink } from "../ui/bottom-link";
import { signUpAction } from "../actions/sign-up";
import { useActionState } from "@/shared/lib/react";
import { mapLeft, right } from "@/shared/lib/either";
import { ErrorMessage } from "../ui/error-message";
import { routes } from "@/kernel/routes";

export function SignUpForm() {
    const [formState, action, isPending] = useActionState(
        signUpAction,
        right(undefined)
    );
    const formStateErrors = mapLeft(formState, (e) =>
        ({
            "login-allready-taken": "User is already existing",
            "invalid-form-data": "Please enter only string values",
            "error-form-data": [
                "Invalid form data. Please check your input.",
                "Only string values are allowed",
            ].join("\n"),
        }[e] || "An unknown error occurred. Please try again.")
    );    
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
                    url={routes.signIn()}
                />
            }
        />
    );
}
