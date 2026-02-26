import { useRef } from "react";
import { Button } from "../../../.../../../../../components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../.../../../../../components/ui/card";
import { Input } from "../../../.../../../../../components/ui/input";
import { Label } from "../../../.../../../../../components/ui/label";
import { useState } from "react";

export const Add_Transaction = () => {
  return (
    <>
      <div className="min-h-full py-6">
        <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
          <CardContent>
            <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
              <CardHeader className="p-0 px-2  text-gray-500">
                <CardTitle className="m-0">TRANSATION REQUEST</CardTitle>
              </CardHeader>
              <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                <Label className="col-span-3">cDt</Label>
                <Input
                  type="text"
                  className="col-span-9 border rounded-none px-3 py-2  outline-none"
                />
              </div>
              <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                <Label className="col-span-3">Amount</Label>
                <Input
                  type="text"
                  className="col-span-9 border rounded-none px-3 py-2  outline-none"
                />
              </div>
              <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                <Label className="col-span-3">Mobile </Label>
                <Input
                  type="text"
                  className="col-span-9 border rounded-none px-3 py-2  outline-none"
                />
              </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                <Label className="col-span-3">LedgerName</Label>
                <Input
                  type="text"
                  className="col-span-9 border rounded-none px-3 py-2  outline-none"
                />
              </div>
              <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                <Label className="col-span-3">DERP Status</Label>
                <Input
                  type="text"
                  className="col-span-9 border rounded-none px-3 py-2  outline-none"
                />
              </div>
                  <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                <Label className="col-span-3">DerpStatusID</Label>
                <Input
                  type="text"
                  className="col-span-9 border rounded-none px-3 py-2  outline-none"
                />
              </div>
              <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                <Label className="col-span-3">BankID</Label>
                <Input
                  type="text"
                  className="col-span-9 border rounded-none px-3 py-2  outline-none"
                />
              </div>
              <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                <Label className="col-span-3">BillToID </Label>
                <Input
                  type="text"
                  className="col-span-9 border rounded-none px-3 py-2  outline-none"
                />
              </div>
                  <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                <Label className="col-span-3">Alias Code</Label>
                <Input
                  type="text"
                  className="col-span-9 border rounded-none px-3 py-2  outline-none"
                />
              </div>
              <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                <Label className="col-span-3">Kred Status</Label>
                <Input
                  type="text"
                  className="col-span-9 border rounded-none px-3 py-2  outline-none"
                />
              </div>
              <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                <Label className="col-span-3">Invoice ID (by Kred)</Label>
                <Input
                  type="text"
                  className="col-span-9 border rounded-none px-3 py-2  outline-none"
                />
              </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                <Label className="col-span-3">Transaction ID </Label>
                <Input
                  type="text"
                  className="col-span-9 border rounded-none px-3 py-2  outline-none"
                />
              </div>
            </div>
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
export const Kreddit_Transactions_List=()=>{
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
                <DataTable columns={column} data={data} />
              </>
            );
}