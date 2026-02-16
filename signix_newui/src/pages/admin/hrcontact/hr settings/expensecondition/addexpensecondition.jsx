import { Button } from "../../../../../components/ui/Button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../../../components/ui/card"
import { Input } from "../../../../../components/ui/input"
import { Label } from "../../../../../components/ui/label"

export const Add_Expense_Condition=()=>{return (
    <>
     <div className="min-h-full py-6">
            <form>
              <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
                <CardContent>
                  <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                    <CardHeader className="p-0 px-2  text-gray-500">
                      <CardTitle className="m-0">EMPLOYEE DETAILS</CardTitle>
                    </CardHeader>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">cDt</Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Employee  *# </Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Employee ID </Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Designation</Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
    
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Designation ID</Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Condition On </Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Condition On ID</Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Ta Calculation Type </Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
    
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">TaCalculationTypeID</Label>
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
                      <CardTitle className="m-0">RETAILER CONDITIONS</CardTitle>
                    </CardHeader>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Retailer Min Visit</Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Retailer Min Activation Order </Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Retailer Min New Outlet</Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Retailer Min Order Count</Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
    
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Retailer Min Order Amt</Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Retailer Min Survey</Label>
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
                      <CardTitle className="m-0">DISTRIBUTOR CONDITIONS</CardTitle>
                    </CardHeader>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Discributor Min Visit </Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Discributor Min Activation Order </Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Discributor Min New Outlet </Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Discributor Min Order Count</Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
    
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Discributor Min Order Amt</Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Discributor Min Survey</Label>
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
                      <CardTitle className="m-0">
                        TA LIMIT DETAILS
                      </CardTitle>
                    </CardHeader>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Max TA Day Limit (kms) * </Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">
                        Vehicle Type *
                      </Label>
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
                      <CardTitle className="m-0">
                        OTHER REIMBURSEMENT LIMITS
                      </CardTitle>
                    </CardHeader>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Food Max Amt  </Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Auto Max Amt *</Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Bus Max Amt * </Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                     <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Train Max Amt *</Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Hotel Max Amt *</Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Other Max Amt  </Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                      <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Mobile Max Amt</Label>
                      <Input
                        type="text"
                        className="col-span-9 border rounded-none px-3 py-2  outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                      <Label className="col-span-3">Travel Allowance Max Amt </Label>
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
)}