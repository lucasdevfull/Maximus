export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    name: string
    id: string
    type?: string
    placeholder: string
    label: string
    htmlFor: string
    value?: string
    required?: boolean
    readonly?: boolean
    
}



export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
    htmlFor: string
    label: string   
}

export interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
    name: string
    placeholder: string
    required?: boolean
    children?: React.ReactNode
}

export interface SelectProps extends React.HtmlHTMLAttributes<HTMLSelectElement> {
    children?: React.ReactNode
    name: string
    ref?: React.RefObject<HTMLSelectElement>
}