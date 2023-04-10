import { db } from "../config/database.js";

async function getCategories() {
    const categories = await db
    .collection("category")
    .find({})
    .toArray();
    return categories;
}

const categoryRepository = {
    getCategories,
};

export default categoryRepository;