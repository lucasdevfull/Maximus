import { redirect } from "react-router-dom";
import { axiosInstance } from "@/api/api";


export async function logoutAction() {
    const response = await axiosInstance.delete('logout/', {
        headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        }
    }).then(res => {
        if (res.status === 204){
            const token = localStorage.getItem('token')
            console.log(token)
            if (token) {
                localStorage.removeItem('token')
                return redirect('/')
            }
                return redirect('/')
        }
    }).catch(err => console.log(err));
    const promessa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(response)
        },1000)
    }) 
    return promessa
}