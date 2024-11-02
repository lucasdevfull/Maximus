import { ModalProps } from "@/props/modal";

// Essa função retorna um modal que pode ser aberto ou fechado. Ele recebe três props:
// - isOpen: um booleano que indica se o modal deve ser aberto ou fechado
// - onClose: uma função que é chamada quando o usuário fecha o modal
// - title: uma string que é usada como o título do modal
// - onSubmit: uma função que é chamada quando o usuário submete o formulário dentro do modal

export function Modal({isOpen,onClose,title,onSubmit,value,onChange}: ModalProps){
    // O estado inputValue armazena o valor do input do modal
    //const [fabricante, setFabricante] = useState<string>('');
    //const [categoria, setCategoria] = useState<string>('');
    // A função handlesubmit é chamada quando o usuário submete o formulário. Ela chama a função onSubmit passada como prop, passando o valor do inputValue como argumento. Em seguida, ela redefine o inputValue para vazio
    

    // Se o modal não estiver aberto, retorna null
    if (isOpen !== true) return null;

    // Caso contrário, retorna o modal em si
    return (
        <div id="modal_fabricante" className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                <div className="bg-gray-800 p-8 rounded-md">
                    <form onSubmit={onSubmit} method="POST">
                        <div className="flex gap-4 justify-between">
                            <h3 className="text-lg">{title}</h3>
                            <button onClick={onClose} type="button" className="text-right">&times;</button>
                        </div>
                        {/* O input do modal armazena o valor do inputValue */}
                        <input 
                            className="rounded-l-md mt-4 px-4 py-2 " 
                            name={title === 'Adicione o fabricante' ? 'fabricante' : 'categoria'}  
                            type="text" 
                            value={value}
                            onChange={onChange}
                            placeholder={title === 'Adicione o fabricante' ? 'Nome do fabricante' : 'Nome da categoria'} 
                        />
                        {/* O botão de adicionar chama a função handlesubmit */}
                        <button type="submit"  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-r-md">Adicionar</button>
                    </form>
                </div>
        </div>
    )
}
