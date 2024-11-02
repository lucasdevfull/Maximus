export interface LoginProps {
    username: string
    password: string
}
export interface UserProps extends LoginProps {
    email: string
    confirm_password: string
    telefone: string

}

export interface Token {
    token: string
}