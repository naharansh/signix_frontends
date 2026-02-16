import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useEffect, useMemo, useState } from "react";

import { Input } from "../../../../../components/ui/input";
import { Button } from "../../../../../components/ui/Button";
import { EyeIcon, PlusIcon } from "lucide-react";
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

import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../../../../components/ui/dialog";
import { Separator } from "../../../../../components/ui/separator";
import { Label } from "../../../../../components/ui/label";

export const Departments = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 3,
  });

  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/departmet/all")
      .then((res) => {
        setData(res.data.alldepartments || []);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const columns = useMemo(
    () => [
      {
        id: "sno",
        header: "S.No",
        cell: ({ row }) =>
          pagination.pageIndex * pagination.pageSize + row.index + 1,
      },
      {
        accessorKey: "department",
        header: "Departmet_Name",
      },
      {
        accessorKey: "HOD",
        header: "HOD",
      },
      {
        accessorKey: "cDt",
        header: "Created Date",
        cell: ({ row }) => {
          const value = row.original.cDt;
          if (!value || value === "0000-00-00 00:00:00") return "-";
          return new Date(value).toLocaleDateString("en-IN");
        },
      },
      {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => (
          <div className="flex justify-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="h-8 w-8 rounded-md text-gray-600 hover:text-blue-600
                  hover:bg-blue-50 transition"
                  title="View"
                >
                  <EyeIcon className="h-4 w-4" />
                </button>
              </DialogTrigger>

              <DialogContent className="max-w-lg max-h-[80vh] overflow-hidden px-4">
                <DialogTitle>
                  <div className="flex flex-col gap-1 text-center py-3">
                    <h2 className="text-lg font-semibold">Product Details</h2>
                  </div>
                  <Separator className="my-2" />
                </DialogTitle>

                <div className="max-h-[60vh] overflow-y-auto space-y-4 pr-2">
                  <div>
                    <Label>Product_Name</Label>
                    <Input disabled value={row.original.department} />
                  </div>
                  <div>
                    <Label>Alais_Name</Label>
                    <Input disabled value={row.original.HOD} />
                  </div>
                  <div>
                    <Label>Item_Code</Label>
                    <Input disabled value={row.original.cDt||"-"} />
                  </div>
              
                </div>
              </DialogContent>
              
            </Dialog>
          </div>
        ),
      },
    ],
    [pagination],
  );

  const table = useReactTable({
    data,
    columns,
    state: { pagination, globalFilter },
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      {/* Top Bar */}
      <div className="flex justify-between items-center my-4 px-4">
        <Input
          placeholder="Search Department..."
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="w-64"
        />

        <Link to="/admin/HR_Dashboard/hrsettings/department/adddepartment">
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Department
          </Button>
        </Link>
      </div>

      {/* Table Card */}
      <Card className="my-5 mx-4 rounded-md">
        <CardContent>
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} className="text-center py-2">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              {table.getPaginationRowModel().rows.length > 0 ? (
                table.getPaginationRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="text-center py-2 px-3"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="text-center text-gray-400 py-4"
                  >
                    No data found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>

        {/* Pagination */}
        <CardFooter className="px-4 py-3">
          <Pagination>
            <PaginationContent className="flex gap-2">
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => table.previousPage()}
                  className={
                    table.getCanPreviousPage()
                      ? "cursor-pointer"
                      : "pointer-events-none opacity-50"
                  }
                />
              </PaginationItem>

              {Array.from({ length: table.getPageCount() }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={() => table.setPageIndex(i)}
                    className={
                      pagination.pageIndex === i
                        ? "bg-primary text-white cursor-pointer"
                        : "cursor-pointer"
                    }
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() => table.nextPage()}
                  className={
                    table.getCanNextPage()
                      ? "cursor-pointer"
                      : "pointer-events-none opacity-50"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>
    </>
  );
};