import { ObjectId } from "mongodb";
import productRepository from "../repositories/product-repository.js";
import { CreateProduct } from "../types/product-type.js";

async function getAllprodructs() {
    return productRepository.getAllprodructs();    
};

async function getProductById(id: ObjectId) {
    return productRepository.getProductById(id);  
};

async function postProduct(data: CreateProduct) {
    return await productRepository.postProduct(data);     
};

async function deleteProduct(id: string) {
    return await productRepository.deleteProduct(id);
};

const productService = {
    getAllprodructs,
    getProductById,
    postProduct,
    deleteProduct,
};

export default productService;