import { ProdutoProps } from "./produto";

export interface MethodProps {
    action?: string;
    method: 'get' | 'post' | 'put' | 'delete'
    payload?: ProdutoProps
}