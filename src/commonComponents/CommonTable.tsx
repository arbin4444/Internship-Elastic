import { EuiBasicTable, Pagination } from '@elastic/eui'
import React from 'react'

interface CommonTableProps {
    tableCaption : string;
    items : any;
    columns : any;
    rowHeader : string;
    pagination : Pagination;
    onChange : any;
}

export const CommonTable:React.FC<CommonTableProps>=({
    tableCaption,
    items,
    columns,
    rowHeader,
    pagination,
    onChange

})=>{
    return(
        <>
        <EuiBasicTable
          tableCaption={tableCaption}
          items = {items}
          columns={columns}
          rowHeader = {rowHeader}
          pagination={pagination}
          onChange={onChange}
        />

        
        </>
    )
}