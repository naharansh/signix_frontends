import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "../../../../utils/datatable"

export const Not_Delivered_Reason=()=>{
    const columnhelper=createColumnHelper()
    const data=[]
    const columns=[]
    return(
        <>
        <DataTable columns={columns} data={data} />
        </>
    )
}