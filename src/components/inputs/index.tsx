import { forwardRef } from "react";

interface InputProps {
    [key: string]: any
}


export const Inputs = forwardRef<HTMLInputElement, { id: string, label?: string, placeholder?: string, type: string, value?: string }>(({ ...rest }: InputProps, ref) => {
    return (
        <div className="space-y-2 p-3">
            {rest.label ? <label htmlFor="" className="font-bold text-yellow-900" >{rest.label}</label> : null}

            <input className="bg-slate-500 w-full py-2 px-3 rounded-sm mt-2"
             ref={ref}
              {...rest} 
              />

        </div>
    )
})