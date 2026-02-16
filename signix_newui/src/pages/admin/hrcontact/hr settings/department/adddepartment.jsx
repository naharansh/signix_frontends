import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
} from "../../../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../components/ui/table";
import { Input } from "../../../../../components/ui/input";
import { Button } from "../../../../../components/ui/Button";
import axios from "axios";

export const Add_Department = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      cDt: new Date().toISOString(),
      designation: "",
      department: "",
      departmentId: "",
    },
  ]);

  // ➕ Add Row
  const addRow = (e) => {
    e.preventDefault();
    setRows([
      ...rows,
      {
        id: Date.now(),
        cDt: "",
        designation: "",
        department: "",
        departmentId: "",
      },
    ]);
  };

  // ❌ Remove Row
  const removeRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  // ✏ Handle Input Change
  const handleChange = (id, field, value) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  // 💾 Submit Data
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending JSON:", rows);
    const payload = {
    department: rows, // send object directly
  };
    console.log(payload)

    try {
      const response = await axios.post('http://localhost:8080/api/departmet/create',payload
        ,{
        withCredentials:true,
      })

      const data = await response.data;
      if (data) {
          alert("departments are added")        
      }
    } catch (err) {

      
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
  
    }
  };

  return (
    <div className="min-h-screen p-2">
      <form onSubmit={handleSubmit}>
        <Card className="max-w-7xl rounded-none mx-auto border-none shadow-none">
          <CardContent>
            <div className="w-full mx-auto bg-white rounded-none shadow-md py-3">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="border px-3 py-2">S.no</TableHead>
                    <TableHead className="border px-3 py-2">cDt</TableHead>
                 
                    <TableHead className="border px-3 py-2">
                      Department
                    </TableHead>
                    <TableHead className="border px-3 py-2">
                     HOD
                    </TableHead>
                     <TableHead className="border px-3 py-2">
                     HOD Id
                    </TableHead>
                    <TableHead className="border px-3 py-2">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow key={row.id}>
                      <TableCell className="border px-3 py-2">
                        {index + 1}
                      </TableCell>

                      <TableCell className="border px-3 py-2">
                        <Input
                          value={row.cDt}
                          onChange={(e) =>
                            handleChange(row.id, "cDt", e.target.value)
                          }
                        />
                      </TableCell>

                      <TableCell className="border px-3 py-2">
                        <Input
                         
                          onChange={(e) =>
                            handleChange(
                              row.id,
                              "department",
                              e.target.value
                            )
                          }
                        />
                      </TableCell>

                      <TableCell className="border px-3 py-2">
                        <Input
                          
                          onChange={(e) =>
                            handleChange(
                              row.id,
                              "HOD",
                              e.target.value
                            )
                          }
                        />
                      </TableCell>

                      <TableCell className="border px-3 py-2">
                        <Input
                          type="text"
                        
                            
                        />
                      </TableCell>

                      <TableCell className="border px-3 py-2 text-center">
                        <Button
                          type="button"
                          onClick={() => removeRow(row.id)}
                          variant="ghost"
                          className="text-red-600 text-xl font-bold"
                        >
                          ✖
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>

          <CardFooter className="mt-auto">
            <div className="flex justify-between gap-2 w-full">
              <button
                type="button"
                onClick={addRow}
                className="flex items-center gap-2 text-green-600 font-semibold"
              >
                <span className="text-xl">＋</span> Add Row
              </button>

              <div>
                <Button type="button" variant="outline" className="me-3">
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};
