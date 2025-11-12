import * as Category from '../models/category.model.js';

export const getCategories = async(req, res) => {
    res.json(await Category.getAllCategories());
};

export const getCategory = async(req, res) => {
    const category = await Category.getCategoryById(req.params.id);
    if (!category) return res.status(404).json({error:('categoria no encontrada')});
    res.json(category);
};

export const addCategory = async (req, res) => {
    const category = await Category.createCategory(req.body);
    res.status(201).json(category);
}

export const editCategory = async(req, res) =>{
    const category = await Category.updateCategory(req.params.id, req.body);
    res.json({message: "Categoria ha sido actualizada", data: category});
}

export const removeCategory =async (req, res) => {
    await Category.deleteCategory(req.params.id);
    res.json( {message: "Categoria eliminada"});
}
