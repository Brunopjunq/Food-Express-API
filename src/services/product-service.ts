import { ObjectId } from "mongodb";
import productRepository from "../repositories/product-repository.js";
import { CreateProduct, UpdateProduct } from "../types/product-type.js";

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

async function updateProduct(data: UpdateProduct, id: string) {
    return await productRepository.updateProduct(data, id);    
};

const productService = {
    getAllprodructs,
    getProductById,
    postProduct,
    deleteProduct,
    updateProduct,
};

export default productService;