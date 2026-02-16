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
import { Plus } from "lucide-react";
import axios from "axios";

export const AddCustomer = () => {
    const [registerd, setregisterd] = useState([""]);
    const [customer,setcustomer]=useState({
        name:'',
        Gst:'',
        mobile_number:'',
        email:'',
        City:'',
        State:'',
        Location:'',
        Country:'',
        Transportation_Mode:'',
        Remark:'',
        registernumber_number:''
    })
  const handleChange = (index, value,name) => {
    const updated = [...registerd];
    updated[index] = value;
    console.log(name)
    setcustomer((prev)=>({...prev,[name]:updated}))
    setregisterd(updated);
  };
  const addField = () => {
    setregisterd([...registerd, ""]);
  }
  const handleChanges=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setcustomer((prev)=>({
        ...prev,
        [name]:value
    }))
  }
    const handleSelectChange = (name, value) => {
    setcustomer((prev) => ({ ...prev, [name]: value }));
  };
const handleSubmit=(e)=>{
    e.preventDefault()
    
    console.log(customer)
    axios.post('http://localhost:8080/api/customer/create',customer,{
        withCredentials:true
    }).then((res)=>{
        alert("customer is added successfully")

    }).catch((err)=>{
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
    })
}
  return (
    <>
      <div className="min-h-full py-6">
        <form onSubmit={handleSubmit}>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Customer_Name</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="name"
                    required
                    onChange={handleChanges}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Gst</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="Gst"
                    requird
                    onChange={handleChanges}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Mobile_number</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="mobile_number"
                    requird
                    onChange={handleChanges}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">email</Label>
                  <Input type="email" className="col-span-9" name="email" onChange={handleChanges} />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">city</Label>
                  <Input type="text" className="col-span-9" onChange={handleChanges} name="City"/>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">state</Label>
                  <Input type="text" className="col-span-9" onChange={handleChanges} name="State"  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">country</Label>
                  <Input type="text" className="col-span-9" onChange={handleChanges} name="Country" />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">location</Label>
                  <Input type="text" className="col-span-9" onChange={handleChanges} name="Location"/>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">
                    Select the Transportation
                  </Label>
                  <Select  onValueChange={(value) =>
                      handleSelectChange("Transportation_Mode", value)
                    }>
                    <SelectTrigger className="w-full col-span-9">
                      <SelectValue placeholder="Select the Transportation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="ROAD">Road</SelectItem>
                        <SelectItem value="AIR">Air</SelectItem>
                        <SelectItem value="SEA">Sea</SelectItem>
                        <SelectItem value="RAIL">Rail</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Remarks</Label>
                  <Textarea className="col-span-9 resize-none" name="Remark"  onChange={handleChanges}/>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Registered_Number</Label>
                  <div className="col-span-7 ">
                    {registerd.map((num, index) => (
                      <div key={index} className="my-3">
                        <Input
                          type="text"
                          name="registernumber_number"
                          onChange={(e) => handleChange(index,e.target.value,e.target.name)}
                          placeholder="Enter registration number"
                          
                        />
                      </div>
                    ))}
                    
                  </div>
             

<Button
  type="button"
  onClick={addField}
  className=" flex items-center gap-2 px-3 py-2 rounded-full border border-green-700 bg-white text-green-700 hover:bg-green-50 hover:shadow-md transition-all"
>
  <Plus className="w-4 h-4" />
  
</Button>
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
