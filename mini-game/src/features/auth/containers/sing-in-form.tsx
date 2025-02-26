import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthFields } from "../ui/fields";
import { SubmitButton } from "../ui/submit-button";
import { BottomLink } from "../ui/bottom-link";

export function SignInForm() {
    async function signUp(formData: FormData) {
        "use server";
        console.log(formData)
    }
    return (
        <AuthFormLayout
            title="Sign in"
            action={signUp}
            fields={<AuthFields />}
            actions={<SubmitButton>Sign up</SubmitButton>}
            link={
                <BottomLink
                    linkText="Sign up"
                    text="Don't have an account?"
                    url="/sign-up"
                />
            }
        />
    );
}
