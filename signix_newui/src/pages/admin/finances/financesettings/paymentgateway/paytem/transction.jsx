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

export const Paytm_Transactions = () => {
  return (
    <>
      <div className="min-h-full py-6">
        <form>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                <CardHeader className="p-0 px-2  text-gray-500">
                  <CardTitle className="m-0">ORDER CREATED</CardTitle>
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
                  <Label className="col-span-3">Currency </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>

                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Cust ID </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Customer Name</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Payment Mobile*</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Payment Email Id</Label>
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
                  <Label className="col-span-3">BillToID*</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">LedgerID*</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Cust Alias Code</Label>
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
                  <CardTitle className="m-0">API DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Paytm Gateway ID*</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">MID </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Website</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Callback Url </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Channel</Label>
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
                  <CardTitle className="m-0">ORDER RESPONSE</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Order Status * </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Txn Token </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Request Type</Label>
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
                  <CardTitle className="m-0">PAYMENT RESPONSE</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Transaction Date</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Paytm Transaction ID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Bank Transaction ID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Payment Status</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Response Code</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Response Message</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Transaction Type</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Payment Mode</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Bank</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Checksum Hash</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Receipt No</Label>
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
