import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../../../../../utils/datatable";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "../../../../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../../components/ui/table";
import { Input } from "../../../../../components/ui/input";
import { Button } from "../../../../../components/ui/Button";

export const Holiday_Group=()=>{
  const data=[]
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
export const Holiday_Groups=()=>{
  const [rows, setRows] = useState([{ id: 1, bom: "", bomCode: "" }]);
      
        const addRow = (e) => {
          e.preventDefault();
          setRows([...rows, { id: Date.now(), bom: "", bomCode: "" }]);
        };
      
        const removeRow = (id) => {
          setRows(rows.filter((row) => row.id !== id));
        };
      
      return (
          <>
            <div className="min-h-screen  p-2">
          <form>
            <Card className="max-w-7xl rounded-none mx-auto border border-none shadow-none">
              <CardContent>
                <div className="w-full mx-auto bg-white rounded-none shadow-md py-3">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="border px-3 py-2 text-left">
                          S.no
                        </TableHead>
                        <TableHead className="border px-3 py-2 text-left">
                          cDt
                        </TableHead>
                        <TableHead className="border px-3 py-2 text-left">
                          Profile
                        </TableHead>
                 
                        <TableHead className="border px-3 py-2 text-left">
                          Actions
                        </TableHead>
                      </TableRow>
                    </TableHeader>
  
                    <TableBody>
                      {rows.map((row, index) => (
                        <TableRow key={row.id}>
                          <TableCell className="border px-3 py-2">
                            {index + 1}
                          </TableCell>
                          <TableCell className="border px-3 py-2">
                            <Input
                              type="text"
                              className="w-full border rounded px-2 py-1 text-sm"
                            />
                          </TableCell>
  
                          <TableCell className="border px-3 py-2">
                            <Input
                              type="text"
                              className="w-full border rounded px-2 py-1 text-sm"
                            />
                          </TableCell>
  
                        
  
                          <TableCell className="border px-3 py-2 text-center">
                            <Button
                              onClick={() => removeRow(row.id)}
                              variant="ghost"
                              className="text-red-600 text-xl font-bold"
                            >
                              ✖
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <div className="flex justify-between gap-2 w-full">
                  <button
                    onClick={addRow}
                    className="flex items-center gap-2 text-green-600 font-semibold"
                  >
                    <span className="text-xl">＋</span> Add Row
                  </button>
                  <div className="">
                    <Button variant="outline" className="me-3">
                      Cancel
                    </Button>
                    <Button>Save</Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </form>
        </div>
          </>
      )
}