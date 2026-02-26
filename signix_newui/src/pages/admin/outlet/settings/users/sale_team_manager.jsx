import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "../../../../../utils/datatable"

export const Sales_Team_Manager=()=>{
       const columnhelper=createColumnHelper()
            const data=[]
            const columns=[]
            return(
                    <>
                    <DataTable columns={columns} data={data} />
                    </>
                )
}