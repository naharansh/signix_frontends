import React, { useEffect, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import axios from "axios";
import { Card, CardContent, CardFooter } from "../../../components/ui/card";
import { EyeIcon, FolderPlusIcon, PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Separator } from "../../../components/ui/separator";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/Button";
import { Link } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../components/ui/pagination";

export default function MyDataTable() {
  const [datas, setdata] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/customer/all")
      .then((res) => {
        setdata(res.data.customer);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        id: "sno",
        header: "S.No",
        cell: ({ row }) => row.index + 1, // auto-generate serial number
      },

   
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "City",
        header: "City",
      },
      {
        accessorKey: "State",
        header: "State",
      },
      {
        accessorKey: "Location",
        header: "Location",
      },
      {
        accessorKey: "Country",
        header: "Country",
      },

      {
        accessorKey: "Transportation_Mode",
        header: "Transportation",
      },

      {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => (
          <div className="flex gap-2 justify-center mx-3">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="h-8 w-8 rounded-md 
        text-gray-600 hover:text-blue-600
        hover:bg-blue-50 transition "
                  title="View"
                >
                  <EyeIcon className="h-4 w-4" />
                </button>
              </DialogTrigger>

              <DialogContent className="max-w-lg max-h-[80vh] overflow-hidden">
                <DialogTitle>
                  <div className="flex flex-col gap-1 text-center py-3">
                    <h2 className="text-lg font-semibold">Customer Details</h2>
                  </div>
                  <Separator className="my-1" />
                </DialogTitle>

                {/* Scrollable Content */}
                <div className="max-h-[60vh] overflow-y-auto pr-2">
                  <div className="grid gap-4">
                    <Label className="mt-2 mb-0">Customer</Label>
                    <Input type="text" disabled value={row.original.name} />
                  </div>

                  <div className="grid gap-4">
                    <Label className="mt-2 mb-0">Email</Label>
                    <Input type="text" disabled value={row.original.email} />
                  </div>

                  <div className="grid gap-4">
                    <Label className="mt-2 mb-0">City</Label>
                    <Input type="text" disabled value={row.original.City} />
                  </div>

                  <div className="grid gap-4">
                    <Label className="mt-2 mb-0">State</Label>
                    <Input type="text" disabled value={row.original.State} />
                  </div>

                  <div className="grid gap-4">
                    <Label className="mt-2 mb-0">Location</Label>
                    <Input type="text" disabled value={row.original.Location} />
                  </div>

                  <div className="grid gap-4">
                    <Label className="mt-2 mb-0">Transportation</Label>
                    <Input
                      type="text"
                      disabled
                      value={row.original.Transportation_Mode}
                    />
                  </div>

                  <div className="grid gap-4">
                    <Label className="mt-2 mb-0">Registered Numbers</Label>
                    <Input
                      type="text"
                      disabled
                      value={
                        Array.isArray(row.original.registernumber_number)
                          ? row.original.registernumber_number.join(", ")[1]
                          : (row.original.registernumber_number ?? "")
                      }
                    />
                  </div>
                  <div className="flex justify-end my-3">
                    <Button className="mx-4">Save</Button>
                    <Button>close</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        ),
      },
    ],
    [],
  );

  const table = useReactTable({
    data: datas,
    columns,
    getCoreRowModel: getCoreRowModel(),

    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,

    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    initialState: {
      pagination: {
        pageSize: 5, // rows per page
      },
    },
  });

  return (
    <>
      <div className="flex justify-between items-center gap-3 space-x-3 my-4 mx-2">
        <Input
          placeholder="Search products..."
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="w-64 mx-5"
        />
        <div className="flex justify-end items-center gap-3">
          <Button className="bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2">
            <PlusIcon className="h-5 w-5" />
            <Link to="/admin/dashboard/addcustomer">Add Customer</Link>
          </Button>
        </div>
      </div>
      <Card className="mx-3 my-5 rounded-none shadow-sm border-none">
        <CardContent>
          <div className="bg-white rounded-sm shadow border ">
            <Table className="w-full text-sm text-center ">
              {/* Header */}
              <TableHeader className="bg-gray-100 text-gray-700 uppercase text-xs !">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="text-center">
                    {headerGroup.headers.map((header) => (
                      <TableHead
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                        className=" py-3 cursor-pointer hover:bg-gray-200 transition"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </TableHead>
                    ))}
                  </tr>
                ))}
              </TableHeader>

              {/* Body */}
              <TableBody className="divide-y">
                {table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="hover:bg-gray-50 transition text-center"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="px-2 py-4 text-gray-700"
                      >
                        {flexRender(
                          cell.column.columnDef.cell ??
                            cell.column.columnDef.accessorKey,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex items-center justify-center px-3 py-3 w-full">
            {/* Page info */}
            <div className="text-sm text-gray-600">
              Page{" "}
              <strong>
                {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </strong>
            </div>

            {/* Buttons */}

            <div className="">
              <Pagination>
                <PaginationContent>
                  {/* Previous */}
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => table.previousPage()}
                      disabled={!table.getCanPreviousPage()}
                      className={`cursor-pointer ${
                        !table.getCanPreviousPage()
                          ? "pointer-events-none opacity-50"
                          : ""
                      }`}
                    />
                  </PaginationItem>

                  {/* Page Numbers */}
                  {Array.from({ length: table.getPageCount() }, (_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        onClick={() => table.setPageIndex(index)}
                        isActive={
                          table.getState().pagination.pageIndex === index
                        }
                        className="cursor-pointer"
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  {/* Next */}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => table.nextPage()}
                      disabled={!table.getCanNextPage()}
                      className={`cursor-pointer ${
                        !table.getCanNextPage()
                          ? "pointer-events-none opacity-50"
                          : ""
                      }`}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
