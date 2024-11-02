import { ChangeEvent,FormEvent } from "react";
export interface ModalProps {
    isOpen: boolean;
    onClose?: () => void;
    title?: string;
    onSubmit?: (e:FormEvent<HTMLFormElement>) => void;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onDelete?: (e:FormEvent<HTMLButtonElement>,id:number) => void
}

export interface ModalViewProps extends ModalProps {
    id: number
    nome_produto: string
    descricao: string
    preco: number
    estoque: number
    dados_fabricante: {
        id: number
        nome: string
    }
    dados_categoria: {
        id: number
        nome: string
    }

}
