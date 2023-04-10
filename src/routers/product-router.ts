import { Router } from "express";
import { validateToken } from "../middlewares/validate-token.js";
import { getAllprodructs } from "../controllers/product-controller.js";

const productRouter = Router();

productRouter
.all("/*", validateToken)
.get("/", getAllprodructs);

export default productRouter;