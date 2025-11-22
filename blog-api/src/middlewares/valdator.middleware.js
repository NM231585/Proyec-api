import {z} from 'zod';

export const validateSchema = (schema) => async (req, res, next) => {
    try {
        if(!req.body) return res.status(400).json({message: 'Datos requeridos', error: []});
        const result = await schema.parseAsync(req.body);
        req.body = result;
        next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            const issues = error.issues;
            return res.status(400).json({ message: 'Error de validación', error: issues });
        }
        return res.status(500).json({message: 'Error del servidor, por favor intente más tarde', error: error.message});
    }
}