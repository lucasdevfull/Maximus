import { Link, useLoaderData } from "react-router-dom";
import { ProdutoProps } from "@/props/produto";

export function ProdutoTable() {
    const produtos: ProdutoProps[] = useLoaderData<ProdutoProps[]>();
    return (
        <>
            <table className="divide-y divide-gray-200 bg-gray-50 dark:bg-gray-700 w-full">
                <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                        <th className="px-4 py-3 text-xs text-center uppercase tracking-wider text-gray-800 dark:text-gray-100">Produtos</th>
                        <th className='px-4 py-3 text-xs text-center uppercase tracking-wider text-gray-800 dark:text-gray-100'>Categoria</th>
                        <th className='px-4 py-3 text-xs text-center uppercase tracking-wider text-gray-800 dark:text-gray-100'>Quantidade</th>
                        <th className='px-4 py-3 text-xs text-center uppercase tracking-wider text-gray-800 dark:text-gray-100'>Preço</th>
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {produtos ? produtos?.map(({id,nome_produto,preco,estoque,dados_categoria}:ProdutoProps)  => { 
                     return (
                        <tr key={id}>
                            <td  className="px-4 py-3 whitespace-nowrap text-center text-sm font-medium text-gray-900 dark:text-gray-100">
                                <Link to={`/produto/${id}`} className="hover:bg-gray-700 px-3 py-1 rounded-lg">{nome_produto}</Link>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-700 dark:text-gray-300">{dados_categoria.nome}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-700 dark:text-gray-300">{estoque}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-700 dark:text-gray-300">{preco}</td>
                        </tr>
                    );
                    }): null}
                </tbody>
            </table>
        </>
    )
}