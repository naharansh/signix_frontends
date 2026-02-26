import { createColumnHelper } from "@tanstack/react-table";
import { Button } from "../../../../components/ui/Button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { DataTable } from "../../../../utils/datatable";

export const BOM = () => {
  return (
    <>
      <div className="p-6">
        <Card className="shadow-none rounded-none mx-5 ">
          <CardContent className="p-6">
            <Table className="w-full border-collapse">
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="text-left px-4 py-2">Invoice</TableHead>
                  <TableHead className="text-left px-4 py-2">Amount</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow className="odd:bg-muted/30 even:bg-white hover:bg-muted/40 transition cursor-pointer">
                  <TableCell className="text-muted-foreground px-4 py-2">
                    Item To Produce
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <Input
                      type="text"
                      placeholder="Enter item name"
                      className="h-8 text-sm rounded-sm"
                    />
                  </TableCell>
                </TableRow>

                <TableRow className="odd:bg-muted/30 even:bg-white hover:bg-muted/40 transition cursor-pointer">
                  <TableCell className="text-muted-foreground px-4 py-2">
                    Unit Of Manufacture
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <Input
                      type="text"
                      placeholder="Enter unit"
                      className="h-8 text-sm rounded-sm"
                    />
                  </TableCell>
                </TableRow>

                <TableRow className="odd:bg-muted/30 even:bg-white hover:bg-muted/40 transition cursor-pointer">
                  <TableCell className="text-muted-foreground px-4 py-2">
                    BOM Name
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <Input
                      type="text"
                      placeholder="Enter BOM name"
                      className="h-8 text-sm rounded-sm"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="shadow-none rounded-none mx-5 border border-gray-200 my-4">
          <CardContent>
            <Table className="border border-gray-300 rounded-md">
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="border border-gray-300 font-semibold text-center w-10">
                    S.no
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center w-150">
                    Name Of Item
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Stock Type
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Qty
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Unit
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="border border-gray-300">1</TableCell>
                  <TableCell className="border border-gray-300 ">
                    <Select placeholder="Select Bill to">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="border border-gray-300 text-center">
                    <Input
                      type="text"
                      placeholder="Days"
                      className="w-full  px-1 py-1"
                    />
                  </TableCell>
                  <TableCell className="border border-gray-300 text-center">
                    <Input
                      type="text"
                      placeholder="Days"
                      className="w-full  px-1 py-1"
                    />
                  </TableCell>
                  <TableCell className="border border-gray-300 text-center">
                    <Input
                      type="text"
                      placeholder="Days"
                      className="w-full  px-1 py-1"
                    />
                  </TableCell>
                  <TableCell className="border border-gray-300 text-center"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>

          <CardFooter className="mt-auto">
            <div className="flex justify-end gap-2 w-full">
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
export const BOM_list = () => {
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
