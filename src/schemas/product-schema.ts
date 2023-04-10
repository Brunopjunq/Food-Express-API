import joi from 'joi';

export const productSchema = joi.object({
    name: joi.string().required().max(150),
    qty: joi.number().min(0).required(),
    price: joi.number().min(0).required(),
    categories: joi.array().items(joi.string()).required()
});

export const updatedProductSchema = joi.object({
    name: joi.string().max(150),
    qty: joi.number().min(0),
    price: joi.number().min(0),
    categories: joi.array().items(joi.string())
});