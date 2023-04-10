import express, { Express } from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDb } from "./config/database.js";
import router from "./routers/index.js";

const app = express();
dotenv.config();

app
.use(cors())
.use(express.json())
.use(router);

export async function init(): Promise<Express> {
    await connectDb();
    return Promise.resolve(app)
};

export default app;