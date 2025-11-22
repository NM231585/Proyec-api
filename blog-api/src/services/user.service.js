import pool from '../config/database.js';

export const exitsUser = async (id) => {
    const [rows] = await pool.query('SELECT id FROM usuarios WHERE id = ?', [id]);
    return rows[0] || null;
}

export const getUserByEmail = async (email) => {
        const [rows] = await pool.query('SELECT id FROM usuarios WHERE email = ?', [email]);
    return rows[0] || null;
}

export const verifyPassword = async (email, password) =>{
  const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    if(rows[0]){
    const isMatch = await bcrypt.compare(password, rows[0].password);
        if(isMatch){
            return { id: rows[0].id, email: rows[0].email, name: rows[0].name };
        }
    return null;
    }
    return null;
}