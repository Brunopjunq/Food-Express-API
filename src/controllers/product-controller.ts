import { Request, Response } from "express";
import httpStatus from "http-status";
import productService from "../services/product-service.js";
import { CreateProduct, UpdateProduct } from "../types/product-type.js";
import { ObjectId } from "mongodb";

export async function getAllprodructs(req: Request, res: Response) {
    try {
        const products = await productService.getAllprodructs();
        return res.status(httpStatus.OK).send(products);
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

export async function getProductById(req: Request, res: Response) {
    const { id } = req.params;
    const productId = new ObjectId(id);
    
    try {
        const product = await productService.getProductById(productId)
        return res.status(httpStatus.OK).send(product);
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

export async function postProduct(req: Request, res: Response) {
    const newProduct = req.body as CreateProduct;
    try {
        const response = productService.postProduct(newProduct);
        return res.status(httpStatus.CREATED).send(response);
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

export async function deleteProduct(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const deletedProduct = productService.deleteProduct(id);
        return res.status(httpStatus.OK).send(deletedProduct);
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

export async function updateProduct(req: Request, res: Response) {
    const product = req.body as UpdateProduct;
    const { id } = req.params;
    try {
        const response = productService.updateProduct(product, id);
        return res.status(httpStatus.OK).send(response);
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }    
}