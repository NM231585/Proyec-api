import jwt from 'jsonwebtoken';
import { verifyPassword } from '../services/user.service.js';
import { saveToken } from '../models/token.model.js';

export const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await verifyPassword(email, password);
        if(!user){
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }
        const token = jwt.sign(
            { id: user.id, email: user.email, name: user.name },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES || '4h' }
        );
        await saveToken(user.id, token);
        return res.status(200).json({ 
            message: 'Inicio de sesión exitoso', 
            token: token 
        });
    } catch (error) {
        return res.status(500).json({ 
            message: 'Ocurrió un error en el servidor.', 
            error: error 
        });
    }
}

