import { useRef, useState } from "react";
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
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../../../../../utils/datatable";
export const Add_Vechecel=()=>{
    const logoRef = useRef(null);
      const photoRef = useRef(null);
      const [logoName, setLogoName] = useState("");
      const [photoName, setPhotoName] = useState("");
    return(
        <>
         <div className="min-h-full py-6">
                <form>
                  <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
                    <CardContent>
                      <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                        <CardHeader className="p-0 px-2  text-gray-500">
                          <CardTitle className="m-0">
VEHICLE DETAILS</CardTitle>
                        </CardHeader>
                        <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                          <Label className="col-span-3">cDt</Label>
                          <Input
                            type="text"
                            className="col-span-9 border rounded-none px-3 py-2  outline-none"
                          />
                        </div>
                        <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                          <Label className="col-span-3">Vehicle Number </Label>
                          <Input
                            type="text"
                            className="col-span-9 border rounded-none px-3 py-2  outline-none"
                          />
                        </div>
                        <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                          <Label className="col-span-3">Vehicle Name *</Label>
                          <Input
                            type="text"
                            className="col-span-9 border rounded-none px-3 py-2  outline-none"
                          />
                        </div>
                        <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                          <Label className="col-span-3">Vehicle Type *</Label>
                          <Input
                            type="text"
                            className="col-span-9 border rounded-none px-3 py-2  outline-none"
                          />
                        </div>
                        <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                          <Label className="col-span-3">Vehicle Type ID</Label>
                          <Input
                            type="text"
                            className="col-span-9 border rounded-none px-3 py-2  outline-none"
                          />
                        </div>
                        <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                          <Label className="col-span-3">Vehicle Rate (Rs)</Label>
                          <Input
                            type="text"
                            className="col-span-9 border rounded-none px-3 py-2  outline-none"
                          />
                        </div>
                              <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                          <Label className="col-span-3">Vehicle Front Pic * </Label>
                          <div className="col-span-9">
                            <input
                              type="file"
                              accept="image/*"
                              ref={logoRef}
                              hidden
                              onChange={(e) =>
                                setLogoName(e.target.files?.[0]?.name || "")
                              }
                            />
        
                            <div
                              onClick={() => logoRef.current.click()}
                              className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer 
                                         hover:border-blue-500 transition"
                            >
                              <p className="font-medium text-gray-700">
                                {logoName || "Browse Images"}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                or Drag & Drop
                              </p>
                            </div>
                          </div>
                        </div>
                         <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                          <Label className="col-span-3">Vehicle Back Pic ** </Label>
                          <div className="col-span-9">
                            <input
                              type="file"
                              accept="image/*"
                              ref={logoRef}
                              hidden
                              onChange={(e) =>
                                setLogoName(e.target.files?.[0]?.name || "")
                              }
                            />
        
                            <div
                              onClick={() => logoRef.current.click()}
                              className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer 
                                         hover:border-blue-500 transition"
                            >
                              <p className="font-medium text-gray-700">
                                {logoName || "Browse Images"}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                or Drag & Drop
                              </p>
                            </div>
                          </div>
                        </div>
                         <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                          <Label className="col-span-3">Vehicle RC Pic * </Label>
                          <div className="col-span-9">
                            <input
                              type="file"
                              accept="image/*"
                              ref={logoRef}
                              hidden
                              onChange={(e) =>
                                setLogoName(e.target.files?.[0]?.name || "")
                              }
                            />
        
                            <div
                              onClick={() => logoRef.current.click()}
                              className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer 
                                         hover:border-blue-500 transition"
                            >
                              <p className="font-medium text-gray-700">
                                {logoName || "Browse Images"}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                or Drag & Drop
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  
                  </Card>
                  <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
                    <CardContent>
                      <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                        <CardHeader className="p-0 px-2  text-gray-500">
                          <CardTitle className="m-0">REGISTERED BY</CardTitle>
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
                          <Label className="col-span-3">Emp Role</Label>
                          <Input
                            type="text"
                            className="col-span-9 border rounded-none px-3 py-2  outline-none"
                          />
                        </div>
                         <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                          <Label className="col-span-3">Emp RoleID</Label>
                          <Input
                            type="text"
                            className="col-span-9 border rounded-none px-3 py-2  outline-none"
                          />
                        </div>
                      </div>
                    </CardContent>
                    {/* <CardFooter className="mt-auto">
                      <div className="flex justify-end gap-2 w-full">
                        <Button variant="outline">Cancel</Button>
                        <Button>Save</Button>
                      </div>
                    </CardFooter> */}
                  </Card>
                  <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
                    <CardContent>
                      <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                         <CardHeader className="p-0 px-2  text-gray-500">
                          <CardTitle className="m-0">STATUS DETAIL</CardTitle>
                        </CardHeader>
                        <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                          <Label className="col-span-3">Vehicle Status * *</Label>
                          <Input
                            type="text"
                            className="col-span-9 border rounded-none px-3 py-2  outline-none"
                          />
                        </div>
                        <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                          <Label className="col-span-3">Vehicle Status ID</Label>
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
    )
}
export const  Vechecel_list=()=>{
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