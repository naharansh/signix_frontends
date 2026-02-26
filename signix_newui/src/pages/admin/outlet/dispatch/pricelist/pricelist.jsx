import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "../../../../../utils/datatable"

export const Price_List=()=>{
    const columnhelper=createColumnHelper()
    const data=
  [
      {
        "SR": 1,
        "cDt": "2025-07-18T16:04:00",
        "RateID": 1,
        "PriceContract": "India",
        "Item": {
          "Name": "Corin",
          "ItemID": 1,
          "SubCategory": "Pesticides",
          "BaseUnit": "Ltr",
          "CaseUnit": "Ltr",
          "ItemInCase": 1,
          "PckUnit": "Ltr",
          "SaleUnitInPck": 1
        },
        "Rates": {
          "WhCaseRate": 1.00,
          "DistributorCaseRate": 1.00,
          "RetailerCaseRate": 1.00,
          "CaseMRP": 1.00
        },
        "Validity": {
          "ValidFrom": "2025-07-18",
          "ValidTo": "2025-10-17"
        }
      }
    ]
const columns=[
    columnhelper.accessor("SR",{
        header:"SR"
    }), 
    columnhelper.accessor("cDt",{
        header:"Created Date"
    }),
    columnhelper.accessor("RateID",{
        header:"Rate ID"
    }),
    columnhelper.accessor("PriceContract",{
        header:"Price Contract"
    }),
    columnhelper.accessor("Item",{  
        header:"Item",
        cell:info=>info.getValue().Name
    }),
    columnhelper.accessor("Rates",{ 
        header:"Rates",
        cell:info=>`WhCaseRate: ${info.getValue().WhCaseRate}, DistributorCaseRate: ${info.getValue().DistributorCaseRate}, RetailerCaseRate: ${info.getValue().RetailerCaseRate}, CaseMRP: ${info.getValue().CaseMRP}`
    }),
    columnhelper.accessor("Validity",{
        header:"Validity",
        cell:info=>`Valid From: ${info.getValue().ValidFrom}, Valid To: ${info.getValue().ValidTo}`
    })   
]
        
    return(
        <>
        <DataTable data={data} columns={columns}/>
        </>
    )
}