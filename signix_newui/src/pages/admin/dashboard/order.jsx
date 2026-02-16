import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import axios from "axios";
import { Badge } from "../../../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Separator } from "../../../components/ui/separator";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { EyeIcon, FolderPlusIcon, PlusIcon } from "lucide-react";
import { Button } from "../../../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../../../components/ui/pagination";
export const Orders = () => {
  const [datas, setdata] = useState([]);
  const [orderid, setid] = useState(null);
  const [globalFilter, setGlobalFilter] = useState("");
  useEffect(() => {
    axios.get("http://localhost:8080/api/orders/all").then((res) => {
      console.log(res);
      setdata(res.data.orderss);
    });
  }, []);
  const navigate = useNavigate();
  const columns = React.useMemo(
    () => [
      {
        id: "sno",
        header: "S.No",
        cell: ({ row }) => row.index + 1, // auto-generate serial number
      },

    
      {
        accessorKey: "customer.name",
        header: "Client_name",
      },
      {
        accessorKey: "note",
        header: "Details",
      },
      {
        accessorKey: "orderDate",
        header: "Order_Date",
        cell: ({ row }) =>
          new Date(row.original.orderDate).toLocaleDateString("en-IN", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
      },
      {
        accessorKey: "createDate",
        header: "Created_Date",
        cell: ({ row }) =>
          new Date(row.original.createDate).toLocaleDateString("en-IN", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
      },

      {
        accessorKey: "updateDate",
        header: "Updated_Date",
        cell: ({ row }) => {
          const date = row.original.updateDate;

          if (!date) return "-"; // or "Not Updated"

          return new Date(date).toLocaleDateString("en-IN", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          });
        },
      },

      {
        accessorKey: "status",
        header: "Product_status",
        cell: ({ row }) => (
          <Badge
            className={
              row.original.status === "Completed"
                ? "!bg-green-500 text-white"
                : row.original.status === "Pending"
                  ? "!bg-yellow-500 !text-yellow-900"
                  : row.original.status === "Processing"
                    ? "!bg-orange-500 !text-orange-900"
                    : "bg-red-500 !text-red"
            }
          >
            {row.original.status}
          </Badge>
        ),
      },

      {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => (
          <div className="flex gap-2 justify-center mx-3">
            <button
              className="h-8 w-8 rounded-md 
                text-gray-600 hover:text-blue-600
                hover:bg-blue-50 transition "
              title="View"
              onClick={() => {
                navigate(`/admin/dashboard/productlist/${row.original.id}`);
              }}
            >
              <EyeIcon className="h-4 w-4" />
            </button>
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
    <div className="flex justify-end items-end my-4">
       <Input
                placeholder="Search products..."
                value={globalFilter ?? ""}
                onChange={(e) => setGlobalFilter(e.target.value)}
                className="w-64"
              />
      
    </div>
      <Card className="mx-0 my-5 rounded-none shadow-sm border-none w-full">
        <CardContent>
          <div className="bg-white rounded-sm shadow border ">
            <Table className="w-full text-sm  ">
              {/* Header */}
              <TableHeader className="bg-gray-100 text-gray-700 uppercase text-xs ">
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
                    className="hover:bg-gray-50 transition "
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
};
