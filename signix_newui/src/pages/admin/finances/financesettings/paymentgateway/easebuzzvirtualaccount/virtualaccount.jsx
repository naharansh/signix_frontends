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
import { Textarea } from "../../../.../../../../../components/ui/textarea";
export const Virtual_Account=()=>{
    return(
        <>
         <div className="min-h-full py-6">
        <form>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
               
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Ledger ID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Ledger Name</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Ledger GroupID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>

                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Label  </Label>
                  <div className="col-span-9">
                      <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                  </div>
                </div>
                  <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Description  </Label>
                  <div className="col-span-9">
                    <Textarea />
                  </div>
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
    )
}
export const  Virtual_Account_List=()=>{
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