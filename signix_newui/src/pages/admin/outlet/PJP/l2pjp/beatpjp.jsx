import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "../../../../../utils/datatable"

export const Beat_PJP=()=>{
    const columnhelper=createColumnHelper()
    const data=[]
    const columns=[
        columnhelper.accessor("beat_name",{
            header:"Beat Name", 
            cell:info=>info.getValue()
        }),
        columnhelper.accessor("beat_code",{ 
            header:"Beat Code",
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