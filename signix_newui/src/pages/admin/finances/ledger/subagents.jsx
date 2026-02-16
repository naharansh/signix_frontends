import { useRef, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { Button } from "../../../../components/ui/Button";

export const Subagents = () => {
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
                <CardHeader className="p-0 px-2  text-gray-500">
                  <CardTitle className="m-0">LEDGER DETAILS</CardTitle>
                </CardHeader>
                 <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Create Dt</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Firm Name</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Ledger Group</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Ledger GroupID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Under Ledger Group</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Under Ledger Group ID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Firm Code</Label>
                  <Select>
                    <SelectTrigger className="col-span-9 border rounded-none px-3 py-2  outline-none w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                   <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Generic Name</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Status</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Status Id</Label>
                  <Select>
                    <SelectTrigger className="col-span-9 border rounded-none px-3 py-2  outline-none w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                     <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">WhatsApp</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-start my-3 px-4">
                  {/* Label */}
                  <Label className="col-span-3 pt-2">Logo Pic</Label>

                  {/* Upload Field */}
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
          <Card className="max-w-4xl mx-auto border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md  py-3">
                <CardHeader className="p-0 px-2  text-gray-500">
                  <CardTitle className="m-0">ADDRESS DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Address</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Pincode </Label>
                  <Select>
                    <SelectTrigger className="col-span-9 border rounded-none px-3 py-2  outline-none w-full ">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                   <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Location</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                   <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Location Id</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">City</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">City Id</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">State</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                   <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">State id</Label>
                  <Select>
                    <SelectTrigger className="col-span-9 border rounded-none px-3 py-2  outline-none w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">State Code</Label>
                  <Select>
                    <SelectTrigger className="col-span-9 border rounded-none px-3 py-2  outline-none w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Country</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                   <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Country Id</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Coordinates</Label>
                  <Input
                    type="text"
                    className="col-span-4 border rounded-none px-3 py-2  outline-none"
                  />
                  <Input
                    type="text"
                    className="col-span-4 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                  <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Address Type </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Address Type ID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="max-w-4xl border-none  mx-auto shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md py-3">
                <CardHeader className="p-0 px-2  text-gray-500">
                  <CardTitle className="m-0">BUSINESS DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">GST</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">PAN </Label>
                  <Select>
                    <SelectTrigger className="col-span-9 border rounded-none px-3 py-2  outline-none w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
            
            
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Email </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                  <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Ph (O)</Label>
                  <Select>
                    <SelectTrigger className="col-span-9 border rounded-none px-3 py-2  outline-none w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
            
            
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">DOB</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">DOA</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
             
              </div>
            </CardContent>
          </Card>
          <Card className="max-w-4xl border-none shadow-none mx-auto">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md py-3">
                <CardHeader className="p-0 px-2  text-gray-500 ">
                  <CardTitle className="m-0">BANK DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Account Holder Name</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Account Number </Label>
                  <Select>
                    <SelectTrigger className="col-span-9 border rounded-none px-3 py-2  outline-none w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">IFSC</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Name of Bank</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="max-w-4xl border-none mx-auto shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white  rounded-lg shadow-md py-3">
                <CardHeader className="p-0 px-2  text-gray-500 ">
                  <CardTitle className="m-0">BEAT PLAN</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Secondary Beat </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Beat ID (Secondary)</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
             
               
              </div>
            </CardContent>
             
          </Card>
          <Card className="max-w-4xl border-none mx-auto shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white  rounded-lg shadow-md py-3">
                <CardHeader className="p-0 px-2  text-gray-500 ">
                  <CardTitle className="m-0">PRICE SETTINGS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Std Dis%</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
               
              </div>
            </CardContent>
          </Card>
          <Card className="max-w-4xl border-none shadow-none mx-auto">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md py-3">
                <CardHeader className="p-0 px-2  text-gray-500 ">
                  <CardTitle className="m-0">SIGN IN DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">SignInMobile </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Contact Name </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">SignInEmail </Label>
                  <Select>
                    <SelectTrigger className="col-span-9 border rounded-none px-3 py-2  outline-none w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">SignInPassword</Label>
                  <Input
                    type="email"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">SignInGroup</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">SignInGroupID</Label>
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
