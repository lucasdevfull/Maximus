import { axiosInstance } from "@/api/api";
import useSWR from "swr";

const fetcher = async(url: string) => await axiosInstance.get(url,{
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')
        }`
    }}).then(res => res.data);
    
export function useCategoria() {
    const { data , error } = useSWR('categoria/', fetcher,  { refreshInterval: 86400000 });
    
    return {
        categorias: data,
        categoriaError: error
    }
}