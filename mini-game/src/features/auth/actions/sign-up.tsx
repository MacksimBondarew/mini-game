import { createUser } from "@/entities/user/server";
import { left, right } from "@/shared/lib/either";
import { z } from "zod";
const formDataSchema = z.object({
    login: z.string().min(3),
    password: z.string().min(3),
});

export async function signUpAction(state: unknown, formData: FormData) {
    const data = Object.fromEntries(formData.entries());
    const result = formDataSchema.safeParse(data);
    if (!result.success) {
        return left(`${result.error.message}` || "Unknown error");
    }
    const createUserResult = await createUser(result.data);
    if (createUserResult.type === "left") {
        return left("login-allready-taken" as const);
    }
    return right(createUserResult);
}
