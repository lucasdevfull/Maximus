export interface ProdutoProps {
    id: number;
    nome_produto: string;
    descricao: string;
    preco: number;
    estoque: number;
    dados_fabricante: {
        nome: string
    }
    dados_categoria: {
        nome: string
    }
}

export interface FitroProps {
    id: number
    nome: string
}