import { ProdutoProps } from "./produto"

export interface DeleteProps {
    onDelete?: () => void
    className: string
    action: string
    payload: ProdutoProps
    children: React.ReactNode
}