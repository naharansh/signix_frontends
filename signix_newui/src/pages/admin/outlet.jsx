import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Button } from "../../components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {Link} from 'react-router-dom'
import { outlet } from "../../utils/iconmap";
import {
  Table,
  TableBody,
  
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Separator } from "../../components/ui/separator";
// import { Link } from "ckeditor5";
export const Outlets = () => {
    const data = {
    roles: [
      {
        role: "Admin",
        description: "All Zones",
        count: 1,
      },
      {
        role: "ZM",
        description: "Zonal Manager",
        count: 1,
      },
      {
        role: "RSM",
        description: "Regional Sales Manager",
        count: 0,
      },
      {
        role: "ASM",
        description: "Area Sales Manager",
        count: 0,
      },
      {
        role: "DSO",
        description: "Distributor Sales Officer",
        count: 0,
      },
      {
        role: "BO",
        description: "Beat Officer",
        count: 0,
      },
      {
        role: "WHC",
        description: "Warehouse Coordinator",
        count: 0,
      },
    ],
  };
  const organizationdata = {
    organisation: [
      {
        level: "Zone",
        count: 2,
      },
      {
        level: "Warehouse",
        count: 1,
      },
      {
        level: "Warehouse Region",
        count: 2,
      },
      {
        level: "Warehouse Area",
        count: 2,
      },
      {
        level: "Distributor",
        count: 1,
      },
      {
        level: "Distributor Beat",
        count: 0,
      },
      {
        level: "Outlet",
        count: 0,
      },
    ],
  };

  return (
    <>
      <div className="w-full  my-5">
        <div className="flex flex-col justify-between items-center my-4 flex-wrap gap-4 lg:flex-row">
          <Breadcrumb>
            <BreadcrumbList className="text-sm text-gray-600 font-medium">
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="hover:text-blue-600 transition"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/components"
                  className="hover:text-blue-600 transition"
                >
                  Components
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-800 font-semibold">
                  Breadcrumb
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Card className="shadow-none rounded-none px-4 py-0 bg-white border border-none">
            <CardContent>
              <div className="flex items-center justify-between text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span role="img" aria-label="calendar">
                    📅
                  </span>
                  <span className="font-medium">21-Jan-2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <span role="img" aria-label="clock">
                    🕒
                  </span>
                  <span>
                    In: <span className="text-gray-500">--</span>
                  </span>
                  <span>
                    Out: <span className="text-gray-500">--</span>
                  </span>
                </div>
                <div className="text-center text-lg font-bold text-gray-900 tracking-widest">
                  18:05:14
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="shadow-none rounded-none border border-none ">
          <CardContent className="p-0 px-3">
            <div className="flex justify-between items-center flex-col lg:flex-row">
              <h1 className="text-xl sm:text-2xl font-bold tracking-wide text-gray-800">
                Dashboard
              </h1>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
                <Button className="w-full sm:w-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 hover:bg-green-100 hover:shadow-md transition-transform transform hover:scale-105 focus:ring-2 focus:ring-green-400">
                  <img
                    src={outlet.geotracker}
                    alt="Dialer Icon"
                    className="w-6 h-6"
                  />
                  <span className="text-green-700 font-medium">
                    Geo Tracker
                  </span>
                </Button>
                <Button className=" w-full sm:w-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 hover:shadow-md transition-transform transform hover:scale-105 focus:ring-2 focus:ring-blue-400">
                 
                  <img src={outlet.order} alt="Data Icon" className="w-6 h-6" />
                   <Link to='/admin/outlet/addorder'>
                  <span className="text-blue-700 font-medium">Orders</span>
                 </Link>
                </Button>
                <Button className=" w-full sm:w-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 hover:shadow-md transition-transform transform hover:scale-105 focus:ring-2 focus:ring-indigo-400">
                  <img
                    src={outlet.report}
                    alt="Reports Icon"
                    className="w-6 h-6"
                  />
                  <span className="text-indigo-700 font-medium">Reports</span>
                </Button>
                <Button className=" w-full sm:w-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 hover:bg-green-100 hover:shadow-md transition-transform transform hover:scale-105 focus:ring-2 focus:ring-green-400">
                  <img
                    src={outlet.dispatch}
                    alt="Dialer Icon"
                    className="w-6 h-6"
                  />
                  <span className="text-green-700 font-medium">Dispatch</span>
                </Button>
                <Button className=" w-full sm:w-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 hover:shadow-md transition-transform transform hover:scale-105 focus:ring-2 focus:ring-blue-400">
                  <img src={outlet.PJ} alt="Data Icon" className="w-6 h-6" />
                  <span className="text-blue-700 font-medium">PJP</span>
                </Button>
                <Button className=" w-full sm:w-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 hover:shadow-md transition-transform transform hover:scale-105 focus:ring-2 focus:ring-indigo-400">
                  <img
                    src={outlet.price}
                    alt="Reports Icon"
                    className="w-6 h-6"
                  />
                  <span className="text-indigo-700 font-medium">
                    Price List
                  </span>
                </Button>
                <Button className=" w-full sm:w-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 hover:shadow-md transition-transform transform hover:scale-105 focus:ring-2 focus:ring-gray-400">
                  <img
                    src={outlet.configurations}
                    alt="Settings Icon"
                    className="w-6 h-6"
                  />
                  <span className="text-gray-700 font-medium">Settings</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 gap-5 px-3 py-3 lg:grid-cols-2">
          <Card className="mx-5 rounded-none shadow-none border p-0 py-2">
            <CardHeader className="p-0">
              <CardTitle className="text-center text-xl font-semibold tracking-wide">
                User Roles
              </CardTitle>
            </CardHeader>

            <Separator />

            <CardContent className="pt-2">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Role</TableHead>
                    <TableHead className="font-semibold">Description</TableHead>
                    <TableHead className="text-right font-semibold">
                      Count
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {data.roles.length > 0 ? (
                    data.roles.map((list, key) => (
                      <TableRow
                        key={key}
                        className="hover:bg-muted/40 transition-colors"
                      >
                        <TableCell className="font-medium">
                          {list.role}
                        </TableCell>

                        <TableCell className="text-muted-foreground">
                          {list.description}
                        </TableCell>

                        <TableCell className="text-right">
                          <span
                            className={`inline-flex items-center justify-center min-w-[32px] px-2 py-0.5 text-sm font-semibold rounded-full
                  ${
                    list.count > 0
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                          >
                            {list.count}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={3}
                        className="text-center py-6 text-muted-foreground"
                      >
                        No roles found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>

            <Separator />

            <CardFooter className="flex justify-start py-2">
              <Button className="px-6 w-full bg-blue-600 mx-0 hover:bg-blue-800 lg:w-80 lg:mx-10 ">
                Manage Users
              </Button>
            </CardFooter>
          </Card>
          <Card className="mx-5 rounded-none shadow-none border p-0 py-2">
            <CardHeader className="p-0">
              <CardTitle className="text-center text-xl font-semibold tracking-wide">
                Organisation
              </CardTitle>
            </CardHeader>

            <Separator />

            <CardContent className="pt-2">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Level</TableHead>

                    <TableHead className="text-right font-semibold">
                      Count
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {organizationdata.organisation.length > 0 ? (
                    organizationdata.organisation.map((list, key) => (
                      <TableRow
                        key={key}
                        className="hover:bg-muted/40 transition-colors"
                      >
                        <TableCell className="font-medium">
                          {list.level}
                        </TableCell>

                        <TableCell className="text-right">
                          <span
                            className={`inline-flex items-center justify-center min-w-[32px] px-2 py-0.5 text-sm font-semibold rounded-full
                  ${
                    list.count > 0
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                          >
                            {list.count}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={3}
                        className="text-center py-6 text-muted-foreground"
                      >
                        No roles found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>

            <Separator />

            <CardFooter className="flex justify-start py-2">
              <Button className="px-6 w-full bg-blue-600 hover:bg-blue-800 lg:w-80 lg:mx-10 ">
                Manage Users
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

