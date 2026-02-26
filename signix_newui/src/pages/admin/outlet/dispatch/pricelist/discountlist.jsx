import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "../../../../../utils/datatable"

export const DiscountList=()=>{
    const columnhelper=createColumnHelper()
    const data=[]
const columns=[
    columnhelper.accessor("SR",{    }
    ), 
    columnhelper.accessor("cDt",{ }),]
    return(
        <DataTable data={data} columns={columns}/>
    )
}