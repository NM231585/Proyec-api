import * as Subcategory from '../models/subcategory.model.js';

export const getSubCategories = async (req, res) => {
    try {
        const subcategories = await Subcategory.getAllSubCategories();
        res.status(200).json({ message: 'Subcategorias encontradas', data: subcategories });
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Subcategoria no encontrada",
            error: error
        })
    }
}

export const getSubCategory = async (req, res) => {
    try {
        const subcategory = await Subcategory.getSubCategoryById(req.params.id);
        if(!subcategory) res.status(404).json({message: 'Subcategria no encontrada'});
        res.status(200)
        .json({
            message: "Subcategoria encontrada",
            data: subcategory
        })
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Subcategoria no encontrada",
            error: error
        })
    }
}

export const addSubCategory = async (req, res) => {
    try {
    const subcategory = await Subcategory.createSubCategory(req.body);
    res.status(201).json({
            message: "Subcategoria añadida",
            data: subcategory
    })
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Subcategoria no encontrada",
            error: error
        })
    }
}

export const aditSubCategory = async (req, res) => {
    try {
            const subcategory = await Subcategory.updateSubCategory(req.params.id, req.body);
    res.status(200).json({
        message: "Subcategoria actualizada con exito",
        data: subcategory
    })
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Error al editar Subcategoria",
            error: error
        })
    }
}

export const deleteSubCategory = async (req, res) => {
    try {
        await Subcategory.deleteSubCategory(req.params.id);
        res.status(200).json({
            message: 'Subcategoria eliminada'
        })
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Error al eliminar Subcategoria",
            error: error
        })
    }
}