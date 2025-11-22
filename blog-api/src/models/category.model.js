import pool from '../config/database.js';

export const getAllCategories = async () => {
    const [rows] = await pool.query('SELECT * FROM categorias');
    return rows;
};

export const getCategoryById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM categorias WHERE id = ?', [id]);
    return rows[0];
};

export const createCategory = async ({ nombre }) => {
    const [result] = await pool.query('INSERT INTO categorias (nombre) VALUES (?)', [nombre]);
    return { id: result.insertId, nombre };
};

export const updateCategory = async (id, { nombre }) => {
    await pool.query('UPDATE categorias SET nombre = ? WHERE id = ?', [nombre, id]);
};

export const deleteCategory = async (id) => {
    await pool.query('DELETE FROM categorias WHERE id = ?', [id]);
};