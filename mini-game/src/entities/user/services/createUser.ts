import { left, right } from "@/shared/lib/either";
import { userRepository } from "../repositories/user";
import { DEFAULT_RATING } from "../domain";
import { passwordService } from "./password";
import cuid from "cuid";

export const createUser = async ({
    login,
    password,
}: {
    login: string;
    password: string;
}) => {
    const userWithLogin = await userRepository.getUser({ login });
    if (userWithLogin) {
        return left("login-allready-taken" as const);
    };

    const { salt, hash } = await passwordService.hashPassword(password);
    const user = userRepository.saveUser({
        id: cuid(),
        login,
        rating: DEFAULT_RATING,
        salt,
        passwordHash: hash
    });
    return right(user);
};
