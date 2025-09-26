import { forwardRef } from "react";

interface InputProps {
    [key: string]: any
}


export const Inputs = forwardRef<HTMLInputElement, { id: string, label?: string, placeholder?: string, type: string, value?: string }>(({ ...rest }: InputProps, ref) => {
    return (
        <div className="flex items-center justify-around py-1 px-3">
            {rest.label ? <label htmlFor="" className="font-bold mt-2" >{rest.label}</label> : null}

            <input className="bg-accent-content text-secondary w-full py-2 px-3 mt-2 rounded-sm "
             ref={ref}
              {...rest} 
              />
        </div>
    )
})