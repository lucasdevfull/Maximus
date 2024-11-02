import { ActionFunctionArgs, redirect } from "react-router-dom";
import { Login, loginSchema } from "@/schema/userSchema";
import { axiosInstanceLogin } from "@/api/api";
import { AxiosResponse } from "axios";
import { Token } from "@/props/user";

export async function loginAction({request}: ActionFunctionArgs) {
    const formData = await request.formData();
    const login = Object.fromEntries(formData);
    
    //if (!loginSchema.parse(login)) {
    //    return {errors: 'Usuário ou senha inválidos'}
    //}

    const response =await axiosInstanceLogin.post<Login,AxiosResponse<Token>>('login/',{
        username: login.username,
        password: login.password
    }).then(res => {
            return res.data
        }
    ).then((data) =>{
        if (data) {
            localStorage.setItem('token', data.token);
            return redirect('/produto')
        }
    }).catch(err => console.log(err));
    return response
}