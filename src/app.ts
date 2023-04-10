import express, { Express } from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDb } from "./config/database.js";

const app = express();
dotenv.config();

app
.use(cors())
.use(express.json());

export async function init(): Promise<Express> {
    await connectDb();
    return Promise.resolve(app)
};

export default app;