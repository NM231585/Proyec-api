import { z } from 'zod';
import { getCategoryByName } from '../services/category.service.js';

export const createCategorySchema = z.object({
    nombre: z.string('Nombre de la categoría').min(3,'El nombre de la categoria debe tener al menos 3 caracteres')
    .max(50,'el nombre de la categoria debe tener maximo 50 caracteres')
})
.superRefine(async (data, ctx) => {
    const existCategoryName = await getCategoryByName(data.nombre);
    if(existCategoryName){
        ctx.addIssue({
            code: "custom",
            path: ["nombre"],
            message: "ya existe una categoria con ese nombre"
        })
    }
});