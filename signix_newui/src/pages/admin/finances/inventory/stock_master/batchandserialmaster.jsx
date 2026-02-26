import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "../../../../../utils/datatable"

export const BatchMaster=()=> {
    const data=[]
    const columnhelper=createColumnHelper()
   const column=[
    columnhelper.accessor("batch_code",{
        header:"Batch Code",}),
    columnhelper.accessor("item_name",{
        header:"Item Name",}),
    columnhelper.accessor("item_code",{
        header:"Item Code",}),
    columnhelper.accessor("mfg_date",{}),
    columnhelper.accessor("exp_date",{}),
    columnhelper.accessor("quantity",{}),]
    return (
        <>
        <DataTable columns={column} data={data}/>
        </>
    )
        
}
export const SerialMaster=()=> {
    const data=[]
    const columnhelper=createColumnHelper()
    const column=[
    columnhelper.accessor("serial_code",{
        header:"Serial Code",}),
    columnhelper.accessor("item_name",{
        header:"Item Name",}),
    columnhelper.accessor("item_code",{
        header:"Item Code",}),
    columnhelper.accessor("mfg_date",{}),
    columnhelper.accessor("exp_date",{}),
    columnhelper.accessor("quantity",{}),]
    return(
        <>
        <DataTable columns={column} data={data}/>
        </>
    )
}