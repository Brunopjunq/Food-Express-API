import productRepository from "../repositories/product-repository.js";

async function getAllprodructs() {
    return productRepository.getAllprodructs();    
};

const productService = {
    getAllprodructs,
};

export default productService;