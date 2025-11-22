import { z } from 'zod';
import { exitsUser } from '../services/user.service.js';
import { exitsCategory } from '../services/category.service.js';
import { exitsSubCategory } from '../services/subcategory.service.js';

export const createBlogSchema = z.object({
    titulo: z.string().min(5, { message: 'El título debe tener al menos 5 caracteres' }).max(100, { message: 'El título no puede exceder los 100 caracteres' }),
    contenido: z.string().min(20, { message: 'El contenido debe tener al menos 20 caracteres' }),
    id_usuario: z.number().int().positive(),
    id_categoria: z.number().int().positive(),
    id_subcategoria: z.number().int().positive().optional(),
}).superRefine(async (data, ctx) => {
    const userExists = await exitsUser(data.id_usuario);
    if (!userExists) {
        ctx.addIssue({
            code: "custom",
            message: 'El usuario no existe',
            path: ['id_usuario'],
        });
    }
    const categoryExists = await exitsCategory(data.id_categoria);
    if (!categoryExists) {
        ctx.addIssue({
            code: "custom",
            message: 'La categoría no existe',
            path: ['id_categoria'],
        });
    }

    const subcategoryExists = data.id_subcategoria ? await exitsSubCategory(data.id_subcategoria) : null;
    if (data.id_subcategoria && !subcategoryExists) {
        ctx.addIssue({
            code: "custom",
            message: 'La subcategoría no existe',
            path: ['id_subcategoria'],
        });
    }
});
