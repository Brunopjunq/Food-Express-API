import { NextFunction, Request, Response } from "express";
import { db } from "../config/database.js";
import httpStatus from "http-status";

export async function validateToken( req: Request, res: Response, next: NextFunction ) {
    const header = req.header("Authorization");
    if(!header) {
        return unauthorizedResponse(res);
    }

    const token = header.split(" ")[1];
    if (!token) {
        return unauthorizedResponse(res);
    }

    try {

        const session = db.collection("sessions").findOne({token: token})

        if(!session) {
            return unauthorizedResponse(res);
        }
        return next();
        
    } catch (error) {
        return unauthorizedResponse(res);
    }
}

function unauthorizedResponse(res: Response) {
    res.status(httpStatus.UNAUTHORIZED).send('Unauthorized');
  }