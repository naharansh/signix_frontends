import { useState } from "react";
import { Button } from "../../../../../../components/ui/Button"
import { Card, CardContent, CardFooter } from "../../../../../../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../../../components/ui/table"
import { Input } from "../../../../../../components/ui/input";

export const City=()=>{
      const [rows, setRows] = useState([{ id: 1, bom: "", bomCode: "" }]);
    
      const addRow = (e) => {
        e.preventDefault();
        setRows([...rows, { id: Date.now(), bom: "", bomCode: "" }]);
      };
    
      const removeRow = (id) => {
        setRows(rows.filter((row) => row.id !== id));
      };
    return(
        <>
            <div className="min-h-screen  p-6">
        <form>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md py-3">
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
                       State
                      </TableHead>
                       <TableHead className="border px-3 py-2 text-left">
                      State Id
                      </TableHead>
                      <TableHead className="border px-3 py-2 text-left">
                      State Code
                      </TableHead>
                      <TableHead className="border px-3 py-2 text-left">
                       Country
                      </TableHead>
                      <TableHead className="border px-3 py-2 text-left">
                       Country ID
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
                        <TableCell className="border px-3 py-2"></TableCell>

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