import { Button } from "../../../../components/ui/Button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Textarea } from "../../../../components/ui/textarea";

export const Add_Sale_Return = () => {
  return (
    <>
      <div className="min-h-screen  py-3">
        <Card className="shadow-none rounded-none mx-5 border border-gray-200">
          <CardContent>
            <div className="grid grid-cols-4 mb-5">
              <div className="flex flex-col mx-4 ">
                <Label className="mb-2">Bill To</Label>
                <Select placeholder="Select Bill to">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col mx-4 ">
                <Label className="mb-2">Ship To</Label>
                <Select placeholder="Select Bill to">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col mx-4 ">
                <Label className="mb-2">Bill From</Label>
                <Select placeholder="Select Bill to">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col mx-4 ">
                <Label className="mb-2">Ship From</Label>
                <Select placeholder="Select Bill to">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Table className="border border-gray-300 rounded-md">
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Voucher Number
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Ref. Voucher No.
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Voucher Date
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Tax Inclusion
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Type
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="border border-gray-300">
                    <Input
                      type="text"
                      placeholder="Enter Voucher No."
                      className="w-full  px-1 py-1"
                    />
                  </TableCell>
                  <TableCell className="border border-gray-300">
                    <Input
                      type="text"
                      placeholder="Days"
                      className="w-full  px-1 py-1"
                    />
                  </TableCell>
                  <TableCell className="border border-gray-300 text-center">
                    <Input type="date" className="w-full px-2 py-1" />
                  </TableCell>
                  <TableCell className="border border-gray-300 text-center">
                    <Select placeholder="Select Bill to">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="border border-gray-300 text-center">
                    <Select placeholder="Select Bill to">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="shadow-none rounded-none mx-5 border border-gray-200 my-4">
          <CardContent>
            <div className="grid grid-cols-4 mb-5">
              <div className="flex flex-col mx-4 ">
                <Label className="mb-2">Bill To</Label>
                <Select placeholder="Select Bill to">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col mx-4 ">
                <Label className="mb-2">Ship To</Label>
                <Select placeholder="Select Bill to">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col mx-4 ">
                <Label className="mb-2">Bill From</Label>
                <Select placeholder="Select Bill to">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col mx-4 ">
                <Label className="mb-2">Ship From</Label>
                <Select placeholder="Select Bill to">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Table className="border border-gray-300 rounded-md">
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="border border-gray-300 font-semibold text-center w-10">
                    S.no
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center w-150">
                    Particulars
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Dr.
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Short Narration
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="border border-gray-300">1</TableCell>
                  <TableCell className="border border-gray-300 ">
                    <Select placeholder="Select Bill to">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="border border-gray-300 text-center">
                    <Input
                      type="text"
                      placeholder="Days"
                      className="w-full  px-1 py-1"
                    />
                  </TableCell>
                  <TableCell className="border border-gray-300 text-center">
                    <Input
                      type="text"
                      placeholder="Days"
                      className="w-full  px-1 py-1"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="shadow-md rounded-none mx-5 border border-gray-200 my-4">
          <CardContent>
            <div className="w-full ">
              <Label>Textarea</Label>
              <Textarea className="rounded-none my-2 h-30 resize-vertical" />
            </div>
            <Button>Terms and Condition</Button>
          </CardContent>
          <CardFooter className="mt-auto">
            <div className="flex justify-end gap-2 w-full">
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
