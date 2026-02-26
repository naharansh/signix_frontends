import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "../../../../utils/datatable"

export const Activity_Type=()=>{
    const columnhelper=createColumnHelper()
    const data=[]
    const columns=[
        columnhelper.accessor("activity_type",{
            header:"Activity Type", 
            cell:info=>info.getValue()
        }),
        columnhelper.accessor("description",{
            header:"Description",
            cell:info=>info.getValue()
        }), 
    ]
    return (
        <>
        <DataTable columns={columns} data={data} />
        </>
    )

}