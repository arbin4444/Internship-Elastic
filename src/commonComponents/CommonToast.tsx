import { EuiGlobalToastList } from '@elastic/eui'
import React from 'react'

interface CommonToast {
    toasts : any;
    dismissToast : any;
    toastLifeTimeMs : number;


}


export const CommonToast:React.FC<CommonToast>=({
    toasts,
    dismissToast,
    toastLifeTimeMs,
})=>{
    return(
        <>
          <EuiGlobalToastList
            toasts={toasts}
            dismissToast={dismissToast}
            toastLifeTimeMs={toastLifeTimeMs}
          />
        </>
    )
}