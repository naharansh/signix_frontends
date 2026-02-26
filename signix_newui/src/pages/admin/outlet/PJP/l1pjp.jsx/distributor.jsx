import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "../../../../../utils/datatable"

export const Distributor_PJP=()=>{
    const data=[
        {
            id:1,
            name:"Distributor 1",
            code:"D001",
            region:"North",
        },
        {
            id:2,
            name:"Distributor 2",
            code:"D002",
            region:"South",

        },
        {
            id:3,
            name:"Distributor 3",
            code:"D003",
            region:"East",
        },
        {
            id:4,
            name:"Distributor 4",
            code:"D004",
            region:"West",
        },
    ]
    const columnhepler=createColumnHelper()
    const columns=[
        columnhepler.accessor("name",{
            header:"Name",
            cell:info=>info.getValue()
        }), 
        columnhepler.accessor("code",{
            header:"Code",
            cell:info=>info.getValue()
        }),
        columnhepler.accessor("region",{
            header:"Region",
            cell:info=>info.getValue()
        }),
    ]
    return(
        <DataTable data={data} columns={columns} />
    )
}