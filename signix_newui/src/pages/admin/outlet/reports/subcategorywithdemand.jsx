import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "../../../../utils/datatable"

export const SubcategoryWithDemand_table = () => {
    const columnshelper=createColumnHelper()
    const data=[
        {
            "subcategory_id": "SUB001",
            "subcategory_name": "Mobile Phones",
            "category_id": "CAT001",
            "category_name": "Electronics", 
            "demand": 150,
            "created_at": "2026-02-21T10:30:00Z"
          },    
            {   
            "subcategory_id": "SUB002",
            "subcategory_name": "Laptops",
            "category_id": "CAT001",    
            "category_name": "Electronics",
            "demand": 100,
            "created_at": "2026-01-15T09:00:00Z"
            },
        ]
    const columns=[
        columnshelper.accessor("subcategory_id",{
            header:"Subcategory ID"
        }),
        columnshelper.accessor("subcategory_name",{
            header:"Subcategory Name"
        }),
        columnshelper.accessor("category_id",{
            header:"Category ID"
        }),
        columnshelper.accessor("category_name",{
            header:"Category Name"
        }),
        columnshelper.accessor("demand",{
            header:"Demand"
        }),
        columnshelper.accessor("created_at",{
            header:"Created At"
        }),
    ]
    return (
        <>
            <DataTable data={data} columns={columns}/>
        </>
    )
}