import { DataTable } from "../../../../../utils/datatable"

export const WHPJP=()=>{
    const data=[
        {
            id:1,
            name:"Warehouse 1",
            code:"W001",
            region:"North",
        },
        {
            id:2,
            name:"Warehouse 2",
            code:"W002",
            region:"South",
        },
        {
            id:3,
            name:"Warehouse 3",
            code:"W003",
            region:"East",  
        },
        {
            id:4,       
            name:"Warehouse 4",
            code:"W004",
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