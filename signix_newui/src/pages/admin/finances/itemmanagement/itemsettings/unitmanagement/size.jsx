import { useState } from "react";
import { Button } from "../../../.../../../../../components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
} from "../../../.../../../../../components/ui/card";
import { Input } from "../../../.../../../../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../.../../../../../components/ui/table";

export const Size = () => {
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
      <div className="min-h-screen  p-6">
        <form>
          <Card className="w-full mx-auto border-none shadow-none">
            <CardContent className="p-0 overflow-x-auto">
              <div className="min-w-[1200px] bg-white shadow-md py-3">
                <Table className="w-full border-collapse">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="border px-3 py-2">S.no</TableHead>
                      <TableHead className="border px-3 py-2">cDt</TableHead>
                      <TableHead className="border px-3 py-2">Size</TableHead>
                      <TableHead className="border px-3 py-2">Uom</TableHead>
                      <TableHead className="border px-3 py-2">
                        Conversion (3 Decimal)
                      </TableHead>
                      <TableHead className="border px-3 py-2">UnitID</TableHead>
                      <TableHead className="border px-3 py-2">
                        UnitGroup
                      </TableHead>
                      <TableHead className="border px-3 py-2">
                        UnitGroupID
                      </TableHead>
                      <TableHead className="border px-3 py-2">Action</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={row.id}>
                        <TableCell className="border px-3 py-2">
                          {index + 1}
                        </TableCell>

                        <TableCell className="border px-3 py-2" />

                        <TableCell className="border px-3 py-2">
                          <Input className="w-full" />
                        </TableCell>
                        
                        <TableCell className="border px-3 py-2">
                          <Input className="w-full" />
                        </TableCell>


                        <TableCell className="border px-3 py-2">
                          <Input className="w-full" />
                        </TableCell>
                         <TableCell className="border px-3 py-2">
                          <Input className="w-full" />
                        </TableCell>
                         <TableCell className="border px-3 py-2">
                          <Input className="w-full" />
                        </TableCell>
                         <TableCell className="border px-3 py-2">
                          <Input className="w-full" />
                        </TableCell>

                        <TableCell className="border px-3 py-2 text-center">
                          <Button
                            onClick={() => removeRow(row.id)}
                            variant="ghost"
                            className="text-red-600 text-xl"
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

            <CardFooter>
              <div className="flex justify-between w-full">
                <button
                  onClick={addRow}
                  className="flex items-center gap-2 text-green-600 font-semibold"
                >
                  <span className="text-xl">＋</span> Add Row
                </button>

                <div>
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
  );
};
