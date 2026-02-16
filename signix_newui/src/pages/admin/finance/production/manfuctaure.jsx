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

export const Manufactures = () => {
  return (
    <>
      <div className="p-6">
        <Card className="shadow-none rounded-none mx-5 ">
          <CardContent className="p-6">
            <Table className="w-full border-collapse">
              <TableBody>
                <TableRow className="odd:bg-muted/30 even:bg-white hover:bg-muted/40 transition cursor-pointer">
                  <TableCell className="text-muted-foreground px-4 py-2">
                    Branch
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <Input
                      type="text"
                      placeholder="Enter item name"
                      className="h-8 text-sm rounded-sm"
                    />
                  </TableCell>
                </TableRow>

                <TableRow className="odd:bg-muted/30 even:bg-white hover:bg-muted/40 transition cursor-pointer">
                  <TableCell className="text-muted-foreground px-4 py-2">
                    Select GoDown
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <Input
                      type="text"
                      placeholder="Enter unit"
                      className="h-8 text-sm rounded-sm"
                    />
                  </TableCell>
                </TableRow>

                <TableRow className="odd:bg-muted/30 even:bg-white hover:bg-muted/40 transition cursor-pointer">
                  <TableCell className="text-muted-foreground px-4 py-2">
                    Name Of Product
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <Input
                      type="text"
                      placeholder="Enter BOM name"
                      className="h-8 text-sm rounded-sm"
                    />
                  </TableCell>
                </TableRow>
                <TableRow className="odd:bg-muted/30 even:bg-white hover:bg-muted/40 transition cursor-pointer">
                  <TableCell className="text-muted-foreground px-4 py-2">
                    Name Of BOM
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <Input
                      type="text"
                      placeholder="Enter item name"
                      className="h-8 text-sm rounded-sm"
                    />
                  </TableCell>
                </TableRow>

                <TableRow className="odd:bg-muted/30 even:bg-white hover:bg-muted/40 transition cursor-pointer">
                  <TableCell className="text-muted-foreground px-4 py-2">
                    Qty
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <Input
                      type="text"
                      placeholder="Enter unit"
                      className="h-8 text-sm rounded-sm"
                    />
                  </TableCell>
                </TableRow>

                <TableRow className="odd:bg-muted/30 even:bg-white hover:bg-muted/40 transition cursor-pointer">
                  <TableCell className="text-muted-foreground px-4 py-2">
                    Unit
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <Input
                      type="text"
                      placeholder="Enter BOM name"
                      className="h-8 text-sm rounded-sm"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="shadow-none rounded-none mx-5 border border-gray-200 my-4">
          <CardContent>
            <Table className="border border-gray-300 rounded-md">
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="border border-gray-300 font-semibold text-center w-10">
                    S.no
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center w-150">
                    Name Of Item
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Stock Type
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Qty
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Unit
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Amount
                  </TableHead>
                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Short Narration
                  </TableHead>

                  <TableHead className="border border-gray-300 font-semibold text-center">
                    Action
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
                  <TableCell className="border border-gray-300 text-center">
                    <Input
                      type="text"
                      placeholder="Days"
                      className="w-full  px-1 py-1"
                    />
                  </TableCell>
                  <TableCell className="border border-gray-300 text-center"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>

          <CardFooter className="mt-auto">
            <div className="flex justify-end gap-2 w-full">
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </div>
          </CardFooter>
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
