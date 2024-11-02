import { useLoaderData } from "react-router-dom";
import { Addform } from "@/components/forms/AddForm";
import { Sidebar } from "@/components/partials/Sidebar";
import { ProdutoProps } from "@/props/produto";

export function UpdateProdutos() {
    const produto = useLoaderData() as ProdutoProps
    return (
        <>
            <Sidebar/>
            <div className="p-4 sm:ml-64">
                <h1 className="p-5 font-medium text-3xl dark:text-white">Cadastro de produtos:</h1>
                <Addform method="put" payload={produto}/>
            </div>
        </>
    )
}