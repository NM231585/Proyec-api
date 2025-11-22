import * as Blog from '../models/blog.model.js';

export const getBlogs = async (req, res) => {
    try {
        const dataBlogs = await Blog.getAllBlogs();
        res.status(201).json({
            message: "datos encontrados",
            data: dataBlogs
        });
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Subcategoria no encontrada",
            error: error
        });
    }
}

export const getBlog = async (req, res) => {
    try {
        const dataBlog = await Blog.getBlogById(req.params.id);
        if(!dataBlog) res.status(404).json({message: 'Blog no encontrado'});
        res.status(200).json({
            message: "Blog encontrado",
            data: dataBlog
        })
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Datos del blog no encontrado",
            error: error
        })
    }
}

export const createBlog = async (req, res) => {
    try {
        req.body.imagen = req.file ? req.file.filename : null; //Pregunta por la imagen y su nombre y los agrega a los archivos y si es nulo
        const dataBlog = await Blog.createBlog(req.body);
        res.status(201).json({
            message: "Blog creado",
            data:dataBlog
        })
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Blog no pudo crearse",
            error: error
        })
    }
}

export const editBlog = async (req, res) => {
    try {
        //const {id} = req.params;
        //const {titulo, contenido, id_usuario, id_categoria, id_subcategoria} = req.body;
        req.body.imagen = req.file ? req.file.filename : null;
        const result = await Blog.updateBlog(req.params.id, req.body);
        res.status(200).json({
            message: "Blog actualizado",
            data:result
        })
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Blog no encontrada",
            error: error
        })
    }
}

export const removeBlog = async (req, res) => {
    try {
        await Blog.deleteBlog(req.params.id);
        res.status(200).json({
            message: "Blog eliminado"
        })
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Error al eliminar el Blog",
            error: error
        })
    }
}