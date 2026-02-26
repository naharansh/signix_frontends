import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../../../../utils/datatable";

export const Proforma_Invoices=()=>{
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
export const Quatation_TIDs=()=>{
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
export const Material_Request=()=>{
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