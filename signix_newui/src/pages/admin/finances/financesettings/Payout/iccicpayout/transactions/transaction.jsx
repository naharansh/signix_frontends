import { Button } from "../../../../../../../components/ui/Button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../../../../../components/ui/card"
import { Input } from "../../../../../../../components/ui/input"
import { Label } from "../../../../../../../components/ui/label"

export const Transactions=()=>{
    return (
        <>
            <div className="min-h-full py-6">
        <form>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
              
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Txn Type </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Remarks</Label>
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
                  <CardTitle className="m-0">ORDER CREATED</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">cDt </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Amount </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                 <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">UniqueTransactionID </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Branch Name </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                 <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">BranchID </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Paid From (Cr)</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">PaidFromCrID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Customer Name </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                 <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Customer ID </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">BankAccountNo</Label>
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
                  <CardTitle className="m-0">IFSCCode</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">BankAccountHolderName </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">BankName</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                 <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">PP VchNo</Label>
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
                  <CardTitle className="m-0">TRANSACTION DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">ReqID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">STATUS</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                 <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">URN</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                  <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">UTRNUMBER</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">RESPONSE</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                 <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Pymt VchNo</Label>
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
