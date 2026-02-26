import { createColumnHelper } from "@tanstack/react-table"

export const Zero_Order_Reason=()=>{
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