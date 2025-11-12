import pool from '../config/database.js';

export const getAllComments = async () => {
  const [rows] = await pool.query('SELECT * FROM comentarios');
  return rows;
};

export const getCommentById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM comentarios WHERE id = ?', [id]);
  return rows[0];
};

export const getCommentsByBlogId = async (id_blog) => {
  const [rows] = await pool.query('SELECT * FROM comentarios WHERE id_blog = ? ORDER BY created_at DESC', [id_blog]);
  return rows;
};

export const createComment = async ({ contenido, id_usuario, id_blog }) => {
  const [result] = await pool.query(
    'INSERT INTO comentarios (contenido, id_usuario, id_blog) VALUES (?, ?, ?)',
    [contenido, id_usuario, id_blog]
  );
  return { id: result.insertId, contenido, id_usuario, id_blog };
};

export const updateComment = async (id, { contenido }) => {
  await pool.query('UPDATE comentarios SET contenido = ? WHERE id = ?', [contenido, id]);
};

export const deleteComment = async (id) => {
  await pool.query('DELETE FROM comentarios WHERE id = ?', [id]);
};
