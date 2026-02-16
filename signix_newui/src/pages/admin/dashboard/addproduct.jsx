import { useState } from "react";
import { Button } from "../../../components/ui/Button";
import { Card, CardContent, CardFooter } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Textarea } from "../../../components/ui/textarea";
import axios from "axios";

export const AddProuduct = () => {
  const [product, setproudct] = useState({
    product_name: "",
    productCategory: "",
    details: "",
    priceing: "",
    availableQuantity: "",
    status: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setproudct((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    axios
      .post("http://localhost:8080/api/product/create", product, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        if (err.response) {
          let msg;

          // normalize message
          if (typeof err.response.data === "string") {
            msg = err.response.data;
          } else {
            msg = err.response.data?.message || err.message;
          }

          switch (err.response.status) {
            case 411:
              alert(msg || "Length required");
              break;
            case 400:
              alert(msg || "Bad request");
              break;
            case 401:
              alert(msg || "Unauthorized");
              break;
            case 404:
              alert(msg || "Not found");
              break;
            default:
              alert("An error occurred");
          }
        } else {
          // network or other error
          alert(err.message);
        }
      });
  };
  const handleSelectChange = (name, value) => {
    setproudct((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <div className="min-h-full py-6">
        <form onSubmit={handleSubmit}>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Product_Name</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="product_name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Product_Price</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="priceing"
                    requird="true"
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3"> productCategory</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="productCategory"
                    requird="true"
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">details</Label>
                  <Textarea
                    className="col-span-9"
                    name="details"
                    onChange={handleChange}
                    requird="true"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">AvailableQuantity</Label>
                  <Input
                    type="number"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="availableQuantity"
                    onChange={handleChange}
                    requird="true"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">AvailableQuantity</Label>
                  <Select
                    
                    value={product.status}
                    onValueChange={(value) =>
                      handleSelectChange("status", value)
                    }
                  >
                    <SelectTrigger className="w-full col-span-9">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                        <SelectItem value="out_of_stock">
                          Out_of_Stock
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <div className="flex justify-end gap-2 w-full">
                <Button variant="outline">Cancel</Button>
                <Button type="submit">Submit</Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
};
