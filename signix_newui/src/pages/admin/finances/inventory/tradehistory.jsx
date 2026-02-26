import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "../../../../utils/datatable"

export const TradeHistory=()=>{
    const data=[]
    const columnhelper=createColumnHelper()
    const column=[
        columnhelper.accessor("trade_id",{
            header:"Trade ID",}),
        columnhelper.accessor("item_name",{
            header:"Item Name",}),
        columnhelper.accessor("item_code",{
            header:"Item Code",}),
        columnhelper.accessor("quantity",{}),
        columnhelper.accessor("trade_type",{}),
        columnhelper.accessor("trade_date",{}),]

    return (
         <DataTable columns={column} data={data}/>
    )
}