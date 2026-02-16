import { useState } from "react";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Textarea } from "../../../../components/ui/textarea";
import { Button } from "../../../../components/ui/Button";

export const Stocks = () => {
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
  return (
    <>
      <Card className="shadow-none rounded-none mx-5 border border-gray-200">
        <CardContent>
          <div className="grid grid-cols-2 mb-5">
            <div className="flex flex-col mx-4 ">
              <Label className="mb-2">Branch</Label>
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
              <Label className="mb-2">Godown</Label>
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
                  Voucher date
                </TableHead>
                <TableHead className="border border-gray-300 font-semibold text-center">
                  Batch No.
                </TableHead>
                <TableHead className="border border-gray-300 font-semibold text-center">
                  Serial No.
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="border border-gray-300">
                  <Input type="date" className="w-full px-2 py-1" />
                </TableCell>
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
                    placeholder="Enter Voucher No."
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
                    "QC Type	",
                    "Qty",
                    "Unit*",
                    "Rate (Inc.Tax)",
                    "Rate (Tax.Extra)",
                    "amount",

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
                      {(item.qty * item.rate * (1 + item.tax / 100)).toFixed(2)}
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
                         "Name Of Item ",
                            "Stock Type",
                            "QC Type",
                            "Qty",
                            "Unit",
                            "Rate (Inc.Tax)",
                            "Rate(Tax.Extra)",
                            "Amount",
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
          <div className="w-full ">
            <Label>Textarea</Label>
            <Textarea className="rounded-none my-2 h-50 resize-vertical" />
          </div>
        </CardContent>
        <CardFooter className="mt-auto">
          <div className="flex justify-end gap-2 w-full">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};
