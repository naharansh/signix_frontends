import { Badge } from "../../../../components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";


export default function GSTReturnPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Branch Info Cards */}

      {/* Summary Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Return Summary</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-muted-foreground text-sm">Total Vouchers</p>
            <p className="text-xl font-semibold">0</p>
          </div>

          <div>
            <p className="text-muted-foreground text-sm">Included in Return</p>
            <p className="text-xl font-semibold text-green-600">0</p>
          </div>

          <div>
            <p className="text-muted-foreground text-sm">Not Relevant</p>
            <p className="text-xl font-semibold text-yellow-600">0</p>
          </div>

          <div>
            <p className="text-muted-foreground text-sm">
              Uncertain Transactions
            </p>
            <p className="text-xl font-semibold text-red-600">0</p>
          </div>
        </CardContent>
      </Card>

      {/* Tax Table */}
      <Card>
        <CardHeader>
          <CardTitle>3. Tax on Outward and Reverse Charge Supplies</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableHead>Particualars</TableHead>
              <TableHead>Taxable Amount</TableHead>
              <TableHead>IGST </TableHead>
              <TableHead>CGST </TableHead>
              <TableHead>SGST/UTGST </TableHead>
              <TableHead>Cess </TableHead>
              <TableHead>Taxable Amount </TableHead>
            </TableHeader>
            <TableBody>
              <TableRow className="text-md font-bold">
                <TableCell>
                  3.1Tax on Outward and Reverse Charge Inward Supplies{" "}
                </TableCell>
                <TableCell className="text-center">0.00 </TableCell>
                <TableCell className="text-center">0.00 </TableCell>
                <TableCell className="text-center">0.00 </TableCell>
                <TableCell className="text-center">0.00 </TableCell>
                <TableCell className="text-center">0.00 </TableCell>

                <TableCell className="text-center">0.00 </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className=" px-4 ">
                  3.1 a Outward Taxable Supplies (other than Zero Rated, Nil
                  Rated, and Exempted Supplies)
                </TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className=" px-4 ">
                  3.1 a Outward Taxable Supplies (other than Zero Rated, Nil
                  Rated, and Exempted Supplies)
                </TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className=" px-4 ">
                  3.1 a Outward Taxable Supplies (other than Zero Rated, Nil
                  Rated, and Exempted Supplies)
                </TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className=" px-4 ">
                  3.1 a Outward Taxable Supplies (other than Zero Rated, Nil
                  Rated, and Exempted Supplies)
                </TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className=" px-4 ">
                  3.1 a Outward Taxable Supplies (other than Zero Rated, Nil
                  Rated, and Exempted Supplies)
                </TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
              </TableRow>
              <TableRow className="text-md font-bold">
                <TableCell>3.2 InterState Supplies </TableCell>
                <TableCell className="text-center">0.00 </TableCell>
                <TableCell className="text-center">0.00 </TableCell>
                <TableCell className="text-center">0.00 </TableCell>
                <TableCell className="text-center">0.00 </TableCell>
                <TableCell className="text-center">0.00 </TableCell>

                <TableCell className="text-center">0.00 </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className=" px-4 ">
                  3.2.1 Supplies to Unregistered Persons
                </TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className=" px-4 ">
                  3.2.2 Supplies to Composition Dealers
                </TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className=" px-4 ">
                  3.2.3 Supplies to UIN holders
                </TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
              </TableRow>
              <TableRow className="text-md font-bold">
                <TableCell>
                  5 Exempt, Nil Rated, and Non-GST Inward Supplies{" "}
                </TableCell>
                <TableCell className="text-center">0.00 </TableCell>
                <TableCell className="text-center">0.00 </TableCell>
                <TableCell className="text-center">0.00 </TableCell>
                <TableCell className="text-center">0.00 </TableCell>
                <TableCell className="text-center">0.00 </TableCell>

                <TableCell className="text-center">0.00 </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className=" px-4 ">
                  From a Supplier under Composition Scheme, Exempt and Nil Rated
                  Supplies
                </TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className=" px-4 ">Non-GST Supply</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
              </TableRow>
              <TableRow className="text-md font-bold">
                <TableCell>
                  6.1Interest, Late Fee, Penalty and Others{" "}
                </TableCell>
                <TableCell className="text-center">0.00 </TableCell>
                <TableCell className="text-center">0.00 </TableCell>
                <TableCell className="text-center">0.00 </TableCell>
                <TableCell className="text-center">0.00 </TableCell>
                <TableCell className="text-center">0.00 </TableCell>

                <TableCell className="text-center">0.00 </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className=" px-4 ">Interest</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className=" px-4 ">Late Fee</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className=" px-4 ">Penalty</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className=" px-4 ">Other Charges</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
                <TableCell className="text-center">0.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
