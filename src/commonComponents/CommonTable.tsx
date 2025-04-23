import { EuiBasicTable, Pagination } from '@elastic/eui'
import React from 'react'

interface CommonTableProps {
    tableCaption : string;
    items : any;
    itemId: any;
    columns : any;
    rowHeader : string;
    pagination : Pagination;
    onChange : any;
    selection : any;
}

export const CommonTable:React.FC<CommonTableProps>=({
    tableCaption,
    items,
    itemId,
    columns,
    rowHeader,
    pagination,
    onChange,
    selection,

})=>{
    return(
        <>
        <EuiBasicTable
          tableCaption={tableCaption}
          items = {items}
          itemId={itemId}
          columns={columns}
          rowHeader = {rowHeader}
          pagination={pagination}
          onChange={onChange}
          selection={selection}
        />

        
        </>
    )
}