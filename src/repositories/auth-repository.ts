import { ObjectId } from "mongodb";
import { db } from "../config/database.js";

async function createSession(userId: ObjectId, token: string) {
    await db.collection("sessions").insertOne({userId: userId, token: token})
    return;
}

async function findByEmail(email: string) {
    return db.collection("users").findOne({email: email})
}


const authRepository = {
    createSession,
    findByEmail
}

export default authRepository;