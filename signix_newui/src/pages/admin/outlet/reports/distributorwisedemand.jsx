import { createColumnHelper } from "@tanstack/react-table"
// import { Data } from "../../membershiplist"

export const Distributor_wise_Demand=()=>{
    const columnhelper=createColumnHelper()
    const data=[
  {
    "demand_id": "DMD-2026-0001",
    "distributor_id": "DIST-001",
    "distributor_name": "Shree Balaji Distributors",
    "distributor_code": "SBD001",
    "city": "Jodhpur",
    "state": "Rajasthan",
    "product_id": "PRD-101",
    "product_name": "Premium Wheat Flour 10kg",
    "product_code": "PWF10",
    "category": "Food Grains",
    "unit": "Bag",
    "demand_qty": 250,
    "approved_qty": 200,
    "pending_qty": 50,
    "unit_price": 420,
    "total_amount": 105000,
    "status": "Approved",
    "demand_date": "2026-02-20",
    "expected_delivery_date": "2026-02-25",
    "created_by": "sales_manager_01",
    "created_at": "2026-02-20T10:30:00Z"
  },
  {
    "demand_id": "DMD-2026-0002",
    "distributor_id": "DIST-002",
    "distributor_name": "Rajasthan Supply Chain",
    "distributor_code": "RSC002",
    "city": "Jaipur",
    "state": "Rajasthan",
    "product_id": "PRD-102",
    "product_name": "Refined Sunflower Oil 1L",
    "product_code": "RSO1L",
    "category": "Edible Oil",
    "unit": "Bottle",
    "demand_qty": 500,
    "approved_qty": 500,
    "pending_qty": 0,
    "unit_price": 140,
    "total_amount": 70000,
    "status": "Approved",
    "demand_date": "2026-02-19",
    "expected_delivery_date": "2026-02-23",
    "created_by": "sales_manager_02",
    "created_at": "2026-02-19T08:15:00Z"
  },
  {
    "demand_id": "DMD-2026-0003",
    "distributor_id": "DIST-003",
    "distributor_name": "Marwar Traders",
    "distributor_code": "MT003",
    "city": "Udaipur",
    "state": "Rajasthan",
    "product_id": "PRD-103",
    "product_name": "Basmati Rice 25kg",
    "product_code": "BR25",
    "category": "Rice",
    "unit": "Bag",
    "demand_qty": 150,
    "approved_qty": 0,
    "pending_qty": 150,
    "unit_price": 1800,
    "total_amount": 270000,
    "status": "Pending",
    "demand_date": "2026-02-21",
    "expected_delivery_date": "2026-02-28",
    "created_by": "sales_manager_03",
    "created_at": "2026-02-21T09:45:00Z"
  }
]
const columns=[
    columnhelper.accessor("demand_id",{
        header:"Demand ID"
    }),
    columnhelper.accessor("distributor_id",{
        header:"Distributor ID"
    }),
    columnhelper.accessor("distributor_name",{
        header:"Distributor Name"
    }),
    columnhelper.accessor("distributor_code",{
        header:"Distributor Code"
    }), 
    columnhelper.accessor("city",{
        header:"City"
    }),
    columnhelper.accessor("state",{
        header:"State"
    }),
    columnhelper.accessor("product_id",{
        header:"Product ID"
    }),
    columnhelper.accessor("product_name",{
        header:"Product Name"
    }),
]
return(
    <>
    <DataTable data={data} columns={columns}/>
    </>
)
}
  