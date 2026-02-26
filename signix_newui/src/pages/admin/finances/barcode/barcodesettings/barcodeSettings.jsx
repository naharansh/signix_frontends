import { createColumnHelper } from "@tanstack/react-table";
import { Button } from "../../../../../components/ui/Button";
import { Card, CardContent, CardFooter } from "../../../../../components/ui/card";
import { Input } from "../../../../../components/ui/input";
import { Label } from "../../../../../components/ui/label";
import { DataTable } from "../../../../../utils/datatable";

export const Barcode_Settings = () => {
  return (
    <>
      <div className="min-h-full py-6">
        <form>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Barcode ID Length</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Batch Length</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Serial Length</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">
                    Print Alias Batch On Invoice{" "}
                  </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">
                    Alias Batch On InvoiceID{" "}
                  </Label>
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
        </form>
      </div>
    </>
  );
};
export const Barcode_Settings_list = () => {
    const data=[]
    const columnhelper=createColumnHelper()
    const columns=[
        columnhelper.accessor("sno",{
            header:"S.no",
        }),
        columnhelper.accessor("barcodeid",{
            header:"Barcode ID",
        }),
        columnhelper.accessor("batchlength",{
            header:"Batch Length",
        }),
        columnhelper.accessor("seriallength",{
            header:"Serial Length",
        }),
        columnhelper.accessor("printaliasbatchoninvoice",{
            header:"Print Alias Batch On Invoice",
        }),
        columnhelper.accessor("aliasbatchoninvoiceid",{
            header:"Alias Batch On Invoice ID",
        }),
    ]
    return (
      <DataTable columns={columns} data={data} />
    )
  }