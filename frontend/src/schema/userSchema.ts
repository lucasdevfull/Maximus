import { z } from "zod";


export const userSchema = z.object({
    username: z.string({message: "Nome de usuário inválido"}),
    email: z.string().email({message: "Email inválido"}),
    password: z.string().min(8,{message: "Senha inválida"}),
    confirm_password: z.string().min(8,{message: "Senha inválida"}),
    telefone: z.string().min(11,{message: "Número de telefone inválido"}).max(12,{message: "Número de telefone inválido"}),
})

export const loginSchema = z.object({
    username: z.string({message: "Nome de usuário inválido"}),
    password: z.string().min(8,{message: "Senha inválida"}),
})

export type Login = z.infer<typeof loginSchema>
export type User = z.infer<typeof userSchema>