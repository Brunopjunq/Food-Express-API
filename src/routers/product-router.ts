import { Router } from "express";
import { validateToken } from "../middlewares/validate-token.js";
import { getAllprodructs, getProductById, postProduct } from "../controllers/product-controller.js";
import productValidation from "../middlewares/validate-product.js";

const productRouter = Router();

productRouter
.all("/*", validateToken)
.get("/", getAllprodructs)
.get("/:id", getProductById)
.post("/", productValidation.validateProduct, postProduct);

export default productRouter;