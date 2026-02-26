import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "../../../../utils/datatable"

export const Item_wise_Demand=()=>{
    const columnhelper=createColumnHelper()
        const data=[
      {
        "employee_id": "EMP001",
        "name": "Ansh Nahar",
        "email": "ansh@gmail.com",
        "phone": "9876543210",
        "address": "Shastri Nagar",
        "pincode": "342001",
        "city": "Jodhpur",
        "city_id": "CITY001",
        "state": "Rajasthan",
        "state_id": "ST001",
        "state_code": "RJ",
        "country": "India",
        "country_id": "IN",
        "latitude": "26.2389",
        "longitude": "73.0243",
        "doj": "21-Feb-2026",
        "role": "Software Developer",
        "role_id": "ROLE001",
        "status": "Active",
        "created_at": "2026-02-21T10:30:00Z"
      },
      {
        "employee_id": "EMP002",
        "name": "Rahul Sharma",
        "email": "rahul@gmail.com",
        "phone": "9876543211",
        "address": "Vaishali Nagar",
        "pincode": "302021",
        "city": "Jaipur",
        "city_id": "CITY002",
        "state": "Rajasthan",
        "state_id": "ST001",
        "state_code": "RJ",
        "country": "India",
        "country_id": "IN",
        "latitude": "26.9124",
        "longitude": "75.7873",
        "doj": "15-Jan-2026",
        "role": "Manager",
        "role_id": "ROLE002",
        "status": "Active",
        "created_at": "2026-01-15T09:00:00Z"
      },
      {
        "employee_id": "EMP003",
        "name": "Priya Singh",
        "email": "priya@gmail.com",
        "phone": "9876543212",
        "address": "Hiran Magri",
        "pincode": "313001",
        "city": "Udaipur",
        "city_id": "CITY003",
        "state": "Rajasthan",
        "state_id": "ST001",
        "state_code": "RJ",
        "country": "India",
        "country_id": "IN",
        "latitude": "24.5854",
        "longitude": "73.7125",
        "doj": "01-Dec-2025",
        "role": "HR Executive",
        "role_id": "ROLE003",
        "status": "Inactive",
        "created_at": "2025-12-01T11:15:00Z"
      },
      {
        "employee_id": "EMP004",
        "name": "Amit Verma",
        "email": "amit@gmail.com",
        "phone": "9876543213",
        "address": "Malviya Nagar",
        "pincode": "302017",
        "city": "Jaipur",
        "city_id": "CITY002",
        "state": "Rajasthan",
        "state_id": "ST001",
        "state_code": "RJ",
        "country": "India",
        "country_id": "IN",
        "latitude": "26.8500",
        "longitude": "75.8000",
        "doj": "10-Feb-2026",
        "role": "Accountant",
        "role_id": "ROLE004",
        "status": "Active",
        "created_at": "2026-02-10T14:45:00Z"
      },
      {
        "employee_id": "EMP005",
        "name": "Neha Jain",
        "email": "neha@gmail.com",
        "phone": "9876543214",
        "address": "C Scheme",
        "pincode": "302001",
        "city": "Jaipur",
        "city_id": "CITY002",
        "state": "Rajasthan",
        "state_id": "ST001",
        "state_code": "RJ",
        "country": "India",
        "country_id": "IN",
        "latitude": "26.9120",
        "longitude": "75.8000",
        "doj": "05-Jan-2026",
        "role": "UI Designer",
        "role_id": "ROLE005",
        "status": "Active",
        "created_at": "2026-01-05T08:20:00Z"
      }
    ]
    const columns=[
        columnhelper.accessor("employee_id",{
            header:"Employee ID"
        }),
        columnhelper.accessor("name",{
            header:"Name"
        }),
        columnhelper.accessor("email",{
            header:"Email"
        }),
        columnhelper.accessor("phone",{
            header:"Phone"
        }),
    ]
    return(
        <>
        <DataTable data={data} columns={columns}/>
        </>
    )
}