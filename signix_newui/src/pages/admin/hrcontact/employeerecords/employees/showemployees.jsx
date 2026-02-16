import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useEffect, useMemo, useState } from "react";
import { Input } from "../../../../../components/ui/input";
import { Button } from "../../../../../components/ui/Button";
import { Link } from "react-router-dom";
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../../components/ui/pagination";
import { EyeIcon, PlusIcon } from "lucide-react";
import axios from "axios";
import { Badge } from "../../../../../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../../../../components/ui/dialog";
import { Separator } from "../../../../../components/ui/separator";
import { Label } from "../../../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../components/ui/select";

export const Show_Employees = () => {
  const [datas, setdata] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  // Dialog control
  const [openDialog, setOpenDialog] = useState(false);

  // Selected employee
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // User form state
  const [user, setuser] = useState({
    employee_code: "",
    first_name: "",
    last_name: "",
    status: "",
    email: "",
    password: "",
    phone: "",
  });

  // Fetch employees
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/employee/all"
      );
      setdata(res.data.alldata);
    } catch (err) {
      console.log(err);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser((prev) => ({ ...prev, [name]: value }));
  };

  // Handle select change
  const handleSelectChange = (value) => {
    setuser((prev) => ({ ...prev, status: value }));
  };

  // Open dialog and set employee
  const handleOpenDialog = (employee) => {
    setSelectedEmployee(employee);

    setuser({
      employee_code: employee.Emp_Code,
      first_name: "",
      last_name: "",
      status: "",
      email: "",
      password: "",
      phone: "",
    });

    setOpenDialog(true);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log(user)
    try {
      const res = await axios.post(
        "http://localhost:8080/api/user/",
        user
      );

      console.log(res.data);

      // Reset form
      setuser({
        employee_code: "",
        first_name: "",
        last_name: "",
        status: "",
        email: "",
        password: "",
        phone: "",
      });

      setOpenDialog(false);

      // Refresh employee list if needed
    //   fetchEmployees();

    } catch (error) {
      console.log(error);
    }
  };

  // Table columns
  const columns = useMemo(
    () => [
      {
        id: "sno",
        header: "S.No",
        cell: ({ row }) => row.index + 1,
      },
      {
        accessorKey: "employee",
        header: "Name",
      },
      {
        accessorKey: "Emp_Code",
        header: "Employee Code",
      },
      {
        accessorKey: "Generic_Name",
        header: "Generic Name",
      },
      {
        accessorKey: "role",
        header: "Role",
      },
      {
        accessorKey: "DOJ",
        header: "Date of Joining",
        cell: ({ row }) =>
          new Date(row.original.DOJ).toLocaleDateString("en-IN"),
      },
      {
        accessorKey: "Singn_email",
        header: "Email",
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
          <Badge
            className={
              row.original.status === "Active"
                ? "bg-green-500 text-white"
                : "bg-gray-500 text-white"
            }
          >
            {row.original.status}
          </Badge>
        ),
      },
      {
        header: "Action",
        cell: ({ row }) => (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleOpenDialog(row.original)}
          >
            <EyeIcon className="h-4 w-4" />
          </Button>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: datas,
    columns,
    state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  return (
    <>
      {/* Search and Add */}
      <div className="flex justify-between items-center my-4 mx-2">
        <Input
          placeholder="Search Employees..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="w-64"
        />

        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          <PlusIcon className="h-5 w-5 mr-2" />
          <Link to="/admin/HR_Dashboard/employee_recrods/employee/addemployee">
            Add Employee
          </Link>
        </Button>
      </div>

      {/* Table */}
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>

        {/* Pagination */}
        <CardFooter>
          <Pagination>
            <PaginationContent>

              <PaginationItem>
                <PaginationPrevious
                  onClick={() => table.previousPage()}
                />
              </PaginationItem>

              {Array.from(
                { length: table.getPageCount() },
                (_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      onClick={() => table.setPageIndex(i)}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}

              <PaginationItem>
                <PaginationNext
                  onClick={() => table.nextPage()}
                />
              </PaginationItem>

            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>

      {/* Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>

          <DialogTitle>
            Employee User Create
          </DialogTitle>

          <Separator />

          <form onSubmit={handleSubmit} className="space-y-3">

            <div>
              <Label>Employee Code</Label>
              <Input value={user.employee_code} disabled />
            </div>

            <div>
              <Label>Email</Label>
              <Input
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label>Password</Label>
              <Input
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label>First Name</Label>
              <Input
                name="first_name"
                value={user.first_name}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label>Last Name</Label>
              <Input
                name="last_name"
                value={user.last_name}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label>Status</Label>
              <Select
                value={user.status}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Active">
                    Active
                  </SelectItem>
                  <SelectItem value="Inactive">
                    Inactive
                  </SelectItem>
                </SelectContent>

              </Select>
            </div>

            <div>
              <Label>Phone</Label>
              <Input
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full">
              Save User
            </Button>

          </form>

        </DialogContent>
      </Dialog>
    </>
  );
};
