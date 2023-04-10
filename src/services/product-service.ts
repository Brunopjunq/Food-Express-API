import { ObjectId } from "mongodb";
import productRepository from "../repositories/product-repository.js";
import { CreateProduct, UpdateProduct } from "../types/product-type.js";
import { notFoundError } from "../errors/not-found-error.js";

async function getAllprodructs() {
    return productRepository.getAllprodructs();    
};

async function getProductById(id: ObjectId) {
    const product =  await productRepository.getProductById(id);
    if(!product || product.lenght === 0) {
        throw notFoundError()
    }

    return await productRepository.getProductById(id);  
};

async function postProduct(data: CreateProduct) {
    return await productRepository.postProduct(data);     
};

async function deleteProduct(id: string) {
    return await productRepository.deleteProduct(id);
};

async function updateProduct(data: UpdateProduct, id: string) {
    const product =  await productRepository.getProductById(new ObjectId(id));
    if(!product || product.lenght === 0) {
        throw notFoundError()
    }

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