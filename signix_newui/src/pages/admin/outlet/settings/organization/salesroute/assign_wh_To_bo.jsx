import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "../../../../../../utils/datatable"

export const Assign_WH_To_BO=()=>{
      const columnhelper=createColumnHelper()
            const data=[]
            const columns=[]
            return(
                <>
                <DataTable columns={columns} data={data} />
                </>
            )
}