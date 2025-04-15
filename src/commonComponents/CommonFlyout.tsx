import { EuiFlexGroup, EuiFlexItem, EuiFlyout, EuiFlyoutBody, EuiFlyoutFooter, EuiFlyoutHeader, EuiText, EuiTitle } from '@elastic/eui'
import React from 'react'

interface CommonFlyoutProps {
    ownFocus? : boolean;
    onClose? : any;
    arialabelledby? : any;
    title? : string;
    detailTitle : string;
    name : any;
    service : any;
    retire : any;
    description : any;
    close? : any;
    update? : any;
}

export const CommonFlyout:React.FC<CommonFlyoutProps>=({
    ownFocus,
    onClose,
    arialabelledby,
    title,
    detailTitle,
    name,
    service,
    retire,
    description,
    close,
    update
    
})=>{
    return(
        <>
        <EuiFlyout
            ownFocus= {ownFocus}
            onClose={onClose}
            aria-labelledby={arialabelledby}
        >
            <EuiFlyoutHeader hasBorder>
                <EuiTitle>
                   <h2>{title}</h2>
                </EuiTitle>
            </EuiFlyoutHeader>
            <EuiFlyoutBody>
                <EuiText>
                    <p>{detailTitle}</p>
                    <p>Name : {name}</p>
                    <p>Service Year : {service}</p>
                    <p>Retire : {retire}</p>
                    <p>Description : {description}</p>
                </EuiText>
            </EuiFlyoutBody>
            <EuiFlyoutFooter>
                <EuiFlexGroup justifyContent='spaceBetween'>
                    <EuiFlexItem grow={false}>
                        {close}
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                         {update}
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiFlyoutFooter>

        </EuiFlyout>
        </>
    )
}