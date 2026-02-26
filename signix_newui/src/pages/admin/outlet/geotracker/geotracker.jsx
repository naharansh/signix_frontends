import {
  AlertTriangle,
  ArrowRightLeft,
  CalendarRange,
  Clock,
  Download,
  Expand,
  File,
  Funnel,
  Handbag,
  Leaf,
  LineChart,
  Play,
  RefreshCcw,
  Split,
  Users,
  Wifi,
  WifiOff,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import { Calendar } from "../../../../components/ui/calendar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Input } from "../../../../components/ui/input";
import { Switch } from "../../../../components/ui/switch";

export const Geotracker = () => {
  return (
    <>
      <div className="bg-white rounded-none shadow-sm max-h-screen p-4 flex justify-between items-center my-5 w-full">
        <Tabs defaultValue="live_tracking" className="w-full">
          <TabsList
            variant="line"
            className="bg-transparent w-full justify-start border-b"
          >
            <TabsTrigger value="live_tracking">Live Tracking</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="live_tracking">
            <LiveTracking />
          </TabsContent>
          <TabsContent value="timeline">
            <Timeline />
          </TabsContent>
          <TabsContent value="dashboard">
            <Dashboard />
          </TabsContent>
          <TabsContent value="reports">
            <Reports />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};
export const LiveTracking = () => {
  const [date, setDate] = useState(new Date()); // ✅ initialize with a Dat
  const [showCalendar, setShowCalendar] = useState(false); // ✅ toggle visibility

  return (
    <>
      <div className="bg-white rounded-none shadow-none p-4 flex justify-between items-center my-5 w-full">
        <Card className="w-full h-96 rounded-none shadow-sm border-none">
          <CardHeader className="border-b">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Live Tracking Map</h3>
              <div className="flex items-center gap-4 mb-4">
                <button
                  className="flex items-center justify-center gap-2 px-4 py-2 w-40 
             bg-gradient-to-r from-blue-500 to-blue-600 
             text-white font-medium rounded-md shadow-md 
             hover:from-blue-600 hover:to-blue-700 
             "
                  aria-label="Refresh"
                >
                  <ArrowRightLeft className="w-5 h-5" />
                  <span>Refresh</span>
                </button>

                <button
                  className="flex items-center justify-center gap-2 px-4 py-2 w-40 
             bg-gradient-to-r from-blue-500 to-blue-600 
             text-white font-medium rounded-md shadow-md 
             hover:from-blue-600 hover:to-blue-700 
             "
                >
                  <Funnel className="w-5 h-5" />
                  Filter
                </button>

                <button
                  className="flex items-center justify-center gap-2 px-4 py-2 w-40 
             bg-gradient-to-r from-blue-500 to-blue-600 
             text-white font-medium rounded-md shadow-md 
             hover:from-blue-600 hover:to-blue-700 
             "
                  onClick={() => setShowCalendar(!showCalendar)}
                >
                  <CalendarRange className="w-5 h-5" />{" "}
                  {date.toLocaleDateString()}
                </button>
                {showCalendar && (
                  <div className="animate-fadeIn origin-top-right absolute top-62 right-4 z-10 bg-white rounded-md shadow-lg p-4">
                    <Calendar
                      mode="single"
                      defaultMonth={date}
                      selected={date}
                      onSelect={setDate}
                      showWeekNumber
                    />
                  </div>
                )}
              </div>

              {/* Calendar */}
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 ">
              <Card className="col-span-1 h-24 rounded-sm shadow-sm border-none mx-5">
                <CardContent className="h-full">
                  <div className="flex items-center justify-between ">
                    <h1 className="text-lg font-semibold">All Employees</h1>
                    <Users className="w-7 h-7" />
                  </div>
                  <h1 className="text-xl font-bold">0</h1>
                </CardContent>
              </Card>
              <Card className="col-span-1 h-24 rounded-sm shadow-sm border-none mx-3 px-3">
                <CardContent className="h-full">
                  <div className="flex items-center justify-between ">
                    <h1 className="text-lg font-semibold">Travelled</h1>
                    <Handbag className="w-7 h-7" />
                  </div>
                  <h1 className="text-xl font-bold">0</h1>
                </CardContent>
              </Card>
              <Card className="col-span-1 h-24 rounded-sm shadow-sm border-none mx-3 px-3">
                <CardContent className="h-full">
                  <div className="flex items-center justify-between ">
                    <h1 className="text-lg font-semibold">Not Travelled</h1>
                    <Leaf className="w-7 h-7" />
                  </div>
                  <h1 className="text-xl font-bold">0</h1>
                </CardContent>
              </Card>
              <Card className="col-span-1 h-24 rounded-sm shadow-sm border-none mx-3">
                <CardContent className="h-full">
                  <div className="flex items-center justify-between ">
                    <h1 className="text-lg font-semibold">Online</h1>
                    <Wifi className="w-7 h-7" />
                  </div>
                  <h1 className="text-xl font-bold">0</h1>
                </CardContent>
              </Card>
              <Card className="col-span-1 h-24 rounded-sm shadow-sm border-none mx-3">
                <CardContent className="h-full">
                  <div className="flex items-center justify-between ">
                    <h1 className="text-lg font-semibold">offline</h1>
                    <WifiOff className="w-7 h-7" />
                  </div>
                  <h1 className="text-xl font-bold">0</h1>
                </CardContent>
              </Card>
            </div>
          </CardContent>
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Map will be displayed here.</p>
          </div>
        </Card>
      </div>
    </>
  );
};
export const Timeline = () => {
  return (
    <>
      <div className="bg-white p-6 w-full">
        <Card className="w-full h-96 rounded-lg shadow-sm border border-gray-200">
          <CardContent className="h-full">
            <div className="grid grid-cols-12 gap-6 h-full">
              {/* Left Panel */}
              <Card className="col-span-4 h-full rounded-lg shadow-sm border border-gray-200">
                <CardContent className="flex flex-col  h-full py-6">
                  {/* Theme + Date */}
                  <div className="flex flex-row gap-4 items-center">
                    <Select>
                      <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Select Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    <Input type="datetime-local" className="w-[200px]" />
                  </div>

                  {/* Timeline Toggle */}
                  <div className="flex items-center  justify-between my-4  ">
                    <p className="text-sm font-medium text-gray-600">
                      Timeline
                    </p>
                    <div className="">
                        <Switch />
                    <span className="text-sm text-gray-600">Activity</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Right Panel */}
              <Card className="col-span-8 h-full rounded-lg shadow-sm border border-gray-200">
                <CardContent className="flex items-center justify-center h-full">
                  <h1 className="text-gray-500 text-lg font-medium">
                    No activity or location to show on the map.
                  </h1>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
export const Dashboard = () => {
  const [datas, setDatas] = useState([]);
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
        header: "Status",
      },
      {
        accessorKey: "City",
        header: "Total Distance",
      },
      {
        accessorKey: "State",
        header: "Total Time",
      },
      {
        accessorKey: "Location",
        header: "Motion Time",
      },
      {
        accessorKey: "Country",
        header: "Motion Time",
      },

      {
        accessorKey: "Transportation_Mode",
        header: "Reset Time",
      },
      {
        accessorKey: "Transportation_Mode",
        header: "Outrage Time",
      },
    ],
    [],
  );

  const table = useReactTable({
    data: datas || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const [date, setDate] = useState(new Date()); // ✅ initialize with a Dat
  const [showCalendar, setShowCalendar] = useState(false); // ✅ toggle visibility
  return (
    <>
      <div className="bg-white rounded-none shadow-none p-4 flex justify-between items-center my-5 w-full">
        <Card className="w-full h-96 rounded-none shadow-sm border-none">
          <CardHeader className="border-b">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Live Tracking Map</h3>
              <div className="flex items-center gap-4 mb-4">
                <button
                  className="flex items-center justify-center gap-2 px-4 py-2 w-40 
             bg-gradient-to-r from-blue-500 to-blue-600 
             text-white font-medium rounded-md shadow-md 
             hover:from-blue-600 hover:to-blue-700 
             "
                  aria-label="Refresh"
                >
                  <ArrowRightLeft className="w-5 h-5" />
                  <span>Refresh</span>
                </button>
                <button
                  className="flex items-center justify-center gap-2 px-4 py-2 w-40 
             bg-gradient-to-r from-blue-500 to-blue-600 
             text-white font-medium rounded-md shadow-md 
             hover:from-blue-600 hover:to-blue-700 
             "
                  aria-label="Refresh"
                >
                  <File className="w-5 h-5" />
                  <span>Export</span>
                </button>
                <button
                  className="flex items-center justify-center gap-2 px-4 py-2 w-40 
             bg-gradient-to-r from-blue-500 to-blue-600 
             text-white font-medium rounded-md shadow-md 
             hover:from-blue-600 hover:to-blue-700 
             "
                >
                  <Funnel className="w-5 h-5" />
                  Filter
                </button>

                <button
                  className="flex items-center justify-center gap-2 px-4 py-2 w-40 
             bg-gradient-to-r from-blue-500 to-blue-600 
             text-white font-medium rounded-md shadow-md 
             hover:from-blue-600 hover:to-blue-700 
             "
                  onClick={() => setShowCalendar(!showCalendar)}
                >
                  <CalendarRange className="w-5 h-5" />{" "}
                  {date.toLocaleDateString()}
                </button>
                {showCalendar && (
                  <div className="animate-fadeIn origin-top-right absolute top-62 right-4 z-10 bg-white rounded-md shadow-lg p-4">
                    <Calendar
                      mode="single"
                      defaultMonth={date}
                      selected={date}
                      onSelect={setDate}
                      showWeekNumber
                    />
                  </div>
                )}
              </div>

              {/* Calendar */}
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 ">
              <Card className="col-span-1 h-24 rounded-sm shadow-sm border-none mx-5">
                <CardContent className="h-full">
                  <div className="flex items-center justify-between ">
                    <h1 className="text-lg font-semibold">Total Distance</h1>
                    <Split className="w-7 h-7" />
                  </div>
                  <h1 className="text-xl font-bold">0</h1>
                </CardContent>
              </Card>
              <Card className="col-span-1 h-24 rounded-sm shadow-sm border-none mx-3 px-3">
                <CardContent className="h-full">
                  <div className="flex items-center justify-between ">
                    <h1 className="text-lg font-semibold">Total Time</h1>
                    <Clock className="w-7 h-7" />
                  </div>
                  <h1 className="text-xl font-bold">0</h1>
                </CardContent>
              </Card>
              <Card className="col-span-1 h-24 rounded-sm shadow-sm border-none mx-3 px-3">
                <CardContent className="h-full">
                  <div className="flex items-center justify-between ">
                    <h1 className="text-lg font-semibold">Motion Time</h1>
                    <Play className="w-7 h-7" />
                  </div>
                  <h1 className="text-xl font-bold">0</h1>
                </CardContent>
              </Card>
              <Card className="col-span-1 h-24 rounded-sm shadow-sm border-none mx-3">
                <CardContent className="h-full">
                  <div className="flex items-center justify-between ">
                    <h1 className="text-lg font-semibold">Reset Time</h1>
                    <Expand className="w-7 h-7" />
                  </div>
                  <h1 className="text-xl font-bold">0</h1>
                </CardContent>
              </Card>
              <Card className="col-span-1 h-24 rounded-sm shadow-sm border-none mx-3">
                <CardContent className="h-full">
                  <div className="flex items-center justify-between ">
                    <h1 className="text-lg font-semibold">Outage Time</h1>
                    <AlertTriangle className="w-7 h-7" />
                  </div>
                  <h1 className="text-xl font-bold">0</h1>
                </CardContent>
              </Card>
            </div>
          </CardContent>
          <CardContent>
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
          </CardContent>
        </Card>
      </div>
    </>
  );
};
export const Reports = () => {
  return (
    <>
      <div className="bg-white rounded-none shadow-none p-4 flex justify-between items-center my-5 w-full">
        <Card className="w-full h-96 rounded-none shadow-sm border-none">
          <CardHeader className="border-b">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Reports</h3>

              {/* Calendar */}
            </div>
          </CardHeader>
          <CardContent className="border rounded-lg py-2 flex items-center justify-between hover:shadow-sm transition mx-3">
            {/* Title */}

            {/* Report Card */}

            {/* Left section */}
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                <LineChart size={24} />
              </div>

              {/* Text */}
              <div>
                <div className="font-medium">Timeline Report</div>

                <div className="text-gray-500 text-sm">
                  Get the list of timeline activities performed by your staff
                  over a date-range.
                </div>
              </div>
            </div>

            {/* Download Button */}
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
              <Download size={18} />
              Download
            </button>
          </CardContent>
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Map will be displayed here.</p>
          </div>
        </Card>
      </div>
    </>
  );
};
