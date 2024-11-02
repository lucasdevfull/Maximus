import { ActionFunctionArgs, redirect } from "react-router-dom";
import { User } from "@/schema/userSchema";
import { axiosInstance } from "@/api/api";

export async function registerAction({request}: ActionFunctionArgs) {
    const formData = await request.formData();
    const user = Object.fromEntries(formData) as User;
    console.log(user)
    await axiosInstance.post<User>('register/',{...user}).then(res => res.data).then(data =>{
        if (data) {
            return redirect('/')
        }
    }).catch(err => console.log(err));
}