import { EuiFieldText } from '@elastic/eui'
import React from 'react'

interface CommonInputFieldProps {
    value : string;
    onChange : any;
    placeholder : string;
}

export const CommonInputField:React.FC<CommonInputFieldProps>=({
    value,
    onChange,
    placeholder
})=>{
    return (
        <>
        <EuiFieldText
            value = {value}
            onChange = {onChange}
            placeholder={placeholder}
        />
        </>
    )
}