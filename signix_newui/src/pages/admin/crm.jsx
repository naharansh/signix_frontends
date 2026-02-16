import { Separator } from "../../components/ui/separator";
import { Button } from "../../components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { crmicons } from "../../utils/iconmap";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
export const CRMs = () => {
  return (
    <>
    <div className="w-full my-4 px-3">
  {/* Top Section: Breadcrumb + Date/Time Card */}
  <div className="flex flex-col justify-between items-center my-4 flex-wrap gap-4 lg:flex-row">
    {/* Breadcrumb */}
    <Breadcrumb>
      <BreadcrumbList className="flex text-sm text-gray-600 font-medium overflow-x-auto">
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

    {/* Date/Time Card */}
    <Card className="shadow-none rounded-none px-4 py-0 bg-white border border-none">
      <CardContent>
        <div className="flex items-center justify-between text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <span role="img" aria-label="calendar">📅</span>
            <span className="font-medium">21-Jan-2026</span>
          </div>
          <div className="flex items-center gap-2">
            <span role="img" aria-label="clock">🕒</span>
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

  {/* Dashboard Header */}
  <Card className="shadow-none rounded-none border border-none">
    <CardContent className="p-0 px-3">
      <div className="flex justify-between items-center flex-col lg:flex-row">
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide text-gray-800">
          CRM TRAIL Dashboard
        </h1>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
          <Button className="w-full sm:w-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 hover:bg-green-100 hover:shadow-md transition-transform transform hover:scale-105 focus:ring-2 focus:ring-green-400">
            <img src={crmicons.phone} alt="Dialer Icon" className="w-6 h-6" />
            <span className="text-green-700 font-medium">Dialer</span>
          </Button>
          <Button className="w-full sm:w-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 hover:shadow-md transition-transform transform hover:scale-105 focus:ring-2 focus:ring-blue-400">
            <img src={crmicons.data} alt="Data Icon" className="w-6 h-6" />
            <span className="text-blue-700 font-medium">My Data</span>
          </Button>
          <Button className="w-full sm:w-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 hover:shadow-md transition-transform transform hover:scale-105 focus:ring-2 focus:ring-indigo-400">
            <img src={crmicons.reports} alt="Reports Icon" className="w-6 h-6" />
            <span className="text-indigo-700 font-medium">Reports</span>
          </Button>
          <Button className="w-full sm:w-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 hover:shadow-md transition-transform transform hover:scale-105 focus:ring-2 focus:ring-gray-400">
            <img src={crmicons.configurations} alt="Settings Icon" className="w-6 h-6" />
            <span className="text-gray-700 font-medium">Settings</span>
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>

  {/* Dashboard Cards */}
  <div className="grid grid-cols-1 gap-5 px-3 py-3 lg:grid-cols-3">
    {/* New Leads */}
    <Card className="shadow-none rounded-none p-0 py-2 bg-white border border-gray-200 min-h-[150px]">
      <CardHeader>
        <CardDescription className="text-lg font-semibold text-gray-700">
          New Leads
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="flex flex-col gap-3 items-center lg:items-end">
          <Button className="px-2 py-2 rounded-md w-full lg:w-40" variant="outline">
            <span className="text-yellow-700 font-medium">Unassigned</span>
            <span className="text-yellow-700 font-bold">0</span>
          </Button>
          <Button className="px-2 py-2 rounded-md w-full lg:w-40" variant="outline">
            <span className="text-red-700 font-medium">Assigned</span>
            <span className="text-red-700 font-bold">0</span>
          </Button>
          <Button className="px-2 py-2 rounded-md w-full lg:w-40" variant="outline">
            <span className="text-green-700 font-medium">Accepted</span>
            <span className="text-green-700 font-bold">0</span>
          </Button>
        </div>
      </CardContent>
    </Card>

    {/* Interactions */}
    <Card className="shadow-none rounded-none p-0 py-2 bg-white border border-gray-200 min-h-[150px]">
      <CardHeader>
        <CardDescription className="text-lg font-semibold text-gray-700">
          Interactions
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="flex flex-col gap-3 items-center lg:items-end">
          <Button className="px-2 py-2 rounded-md w-full lg:w-40" variant="outline">
            <span className="text-yellow-700 font-medium">Today</span>
            <span className="text-yellow-700 font-bold">0</span>
          </Button>
          <Button className="px-2 py-2 rounded-md w-full lg:w-40" variant="outline">
            <span className="text-red-700 font-medium">Missed</span>
            <span className="text-red-700 font-bold">0</span>
          </Button>
          <Button className="px-2 py-2 rounded-md w-full lg:w-40" variant="outline">
            <span className="text-green-700 font-medium">Upcoming</span>
            <span className="text-green-700 font-bold">0</span>
          </Button>
        </div>
      </CardContent>
    </Card>

    {/* Revenue */}
    <Card className="shadow-none rounded-none p-0 py-2 bg-white border border-gray-200 min-h-[150px]">
      <CardHeader>
        <CardDescription className="text-lg font-semibold text-gray-700 flex flex-col items-center">
          <h5>Rs 0</h5>
          <h1>January-26 Revenue</h1>
        </CardDescription>
        <Separator />
      </CardHeader>
      <CardContent />
    </Card>
  </div>
</div>
    </>
  );
};
