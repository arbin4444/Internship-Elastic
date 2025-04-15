import { EuiButtonIcon, IconType } from '@elastic/eui'
import React from 'react'

interface CommonIconButtonProps {
    iconType : IconType;
    arialabel? : string;
    color : 'text' | 'accent' | 'accentSecondary' | 'primary' | 'success' | 'warning' | 'danger';
    onClick : any;
}

export const CommonIconButton:React.FC<CommonIconButtonProps>=({
    iconType,
    arialabel,
    color,
    onClick

})=>{
    return (
        <>
         <EuiButtonIcon
            iconType={iconType}
            aria-label={arialabel}
            color={color}
            onClick={onClick}
         />
        </>
    )
}