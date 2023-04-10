import { Request, Response } from "express";
import categoryService from "../services/category-service.js";
import httpStatus from "http-status";

export async function getCategories(req: Request, res: Response) {
    try {
        const categories = await categoryService.getCategories();
        return res.status(httpStatus.OK).send(categories);
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}