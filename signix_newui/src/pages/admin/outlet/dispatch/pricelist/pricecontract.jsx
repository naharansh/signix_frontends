import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "../../../../../utils/datatable"

export const Price_Contract=()=>{

    const columnhelper=createColumnHelper()
    const data=[
  {
    "price_contract_id": 1,
    "cDt": "2025-07-18T15:47:00",
    "price_contract": "India Distributor Contract",
    "division": "Sales",
    "std_disc": "N",
    "min_disc_percent": 10.00,
    "max_disc_percent": 40.00,
    "credit_limit": 50000.00,
    "disc_edit": "Y",
    "price_edit": "Y"
  },
  {
    "price_contract_id": 2,
    "cDt": "2025-08-10T11:20:00",
    "price_contract": "Retailer Standard Contract",
    "division": "Retail",
    "std_disc": "Y",
    "min_disc_percent": 5.00,
    "max_disc_percent": 20.00,
    "credit_limit": 20000.00,
    "disc_edit": "N",
    "price_edit": "N"
  }
]
const columns=[
    columnhelper.accessor("price_contract_id",{
        header:"Price Contract ID"  
    }),
    columnhelper.accessor("cDt",{
        header:"Created Date"
    }),
    columnhelper.accessor("price_contract",{
        header:"Price Contract Name"
    }),
    columnhelper.accessor("division",{
        header:"Division"
    }), 
    columnhelper.accessor("std_disc",{
        header:"Standard Discount"
    }),
    columnhelper.accessor("min_disc_percent",{
        header:"Min Discount Percent"
    }), 
    columnhelper.accessor("max_disc_percent",{
        header:"Max Discount Percent"
    }),
    columnhelper.accessor("credit_limit",{
        header:"Credit Limit"
    }),
    columnhelper.accessor("disc_edit",{
        header:"Discount Edit"
    }),
    columnhelper.accessor("price_edit",{
        header:"Price Edit" 
    })
]
return(
    <>
    <DataTable data={data} columns={columns}/>
    </>
)
}