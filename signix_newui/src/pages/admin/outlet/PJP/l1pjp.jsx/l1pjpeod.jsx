import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "../../../../../utils/datatable"

export const L1_PJP_EOD=()=>{
      const data=[
           {
               id:1,
               name:"Individual 1",
               code:"I001",
               region:"North",
           },
           {
               id:2,
               name:"Individual 2",
               code:"I002",
               region:"South",
              
           }]
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
           <>
           <DataTable data={data} columns={columns}/>
           </>
       )
}