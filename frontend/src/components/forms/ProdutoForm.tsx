import { useFabricante } from '@/hooks/useFabricante';
import { useCategoria } from '@/hooks/useCategoria';
import { FitroProps } from '@/props/produto';
import { Link } from 'react-router-dom';
import { useRef } from 'react';


export function ProdutoForm() {
    const { categorias } = useCategoria();
    const { fabricantes } = useFabricante();
    const categoriaRef = useRef<HTMLSelectElement>(null);
    const fabricanteRef = useRef<HTMLSelectElement>(null);
    //if (categoriaError || fabricanteError) {
    //    return <div>Erro ao carregar dados</div>;
    //}
    const filter = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(categoriaRef.current?.value);
        console.log(fabricanteRef.current?.value);
    }
    return (
        <form onSubmit={filter}>
            <div className="flex flex-wrap gap-4 justify-end mx-auto mt-8 w-full">
                <select defaultValue={'Fabricante'} ref={fabricanteRef}  name="fabricante" id="fabricante" className="px-2 py-1 sm:w-28 md:w-36 bg-white dark:bg-gray-800 text-sm font-normal text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 outline-none transition-all placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
                    <option  selected>Fabricante</option>
                    {/* Renderização das opções de fabricantes */}
                    {/* Substitua por um loop ou mapeamento dos dados conforme necessário */}
                    {/* Exemplo: fabricantes.map(fabricante => <option key={fabricante.id} value={fabricante.id}>{fabricante.nome}</option>) */}
                    {fabricantes?.map(({id, nome}: FitroProps) => {
                        return(
                            <option key={id} value={id}>{nome}</option>
                        )
                    })}
                </select>

                <select defaultValue={'Categoria'} ref={categoriaRef} name="categoria" id="categoria" className="px-2 py-1 sm:w-28 md:w-36 bg-white dark:bg-gray-800 text-sm font-normal text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 outline-none transition-all placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
                    <option  selected>Categoria</option>
                    {/* Renderização das opções de categorias */}
                    {/* Substitua por um loop ou mapeamento dos dados conforme necessário */}
                    {/* Exemplo: categorias.map(categoria => <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>) */}
                    {categorias?.map(({id, nome}: FitroProps) => {
                        return(
                            <option key={id} value={id}>{nome}</option>
                        )
                    })}
                </select>
                
                <div className="flex gap-4"> 
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white border border-solid border-blue-700 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-inset focus:ring-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)' }}>
                            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                        </svg>
                    </button>
                    
                    {/* Exemplo de link para adicionar produto */}
                    <Link
                        to="/adicionar"  // Substitua pela rota desejada
                        className="px-4 py-2 bg-green-600 text-white border border-solid border-green-700 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-inset focus:ring-green-400"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)' }}>
                            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </form>
    );
};