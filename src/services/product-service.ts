import productRepository from "../repositories/product-repository.js";
import { CreateProduct } from "../types/product-type.js";

async function getAllprodructs() {
    return productRepository.getAllprodructs();    
};

async function postProduct(data: CreateProduct) {
    return await productRepository.postProduct(data);     
}

const productService = {
    getAllprodructs,
    postProduct
};

export default productService;