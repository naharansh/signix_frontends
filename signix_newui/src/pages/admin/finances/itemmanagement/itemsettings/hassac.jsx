import { useRef, useState } from "react";
import { Card, CardContent, CardFooter } from "../../../../../components/ui/card";
import { Input } from "../../../../../components/ui/input";
import { Label } from "../../../../../components/ui/label";
import { Button } from "../../../../../components/ui/Button";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../../../../../utils/datatable";

export const HAS_SAC = () => {
  const logoRef = useRef(null);
  const photoRef = useRef(null);

  const [logoName, setLogoName] = useState("");
  const [photoName, setPhotoName] = useState("");
  return (
    <>
      <div className="min-h-full py-6">
        <form>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">cDt</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">HSN SAC </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">IGST</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">CGST%</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">SGST% </Label>
                  <div className="col-span-9">
                    <Input
                      type="text"
                      className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Cess%</Label>
                  <div className="col-span-9">
                    <Input
                      type="text"
                      className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">eCess Amt</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
        
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Item Type</Label>
                  <div className="col-span-9">
                    <Input
                      type="text"
                      className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Item TypeID *</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Description *</Label>
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
export const HAS_SAC_List=()=>{
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
            <DataTable data={data} columns={column}/>
            </>
          );
}