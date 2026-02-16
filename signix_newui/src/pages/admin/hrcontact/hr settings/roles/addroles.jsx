import { useState } from "react";
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
import axios from "axios";

export const Add_Roles = () => {
  const [role,setrole]=useState({
    cDt: new Date().toISOString(),
    role:'',
    users_allowed:'',
    reports_to_role:'',

  })
  const handleChange=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setrole((prev)=>({...prev,[name]:value}))
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(role)
   axios.post('http://localhost:8080/api/roles/create',role,{
    withCredentials:true,
   }).then((res)=>{
        console.log(res) 
        alert("form is sumbitted")
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
                  <Label className="col-span-3">cDt</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    onChange={handleChange}
                    
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Role  </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="role"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Users Allowed Count </Label>
                  <Input
                    type="number"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="users_allowed"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">ReportsToRole</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="reports_to_role"
                     onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">ReportsToRoleID</Label>
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
