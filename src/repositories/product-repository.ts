import { ObjectId } from "mongodb";
import { db } from "../config/database.js";
import { CreateProduct } from "../types/product-type.js";

async function getAllprodructs() {
    const products = await db
    .collection("product")
    .find({})
    .toArray();
    return products;
}

async function getProductById(id: ObjectId) {
    const product = await db
    .collection("product")
    .findOne({_id: id})
    return product;
}

async function postProduct(data: CreateProduct) {
    return await db.collection<CreateProduct>("product").insertOne(data);    
};

async function deleteProduct(id: string) {
    return await db
    .collection("product")
    .deleteOne({_id: new ObjectId(id)})    
};

const productRepository = {
    getAllprodructs,
    getProductById,
    postProduct,
    deleteProduct
};

export default productRepository;