import { ActionFunctionArgs, redirect } from "react-router-dom";
import { Produto } from "@/schema/produtoSchema";
import { ProdutoProps } from "@/props/produto";
import { axiosInstance } from "@/api/api";

export async function updateProdutoActionId({request,params}: ActionFunctionArgs<ProdutoProps>) {
    const formData = await request.formData();
    const produto = Object.fromEntries(formData);
    console.log(produto);

    const response = await axiosInstance.put<Produto>(`produto/${params.id}/`,{...produto}).then(res => res.data).then(data => {
        if (data) {
            return redirect('/produto')
        }
    }).catch(err => console.log(err));
    return response
}

export async function deleteProdutoActionId({params}: ActionFunctionArgs<ProdutoProps>) {
    console.log(params.id)
    const response = await axiosInstance.delete(`produto/${params.id}/`).then(res => {
        if (res.status === 204) {
            return redirect('/produto')
        }
    }).catch(err => console.log(err));
    return response
}