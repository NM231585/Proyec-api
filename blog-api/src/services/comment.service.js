import pool from "../config/database.js";

export const existBlog = async(id) => {
	const [rows] = await pool.query('SELECT id FROM blogs WHERE id = ?', [id]);
	return rows[0] || null;
}
