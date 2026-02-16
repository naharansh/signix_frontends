import { useEffect, useMemo, useState } from "react";
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
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../../components/ui/pagination";
import axios from "axios";
import { Input } from "../../../../../components/ui/input";
import { Link } from "react-router-dom";
import { EyeIcon, PlusIcon } from "lucide-react";
import { Button } from "../../../../../components/ui/Button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../../../../../components/ui/dialog";
import { Separator } from "../../../../../components/ui/separator";
import { Label } from "../../../../../components/ui/label";

export const Roles = () => {
  const [data, setdata] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 3,
  });
  useEffect(() => {
    axios.get("http://localhost:8080/api/roles/all").then((res) => {
      console.log(res);
      setdata(res.data.allroles);
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
        accessorKey: "role",
        header: "Role_Name",
      },
      {
        accessorKey: "users_allowed",
        header: "Users_allowed",
      },
      {
        accessorKey: "reports_to_role",
        header: "Reports_to_role",
      },

      {
        accessorKey: "cDt",
        header: "cDt",
        cell: ({ row }) =>
          new Date(row.original.cDt).toLocaleDateString("en-IN"),
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
                          <h2 className="text-lg font-semibold">Role Details</h2>
                        </div>
                        <Separator className="my-2" />
                      </DialogTitle>
      
                      <div className="max-h-[60vh] overflow-y-auto space-y-4 pr-2">
                        <div>
                          <Label>Role_Name</Label>
                          <Input disabled value={row.original.role} />
                        </div>
                        <div>
                          <Label>Users_allowed</Label>
                          <Input disabled value={row.original.users_allowed} />
                        </div>
                          <div>
                          <Label>Reports_to_role</Label>
                          <Input disabled value={row.original.reports_to_role} />
                        </div>
                        <div>
                          <Label>Created_At</Label>
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
    state: {
      globalFilter,
      pagination,
    },
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <div className="flex justify-between items-center my-4 mx-2">
        <Input
          placeholder="Search Employees..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="w-64"
        />

        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          <PlusIcon className="h-5 w-5 mr-2" />
          <Link to="/admin/HR_Dashboard/hrsettings/role/addrole">
            Add Role
          </Link>
        </Button>
      </div>
      <Card className="my-5 rounded-none mx-3">
        {/* ------------------ Table ------------------ */}
        <CardContent>
          <Table>
            {/* Header */}
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            {/* Body */}
            <TableBody>
              {table.getPaginationRowModel().rows.length > 0 ? (
                table.getPaginationRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="mx-auto">
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
                    className="text-center text-gray-300"
                  >
                    No data found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>

        {/* ------------------ Pagination ------------------ */}
        <CardFooter>
          <Pagination>
            <PaginationContent>
              {/* Previous */}
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

              {/* Page Numbers */}
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

              {/* Next */}
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
