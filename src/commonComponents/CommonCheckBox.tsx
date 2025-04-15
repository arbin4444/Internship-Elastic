import { EuiCheckbox } from '@elastic/eui'
import React, { ReactNode } from 'react'

interface CommonCheckBoxProps {
    id : string;
    checked : boolean;
    onChange : (event : React.ChangeEvent<HTMLInputElement>)=>void;
    label : ReactNode;
}


export const CommonCheckBox:React.FC<CommonCheckBoxProps>=({
    id,
    checked,
    onChange,
    label
})=>{
    return(
        <>
         <EuiCheckbox
            id = {id}
            checked ={checked}
            onChange={onChange}
            label ={label}
         />
        </>
    )
}