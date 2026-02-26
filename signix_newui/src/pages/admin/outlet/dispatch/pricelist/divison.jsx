import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "../../../../../utils/datatable"

export const Division =()=>{
    const columnhelper=createColumnHelper()
    const data=[
  {
    "distance_id": "DST-0001",
    "cDt": "2026-02-21",
    "date_time": "2026-02-21T09:15:00",
    "activity_id": "ACT-101",
    "activity_type": "Check-In",
    "activity_type_id": 1,
    "total_distance": 12.5,
    "ledger_id": "LED-1001",
    "ledger_name": "Shree Balaji Distributors"
  },
  {
    "distance_id": "DST-0002",
    "cDt": "2026-02-21",
    "date_time": "2026-02-21T11:30:00",
    "activity_id": "ACT-102",
    "activity_type": "Order Visit",
    "activity_type_id": 2,
    "total_distance": 8.2,
    "ledger_id": "LED-1002",
    "ledger_name": "Marwar Traders"
  }
]
const columns=[
    columnhelper.accessor("distance_id",{
        header:"Distance ID"
    }),
    columnhelper.accessor("cDt",{
        header:"Date"
    }),
    columnhelper.accessor("date_time",{
        header:"Date Time"
    }),
    columnhelper.accessor("activity_id",{   
        header:"Activity ID"
    }),
    columnhelper.accessor("activity_type",{
        header:"Activity Type"
    }),
    columnhelper.accessor("total_distance",{
        header:"Total Distance"
    }),
    columnhelper.accessor("ledger_id",{ 
        header:"Ledger ID"
    }),
    columnhelper.accessor("ledger_name",{
        header:"Ledger Name"
    })
]
return (
    <DataTable data={data} columns={columns}/>
)
}