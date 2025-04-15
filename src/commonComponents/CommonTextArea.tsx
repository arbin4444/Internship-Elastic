import { EuiTextArea } from '@elastic/eui'
import React from 'react'

interface CommonTextAreaProps {
    isClearable : boolean;
    value : any;
    onChange : any;
    placeholder : string;
}

export const CommonTextArea:React.FC<CommonTextAreaProps>=({
    isClearable,
    value,
    onChange,
    placeholder
})=>{
    return(
        <>
        <EuiTextArea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            isClearable={isClearable}
        />
        </>
    )
}