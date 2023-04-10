import authRepository from "../repositories/auth-repository.js";
import { v4 as uuid } from 'uuid';

async function getUser(email: string) {
    const user = await authRepository.findByEmail(email);
    if(!user) {
        // throw invalidCredentialsError();
        throw "Erro";
    }

    return user;
}


async function signIn(email: string, password: string) {
    const user = await getUser(email);

    if(user.password !== password) {
        throw "Erro";
    }

    const token = uuid();

    await authRepository.createSession(user._id, token);

    return token;
}

const authService = {
    signIn
};

export default authService;