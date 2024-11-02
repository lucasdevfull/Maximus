import { ActionFunctionArgs, redirect } from "react-router-dom";
import { Produto } from "@/schema/produtoSchema";
import { axiosInstance } from "@/api/api";

export async function addProdutoAction({request}: ActionFunctionArgs) {
    const formData = await request.formData();
    const produto = Object.fromEntries(formData);
    console.log(produto)
    const response = await axiosInstance.post<Produto>('produto/',{...produto}).then(res => res.data).then(data => {
        if (data) {
            return redirect('/produto')
        }
    }).catch(err => console.log(err));
    return response
}