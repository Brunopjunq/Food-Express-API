import { Router } from "express";
import { validateToken } from "../middlewares/validate-token.js";
import { deleteProduct, getAllprodructs, getProductById, postProduct } from "../controllers/product-controller.js";
import productValidation from "../middlewares/validate-product.js";

const productRouter = Router();

productRouter
.all("/*", validateToken)
.get("/", getAllprodructs)
.get("/:id", getProductById)
.post("/", productValidation.validateProduct, postProduct)
.delete("/:id", deleteProduct);

export default productRouter;