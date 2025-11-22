import { z } from 'zod';
import { existBlog } from '../services/comment.service.js';
import { exitsUser } from '../services/user.service.js';

export const createCommentSchema = z.object({
	contenido: z.string('El formato es de tipo texto').min(20, 'El contenido debe tener al menos 20 caracteres'),
	id_usuario: z.number('la entrada es de tipo numerico').int('debe ser entero').positive('solo se aceptan números positivos'),
	id_blog: z.number('ingrese un número').int('ingrese un número entero').positive('ingrese un numero positvo, negativos no validos'),
})
.superRefine(async (data, ctx) => {
	const userExists = await exitsUser(data.id_usuario);
	if (!userExists) {
		ctx.addIssue({
			code: "custom",
			message: 'El usuario no existe',
			path: ['id_usuario'],
		});
	}

	const blogExists = await existBlog(data.id_blog);
	if(!blogExists){
		ctx.addIssue({
			code: "custom",
			message: 'El blog no existe',
			path: ['id_blog'],
		});
	}
});
