import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/Button";
import axios from "axios";
import { PlusCircle, Trash } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
export const Order_details = () => {
  const { id } = useParams();

  const [product, setcustomer] = useState([]);
  const [customer, setproudct] = useState([]);
  const [formData, setFormData] = useState({
    customer_id: "",
    bill_from_id: "",
    ship_to_id: "",
    ship_from_id: "",

    voucher_number: "",
    voucher_date: "",
    reference_number: "",
    tax_inclusion: "",

    note: "",
    status: "active",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/orderitems/single/${id}`)
      .then((res) => {
        console.log(res);
        setFormData(res.data);
      });
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Prepare Items for  API
      const formattedItems = items.map((item) => ({
        item_id: item.item_id,
        item_name: item.item_name,
        UomQty: item.UomQty || 0, //Uomquantity
        Size: item.Size || 0, //size
        mrp: item.mrp || 0,
        Qty: item.Qty || 0, //quantity
        Unit: item.Unit || 0, //unit
        Rate_Inc_Tax: item.Rate_Inc_Tax || 0, //rate_inc_tax
        Rate_Tax_Extra: item.Rate_Tax_Extra || 0, //rate_extra_tax
        Tax: item.Tax || 0, //tax %
        Dis: item.Dis || 0, //discount %
        Taxable_Value: item.Taxable_Value || 0, //taxable value
        Short_Narration: item.Short_Narration, //short narration
      }));

      // Final Payload
      const payload = {
        customer_id: formData.customer_id,
        bill_from_id: formData.bill_from_id,
        ship_to_id: formData.ship_to_id,
        ship_from_id: formData.ship_from_id,

        voucher_number: formData.voucher_number,
        voucher_date: formData.voucher_date,
        reference_number: formData.reference_number,
        tax_inclusion: formData.tax_inclusion,

        orderDate: formData.voucher_date,
        createDate: new Date(),
        updateDate: new Date(),

        note: formData.note,
        status: formData.status,

        items: formattedItems,
      };

      console.log("Sending Payload:", payload);

      const response = await axios.put(
        `http://localhost:8080/api/orderitems/update/${id} `,
        payload,
        {
          withCredentials: true,
        },
      );

      alert("Order Updated Successfully ✅");

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    axios.get("http://localhost:8080/api/customer/all").then((res) => {
      setcustomer(res.data.customer);
    });
  }, []);
  //add rows
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (formData?.items?.length) {
      setItems(
        formData.items.map((product) => ({
          // console.log()
          item_name: product.item_name,
          UomQty: product.UomQty,
          Size: product.Size,
          mrp: product.mrp,
          Qty: product.Qty,
          Unit: product.Unit_price,
          Rate_Inc_Tax: product.Rate_Inc_Tax,
          Rate_Tax_Extra: product.Rate_Tax_Extra,
          Tax: product.Tax,
          Dis: product.Discount,
          Taxable_Value: product.Taxable_Value,
          Short_Narration: product.Short_Narration,
        })),
      );
    }
    console.log(items);
  }, [formData]);

  //api calll
  useEffect(() => {
    axios.get("http://localhost:8080/api/product/all").then((res) => {
      setproudct(res.data.createproducts);
    });
  }, []);

  //show product details
  const handleProductSelect = (rowId, productId) => {
    console.log(rowId, productId);
    const selectedProduct = customer.find((prod) => prod.id === productId);

    console.log(selectedProduct);

    if (!selectedProduct) return;

    setItems((prev) =>
      prev.map((item) =>
        item.id === rowId
          ? {
              ...item,

              // ✅ FIX HERE
              item_id: selectedProduct.id,

              item_name: selectedProduct.item_name,

              mrp: selectedProduct.MRP || 0,
              rate: selectedProduct.rate || 0,
              tax: selectedProduct.tax || 0,

              UomQty: 0,
              Size: 0,
              Qty: 0,
              Unit: 0,
              Rate_Inc_Tax: 0,
              Rate_Tax_Extra: 0,
              Tax: 0,
              Dis: 0,
              Taxable_Value: 0,

              Short_Narration: selectedProduct.description || null,
            }
          : item,
      ),
    );
  };

  // update field
  const updateItem = (id, field, value) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value };

          const qty = Number(updatedItem.Qty) || 0;
          const rate = Number(updatedItem.Rate_Inc_Tax) || 0;
          const dis = Number(updatedItem.Dis) || 0;

          return updatedItem;
        }
        return item;
      }),
    );
  };

  const totalDiscount = items.reduce(
    (sum, item) => sum + Number(item.Discount_Amount || 0),
    0,
  );

  // ✅ Grand Total
  const grandTotal = items.reduce(
    (sum, item) => sum + Number(item.Final_Value || 0),
    0,
  );

  // add row
  const addItem = (afterId) => {
    const newItem = {
      id: crypto.randomUUID(),
      name: "", //name
      UomQty: 0, //Uomquantity
      Size: 0, //size
      mrp: 0,
      Qty: 0, //quantity
      Unit: 0, //unit
      Rate_Inc_Tax: 0, //rate_inc_tax
      Rate_Tax_Extra: 0, //rate_extra_tax
      Tax: 0, //tax %
      Dis: 0, //discount %

      Taxable_Value: 0, //taxable value
      Short_Narration: null, //short narration
    };

    setItems((prev) => {
      const index = prev.findIndex((item) => item.id === afterId);
      const updated = [...prev];
      updated.splice(index + 1, 0, newItem);
      return updated;
    });
  };

  // delete row
  const deleteItem = (id) => {
    if (items.length === 1) return;
    setItems((prev) => prev.filter((item) => item.id !== id));
  };
  //TOTAL QUNATITY
  const totalQuantity = items.reduce(
    (sum, item) => sum + Number(item.Qty || 0),
    0,
  );
  //total taxable value
  const totalTaxableValue = items
    .reduce((sum, item) => {
      const qty = Number(item.Qty) || 0;
      const rate = Number(item.Rate_Inc_Tax) || 0;
      const discountPercent = Number(item.Dis) || 0;

      const taxableValue = qty * rate;
      const discountAmount = taxableValue * (discountPercent / 100);
      const finalValue = taxableValue - discountAmount;

      return sum + (finalValue > 0 ? finalValue : 0);
    }, 0)
    .toFixed(2);
  const calculateTaxableValue = (item) => {
    const Qty = Number(item.Qty) || 0;
    const rateIncTax = Number(item.Rate_Inc_Tax) || 0;
    const discount = Number(item.Dis) || 0;

    const taxableValue = Qty * rateIncTax;
    const discountamount = taxableValue * (discount / 100);
    const finalValue = taxableValue - discountamount;

    return finalValue >= 0 ? finalValue.toFixed(2) : "0.00";
  };
  const totalTaxableValues = items.reduce((total, item) => {
    const Qty = Number(item.Qty) || 0;
    const rateIncTax = Number(item.Rate_Inc_Tax) || 0;
    const discount = Number(item.Dis) || 0;

    const taxableValue = Qty * rateIncTax;
    const discountAmount = taxableValue * (discount / 100);
    const finalValue = taxableValue - discountAmount;

    return total + finalValue;
  }, 0);
  const discountamount = items.reduce((total, item) => {
    const Qty = Number(item.Qty) || 0;
    const rateIncTax = Number(item.Rate_Inc_Tax) || 0;
    const discount = Number(item.Dis) || 0;

    const taxableValue = Qty * rateIncTax;
    const discountAmount = taxableValue * (discount / 100);

    return total + discountAmount; // ✅ add to total
  }, 0); // ✅ initial value

  const menu = useNavigate();
  return (
    <>
      <div className="min-h-screen  py-3">
        <div className="flex my-4 justify-end">
          <button
            onClick={() => menu(`/admin/dashboard/bills/${id}`)}
            className="group flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out print:hidden"
          >
            {/* Heroicons-style Printer SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-100 group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            Generate E-Bill
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <Card className="shadow-none rounded-none mx-5 border border-gray-200">
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 mb-5">
                <div className="flex flex-col mx-4 ">
                  <Label className="mb-2">Bill To</Label>
                  <Select
                    placeholder="Select Bill to"
                    value={formData.customer_id || ""}
                    onValueChange={(value) =>
                      setFormData({ ...formData, customer_id: value })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Bill To" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.map((customer) => (
                        <SelectItem value={customer.id}>
                          {customer.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col mx-4 ">
                  <Label className="mb-2">Bill From</Label>
                  <Select
                    value={formData.bill_from_id || ""}
                    placeholder="Select Bill From"
                    onValueChange={(value) =>
                      setFormData({ ...formData, bill_from_id: value })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Bill From" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectContent>
                        {product.map((customer) => (
                          <SelectItem value={customer.id}>
                            {customer.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col mx-4 ">
                  <Label className="mb-2">Ship To</Label>
                  <Select
                    placeholder="City"
                    value={formData.ship_from_id || ""}
                    onValueChange={(value) =>
                      setFormData({ ...formData, ship_to_id: value })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select the City" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ajmer">Light</SelectItem>
                      <SelectItem value="jaipur">Dark</SelectItem>
                      <SelectItem value="udaipur">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col mx-4 ">
                  <Label className="mb-2">Ship From</Label>
                  <Select
                    placeholder="Select Bill to"
                    value={formData.ship_to_id || ""}
                    onValueChange={(value) =>
                      setFormData({ ...formData, ship_from_id: value })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="City From" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ajmer">Light</SelectItem>
                      <SelectItem value="jaipur">Dark</SelectItem>
                      <SelectItem value="udaipur">System</SelectItem>
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
                      Ref. No.
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
                        value={formData.voucher_number || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            voucher_number: e.target.value,
                          })
                        }
                      />
                    </TableCell>
                    <TableCell className="border border-gray-300">
                      <Input
                        type="date"
                        className="w-full px-2 py-1"
                        value={formData.voucher_date?.split("T") || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            voucher_date: e.target.value,
                          })
                        }
                      />
                    </TableCell>
                    <TableCell className="border border-gray-300 text-center">
                      <Input
                        type="text"
                        placeholder="Days"
                        className="w-full  px-1 py-1"
                        value={formData.reference_number || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            reference_number: e.target.value,
                          })
                        }
                      />
                    </TableCell>
                    <TableCell className="border border-gray-300 text-center">
                      <Select
                        placeholder="Tax inclusion"
                        value={formData.tax_inclusion || ""}
                        onValueChange={(value) =>
                          setFormData({ ...formData, tax_inclusion: value })
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="select the  tax method " />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="TaxesExtra">
                            Taxes Extra
                          </SelectItem>
                          <SelectItem value="InclusiveTaxes">
                            Inclusive Taxes
                          </SelectItem>
                        </SelectContent>
                      </Select>
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
                        "Uom Qty",
                        "Size",
                        "MRP",
                        "Qty",
                        "Unit",
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
                      <TableRow key={item.id}>
                        {/* Serial */}
                        <TableCell className="border text-center">
                          {index + 1}
                        </TableCell>

                        {/* Product Select */}
                        <TableCell className="border">
                          <Select
                            value={item.item_name}
                            onValueChange={(value) =>
                              handleProductSelect(item.id, value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select Product">
                                {item.item_name || "Select Product"}
                              </SelectValue>
                            </SelectTrigger>

                            <SelectContent>
                              {customer.map((prod) => (
                                <SelectItem key={prod.id} value={prod.id}>
                                  {prod.item_name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell className="border" disabled>
                          {item.UomQty}
                        </TableCell>
                        <TableCell className="border">{item.Size}</TableCell>
                        {/* MRP */}
                        <TableCell className="border text-center">
                          ₹{item.mrp || 0}
                        </TableCell>

                        {/* Qty */}
                        <TableCell className="border">
                          <input
                            type="number"
                            value={item.Qty}
                            min={0}
                            className="w-20 border px-2"
                            onChange={(e) =>
                              updateItem(item.id, "Qty", Number(e.target.value))
                            }
                          />
                        </TableCell>

                        <TableCell className="border">{item.Unit}</TableCell>

                        <TableCell className="border">
                          <input
                            type="number"
                            min={0}
                            value={item.Rate_Inc_Tax}
                            className="w-20 border px-2"
                            onChange={(e) =>
                              updateItem(
                                item.id,
                                "Rate_Inc_Tax",
                                Number(e.target.value),
                              )
                            }
                          />
                        </TableCell>
                        <TableCell className="border">
                          {item.Rate_Tax_Extra}
                        </TableCell>
                        <TableCell className="border">
                          ₹{calculateTaxableValue(item)}
                        </TableCell>
                        <TableCell className="border">
                          <input
                            type="number"
                            min={0}
                            value={item.Dis}
                            step="0.01"
                            className="w-20 border px-2"
                            onChange={(e) =>
                              updateItem(item.id, "Dis", Number(e.target.value))
                            }
                          />
                        </TableCell>
                        <TableCell className="border text-center">
                          ₹{calculateTaxableValue(item)}
                        </TableCell>
                        <TableCell className="border w-[10px]">
                          {item.Short_Narration}
                        </TableCell>

                        {/* Total */}

                        {/* Actions */}
                        <TableCell className="border text-center">
                          <div className="flex justify-center">
                            <PlusCircle
                              className="text-green-600 cursor-pointer mx-2"
                              onClick={() => addItem(item.id)}
                            />

                            <Trash
                              className="text-red-600 cursor-pointer mx-2"
                              onClick={() => deleteItem(item.id)}
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>

                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={5}>Total</TableCell>
                      <TableCell colSpan={6}>{totalQuantity}</TableCell>
                      <TableCell> {totalTaxableValue} </TableCell>
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
                          {(
                            item.qty *
                            item.rate *
                            (1 + item.tax / 100)
                          ).toFixed(2)}
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
                            placeholder="Select Bill From"
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
                          {(
                            item.qty *
                            item.rate *
                            (1 + item.tax / 100)
                          ).toFixed(2)}
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
            <div className="bg-white p-4 rounded shadow w-full md:w-80">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>₹ {totalTaxableValues.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Total Bill Amt.</span>
                <span>₹ {totalTaxableValues.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Discount</span>
                <span>₹ {discountamount}</span>
              </div>

              <hr className="my-2" />

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>
                  ₹ {(totalTaxableValues - discountamount).toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <Card className="shadow-md rounded-none mx-5 border border-gray-200 my-4">
            <CardContent>
              <div className="w-full ">
                <Label>Long Narration</Label>
                <Textarea className="rounded-none my-2 h-30 resize-vertical" />
              </div>
              <div className="w-full ">
                <Label>Serial No s</Label>
                <Textarea className="rounded-none my-2 h-30 resize-vertical" />
              </div>
              <Button>Terms and Condition</Button>
              <Table className="w-full my-4">
                <TableHeader>
                  <TableRow>
                    <TableHead className="">DSO</TableHead>
                    <TableHead>ASM:</TableHead>
                    <TableHead>RSM:</TableHead>
                    <TableHead>ZM:</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell>$250.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-4">
                <div className="flex items-center gap-4">
                  <Label className="font-semibold">Sale Person</Label>
                  <Select>
                    <SelectTrigger className="w-64 border border-gray-300 rounded-md px-2 py-1 shadow-sm focus:ring-2 focus:ring-blue-500">
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
                <div className="flex items-center gap-4">
                  <Label className="font-semibold">Currency</Label>
                  <Select>
                    <SelectTrigger className="w-64 border border-gray-300 rounded-md px-2 py-1 shadow-sm focus:ring-2 focus:ring-blue-500">
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
              </div>
              <div className="flex items-center gap-4 my-4">
                <Label className="font-semibold">TDS</Label>
                <Select>
                  <SelectTrigger className="w-64 border border-gray-300 rounded-md px-2 py-1 shadow-sm focus:ring-2 focus:ring-blue-500">
                    <SelectValue placeholder="Select Payment Term" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="advance">Advance</SelectItem>
                    <SelectItem value="net30">Net 30</SelectItem>
                    <SelectItem value="net60">Net 60</SelectItem>
                    <SelectItem value="onDelivery">On Delivery</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="number" className="w-20" />
                <Label>:00</Label>
              </div>
              <Label className="mx-3">Payable Amount : 0.00</Label>
            </CardContent>
            <CardFooter className="mt-auto">
              <div className="flex justify-end gap-2 w-full">
                <Button variant="outline">Cancel</Button>
                <Button type="submit">Save</Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
};
