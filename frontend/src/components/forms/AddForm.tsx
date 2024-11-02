import { InputAdd, Label, Textarea } from "@/components/inputs";
import { useFabricante } from "@/hooks/useFabricante";
import { useCategoria } from "@/hooks/useCategoria";
import { Modal } from "@/components/partials/Modal";
import { MethodProps } from "@/props/method";
import { FitroProps } from "@/props/produto";
import { Fragment } from "react/jsx-runtime";
import { FormEvent, useState } from "react";
import { axiosInstance } from "@/api/api";
import { Form, useNavigate } from "react-router-dom";

export function Addform({method, payload}:MethodProps) {
     // Estado para controlar o estado do modal de adição de categoria
     const [modalCategoriaOpen, setModalCategoriaOpen] = useState<boolean>(false);
     // Estado para controla}r o estado do modal de adição de fabricante
     const [modalFabricanteOpen, setModalFabricanteOpen] = useState<boolean>(false);
     const [fabricante, setFabricante] = useState<string>('');
     const [categoria, setCategoria] = useState<string>('');
     const {categorias} = useCategoria();
     const {fabricantes} = useFabricante();
     const navigate = useNavigate()
    const handleSubmitCategoria = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form =e.target as  HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        await axiosInstance.post('categoria/',{
            nome: data.categoria
        }).then(res => {
            if (res.status === 201) {
                setModalCategoriaOpen(false);
            }
        }).catch(err => console.log(err));
    }
    const handleSubmitFabricante = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form =e.target as  HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        await axiosInstance.post('fabricante/', {
            nome: data.fabricante
        }).then(res => {
            if (res.status === 201) {
                setModalFabricanteOpen(false);
            }
        })
        .catch(err => console.log(err));
    }

    const handleDelete = async () => {
        const confirm = window.confirm('Deseja continuar a ação?')
        console.log(confirm)
        if (confirm){
            await axiosInstance.delete(`produto/${payload?.id}/`).then(res => {
                if (res.status === 204) {
                    return navigate('/produto')
                }
            }).catch(err => console.log(err));
        }
        
    }
    
    const openModalCategoria = () => {
        setModalCategoriaOpen(true);
    }

    const closeModalCategoria = () => {
        setModalCategoriaOpen(false);
    }

    
    const openModalFabricante = () => {
        setModalFabricanteOpen(true);
    }

    const closeModalFabricante = () => {
        setModalFabricanteOpen(false);
    }
    return (
        <Fragment>
            <Form className="rounded-md space-y-6 md:space-y-8 shadow-md p-6 bg-white dark:bg-gray-800" method={method === 'post' ? 'post': 'put'}>
                <InputAdd htmlFor="nome_produto" label="Nome do produto:" name="nome_produto" id="nome_produto" type="text" placeholder="Nome do produto" required={true} defaultValue={payload ? payload.nome_produto : ''}/>
                <div>
                    <Label className="label-add" htmlFor="descricao_produto" label="Descrição do produto:"/>
                    <Textarea name="descricao" id="descricao_produto" placeholder="Descrição do produto" required={true} defaultValue={payload ? payload.descricao : ''}>{payload ? payload.descricao : ''}</Textarea>
                </div>    
                
                {/* Campos para o preço e o estoque do produto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <InputAdd name="preco" id="preco_produto" type="number" placeholder="Preço" label="Preço:" htmlFor="preco_produto" required={true} defaultValue={payload ? payload.preco : ''}/>

                    <InputAdd name="estoque" id="estoque_produto" type="number" placeholder="Quantidade" label="Quantidade:" htmlFor="estoque_produto" required={true} defaultValue={payload ? payload.estoque : ''}/>

                </div>
                {/* Campos para selecionar o fabricante e a categoria do produto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="label-add" htmlFor="fabricante_produto">Fabricante:</label>
                        <select value={fabricantes} defaultValue={payload ? payload.dados_fabricante.nome : ''}  className="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"  name="fabricante" id="fabricante">
                            <option value="" selected disabled>Fabricante</option>
                            {fabricantes?.map(({id, nome}: FitroProps) => (
                                <option key={id} value={id}>{nome}</option>
                            ))}
                        </select>
                        
                    </div>
                    <div>
                        <label className="label-add" htmlFor="categoria_produto">Categoria:</label>
                        <select value={categorias} defaultValue={payload ? payload.dados_categoria.nome : ''} className="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300" name="categoria" id="categoria" >

                            <option value="" selected disabled>Categoria</option>
                            {categorias?.map(({id, nome}: FitroProps) => (
                                <option key={id} value={id}>{nome}</option>
                            ))}
                        </select>
                    </div>
                </div>
               
                {/* Botões para abrir os modais de adição de fabricante e categoria e para cadastrar o produto */}
                <div className="grid grid-cols-1 md:grid-cols-4 place-items-stretch gap-4 justify-items-center">
                    <button onClick={openModalFabricante} type='button'className="w-full px-4 py-2 bg-blue-600 text-white text-center border border-solid border-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-inset focus:ring-blue-400">Adicionar fabricante</button>
                    <button onClick={openModalCategoria} type='button' className=" w-full px-4 py-2 bg-blue-600 text-white text-center border border-solid border-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-inset focus:ring-blue-400">Adicionar categoria</button>
                    <button type="submit" className="w-full  px-4 py-2 bg-green-600 text-white border border-solid border-green-700 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-inset focus:ring-green-400">{payload ? 'Atualizar' : 'Cadastrar'}</button>
                    {payload ? 
                        <button onClick={handleDelete} type='button' className="w-full px-4 py-2 bg-red-600 text-white border border-solid border-red-700 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-inset focus:ring-red-400">Excluir</button>
                        :
                        <button type="button" className="w-full px-4 py-2 bg-red-600 text-white border border-solid border-red-700 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-inset focus:ring-red-400">Cancelar</button>
                    }
                </div>         
            </Form>
            <Modal isOpen={modalCategoriaOpen} onClose={closeModalCategoria} title="Adicione a categoria" value={categoria} onSubmit={handleSubmitCategoria} onChange={(e)=>setCategoria(e.target.value)}/>

            {/* Modal para adicionar um novo fabricante */}
            <Modal isOpen={modalFabricanteOpen} onClose={closeModalFabricante} title="Adicione o fabricante" value={fabricante} onSubmit={handleSubmitFabricante} onChange={(e)=>setFabricante(e.target.value)}/>
        </Fragment>
    )
}