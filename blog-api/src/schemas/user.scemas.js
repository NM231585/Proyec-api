import {z} from 'zod';
import { getUserByEmail } from '../services/user.service.js';


export const createUserSchema = z.object({
    nombre: z.string('el nombre es obligatorio').min(3, 'El nombre de usuario debe tener al menos 3 caracteres'),
    email: z.string('el email no es valido').email('Correo electrónico no válido'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres').max(20, 'La contraseña no puede exceder los 20 caracteres')
    .regex(/[a-z]/, 'la contraseña debe tener al menos una letra minuscula')
    .regex(/[A-Z]/, 'La contraseña debe tener al menos una letra mayuscula')
    .regex(/[0-9]/, 'La contraseña debe tener al menos un número')
    .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, "La contraseña debe tener al menos una caracter especial: !,@,#,$,%,^,&,*,(,),_,+,-,=,[,],{,},;,',:,\",\\,|,,.,<,>,/,?"),
    confirmPassword: z.string('La confirmación de la contraseña  es obligatoria')   
})
.superRefine(async (data, ctx) => {
    if(data.password.includes(data.nombre)){
        ctx.addIssue({
            code: "custom",
            path: "password",
            message: "la contraseña no debe contener el nombre del usuario"
        })
    }

    if(data.password !== data.confirmPassword){
        ctx.addIssue({
            code: "custom",
            path: ['confirmar password', ''],
            message: "la contraseña no debe contener el nombre del usuario"
        });
    }

    const existingUSer = await getUserByEmail(data.email);
    if(existingUSer){
        ctx.addIssue({
            code: "custom",
            path: ['email'],
            message: "EL email ya esta registrado en la plataforma"
        });
    }
});