import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { productSchema, updatedProductSchema } from "../schemas/product-schema.js";

function validateProduct(req: Request, res: Response, next: NextFunction) {
    const newProduct = req.body;
    const validation = productSchema.validate(newProduct, {abortEarly: false});

    if(validation.error) {
        const errorMessage = validation.error.details.map(detail => detail.message);
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errorMessage);
    }

    next();
}

function validateUpdatedProduct(req: Request, res: Response, next: NextFunction) {
    const updatedProduct = req.body;
    const validation = updatedProductSchema.validate(updatedProduct, {abortEarly: false});

    if(validation.error) {
        const errorMessage = validation.error.details.map(detail => detail.message);
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errorMessage);
    }

    next();
}

const productValidation = {
    validateProduct,
    validateUpdatedProduct,
};

export default productValidation;