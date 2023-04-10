import { Request, Response } from "express";
import httpStatus from "http-status";
import productService from "../services/product-service.js";
import { CreateProduct } from "../types/product-type.js";

export async function getAllprodructs(req: Request, res: Response) {
    try {
        const products = await productService.getAllprodructs();
        return res.status(httpStatus.OK).send(products);
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

export async function postProduct(req: Request, res: Response) {
    const newProduct = req.body as CreateProduct;
    try {
        const response = productService.postProduct(newProduct);
        return res.status(httpStatus.CREATED).send(response);
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}