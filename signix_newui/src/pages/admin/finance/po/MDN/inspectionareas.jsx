import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../../../../../utils/datatable";

export const Inspections_area = () => {
  const data = [];
  const columnhelper = createColumnHelper();
  const column = [
    columnhelper.accessor("sno", {
      header: "S.no",
      cell: (info) => info.getValue(),
    }),
    columnhelper.accessor("contactgroup", {
      header: "Contact Group",
      cell: (info) => info.getValue(),
    }),
  ];
  return (
    <>
      <DataTable data={data} columns={column} />
    </>
  );
};
export const Packing_Table=()=>{
    const data = [];
  const columnhelper = createColumnHelper();
  const column = [
    columnhelper.accessor("sno", {
      header: "S.no",
      cell: (info) => info.getValue(),
    }),
    columnhelper.accessor("contactgroup", {
      header: "Contact Group",
      cell: (info) => info.getValue(),
    }),
  ];
  return (
    <>
      <DataTable data={data} columns={column} />
    </>
  );
}
export const Pickup_area=()=>{
        const data = [];
  const columnhelper = createColumnHelper();
  const column = [
    columnhelper.accessor("sno", {
      header: "S.no",
      cell: (info) => info.getValue(),
    }),
    columnhelper.accessor("contactgroup", {
      header: "Contact Group",
      cell: (info) => info.getValue(),
    }),
  ];
  return (
    <>
      <DataTable data={data} columns={column} />
    </>
  );
}
export const Allocation_Area=()=>{
        const data = [];
  const columnhelper = createColumnHelper();
  const column = [
    columnhelper.accessor("sno", {
      header: "S.no",
      cell: (info) => info.getValue(),
    }),
    columnhelper.accessor("contactgroup", {
      header: "Contact Group",
      cell: (info) => info.getValue(),
    }),
  ];
  return (
    <>
      <DataTable data={data} columns={column} />
    </>
  );
}