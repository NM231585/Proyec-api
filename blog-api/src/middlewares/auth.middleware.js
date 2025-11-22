import jwt from 'jsonwebtoken';
import { isTokenActive } from '../models/token.model.js';


export const verifyToken = async(req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({ message: 'Token de autenticación no proporcionado.' });
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Token de autenticación es invalido.' });
        }
        try {
            const tokenActive = await isTokenActive(token);
            if (!tokenActive) return res.status(401).json({ message: 'Token de autenticación ha sido revocado.' });

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Token de autenticación inválido o expirado.', error: error });
        }

    } catch (error) {
        return res.status(500).json({ 
            message: 'Ocurrió un error en el servidor.', 
            error: error 
        });
    }
};