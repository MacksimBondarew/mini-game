"use server";

import { sessionService, verifyUser } from "@/entities/user/server";
import { left } from "@/shared/lib/either";
import { redirect } from "next/navigation";
import { z } from "zod";

export type SignInFormState = {
    formStata?: string;
    errors?: {
        login?: string;
        password?: string;
        _errors?: string;
    }
}

const formDataSchema = z.object({
    login: z.string().email(),
    password: z.string().min(3),
});

export async function signInAction(state: unknown, formData: FormData) {
    const login = formData.get("email");
    const password = formData.get("password");

    const validationResult = formDataSchema.safeParse({ login, password });

    if (!validationResult.success) {
        return left("error-form-data" as const);
    }
    const verifyUserResult = await verifyUser(validationResult.data);
    if (verifyUserResult.type === "right") {
        await sessionService.addSession(verifyUserResult.value);
        redirect("/");
    }
    return left("login-or-password-incorrect" as const);
}
