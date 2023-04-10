import { Router } from "express";
import authRouter from "./auth-router.js";
import categoryRouter from "./category-router.js";

const router = Router();

router
.use("/auth", authRouter)
.use("/category", categoryRouter)

export default router;