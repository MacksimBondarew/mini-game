"use server";

import { createUser, sessionService } from "@/entities/user/server";
import { left } from "@/shared/lib/either";
import { redirect } from "next/navigation";
import { z } from "zod";

const formDataSchema = z.object({
    login: z.string().email(),
    password: z.string().min(3),
});

export async function signUpAction(state: unknown, formData: FormData) {
    const login = formData.get("email");
    const password = formData.get("password");

    const validationResult = formDataSchema.safeParse({ login, password });

    if (!validationResult.success) {
        return left("error-form-data" as const);
    }
    const createUserResult = await createUser(validationResult.data);
    if (createUserResult.type === "right") {
        await sessionService.addSession(createUserResult.value);
        redirect("/");
    }
    return left("login-allready-taken" as const);
}
