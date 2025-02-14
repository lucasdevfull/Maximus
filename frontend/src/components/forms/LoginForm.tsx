import { Form, Link, useActionData } from "react-router-dom";
import { Errors } from "@/components/erros/actionErros";
import { Input } from "@/components/inputs";
import { Action } from "@/props/action";

export function LoginForm() {
    const action = useActionData() as Action;
    return (
        <>
            {action?.errors && <Errors>{action.errors}</Errors>}
            <Form method="post" action="/" className="space-y-4 md:space-y-6">
                
                <Input label="Username" htmlFor='username' type="text" name="username" id="username"  placeholder='' />
            
                <Input label='Password' htmlFor='password' type="password" name="password" id="password"  placeholder=''/>
                <div className="flex items-center justify-between">
                    <div className="">

                    </div>
                    <a href="#" className="flex items-start text-sm font-medium text-blue-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                </p>
            </Form>
        </>
    )
}