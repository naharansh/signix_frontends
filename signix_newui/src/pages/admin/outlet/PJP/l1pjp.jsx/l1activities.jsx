import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "../../../../../utils/datatable"

export const L1Activities=()=>{
    const data=[
        {
            id:1,
            name:"Activity 1",  
            description:"Description of Activity 1",
        },
        {   

            id:2,
            name:"Activity 2",
            description:"Description of Activity 2",
        },
        {
            id:3,   
            name:"Activity 3",
            description:"Description of Activity 3",
        },
    ]
    const columnhelper=createColumnHelper()
    const columns=[
        columnhelper.accessor("name",{
            header:"Name",
            cell:info=>info.getValue()
        }),
        columnhelper.accessor("description",{
            header:"Description",
            cell:info=>info.getValue()
        })
    ]
    return(
        <DataTable data={data} columns={columns} />
    )
}