import { Request, Response } from "express";
import httpStatus from "http-status";
import authService from "../services/auth-service.js";

export async function signIn(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
        const result = await authService.signIn(email, password);

        return res.status(httpStatus.OK).send(result);
    } catch (error) {
        if (error.name === "InvalidCredentialsError") {
            return res.status(httpStatus.UNAUTHORIZED).send(error.message);
          }
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}