import { Router } from "express";
import { getCategories } from "../controllers/category-controller.js";
import { validateToken } from "../middlewares/validate-token.js";

const categoryRouter = Router();

categoryRouter
.all('/*', validateToken)
.get('/', getCategories);

export default categoryRouter;