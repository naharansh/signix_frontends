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

export const InstaApi = () => {
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
                  <CardTitle className="m-0">GATEWAY DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">cDt</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Gateway Title *#</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Active </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>

                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Logo </Label>
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
                  <CardTitle className="m-0">TEST KEY DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Insta URL (Test) *</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Insta Key (Test) </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Insta Salt (Test)</Label>
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
                  <CardTitle className="m-0">PRODUCTION KEY DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Insta URL (Production) *</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Insta Key (Production) *</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Insta Salt (Production) * </Label>
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
                  <CardTitle className="m-0">RESPONSE URLs </CardTitle>
                </CardHeader>

                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Success Url</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Failure Url</Label>
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
                  <CardTitle className="m-0">Gateway DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3"> Gateway Ledger Name</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Gateway Ledger ID</Label>
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
                  <CardTitle className="m-0">Branch Detail</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">WarehouseID </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Warehouse</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Branch Generic Name</Label>
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
                  <CardTitle className="m-0">Vendor Details</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Vendor ID </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Vendor Name</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Vendor Generic Name</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Split Amount</Label>
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
                  <CardTitle className="m-0">Cashback Detail</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Cashback Percentage </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Cashback LedgerID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Cashback Ledger Name</Label>
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
