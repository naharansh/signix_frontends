import { useEffect, useRef, useState } from "react";
import { Button } from "../../../../../components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../../components/ui/card";
import { Input } from "../../../../../components/ui/input";
import { Label } from "../../../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../components/ui/select";
import axios from "axios";

export const Add_Employee = () => {
  const logoRef = useRef(null);
  const photoRef = useRef(null);
  const faceRef = useRef(null);
    const [logoName, setLogoName] = useState("");
  const [photoName, setPhotoName] = useState("");
  const [face_pic,setPic]=useState("")
  const [department,setdepartment]=useState([])
    const [role,setrole]=useState([])
    const [selected,setSeclected]=useState('')
    const [selectedepartment,setdatas]=useState('')
  const [employee, setemployee] = useState({
    employee: "",
    Ledgergroup: "",
    Emp_Code: "",
    Generic_Name: "",
    status: "",
    Address: "",
    pincode: "",
    latitude: "",
    longitude: "",
    DOJ: "",
    role: "",
    Designation: "",
    Virtual_Office: "",
    new_role: "",
    TCS: "",
    DOB: "",
    Account_Holder_Name: "",
    accountNumber: "",
    IFSC: "",
    Name_of_Bank: "",
    pan: "",
    aadhaar: "",
    dlNumber: "",
    passport: "",
    pfNumber: "",
    uanNumber: "",
    esiNumber: "",
    FullName: "",
    SignInMobile: "",
    Singn_email: "",
    Singn_password: "",
    Reports_To_Emp_id: "",
    Reports_To_Emp: "",
    pic:"",
    photo: "",
    Face_Pic: "",
    SIGN_IN_GROUP:'',
    department:'',
  });

  const handleChange=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setemployee((prev)=>({...prev,[name]:value}))
  }
const HandleSubmit = (e) => {
  e.preventDefault();

  console.log("Employee state:", employee);
  console.log("Pic file:", employee.pic);

  const formData = new FormData();

  Object.keys(employee).forEach((key) => {
    formData.append(key, employee[key]);
  });
  axios.post("http://localhost:8080/api/employee/create",employee, {
  headers: {
    "Content-Type": "multipart/form-data"
  }
}).then((res)=>{
    console.log(res)
  }).catch((error)=>{
    console.log(error)
  })
};


  const handleSelectChange=(name,value)=>{
      setemployee((prev)=>({...prev,[name]:value}))
  }
const handleimage = (e) => {
  
  const file = e.target.files?.[0];

  if (file) {
    setLogoName(file.name);

    setemployee((prev) => ({
      ...prev,
      pic: file,   
    }));
  }
};
const handlePhoto=(e)=>{
    
  const file = e.target.files?.[0];

  if (file) {
    setPhotoName(file.name);

    setemployee((prev) => ({
      ...prev,
      photo: file,   
    }));
  }
}
const Face_pics=(e)=>{
    const file = e.target.files?.[0];

  if (file) {
    setPic(file.name);

    setemployee((prev) => ({
      ...prev,
      Face_Pic: file,   
    }));
  }
}
useEffect(()=>{
  axios.get('http://localhost:8080/api/departmet/all').then((res)=>{
    setdepartment(res.data.alldepartments)
  })
  axios.get("http://localhost:8080/api/roles/all").then((res)=>{
    setrole(res.data.allroles)
  })
},[])
  return (
    <>
      <div className="min-h-full py-6">
        <form onSubmit={HandleSubmit}>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                <CardHeader className="p-0 px-2  text-gray-500">
                  <CardTitle className="m-0">LEDGER DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Employee</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="employee"
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Ledger Group</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="Ledgergroup"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Ledger Group ID </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Emp Code</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="Emp_Code"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Generic Name</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="Generic_Name"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Status </Label>
                  <Select onValueChange={(value) =>
                      handleSelectChange("status", value)
                    }> 
                    <SelectTrigger className="w-full col-span-9">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup> 
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Inactive">Deactive</SelectItem>
                        <SelectItem value="Resigned">Not active</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Status ID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
               <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Logo</Label>
                  <div className="col-span-9">
                    <input
                      type="file"
                      accept="image/*"
                      ref={logoRef}
                      hidden
                      onChange={handleimage}
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
                <div className="grid grid-cols-12 gap-4 items-start my-3 px-4">
                  <Label className="col-span-3 pt-2">Photos</Label>

                  <div className="col-span-9">
                    <input
                      type="file"
                      accept="image/*"
                      ref={photoRef}
                      hidden
                      onChange={handlePhoto}
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
              </div>
            </CardContent>
          </Card>
          <Card className="max-w-4xl mx-auto border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md  py-3">
                <CardHeader className="p-0 px-2  text-gray-500">
                  <CardTitle className="m-0">ADDRESS DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Address</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="Address"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Pincode </Label>
                  <Select onValueChange={(value) =>
                      handleSelectChange("pincode", value)
                    }>
                    <SelectTrigger className="col-span-9 border rounded-none px-3 py-2  outline-none w-full ">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="302001">Light</SelectItem>
                      <SelectItem value="302001">Dark</SelectItem>
                      <SelectItem value="302001">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">City</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"

                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">State</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">State ID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">State Code</Label>
                  <Select>
                    <SelectTrigger className="col-span-9 border rounded-none px-3 py-2  outline-none w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Country</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Country ID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Coordinates</Label>
                  <Input
                    type="text"
                    className="col-span-4 border rounded-none px-3 py-2  outline-none"
                    name="latitude"
                     onChange={handleChange}
                  />
                  <Input
                    type="text"
                    className="col-span-4 border rounded-none px-3 py-2  outline-none"
                    name="longitude"
                     onChange={handleChange}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="max-w-4xl mx-auto border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md  py-3">
                <CardHeader className="p-0 px-2  text-gray-500">
                  <CardTitle className="m-0">WORK PROFILE</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">DOJ</Label>
                  <Input
                    type="date"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="DOJ"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Role</Label>
                  <Select onValueChange={(value) =>{
                      const emp=role.find((item)=>item.id === value)
                      setSeclected(emp)
                      handleSelectChange("role",value)
                  }
                    
                    }>
                    <SelectTrigger className="col-span-9 border rounded-none px-3 py-2  outline-none w-full ">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                   {
                    role.map((item,key)=>(
                      <SelectItem value={item.id}>{item.role}</SelectItem>
                    ))
                   }
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Role ID</Label>
                  <Input
                    type="text"
                    value={selected?.id || ""}
                   disabled={true}
                    className="col-span-9 border rounded-none px-3 py-2  outline-none "
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Designation </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="Designation"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Designation ID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Department</Label>
                  <Select onValueChange={(value)=>{
                     const emp=department.find((item)=>item.id === value)
                      setdatas(emp)
                       handleSelectChange("department",value)
                  }} >
                    <SelectTrigger className="col-span-9 border rounded-none px-3 py-2  outline-none w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                     
                      {
                        department.map((item,key)=>(
                          <SelectItem value={item.id}>{item.department}</SelectItem>
                        ))
                      }
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Department ID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    value={selectedepartment?.id || ""}
                   disabled={true}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Virtual Office </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="Virtual_Office"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Branch</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Shift </Label>
                  <Select>
                    <SelectTrigger className="col-span-9 border rounded-none px-3 py-2  outline-none w-full ">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Holiday Group </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Weekoff Group  </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Leave Group </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">New Role</Label>
                  <Select onValueChange={(value) =>
                      handleSelectChange("new_role", value)
                    }>
                    <SelectTrigger className="col-span-9 border rounded-none px-3 py-2  outline-none w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">New Role ID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">TCS % </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="TCS"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">DOB</Label>
                  <Input
                    type="date"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="DOB"
                     onChange={handleChange}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="max-w-4xl border-none shadow-none mx-auto">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md py-3">
                <CardHeader className="p-0 px-2  text-gray-500 ">
                  <CardTitle className="m-0">BANK DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Account Holder Name</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="Account_Holder_Name"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Account Number </Label>
                 <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="accountNumber"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">IFSC</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="IFSC"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Name of Bank</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="Name_of_Bank"
                     onChange={handleChange}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="max-w-4xl border-none shadow-none mx-auto">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md py-3">
                <CardHeader className="p-0 px-2  text-gray-500 ">
                  <CardTitle className="m-0">GOVT IDs</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">PAN (P)</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="pan"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Aadhar # </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="aadhaar"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">DL No</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="dlNumber"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Passpost No</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="passport"
                     onChange={handleChange}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="max-w-4xl border-none shadow-none mx-auto">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md py-3">
                <CardHeader className="p-0 px-2  text-gray-500 ">
                  <CardTitle className="m-0">EMPLOYMENT IDs</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">PF No</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="pfNumber"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">UAN No </Label>
                <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="uanNumber"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">ESI No</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="esiNumber"
                     onChange={handleChange}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="max-w-4xl border-none shadow-none mx-auto">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md py-3">
                <CardHeader className="p-0 px-2  text-gray-500 ">
                  <CardTitle className="m-0">SIGN IN DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Full Name </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="FullName"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">SignIn Mobile </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="SignInMobile"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">SignIn Email </Label>
                  <Input
                    type="email"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="Singn_email"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">SignIn Password</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="Singn_password"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">SignIn Group</Label>
                   <Select onValueChange={(value) =>
                      handleSelectChange("SIGN_IN_GROUP", value)
                    } >
  <SelectTrigger className="w-full col-span-9">
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
                  <Label className="col-span-3">SignIn Group ID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="max-w-4xl border-none shadow-none mx-auto">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md py-3">
                <CardHeader className="p-0 px-2  text-gray-500 ">
                  <CardTitle className="m-0">REPORT TO DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Reports To Emp ID</Label>
                     <Select onValueChange={(value) =>
                      handleSelectChange("Reports_To_Emp_id", value)
                    }>
                    <SelectTrigger className="col-span-9 border rounded-none px-3 py-2  outline-none w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Reports To Emp</Label>
                  <Select onValueChange={(value) =>
                      handleSelectChange("Reports_To_Emp", value)
                    }>
                    <SelectTrigger className="col-span-9 border rounded-none px-3 py-2  outline-none w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">ReportsToDesignation</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">ReportsToDesignationID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="max-w-4xl border-none shadow-none mx-auto">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md py-3">
                <CardHeader className="p-0 px-2  text-gray-500 ">
                  <CardTitle className="m-0">FACE DETAILS</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-start my-3 px-4">
                  <Label className="col-span-3 pt-2">Face Pic</Label>

                  <div className="col-span-9">
                    <input
                      type="file"
                      accept="image/  "
                      ref={faceRef}
                      hidden
                      onChange={Face_pics}
                    />

                    <div
                      onClick={() => faceRef.current.click()}
                      className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer 
                                 hover:border-blue-500 transition"
                    >
                      <p className="font-medium text-gray-700">
                        {face_pic || "Browse Images"}
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
                <Button type="submit">Save</Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
};
