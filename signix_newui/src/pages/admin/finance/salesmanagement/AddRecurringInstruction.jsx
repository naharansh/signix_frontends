import { useState } from "react"
import { Button } from "../../../../components/ui/Button"
import { Card, CardContent, CardFooter } from "../../../../components/ui/card"
import { Input } from "../../../../components/ui/input"
import { Label } from "../../../../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../../../../components/ui/table"
import { Textarea } from "../../../../components/ui/textarea"

export const Add_Recurring_Instruction=()=>{
       const [items, setItems] = useState([
    { id: 1, name: "", qty: 1, rate: 0, tax: 18 },
  ]);
  const addItem = () => {
    setItems([
      ...items,
      { id: Date.now(), name: "", qty: 1, rate: 0, tax: 18 },
    ]);
  };

  const updateItem = (id, field, value) => {
    setItems(items.map((i) => (i.id === id ? { ...i, [field]: value } : i)));
  };

  const subtotal = items.reduce((s, i) => s + i.qty * i.rate, 0);
  const taxAmount = items.reduce(
    (s, i) => s + (i.qty * i.rate * i.tax) / 100,
    0,
  );
  const total = subtotal + taxAmount;
    return(
        <>
              <div className="min-h-screen  py-3">
        <Card className="shadow-none rounded-none mx-5 border border-gray-200">
          <CardContent>
            <div className="grid grid-cols-4 mb-5">
              <div className="flex flex-col mx-4 ">
                <Label className="mb-2">Bill To</Label>
                <Select placeholder="Select Bill to">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col mx-4 ">
                <Label className="mb-2">Ship To</Label>
                <Select placeholder="Select Bill to">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col mx-4 ">
                <Label className="mb-2">Bill From</Label>
                <Select placeholder="Select Bill to">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col mx-4 ">
                <Label className="mb-2">Ship From</Label>
                <Select placeholder="Select Bill to">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Table className="border border-gray-300 rounded-md">
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Voucher Number
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Voucher Date
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Due Days
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    PO No.
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Tax Inclusion
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-gray-100">
                  <TableCell className="border border-gray-300">
                    <Input
                      type="text"
                      placeholder="Enter Voucher No."
                      className="w-full  px-1 py-1"
                    />
                  </TableCell>
                  <TableCell className="border border-gray-300">
                    <Input type="date" className="w-full px-2 py-1" />
                  </TableCell>
                  <TableCell className="border border-gray-300 text-center">
                    <Input
                      type="text"
                      placeholder="Days"
                      className="w-full  px-1 py-1"
                    />
                  </TableCell>
                  <TableCell className="border border-gray-300 text-center">
                    <Input
                      type="text"
                      placeholder="PO Number"
                      className="w-full  px-1 py-1"
                    />
                  </TableCell>
                  <TableCell className="border border-gray-300 text-center">
                    <Input
                      type="text"
                      placeholder="Yes/No"
                      className="w-full px-1 py-1"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Table className="border border-gray-300 rounded-md my-3">
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Batch No.
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Retail No.
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Serial No.
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-gray-100">
                  <TableCell className="border border-gray-300">
                    <Input
                      type="text"
                      placeholder="Enter Voucher No."
                      className="w-full  px-1 py-1"
                    />
                  </TableCell>
                  <TableCell className="border border-gray-300">
                    <Input
                      type="text"
                      placeholder="Days"
                      className="w-full  px-1 py-1"
                    />
                  </TableCell>
                  <TableCell className="border border-gray-300 text-center">
                    <Input
                      type="text"
                      placeholder="Days"
                      className="w-full  px-1 py-1"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="shadow-md rounded-none mx-5 border border-gray-200 my-4">
          <CardContent>
            <div className="w-full overflow-x-auto">
              <Table className="border border-gray-300 rounded-md min-w-[1600px]">
                <TableHeader className="sticky top-0 z-10 bg-gray-50">
                  <TableRow>
                    {[
                      "S.no",
                      "Item Name",
                      "Stock*",
                      "MRP",
                      "Qty",
                      "Unit*",
                      "Rate (Inc.Tax)",
                      "Rate (Tax.Extra)",
                      "Tax (%)",
                      "Dis. (%)",
                      "Taxable Value",
                      "Short Narration",
                      "Action",
                    ].map((head) => (
                      <TableHead
                        key={head}
                        className="border border-gray-300 font-semibold text-center px-3 py-2"
                      >
                        {head}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((item, index) => (
                    <TableRow key={item.id} className="hover:bg-gray-100">
                      <TableCell className="border border-gray-300 text-center px-3 py-2">
                        {index + 1}
                      </TableCell>
                      <TableCell className="border border-gray-300 px-3 py-2 w-300 ">
                        <Select
                          placeholder="Select Bill to"
                          onChange={(e) =>
                            updateItem(item.id, "name", e.target.value)
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-300 px-3 py-2">
                        <input
                          type="number"
                          className="w-40 border border-gray-300  px-2 py-1 "
                          value={item.qty}
                          onChange={(e) =>
                            updateItem(item.id, "qty", +e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell className="border border-gray-300 px-3 py-2">
                        <input
                          type="number"
                          className="w-40 border border-gray-300 rounded-none px-2 py-1 "
                          value={item.rate}
                          onChange={(e) =>
                            updateItem(item.id, "rate", +e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell className="border border-gray-300 px-3 py-2">
                        <input
                          type="number"
                          className="w-40 border border-gray-300 rounded-none px-2 py-1 "
                          value={item.tax}
                          onChange={(e) =>
                            updateItem(item.id, "tax", +e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell className="border border-gray-300 text-right px-3 py-2">
                        ₹{" "}
                        {(item.qty * item.rate * (1 + item.tax / 100)).toFixed(
                          2,
                        )}
                      </TableCell>
                      <TableCell className="border border-gray-300 text-center px-3 py-2">
                        {index + 1}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={10}>Total</TableCell>
                    <TableCell>$2,500.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-md rounded-none mx-5 border border-gray-200 my-4">
          <CardContent>
            <div className="w-full overflow-x-auto">
              <Table className="border border-gray-300 rounded-md min-w-[1600px]">
                <TableHeader className="sticky top-0 z-10 bg-gray-50">
                  <TableRow>
                    {[
                      "S.no",
                      "Add Indirect Incomes",
                      "Charge (%)",
                      "On",
                      "Price(INR)",
                      "Tax (%)",
                      "Dis. (%)",
                      "Amt.(INR)",
                      "Tax (%)",
                      "Dis. (%)",
                      "Short Narration",

                      "Action",
                    ].map((head) => (
                      <TableHead
                        key={head}
                        className="border border-gray-300 font-semibold text-center px-3 py-2"
                      >
                        {head}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((item, index) => (
                    <TableRow key={item.id} className="hover:bg-gray-100">
                      <TableCell className="border border-gray-300 text-center px-3 py-2">
                        {index + 1}
                      </TableCell>
                      <TableCell className="border border-gray-300 px-3 py-2 w-40 ">
                        <Select
                          placeholder="Select Bill to"
                          onChange={(e) =>
                            updateItem(item.id, "name", e.target.value)
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-300 px-3 py-2">
                        <input
                          type="number"
                          className="w-20 border border-gray-300  px-2 py-1 "
                          value={item.qty}
                          onChange={(e) =>
                            updateItem(item.id, "qty", +e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell className="border border-gray-300 px-3 py-2">
                        <input
                          type="number"
                          className="w-40 border border-gray-300 rounded-none px-2 py-1 "
                          value={item.rate}
                          onChange={(e) =>
                            updateItem(item.id, "rate", +e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell className="border border-gray-300 px-3 py-2">
                        <input
                          type="number"
                          className="w-40 border border-gray-300 rounded-none px-2 py-1 "
                          value={item.tax}
                          onChange={(e) =>
                            updateItem(item.id, "tax", +e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell className="border border-gray-300 text-right px-3 py-2">
                        ₹{" "}
                        {(item.qty * item.rate * (1 + item.tax / 100)).toFixed(
                          2,
                        )}
                      </TableCell>
                      <TableCell className="border border-gray-300 text-center px-3 py-2">
                        {index + 1}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={8}>Total</TableCell>
                    <TableCell>$2,500.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-md rounded-none mx-5 border border-gray-200 my-4">
          <CardContent>
            <div className="w-full overflow-x-auto">
              <Table className="border border-gray-300 rounded-md min-w-[1600px]">
                <TableHeader className="sticky top-0 z-10 bg-gray-50">
                  <TableRow>
                    {[
                      "S.no",
                      "Add Indirect Expenses",
                      "Charge (%)",
                      "On",
                      "Price(INR)",
                      "Tax (%)",
                      "Dis. (%)",
                      "Amt.(INR)",
                      "Tax (%)",
                      "Dis. (%)",
                      "Short Narration",

                      "Action",
                    ].map((head) => (
                      <TableHead
                        key={head}
                        className="border border-gray-300 font-semibold text-center px-3 py-2"
                      >
                        {head}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((item, index) => (
                    <TableRow key={item.id} className="hover:bg-gray-100">
                      <TableCell className="border border-gray-300 text-center px-3 py-2">
                        {index + 1}
                      </TableCell>
                      <TableCell className="border border-gray-300 px-3 py-2 w-40 ">
                        <Select
                          placeholder="Select Bill to"
                          onChange={(e) =>
                            updateItem(item.id, "name", e.target.value)
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="border border-gray-300 px-3 py-2">
                        <input
                          type="number"
                          className="w-20 border border-gray-300  px-2 py-1 "
                          value={item.qty}
                          onChange={(e) =>
                            updateItem(item.id, "qty", +e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell className="border border-gray-300 px-3 py-2">
                        <input
                          type="number"
                          className="w-40 border border-gray-300 rounded-none px-2 py-1 "
                          value={item.rate}
                          onChange={(e) =>
                            updateItem(item.id, "rate", +e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell className="border border-gray-300 px-3 py-2">
                        <input
                          type="number"
                          className="w-40 border border-gray-300 rounded-none px-2 py-1 "
                          value={item.tax}
                          onChange={(e) =>
                            updateItem(item.id, "tax", +e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell className="border border-gray-300 text-right px-3 py-2">
                        ₹{" "}
                        {(item.qty * item.rate * (1 + item.tax / 100)).toFixed(
                          2,
                        )}
                      </TableCell>
                      <TableCell className="border border-gray-300 text-center px-3 py-2">
                        {index + 1}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={8}>Total</TableCell>
                    <TableCell>$2,500.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end mt-4">
          <div className="bg-white p-4 rounded shadow w-80">
            <div className="flex justify-between">
              <span>Sub Total</span>
              <span>₹ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Bill Amt.</span>
              <span>₹ {taxAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>₹ {taxAmount.toFixed(2)}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹ {total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      <Card className="shadow-lg rounded-md mx-5 border border-gray-200 my-6 p-6 bg-white">
  <CardContent>
    {/* Terms Section */}
    <div className="mb-4">
      <Label className="block text-sm font-medium text-gray-700">Additional Notes</Label>
      <Textarea 
        className="rounded-md my-2 h-32 resize-vertical border border-gray-300 focus:ring-2 focus:ring-blue-500 w-full" 
        placeholder="Enter terms and conditions here..."
      />
      <Button variant="link" className="text-blue-600 mt-2">View Terms & Conditions</Button>
    </div>
   <div className="grid grid-cols-3 gap-6 my-6">
      {/* Payment Terms */}
      <div>
        <Label className="block font-semibold mb-1">Profile Name</Label>
      <Input type="text"/>
      </div>

      {/* Dispatch Mode */}
      <div>
        <Label className="block font-semibold mb-1">Repeat Every</Label>
        <Select>
          <SelectTrigger className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Select Dispatch Mode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="courier">Courier</SelectItem>
            <SelectItem value="pickup">Pickup</SelectItem>
            <SelectItem value="transport">Transport</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Delivery Mode */}
      <div>
        <Label className="block font-semibold mb-1">Start On</Label>
        <Input type="date"/>
      </div>

      {/* Sale Type */}
           <div>
        <Label className="block font-semibold mb-1">Ends On</Label>
        <Input type="date"/>
      </div>
<div>
        <Label className="block font-semibold mb-1">Payment Terms</Label>
        <Select>
          <SelectTrigger className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Select Payment Term" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="advance">Advance</SelectItem>
            <SelectItem value="net30">Net 30</SelectItem>
            <SelectItem value="net60">Net 60</SelectItem>
            <SelectItem value="onDelivery">On Delivery</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Dispatch Mode */}
      <div>
        <Label className="block font-semibold mb-1">Dispatch Mode</Label>
        <Select>
          <SelectTrigger className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Select Dispatch Mode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="courier">Courier</SelectItem>
            <SelectItem value="pickup">Pickup</SelectItem>
            <SelectItem value="transport">Transport</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
    </div>

    {/* Grid Section */}
    <div className="grid grid-cols-3 gap-6 my-6">
      {/* Payment Terms */}
      

      {/* Delivery Mode */}
      <div>
        <Label className="block font-semibold mb-1">Delivery Mode</Label>
        <Select>
          <SelectTrigger className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Select Delivery Mode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="standard">Standard</SelectItem>
            <SelectItem value="express">Express</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Sale Type */}
      <div>
        <Label className="block font-semibold mb-1">Sale Type</Label>
        <Select>
          <SelectTrigger className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Select Sale Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="retail">Retail</SelectItem>
            <SelectItem value="wholesale">Wholesale</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Sales Person */}
      <div>
        <Label className="block font-semibold mb-1">Sales Person</Label>
        <Select>
          <SelectTrigger className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Select Sales Person" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="john">John</SelectItem>
            <SelectItem value="ashima">Ashima</SelectItem>
            <SelectItem value="rahul">Rahul</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Currency */}
      <div>
        <Label className="block font-semibold mb-1">Currency</Label>
        <Select>
          <SelectTrigger className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Select Currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="inr">INR</SelectItem>
            <SelectItem value="usd">USD</SelectItem>
            <SelectItem value="eur">EUR</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-4 my-6">
      <Label className="font-semibold">TDS (%)</Label>
      <Input 
        type="number" 
        className="w-24 border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-500" 
        placeholder="0.00" 
      />
    </div>
    </div>

    {/* TDS Section */}
    

    {/* Payable Amount */}
    <div className="text-right font-semibold text-lg text-gray-700">
      Payable Amount: <span className="text-blue-600">₹0.00</span>
    </div>
  </CardContent>

  {/* Footer */}
  <CardFooter className="mt-6">
    <div className="flex justify-end gap-3 w-full">
      <Button variant="outline" className="px-4 py-2 border-gray-400">Cancel</Button>
      <Button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700">Save</Button>
    </div>
  </CardFooter>
</Card>
      </div>
        </>
    )
}