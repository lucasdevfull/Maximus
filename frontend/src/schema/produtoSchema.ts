import { z } from "zod";



export const produtoSchema = z.object({
    nome_produto: z.string({required_error: "Nome do produto obrigatório"}),
    descricao: z.string({required_error: "Descrição do produto obrigatória"}),
    preco: z.number({required_error: "Preço do produto obrigatório"}),
    estoque: z.number({required_error: "Estoque do produto obrigatório"}),
    dados_fabricante: z.object({
        nome: z.string({required_error: "Nome do fabricante obrigatório"}),
    }),
    dados_categoria: z.object({
        nome: z.string({required_error: "Nome da categoria obrigatório"}),
    }),
})

export type Produto = z.infer<typeof produtoSchema>;