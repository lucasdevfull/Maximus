import { Form, Link, useActionData } from "react-router-dom";
import { Errors } from "@/components/erros/actionErros";
import { Input } from "@/components/inputs";
import { Action } from "@/props/action";

export function RegisterForm() {
    const action = useActionData<Action>();
    
    return (
        <>
            {action?.errors && <Errors>{action.errors}</Errors>}
            <Form method="post" className="space-y-4 md:space-y-6">
                <Input htmlFor="username" label="Username" name="username" id="username" placeholder="" required={true}/>
                <Input htmlFor="email" label="Email" name="email" id="email" placeholder="" required={true}/>
                <Input htmlFor="password" label="Password" name="password" id="password" placeholder="" required={true}/>
                <Input htmlFor="confirm_password" label="Confirm Password" name="confirm_password" id="confirm_password" placeholder="" required={true}/>
                <Input htmlFor="telefone" label="Telefone" name="telefone" id="telefone" placeholder="" required={true}/> 

                <div className="flex items-start">
                  <div className="flex items-center h-5 ">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                  </div>
                </div>
  
                <button type="submit" className="btn btn-primary">Crie uma conta</button>
        
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <Link to={"/"} className="font-medium  hover:underline ">Login here</Link>
                </p>
            </Form>
        </>
    )
}