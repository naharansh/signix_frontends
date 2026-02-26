import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "../../../../utils/datatable"

export const Status_wise_Demand=()=>{
    const columnhelper=createColumnHelper()
    const data=[ 
    {
        "status": "Approved",
        "demand": 500,  
        "created_at": "2026-02-21T10:30:00Z"
    },
    {
        "status": "Pending",
        "demand": 150,  
        "created_at": "2026-01-15T09:00:00Z"    

        },
           {
        "status": "Pending",
        "demand": 150,  
        "created_at": "2026-01-15T09:00:00Z"    

        },
           {
        "status": "Pending",
        "demand": 150,  
        "created_at": "2026-01-15T09:00:00Z"    

        },

    ]   
    const columns=[
        columnhelper.accessor("status",{
            header:"Status"
        }),
        columnhelper.accessor("demand",{
            header:"Demand" 
        }),
        columnhelper.accessor("created_at",{
            header:"Created At"
        }),
    ]
    return(
        <>
        <DataTable data={data} columns={columns}/>
        </>
    )
    }