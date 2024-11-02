export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    type: 'button' | 'submit' | 'reset'
    className: string 
}
