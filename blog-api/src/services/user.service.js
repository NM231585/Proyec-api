import pool from '../config/database.js';

export const exitsUser = async (id) => {
    const [rows] = await pool.query('SELECT id FROM usuarios WHERE id = ?', [id]);
    return rows[0] || null;
}

export const getUserByEmail = async (email) => {
        const [rows] = await pool.query('SELECT id FROM usuarios WHERE email = ?', [email]);
    return rows[0] || null;
}