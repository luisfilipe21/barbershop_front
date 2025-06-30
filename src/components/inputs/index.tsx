import { forwardRef } from "react";

interface InputProps {
    [key: string]: any
}


export const Inputs = forwardRef<HTMLInputElement, { id: string, label?: string, placeholder?: string, type: string }>(({ ...rest }: InputProps, ref) => {
    return (
        <div className="space-y-2">
            {rest.label ? <label htmlFor="" >{rest.label}</label> : null}

            <input className="bg-slate-500 w-full py-2 px-3 rounded-sm"
             ref={ref}
              {...rest} 
              />

        </div>
    )
})