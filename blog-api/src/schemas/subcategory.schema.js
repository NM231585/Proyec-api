import { z } from 'zod';
import { getSubCategoryByName } from '../services/subcategory.service.js';

export const createSubCategorySchema = z.object({
    nombre: z.string('Nombre de la categoría').min(3,'El nombre de la categoria debe tener al menos 3 caracteres')
    .max(50,'el nombre de la categoria debe tener maximo 50 caracteres')
})
.superRefine(async (data, ctx) => {
    const existSubCAtegoryName = await getSubCategoryByName(data.nombre);
    if(existSubCAtegoryName){
        ctx.addIssue({
            code: "custom",
            path: ["nombre"],
            message: "ya exoste una la subcategoria con ese nombre"
        })
    }
});