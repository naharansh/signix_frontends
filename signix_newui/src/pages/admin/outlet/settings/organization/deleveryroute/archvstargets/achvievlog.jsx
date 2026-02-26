import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../../../../../../../utils/datatable";

export const  Achviev_Log = () => {
      const columnhelper = createColumnHelper();
          const data = [];
          const columns = [];
          return (
            <>
              <DataTable columns={columns} data={data} />
            </>
          );
}