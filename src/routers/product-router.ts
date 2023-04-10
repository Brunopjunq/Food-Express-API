import { Router } from "express";
import { validateToken } from "../middlewares/validate-token.js";
import { getAllprodructs, postProduct } from "../controllers/product-controller.js";
import productValidation from "../middlewares/validate-product.js";

const productRouter = Router();

productRouter
.all("/*", validateToken)
.get("/", getAllprodructs)
.post("/", productValidation.validateProduct, postProduct);

export default productRouter;