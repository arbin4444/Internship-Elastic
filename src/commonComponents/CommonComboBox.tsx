import { EuiComboBox } from '@elastic/eui'
import React from 'react'

interface CommonComboBoxProps{
  options : any;
  selectedOptions : any;
  onChange : any;
  placeholder : string;
}

export const CommonComboBox:React.FC<CommonComboBoxProps>=({
    options,
    selectedOptions,
    onChange,
    placeholder
})=>{
    return(
        <>
          <EuiComboBox
            placeholder={placeholder}
            options = {options}
            selectedOptions={selectedOptions}
            onChange={onChange}
          />
        </>
    )
}