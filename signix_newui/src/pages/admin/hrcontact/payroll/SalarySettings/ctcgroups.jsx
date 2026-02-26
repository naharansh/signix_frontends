import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../../../../../utils/datatable";

export const CTC_group=()=>{
      const columnhelper = createColumnHelper();
      const data=[]
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