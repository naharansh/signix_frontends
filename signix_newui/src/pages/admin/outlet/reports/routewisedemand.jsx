import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../../../../utils/datatable";

export const Route_wise_Demand = () => {
  const columnhelper = createColumnHelper();
  const data = [
    {
      route_id: "ROUTE001",
      route_name: "Route A",
      demand: 200,
      created_at: "2026-02-21T10:30:00Z",
    },
    {
      route_id: "ROUTE002",
      route_name: "Route B",
      demand: 150,
      created_at: "2026-01-15T09:00:00Z",
    },
    {
      route_id: "ROUTE003",
      route_name: "Route C",
      demand: 100,
      created_at: "2026-01-20T14:45:00Z",
    },
  ];
  const columns = [
    columnhelper.accessor("route_id", {
      header: "Route ID",
    }),
    columnhelper.accessor("route_name", {
      header: "Route Name",
    }),
    columnhelper.accessor("demand", {
      header: "Demand",
    }),
    columnhelper.accessor("created_at", {
      header: "Created At",
    }),
  ];

    return (
        <>
            <DataTable data={data} columns={columns}/>
        </>
    )
}