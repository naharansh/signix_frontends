import { createColumnHelper } from "@tanstack/react-table"

export const RSM=()=>{
      const columnhelper=createColumnHelper()
                const data=[]
                const columns=[]
                return(
                        <>
                        <DataTable columns={columns} data={data} />
                        </>
                    )
}