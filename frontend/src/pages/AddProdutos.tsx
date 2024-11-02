import { Addform } from "@/components/forms/AddForm";
import { Sidebar } from "@/components/partials/Sidebar";

export function AddProdutos() {

    return (
        <>
            <Sidebar/>
            <div className="p-4 sm:ml-64">
                <h1 className="p-5 font-medium text-3xl dark:text-white">Cadastro de produtos:</h1>
                <Addform  method="post"/>
            </div>
        </>
    )
}