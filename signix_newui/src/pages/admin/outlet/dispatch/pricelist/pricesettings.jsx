import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "../../../../../utils/datatable"

export const Price_settings=()=>{
    const columnhelper=createColumnHelper()
    const data=[
        {
            "price_setting_id": 1,
            "cDt": "2025-07-18T15:47:00",
            "price_setting": "Standard Price Setting",
        },
         {
            "price_setting_id": 1,
            "cDt": "2025-07-18T15:47:00",
            "price_setting": "Standard Price Setting",
        },
        ]
        const columns=[
            columnhelper.accessor("price_setting_id",{
                header:"Price Setting ID"  
            }),
            columnhelper.accessor("cDt",{
                header:"Created Date"
            }),
            columnhelper.accessor("price_setting",{
                header:"Price Setting Name"
            }),
        ]
    return(
        <>
        <DataTable columns={columns} data={data} />
        </>
    )
}