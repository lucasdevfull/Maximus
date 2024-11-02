import { LoaderFunctionArgs } from "react-router-dom";
import { axiosInstance } from "@/api/api";
import { ProdutoProps } from "@/props/produto";

export async function produtoLoader() {
    const response = await axiosInstance.get('produto/',{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    })
    return response.data
}

export async function produtoLoaderId({params}:LoaderFunctionArgs<ProdutoProps>) {
    const response = await axiosInstance.get<ProdutoProps>(`produto/${params.id}/`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    })
    return response.data
}