import { db } from "../config/database.js";
import { CreateProduct } from "../types/product-type.js";

async function getAllprodructs() {
    const products = await db
    .collection("product")
    .find({})
    .toArray();
    return products;
}

async function postProduct(data: CreateProduct) {
    return await db.collection<CreateProduct>("product").insertOne(data);    
};

const productRepository = {
    getAllprodructs,
    postProduct
};

export default productRepository;