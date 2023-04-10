import { Router } from "express";
import { validateToken } from "../middlewares/validate-token.js";
import { getAllprodructs, postProduct } from "../controllers/product-controller.js";

const productRouter = Router();

productRouter
.all("/*", validateToken)
.get("/", getAllprodructs)
.post("/", postProduct);

export default productRouter;