import categoryRepository from "../repositories/category-repository.js";

async function getCategories() {
    return categoryRepository.getCategories();    
}

const categoryService = {
    getCategories,
}

export default categoryService;