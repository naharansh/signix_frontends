import { createColumnHelper } from "@tanstack/react-table";
import { Button } from "../../../../../components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../../components/ui/card";
import { Input } from "../../../../../components/ui/input";
import { Label } from "../../../../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../../../components/ui/radio-group";
import { Textarea } from "../../../../../components/ui/textarea";
import { DataTable } from "../../../../../utils/datatable";
export const Add_kaizen = () => {
  return (
    <>
      <div className="min-h-full py-6">
        <form>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                <CardHeader className="p-0 px-2  text-gray-500">
                  <CardTitle className="m-0">APPLICATION DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Kaizen Dt</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Before *</Label>
                  <Textarea className="col-span-9 border rounded-none px-3 py-2  outline-none" />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Problem</Label>
                  <Textarea className="col-span-9 border rounded-none px-3 py-2  outline-none" />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Action Taken</Label>
                  <Textarea className="col-span-9 border rounded-none px-3 py-2  outline-none" />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">After </Label>
                  <Textarea className="col-span-9 border rounded-none px-3 py-2  outline-none" />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Benefits </Label>
                  <Textarea className="col-span-9 border rounded-none px-3 py-2  outline-none" />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Safety </Label>
                  <RadioGroup defaultValue="option-one" className="col-span-9 flex my-4">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="No" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="No" id="No" />
                      <Label htmlFor="No">No</Label>
                    </div>
                  </RadioGroup>
                </div>
                   <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Cost </Label>
                  <RadioGroup defaultValue="option-one" className="col-span-9 flex my-4">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="No" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="No" id="No" />
                      <Label htmlFor="No">No</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Aesthetics </Label>
                  <RadioGroup defaultValue="option-one" className="col-span-9 flex my-4">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="No" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="No" id="No" />
                      <Label htmlFor="No">No</Label>
                    </div>
                  </RadioGroup>
                </div>
                   <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Quality  </Label>
                  <RadioGroup defaultValue="option-one" className="col-span-9 flex my-4">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="No" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="No" id="No" />
                      <Label htmlFor="No">No</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Trust </Label>
                  <RadioGroup defaultValue="option-one" className="col-span-9 flex my-4">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="No" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="No" id="No" />
                      <Label htmlFor="No">No</Label>
                    </div>
                  </RadioGroup>
                </div>
                   <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Ease Of Work * </Label>
                  <RadioGroup defaultValue="option-one" className="col-span-9 flex my-4">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="No" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="No" id="No" />
                      <Label htmlFor="No">No</Label>
                    </div>
                  </RadioGroup>
                </div>
                  <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Waste </Label>
                  <RadioGroup defaultValue="option-one" className="col-span-9 flex my-4">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="No" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="No" id="No" />
                      <Label htmlFor="No">No</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Maintenance * </Label>
                  <RadioGroup defaultValue="option-one" className="col-span-9 flex my-4">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="No" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="No" id="No" />
                      <Label htmlFor="No">No</Label>
                    </div>
                  </RadioGroup>
                </div>
                   <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Customer Satisfaction </Label>
                  <RadioGroup defaultValue="option-one" className="col-span-9 flex my-4">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="No" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="No" id="No" />
                      <Label htmlFor="No">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                <CardHeader className="p-0 px-2  text-gray-500">
                  <CardTitle className="m-0">EMPLOYEE DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Employee</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Employee ID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Role</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Role ID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Branch</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Branch ID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
               
              </div>
            </CardContent>
           
          </Card>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                <CardHeader className="p-0 px-2  text-gray-500">
                  <CardTitle className="m-0">STATUS DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Status </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Status ID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Approved By</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Approve By ID</Label>
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
export const Kaizen=()=>{
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