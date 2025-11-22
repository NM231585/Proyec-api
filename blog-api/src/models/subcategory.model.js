import pool from '../config/database.js';

export const getAllSubCategories = async () => {
    const [rows] = await pool.query(`
        SELECT
            s.id,
            s.nombre AS nombre_subcategoria,
            s.id_categoria,
            c.nombre AS nombre_categoria,
            s.created_at
        FROM subcategorias s
        INNER JOIN categorias c ON s.id_categoria = c.id
        ORDER BY s.created_at DESC
    `);
    return rows;
};

export const getSubCategoryById = async (id) => {
    const [rows] = await pool.query(`
        SELECT
            s.id,
            s.nombre AS nombre_subcategoria,
            s.id_categoria,
            c.nombre AS nombre_categoria,
            s.created_at
        FROM subcategorias s
        INNER JOIN categorias c ON s.id_categoria = c.id
        WHERE s.id = ?
    `, [id]);
    return rows[0];
};

export const createSubCategory = async ({ nombre, id_categoria }) => {
    const [result] = await pool.query(
        'INSERT INTO subcategorias (nombre, id_categoria) VALUES (?, ?)',
        [nombre, id_categoria]
    );
    return { id: result.insertId, nombre, id_categoria };
};

export const updateSubCategory = async (id, { nombre, id_categoria }) => {
    await pool.query(
        'UPDATE subcategorias SET nombre = ?, id_categoria = ? WHERE id = ?',
        [nombre, id_categoria, id]
    );
};

export const deleteSubCategory = async (id) => {
    await pool.query('DELETE FROM subcategorias WHERE id = ?', [id]);
};

