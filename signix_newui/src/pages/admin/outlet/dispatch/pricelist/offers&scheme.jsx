import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "../../../../../utils/datatable"

export const Offers_Scheme=()=>{
    const columnhelper=createColumnHelper()
    const data=[]
    const columns=[
        columnhelper.accessor("SR",{
            header:"SR" 
        }),
        columnhelper.accessor("cDt",{
            header:"Created Date"  

            }),
        columnhelper.accessor("OfferScheme",{
            header:"Offer Scheme Name"
        }),
        columnhelper.accessor("Division",{
            header:"Division"
        }),
        columnhelper.accessor("ValidFrom",{
            header:"Valid From"
        }),
        columnhelper.accessor("ValidTo",{
            header:"Valid To"   
            }),
        columnhelper.accessor("Details",{
            header:"Details"
        })
    ]
    return(
        <DataTable data={data} columns={columns}/>
    )
}