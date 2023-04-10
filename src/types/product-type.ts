import { ObjectId } from "mongodb";

export type Product = {
    _id: ObjectId;
    categories: string[];
    name: string;
    qty: number;
    price: number;
};

export type CreateProduct = Omit<Product, "_id">;

export type UpdateProduct = {
    categories?: string[];
    name?: string;
    qty?: number;
    price?: number;
}