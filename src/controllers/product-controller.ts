import { Request, Response } from "express";
import httpStatus from "http-status";
import productService from "../services/product-service.js";

export async function getAllprodructs(req: Request, res: Response) {
    try {
        const products = await productService.getAllprodructs();
        return res.status(httpStatus.OK).send(products);
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
};