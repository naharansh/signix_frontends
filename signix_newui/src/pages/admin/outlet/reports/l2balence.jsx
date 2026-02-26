import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "../../../../utils/datatable"

export const L2_Balence=()=>{
    const columnhelper=createColumnHelper()
    const data= [
    {
      "id": 1,
      "seller_id": "SEL-001",
      "seller_name": "Signix Chemicals",
      "party_ledger_id": "LED-1001",
      "party_name": "Shree Balaji Distributors",
      "opening_balance": 50000,
      "gave_amount": 15000,
      "got_amount": 10000,
      "closing_balance": 55000,
      "balance_type": "Dr",
      "last_transaction_date": "2026-02-20"
    },
    {
      "id": 2,
      "seller_id": "SEL-001",
      "seller_name": "Signix Chemicals",
      "party_ledger_id": "LED-1002",
      "party_name": "Marwar Traders",
      "opening_balance": 25000,
      "gave_amount": 5000,
      "got_amount": 12000,
      "closing_balance": 18000,
      "balance_type": "Cr",
      "last_transaction_date": "2026-02-19"
    },
    {
      "id": 3,
      "seller_id": "SEL-002",
      "seller_name": "Signix Chemicals",
      "party_ledger_id": "LED-1003",
      "party_name": "Rajasthan Supply Chain",
      "opening_balance": 75000,
      "gave_amount": 20000,
      "got_amount": 15000,
      "closing_balance": 80000,
      "balance_type": "Dr",
      "last_transaction_date": "2026-02-21"
    },
    {
      "id": 4,
      "seller_id": "SEL-003",
      "seller_name": "Signix Chemicals",
      "party_ledger_id": "LED-1004",
      "party_name": "Jodhpur Wholesale Market",
      "opening_balance": 10000,
      "gave_amount": 2000,
      "got_amount": 8000,
      "closing_balance": 4000,
      "balance_type": "Cr",
      "last_transaction_date": "2026-02-18"
    }
  ]
    const columns=[
        columnhelper.accessor("id",{
            header:"ID"
        }), 
        columnhelper.accessor("seller_name",{
            header:"Seller Name"
        }),
        columnhelper.accessor("party_name",{
            header:"Party Name"
        }),
        columnhelper.accessor("opening_balance",{
            header:"Opening Balance"
        }),
        columnhelper.accessor("gave_amount",{
            header:"Gave Amount"
        }),
        columnhelper.accessor("got_amount",{
            header:"Got Amount"
        }),
        columnhelper.accessor("closing_balance",{
            header:"Closing Balance"
        }),
        columnhelper.accessor("balance_type",{
            header:"Balance Type"
        }),
    ]
    return(
        <>
        <DataTable data={data} columns={columns}/>
        </>
    )

}