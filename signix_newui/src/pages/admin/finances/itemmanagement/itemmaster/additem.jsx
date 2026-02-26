import { useEffect, useRef, useState } from "react";
import { Button } from "../../../.../../../../components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../.../../../../components/ui/card";
import { Input } from "../../../.../../../../components/ui/input";
import { Label } from "../../../.../../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../components/ui/select";
import "ckeditor5/ckeditor5.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Essentials,
  Paragraph,
  Bold,
  Italic,
  Alignment,
} from "ckeditor5";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../../components/ui/dialog";
import axios from "axios";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../../../../../utils/datatable";

export const Add_Item = () => {
  const logoRef = useRef(null);
  const photoRef = useRef(null);
  const productRef = useRef(null);
      const [role,setrole]=useState([])

  const [logoName, setLogoName] = useState("");
  const [photoName, setPhotoName] = useState("");
  const [image, setImages] = useState("");
  const [category,setCategory]=useState([])
  const [product, setproduct] = useState({
    cDt: new Date().toISOString(),
    item_name: "",
    case_unit_stock_type:'',
    base_unit_stock_type:'',

    alias_name: "",
    item_code: "",  
    EAN: "",
    active: "",
    seqno: "",
    ItemInCase: "",
    ecessAmount: "",
    MRP: "",
    sales_Price: "",
    LRP: "",
    LCP: "",
    MRP_Case_: "",
    sales_Price_Case_Unit: "",
    LPR_Case_Unit: "",
    for_sale: "",
    for_purchase: "",
    for_issue: "",
    for_recieve: "",
    latetude: "",
    logititude: "",
    description: "",
    pic: "",
    banner: "",
    technical_details: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setproduct((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData();

  // append files
  formData.append("pic", logoRef.current.files[0]);
  formData.append("banner", photoRef.current.files[0]);
  formData.append("technical_details", productRef.current.files[0]);

  // append product fields
  Object.keys(product).forEach((key) => {
    formData.append(key, product[key]);
  });

  axios.post("http://localhost:8080/api/product/create", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
};
useEffect(()=>{
  axios.get('http://localhost:8080/api/category/all').then((res)=>{
    setCategory(res.data.attendence)
  })
},[])
const [selected,setSeclected]=useState('')
  const handleSelectChange = (name, value) => {
    setproduct((prev) => ({ ...prev, [name]: value }));
  };
  const handleLogoChange = (e) => {
    const fileName = e.target.files?.[0]?.name || "";
    console.log(fileName);
    setLogoName(fileName);
    setproduct((prev) => ({ ...prev, pic: fileName }));
  };
  const bannerChange = (e) => {
    const fileName = e.target.files?.[0]?.name || "";
    console.log(fileName);
    setPhotoName(fileName);
    setproduct((prev) => ({ ...prev, banner: fileName }));
  };
  const technicalChange = (e) => {
    const fileName = e.target.files?.[0]?.name || "";
     setImages(fileName)
    setproduct((prev) => ({
      ...prev,
      technical_details: fileName,
    }));
  };

  return (
    <>
      <div className="min-h-full py-6">
        <form onSubmit={handleSubmit}>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                <CardHeader className="p-0 px-2  text-gray-500">
                  <CardTitle className="m-0">ITEM DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">cDt</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="cdt"
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Item </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    onChange={handleChange}
                    name="item_name"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Alias Name </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    onChange={handleChange}
                    name="alias_name"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Item Code</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    onChange={handleChange}
                    name="item_code"
                  />
                </div>

                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">EAN</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="EAN"
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Item Type</Label>
                  <Select>
                    <SelectTrigger className="col-span-9 w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Category </Label>
                  <Select onValueChange={(value) =>{
                      const emp=role.find((item)=>item.id === value)
                      setSeclected(emp)
                      handleSelectChange("category",value)
                  }
                    
                    }>
                    <SelectTrigger className="col-span-9 border rounded-none px-3 py-2  outline-none w-full ">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                   {
                    category.map((item,key)=>(
                      <SelectItem value={item.id}>{item.category_name}</SelectItem>
                    ))
                   }
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Sub Category</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>

                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Sub Sub Category</Label>
                    <Select>
                    <SelectTrigger className="col-span-9 w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Department </Label>
                    <Select>
                    <SelectTrigger className="col-span-9 w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Active  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("active", value)
                    }
                  >
                    <SelectTrigger className="col-span-9 w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Y">Yes</SelectItem>
                        <SelectItem value="N">No</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">SeqNo</Label>
                  <Input
                    type="number"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="seqno"
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Item Pic </Label>
                  <div className="col-span-9">
                    <input
                      type="file"
                      accept="image/*"
                      ref={logoRef}
                      hidden
                      onChange={handleLogoChange}
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
                  <CardTitle className="m-0">UNIT SETTINGS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Base Unit</Label>
                     <Select>
                    <SelectTrigger className="col-span-9 w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Y">Yes</SelectItem>
                        <SelectItem value="N">No</SelectItem>
                      
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Size  </Label>
                     <Select>
                    <SelectTrigger className="col-span-9 w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Y">Yes</SelectItem>
                        <SelectItem value="N">No</SelectItem>
                      
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Uom </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Conversion</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>

                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Case Unit</Label>
                      <Select>
                    <SelectTrigger className="col-span-9 w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Y">Yes</SelectItem>
                        <SelectItem value="N">No</SelectItem>
                      
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">ItemInCase</Label>
                  <Input
                    type="number"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="ItemInCase"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                <CardHeader className="p-0 px-2  text-gray-500">
                  <CardTitle className="m-0">TAX DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">HSN SAC </Label>
                     <Select>
                    <SelectTrigger className="col-span-9 w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Y">Yes</SelectItem>
                        <SelectItem value="N">No</SelectItem>
                      
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">IGST% </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">CGST% </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">SGST%</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>

                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Cess%</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">eCess Amt</Label>
                  <Input
                    type="number"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="ecessAmount"
                    onChange={handleChange}
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
                    PRICE DETAILS (BASE UNIT)
                  </CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">MRP </Label>
                  <Input
                    type="number"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    onChange={handleChange}
                    name="MRP"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">
                    Sale Price (Taxes Extra){" "}
                  </Label>
                  <Input
                    type="number"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    onChange={handleChange}
                    name="sales_Price"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">LPR (Taxes Extra) </Label>
                  <Input
                    type="number"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    onChange={handleChange}
                    name="LRP"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">LCP (Taxes Extra)</Label>
                  <Input
                    type="number"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    onChange={handleChange}
                    name="LCP"
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
                    PRICE DETAILS (Case UNIT)
                  </CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">MRP_Case Unit </Label>
                  <Input
                    type="number"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    onChange={handleChange}
                    name="MRP_Case_"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Sale Price_Case Unit</Label>
                  <Input
                    type="number"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    onChange={handleChange}
                    name="sales_Price_Case_Unit"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">LPR_Case Unit </Label>
                  <Input
                    type="number"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    onChange={handleChange}
                    name="LPR_Case_Unit"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                <CardHeader className="p-0 px-2  text-gray-500">
                  <CardTitle className="m-0">ASSIGN RIGHTS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">For Sale </Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("for_sale", value)
                    }
                  >
                    <SelectTrigger className="col-span-9 w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Y">Yes</SelectItem>
                        <SelectItem value="N">No</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">For Purchase</Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("for_purchase", value)
                    }
                  >
                    <SelectTrigger className="col-span-9 w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Y">Yes</SelectItem>
                        <SelectItem value="N">No</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">For Issue</Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("for_issue", value)
                    }
                  >
                    <SelectTrigger className="col-span-9 w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Y">Yes</SelectItem>
                        <SelectItem value="N">No</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">For Receive</Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("for_recieve", value)
                    }
                  >
                    <SelectTrigger className="col-span-9 w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Y">Yes</SelectItem>
                        <SelectItem value="N">No</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                <CardHeader className="p-0 px-2  text-gray-500">
                  <CardTitle className="m-0">ADDITIONAL INFORMATION</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Brand </Label>
                     <Select>
                    <SelectTrigger className="col-span-9 w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Serial (System)">Serial (System)</SelectItem>
                        <SelectItem value="	Serial (User)">	Serial (User)</SelectItem>
                         <SelectItem value="Batch">Batch</SelectItem>
                        <SelectItem value="Retail">	Retail</SelectItem>
                      
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Model</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>

                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Dt First Available</Label>
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
                  <CardTitle className="m-0">SERIAL STOCK Type</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Base Unit Stock Type </Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("base_unit_stock_type", value)
                    }
                  >
                    <SelectTrigger className="col-span-9 w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Serial (System)">
                          Serial (System)
                        </SelectItem>
                        <SelectItem value="	Serial (User)">
                          {" "}
                          Serial (User)
                        </SelectItem>
                        <SelectItem value="Batch">Batch</SelectItem>
                        <SelectItem value="Retail"> Retail</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Case Unit Stock Type</Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("case_unit_stock_type", value)
                    }
                  >
                    <SelectTrigger className="col-span-9 w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Serial (System)">
                          Serial (System)
                        </SelectItem>
                        <SelectItem value="	Serial (User)">
                          {" "}
                          Serial (User)
                        </SelectItem>
                        <SelectItem value="Batch">Batch</SelectItem>
                        <SelectItem value="Retail"> Retail</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Coordinates</Label>
                  <Input
                    type="text"
                    className="col-span-4 border rounded-none px-3 py-2  outline-none"
                    onChange={handleChange}
                    name="latetude"
                  />
                  <Input
                    type="text"
                    className="col-span-5 border rounded-none px-3 py-2  outline-none"
                    onChange={handleChange}
                    name="logititude"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                <CardHeader className="p-0 px-2  text-gray-500">
                  <CardTitle className="m-0">CATALOGUES</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Item Description </Label>
                  <div className="col-span-9">
                    <Dialog>
                      {/* Trigger Button */}
                      <DialogTrigger asChild>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-none hover:bg-blue-700 ">
                          Open Editor
                        </button>
                      </DialogTrigger>

                      {/* Dialog Content */}
                      <DialogContent className="max-w-2xl rounded-lg shadow-lg bg-white p-6">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-semibold text-gray-800">
                            Editor
                          </DialogTitle>
                          <DialogDescription className="text-sm text-gray-500 mb-4">
                            Customize your content below
                          </DialogDescription>
                        </DialogHeader>

                        {/* CKEditor Wrapper */}
                        <div className="border rounded-md shadow-sm p-4 bg-gray-50">
                          <CKEditor
                            editor={ClassicEditor}
                            config={{
                              licenseKey: "GPL",
                              plugins: [
                                Essentials,
                                Paragraph,
                                Bold,
                                Italic,
                                Alignment,
                              ],
                              toolbar: [
                                "undo",
                                "redo",
                                "|",
                                "heading",
                                "|",
                                "bold",
                                "italic",
                                "link",
                                "|",
                                "bulletedList",
                                "numberedList",
                                "blockQuote",
                                "|",
                                "formatPainter",
                              ],
                            }}
                            onChange={(event, editor) => {
                              const data = editor.getData();
                              setproduct((prev) => ({
                                ...prev,
                                description: data,
                              }));
                            }}
                          />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-3 mt-4">
                          <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition">
                            Cancel
                          </button>
                          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                            Save
                          </button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Product Details</Label>
                  <div className="col-span-9">
                    <input
                      type="file"
                      accept="image/*"
                      ref={photoRef}
                      hidden
                      onChange={bannerChange}
                    />

                    <div
                      onClick={() => photoRef.current.click()}
                      className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer 
                 hover:border-blue-500 transition"
                    >
                      <p className="font-medium text-gray-700">
                        {photoName || "Browse Images"}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        or Drag & Drop
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Technical Details</Label>
                  <div className="col-span-9">
                    <input
                      type="file"
                      accept="image/*"
                      ref={productRef}
                      hidden
                      onChange={technicalChange}
                    />

                    <div
                      onClick={() => productRef.current.click()}
                      className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer 
                 hover:border-blue-500 transition"
                    >
                      <p className="font-medium text-gray-700">
                        {image || "Browse Images"}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        or Drag & Drop
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <div className="flex justify-end gap-2 w-full">
                <Button variant="outline">Cancel</Button>
                <Button type="Submit">Save</Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
};
export const Item_List=()=>{
  const data = [];
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
              <DataTable columns={column} data={data} />
            </>
          );
}