import { db } from "../config/database.js";

async function getAllprodructs() {
    const products = await db
    .collection("product")
    .find({})
    .toArray();
    return products;
}

const productRepository = {
    getAllprodructs,
};

export default productRepository;