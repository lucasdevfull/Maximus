import { Sidebar } from "@/components/partials/Sidebar"
import { ProdutoForm } from "@/components/forms/ProdutoForm";
import { ProdutoTable } from "@/components/table/ProdutoTable";
import { Suspense } from "react";
export function Produtos() {
    
    return (
        <div>
            <Sidebar />
            <div className="p-4 sm:ml-64"> 
                <h1 className="p-5 font-medium text-3xl text-gray-800 dark:text-gray-100">Listagem de Produtos</h1>
                <ProdutoForm/> 
                <div className="mt-8 overflow-x-auto rounded-lg">
                    <Suspense fallback={<div>Loading...</div>}>
                        <ProdutoTable/>
                    </Suspense>
                </div>
                {/* eu preciso do operador ternário para renderizar o componente */}
            </div>    
        </div>
    )
}