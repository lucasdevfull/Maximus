import { InputProps, LabelProps, TextareaProps } from "@/props/Inputs"


export const Input = ({name,id,type = 'text',placeholder = '',label,htmlFor, required}:InputProps) => {
    return (
        <div className="relative z-0 w-full mb-5 group">
            <input type={type} name={name} id={id} className="input peer" placeholder={placeholder} required={required} />
            <Label htmlFor={htmlFor} label={label} className="label"/>
        </div>
    )
}


export const InputAdd = ({name,id,type = 'text',placeholder,label,htmlFor, required, defaultValue}:InputProps) => {
    return (
        <div>
            <Label className="label-add" htmlFor={htmlFor} label={label}/>
            <input className="input-add" type={type} name={name} id={id} placeholder={placeholder} required={required} defaultValue={defaultValue}/>
        </div>
    )
}

export function Label({htmlFor,label,className}:LabelProps) {
    return (
        <label className={className} htmlFor={htmlFor}>{label}</label>
    )
}

export function Textarea({name,id,placeholder,children}:TextareaProps) {
    return (
        <textarea className="resize-none border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"  name={name} id={id} placeholder={placeholder} cols={30} 
        rows={5} >{children}</textarea>
    )
}