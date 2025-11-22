import pool from '../config/database.js';

export const exitsSubCategory = async (id) => {
    const [rows] = await pool.query('SELECT id FROM subcategorias WHERE id = ?', [id]);
    return rows[0] || null;
}

export const getSubCategoryByName = async (nombre) => {
    const [rows] = await pool.query('SELECT id FROM subcategorias WHERE nombre = ?', [nombre]);
    return rows[0] || null;
}