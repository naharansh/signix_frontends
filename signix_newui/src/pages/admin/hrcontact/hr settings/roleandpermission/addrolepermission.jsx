import { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "../../../../../components/ui/card";
import { Separator } from "../../../../../components/ui/separator";
import { Input } from "../../../../../components/ui/input";
import { Textarea } from "../../../../../components/ui/textarea";
import { Button } from "../../../../../components/ui/Button";
import { Checkbox } from "../../../../../components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../../components/ui/accordion";

export default function CreateRolePage() {
  const [step, setStep] = useState(1);

  return (
    <div className="p-6 space-y-4">
      {/* Breadcrumb */}
      <p className="text-sm text-muted-foreground">
        HRM CONNECT / HR Settings / Roles and Permissions /{" "}
        <span className="text-primary font-medium">Create New Role</span>
      </p>

      <Card>
        <CardHeader>
          <Stepper currentStep={step} />
        </CardHeader>

        <Separator />

        <CardContent className="pt-6">
          {step === 1 && <BasicInfoStep onNext={() => setStep(2)} />}
          {step === 2 && (
            <PermissionsStep
              onBack={() => setStep(1)}
              onNext={() => setStep(3)}
            />
          )}
          {step === 3 && <ReviewStep onBack={() => setStep(2)} />}
        </CardContent>
      </Card>
    </div>
  );
}
const steps = ["Basic Information", "Permissions", "Review"];

function Stepper({ currentStep }) {
  return (
    <div className="flex justify-between">
      {steps.map((label, index) => {
        const step = index + 1;
        const active = step === currentStep;

        return (
          <div key={label} className="flex items-center gap-2">
            <div
              className={`h-7 w-7 rounded-full flex items-center justify-center text-sm font-medium
              ${active ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}
            >
              {step}
            </div>
            <span
              className={`text-sm ${
                active ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function BasicInfoStep({ onNext }) {
  return (
    <div className="max-w-xl space-y-4">
      <Input placeholder="Role Name *" />
      <Textarea placeholder="Role Description" />
      <Input placeholder="Assign Godown" />

      <Button onClick={onNext}>Next</Button>
    </div>
  );
}

/* ---------------- PERMISSION ROW ---------------- */

/* ---------------- ROW COMPONENT ---------------- */

function PermissionRow({ label, checked, onChange }) {
  return (
    <div className="flex items-center justify-between p-3 bg-muted rounded-md">
      <div className="flex items-center gap-2">
        <Checkbox checked={checked} onCheckedChange={onChange} />
        <span className="text-sm text-primary underline cursor-pointer">
          {label}
        </span>
      </div>

      <div className="flex gap-2">
        {["View", "Add", "Edit", "Delete", "Import", "Export", "Admin"].map(
          (item) => (
            <Button key={item} size="sm" variant="outline" disabled={!checked}>
              {item}
            </Button>
          ),
        )}
      </div>
    </div>
  );
}

/* ---------------- DATA ---------------- */

const content = {
  modules: [
    {
      id: 510,
      name: "Vouchers",
      type: "directory",
      children: [
        {
          id: 1004,
          name: "Sale Management",
          type: "directory",
          children: [
            { id: 1013, name: "Sale Invoice", type: "page" },
            { id: 2161, name: "Sale TIDs", type: "page" },
            {
              id: 1015,
              name: "Sale Return (Cr. Note with Item)",
              type: "page",
            },
            { id: 2162, name: "Sale Return TIDs", type: "page" },
            { id: 1509, name: "BI Sales", type: "page" },
            { id: 2158, name: "TIDs", type: "page" },
            { id: 3101, name: "Recurring Instructions", type: "page" },
            { id: 3102, name: "Recurring Projection", type: "page" },
            { id: 3103, name: "Data Analyst Sales", type: "page" },
          ],
        },
        {
          id: 1007,
          name: "Purchase Management",
          type: "directory",
          children: [
            { id: 1020, name: "Purchase Invoice", type: "page" },
            { id: 2163, name: "Purchase TIDs", type: "page" },
            {
              id: 1022,
              name: "Purchase Return (Dr. Note with Item)",
              type: "page",
            },
            { id: 2164, name: "Purchase Return TIDs", type: "page" },
          ],
        },
        {
          id: 1005,
          name: "Receipt Management",
          type: "directory",
          children: [
            { id: 1016, name: "Receipts", type: "page" },
            { id: 1017, name: "Proposed Receipt", type: "page" },
          ],
        },
        {
          id: 1006,
          name: "Payment Management",
          type: "directory",
          children: [
            { id: 1018, name: "Payments", type: "page" },
            { id: 1019, name: "Proposed Payment", type: "page" },
          ],
        },
        {
          id: 3701,
          name: "Proposed Payment Management",
          type: "directory",
          children: [
            { id: 3702, name: "Pending", type: "page" },
            { id: 3703, name: "Approved", type: "page" },
            { id: 3704, name: "Declined", type: "page" },
            { id: 3705, name: "All", type: "page" },
          ],
        },
        {
          id: 3742,
          name: "Contra Management",
          type: "directory",
          children: [
            { id: 3743, name: "Proposed Contra", type: "page" },
            { id: 2976, name: "Contra", type: "page" },
          ],
        },
        {
          id: 2950,
          name: "Delivery Note Management",
          type: "directory",
          children: [
            { id: 1539, name: "Delivery Note", type: "page" },
            { id: 2952, name: "Delivery Note TIDs", type: "page" },
            { id: 2418, name: "Rejection In", type: "page" },
            { id: 2953, name: "Rejection In TIDs", type: "page" },
          ],
        },
        {
          id: 2951,
          name: "Receipt Note Management",
          type: "directory",
          children: [
            { id: 1540, name: "Receipt Note", type: "page" },
            { id: 2957, name: "Receipt Note TIDs", type: "page" },
            { id: 2419, name: "Rejection Out", type: "page" },
            { id: 2958, name: "Rejection Out TIDs", type: "page" },
          ],
        },
        {
          id: 3394,
          name: "Material In (Internal)",
          type: "directory",
          children: [
            { id: 3396, name: "Material In", type: "page" },
            { id: 3397, name: "Material In TIDs", type: "page" },
          ],
        },
        {
          id: 3395,
          name: "Material Out (Internal)",
          type: "directory",
          children: [
            { id: 3398, name: "Material Out", type: "page" },
            { id: 3399, name: "Material Out TIDs", type: "page" },
          ],
        },
        { id: 1541, name: "Journal", type: "page" },
        {
          id: 2143,
          name: "Proposals",
          type: "directory",
          children: [
            { id: 2154, name: "Proforma Invoices", type: "page" },
            { id: 2155, name: "Proforma TIDs", type: "page" },
            { id: 2156, name: "Quotations", type: "page" },
            { id: 2157, name: "Quotations TIDs", type: "page" },
          ],
        },
        {
          id: 2823,
          name: "Purchase Order",
          type: "directory",
          children: [
            { id: 2840, name: "Pending", type: "page" },
            { id: 2824, name: "Purchase Order (Process 1)", type: "page" },
            { id: 2841, name: "Approved", type: "page" },
            { id: 2842, name: "All", type: "page" },
          ],
        },
        { id: 3731, name: "Material Request", type: "page" },
        {
          id: 2999,
          name: "Production",
          type: "directory",
          children: [
            { id: 3000, name: "BOM", type: "page" },
            { id: 3002, name: "Mfg Journal", type: "page" },
            { id: 2854, name: "Stock Journal", type: "page" },
          ],
        },
        {
          id: 3546,
          name: "Purchase Via PO",
          type: "directory",
          children: [
            {
              id: 3553,
              name: "Purchase Order",
              type: "directory",
              children: [
                { id: 3554, name: "Issued", type: "page" },
                { id: 3555, name: "Delivered", type: "page" },
                { id: 3556, name: "Invoiced", type: "page" },
                { id: 3557, name: "All", type: "page" },
              ],
            },
            {
              id: 3558,
              name: "Deliveries",
              type: "directory",
              children: [
                { id: 3564, name: "Pending", type: "page" },
                { id: 3565, name: "QC Done", type: "page" },
                { id: 3566, name: "Packing Done", type: "page" },
                { id: 3567, name: "GRN Done", type: "page" },
                { id: 3568, name: "Invoiced", type: "page" },
              ],
            },
          ],
        },
        {
          id: 3579,
          name: "Quality Check",
          type: "directory",
          children: [
            { id: 3580, name: "Pending", type: "page" },
            { id: 3580, name: "QC Done", type: "page" },
          ],
        },
        {
          id: 3585,
          name: "Barcode ",
          type: "directory",
          children: [],
        },
        {
          id: 3585,
          name: "Barcode",
          type: "directory",
          children: [
            {
              id: 3588,
              name: "Barcode Batches",
              type: "directory",
              children: [
                { id: 3589, name: "All", type: "page" },
                { id: 3590, name: "Active", type: "page" },
                { id: 3591, name: "Completed", type: "page" },
              ],
            },
            {
              id: 3592,
              name: "Barcode",
              type: "directory",
              children: [
                { id: 3593, name: "All", type: "page" },
                { id: 3594, name: "Used", type: "page" },
                { id: 3595, name: "Unused", type: "page" },
              ],
            },
          ],
        },
        { id: 3550, name: "Packaging", type: "page" },
        { id: 3551, name: "GRN", type: "page" },
        {
          id: 3560,
          name: "MDM",
          type: "directory",
          children: [
            { id: 3561, name: "Inspection Areas", type: "page" },
            { id: 3562, name: "Packing Tables", type: "page" },
            { id: 3573, name: "Pickup Area", type: "page" },
            { id: 3574, name: "Allocation Area", type: "page" },
          ],
        },
        { id: 3552, name: "Invoices (Draft)", type: "page" },
      ],
    },
    {
      id: 511,
      name: "Ledger Management",
      type: "directory",
      children: [
        {
          id: 2747,
          name: "Sundry Debtors (Credit Limit) History",
          type: "page",
        },
        { id: 1452, name: "Sundry Debtors", type: "page" },
        { id: 1732, name: "Sundry Creditors", type: "page" },
        { id: 1453, name: "Company & Branches", type: "page" },
        { id: 2936, name: "L2 Customers", type: "page" },
        { id: 3427, name: "Outlets CH", type: "page" },
        { id: 526, name: "All Ledgers", type: "page" },
        { id: 2818, name: "Payment Gateway", type: "page" },
        { id: 2100, name: "Bank Accounts", type: "page" },
        { id: 2893, name: "Cash-in-Hand", type: "page" },
        { id: 527, name: "Ledger Groups", type: "page" },
        { id: 2542, name: "Credit Limit", type: "page" },
        { id: 3084, name: "Opening Balance", type: "page" },
        { id: 3683, name: "L2 Suppliers", type: "page" },
        { id: 2101, name: "Duties & Taxes", type: "page" },
        { id: 2102, name: "Indirect Incomes", type: "page" },
        { id: 2103, name: "Indirect Expenses", type: "page" },
        { id: 2104, name: "Fixed Assets", type: "page" },
        { id: 2106, name: "Sales Accounts", type: "page" },
        { id: 2107, name: "Purchase Accounts", type: "page" },
        { id: 1746, name: "Freelancers", type: "page" },
        { id: 1759, name: "Sub Agents", type: "page" },
        { id: 1760, name: "Delivery Addresses", type: "page" },
        { id: 2165, name: "Customers on Map", type: "page" },
        { id: 3313, name: "Sundry Debtors (Employees)", type: "page" },
        { id: 3406, name: "Sites", type: "page" },
        { id: 2937, name: "L3 Customers", type: "page" },
        { id: 3726, name: "Direct Expenses", type: "page" },
        { id: 3725, name: "Direct Incomes", type: "page" },
      ],
    },
    {
      id: 1473,
      name: "Item Management",
      type: "directory",
      children: [
        { id: 1478, name: "Item Master", type: "page" },
        { id: 3314, name: "Item Wise Stock", type: "page" },
        {
          id: 1476,
          name: "Item Settings",
          type: "directory",
          children: [
            { id: 1480, name: "Category", type: "page" },
            { id: 1481, name: "Sub Category", type: "page" },
            { id: 1482, name: "Sub Sub Category", type: "page" },
            { id: 1483, name: "Department", type: "page" },
            { id: 1491, name: "Item Type", type: "page" },
            { id: 1484, name: "Brands", type: "page" },
            { id: 1485, name: "Models", type: "page" },
            { id: 1486, name: "HSN SAC", type: "page" },
          ],
        },
        {
          id: 1502,
          name: "Unit Management",
          type: "directory",
          children: [
            { id: 1503, name: "Units", type: "page" },
            { id: 1505, name: "Sizes", type: "page" },
            { id: 2321, name: "Decimal Settings", type: "page" },
            { id: 3222, name: "UQC", type: "page" },
          ],
        },
        { id: 3724, name: "Material Centers", type: "page" },
        {
          id: 3569,
          name: "Membership Settings",
          type: "directory",
          children: [
            { id: 3570, name: "Membership Plans", type: "page" },
            { id: 3571, name: "Subscribed Members", type: "page" },
            { id: 3672, name: "Fee & Charges", type: "page" },
            { id: 3749, name: "Wallet Coupons", type: "page" },
            { id: 3750, name: "Coupon Ledger", type: "page" },
          ],
        },
        {
          id: 3719,
          name: "Subscription Settings",
          type: "directory",
          children: [
            { id: 3720, name: "Subscription Plan", type: "page" },
            { id: 3721, name: "Subscription Rate", type: "page" },
            { id: 3722, name: "Subscribers", type: "page" },
          ],
        },
        {
          id: 515,
          name: "Financial Statements",
          type: "directory",
          children: [
            { id: 1027, name: "Day Book", type: "page" },
            {
              id: 2131,
              name: "Trial Balance",
              type: "directory",
              children: [
                { id: 1023, name: "Trial Balance (Regular)", type: "page" },
                {
                  id: 2132,
                  name: "Trial Balance (with Open Bal)",
                  type: "page",
                },
              ],
            },
            { id: 1025, name: "Trading Account", type: "page" },
            { id: 1026, name: "Profit & Loss A/c", type: "page" },
            { id: 1024, name: "Balance Sheet", type: "page" },
          ],
        },
        {
          id: 1228,
          name: "Inventory",
          type: "directory",
          children: [
            {
              id: 1621,
              name: "STOCK MASTERS",
              type: "directory",
              children: [
                { id: 1624, name: "Batch Master", type: "page" },
                { id: 1625, name: "Serial Master", type: "page" },
              ],
            },
            {
              id: 1622,
              name: "STOCK IN HAND",
              type: "directory",
              children: [
                {
                  id: 1626,
                  name: "Stock (Batch & Item & Unit & Location Wise)",
                  type: "page",
                },
                {
                  id: 1627,
                  name: "Stock (Item & Unit & Location Wise)",
                  type: "page",
                },
              ],
            },
            { id: 1623, name: "TRADE HISTORY", type: "page" },
            { id: 3435, name: "Godown Summary", type: "page" },
            { id: 3444, name: "Distributor Summary", type: "page" },
          ],
        },
        {
          id: 1037,
          name: "Assets Audit Console",
          type: "directory",
          children: [
            {
              id: 1559,
              name: "Asset Audit Process 1",
              type: "directory",
              children: [
                { id: 1560, name: "Asset Registrations", type: "page" },
                { id: 1564, name: "BOM", type: "page" },
                { id: 1565, name: "Asset Groups", type: "page" },
                { id: 1567, name: "Asset Selection List", type: "page" },
              ],
            },
          ],
        },
        {
          id: 517,
          name: "Barcode Management",
          type: "directory",
          children: [
            { id: 2844, name: "Barcode Settings", type: "page" },
            { id: 2845, name: "Paper Size", type: "page" },
            { id: 2846, name: "Label Contents", type: "page" },
            { id: 2847, name: "Field Tags", type: "page" },
          ],
        },
        {
          id: 2811,
          name: "GST Reports",
          type: "directory",
          children: [
            { id: 2812, name: "GSTR-1", type: "page" },
            { id: 2813, name: "GSTR-2", type: "page" },
            { id: 2814, name: "GSTR-3B", type: "page" },
          ],
        },
        {
          id: 3530,
          name: "Contact Management",
          type: "directory",
          children: [
            { id: 3531, name: "Contact Groups", type: "page" },
            { id: 3532, name: "Contacts", type: "page" },
          ],
        },
        {
          id: 2792,
          name: "Whitebills Reports",
          type: "directory",
          children: [
            { id: 2788, name: "Outstanding Collection Amt", type: "page" },
            { id: 2793, name: "Outstanding Payments Amt", type: "page" },
            { id: 2794, name: "Unadjusted Vouchers", type: "page" },
            { id: 2943, name: "Outstanding Collection Material", type: "page" },
          ],
        },
        { id: 514, name: "Finance Settings", type: "directory" },
        {
          id: 759,
          name: "Country Planner",
          type: "directory",
          children: [
            { id: 760, name: "Country", type: "page" },
            { id: 761, name: "State", type: "page" },
            { id: 762, name: "City", type: "page" },
            { id: 763, name: "Pincode", type: "page" },
            { id: 1836, name: "Locations", type: "page" },
          ],
        },
        {
          id: 1703,
          name: "Payment Gateway",
          type: "directory",
          children: [
            {
              id: 1705,
              name: "Cashfree",
              type: "directory",
              children: [
                { id: 1706, name: "Cashfree API Keys", type: "page" },
                { id: 1761, name: "Transactions (Orders)", type: "page" },
              ],
            },
            {
              id: 2252,
              name: "Easebuzz",
              type: "directory",
              children: [
                { id: 2253, name: "Easebuzz API Keys", type: "page" },
                { id: 2254, name: "Transactions (Orders)", type: "page" },
              ],
            },
            {
              id: 3330,
              name: "Paytm",
              type: "directory",
              children: [
                { id: 3331, name: "Paytm API Keys", type: "page" },
                { id: 3332, name: "Transactions (Orders)", type: "page" },
              ],
            },
            {
              id: 2611,
              name: "Kredmint",
              type: "directory",
              children: [
                { id: 2726, name: "Kredmint API Keys", type: "page" },
                { id: 2730, name: "Transations (Order)", type: "page" },
              ],
            },
            { id: 2729, name: "Retailer Management", type: "page" },
            {
              id: 3470,
              name: "ICICI E Collection",
              type: "directory",
              children: [
                { id: 3471, name: "ICICI Webhook", type: "page" },
                { id: 3472, name: "Hold API Logs", type: "page" },
                { id: 3473, name: "Transaction Logs", type: "page" },
              ],
            },
            {
              id: 3563,
              name: "Easebuzz Scan And Pay",
              type: "directory",
              children: [
                { id: 3442, name: "Insta Collect API Keys", type: "page" },
                {
                  id: 3443,
                  name: "Insta Collect Transactions (Orders)",
                  type: "page",
                },
              ],
            },
            {
              id: 3727,
              name: "Easebuzz Virtual Account",
              type: "directory",
              children: [
                { id: 3729, name: "Virtual Account API Keys", type: "page" },
                { id: 3728, name: "Virtual Account", type: "page" },
                {
                  id: 3730,
                  name: "Virtual Account Transactions (Orders)",
                  type: "page",
                },
              ],
            },
          ],
        },
        {
          id: 1893,
          name: "Voucher Customizations",
          type: "directory",
          children: [
            { id: 1894, name: "Voucher Series Settings", type: "page" },
            { id: 1895, name: "Voucher Types", type: "page" },
          ],
        },
        {
          id: 2270,
          name: "GST Plugins",
          type: "directory",
          children: [
            { id: 2271, name: "E-Invoice Configuration", type: "page" },
          ],
        },
        { id: 2819, name: "Voucher Feature", type: "page" },
        {
          id: 3328,
          name: "Tally Plugins",
          type: "directory",
          children: [{ id: 3329, name: "Tally Configuration", type: "page" }],
        },
        { id: 3633, name: "Xml to Excel Converter", type: "page" },
        { id: 2821, name: "Terms and Conditions", type: "page" },
        {
          id: 3477,
          name: "Voucher Settings",
          type: "directory",
          children: [
            { id: 3478, name: "Payment Terms", type: "page" },
            { id: 3479, name: "Delivery Mode", type: "page" },
            { id: 3480, name: "Dispatch Mode", type: "page" },
            { id: 3481, name: "Sale Type", type: "page" },
          ],
        },
        {
          id: 3533,
          name: "Payout",
          type: "directory",
          children: [
            {
              id: 3575,
              name: "ICICI Payout",
              type: "directory",
              children: [
                { id: 3535, name: "ICICI Payout", type: "page" },
                { id: 3576, name: "Transactions", type: "page" },
              ],
            },
          ],
        },
        {
          id: 3537,
          name: "Delivery Plugins",
          type: "directory",
          children: [
            { id: 3538, name: "Delivery Partners", type: "page" },
            { id: 3539, name: "Delivery One", type: "page" },
            { id: 3540, name: "Nimbus Post", type: "page" },
          ],
        },
        { id: 3710, name: "Insensitive Ledger", type: "page" },
      ],
    },
  ],
};
const file={
  modules:[
       {
      id: 2738,
      name: "Dashboard",
      type: "directory",
      children: [
        { id: 2740, name: "Files (Page Id : 2971)", type: "page" },
      
      ],
    },
   
  ]
}
const sms = {
  modules: [
    {
      id: 2738,
      name: "SMS Reports",
      type: "directory",
      children: [
        { id: 2740, name: "SMS Sent History", type: "page" },
        { id: 2741, name: "SMS Recharge", type: "page" },
        { id: 2742, name: "Check Balance", type: "page" },
      ],
    },
    {
      id: 2739,
      name: "Configurations",
      type: "directory",
      children: [
        { id: 2743, name: "DLT Entity ID", type: "page" },
        { id: 2744, name: "Sender ID", type: "page" },
        { id: 2745, name: "Templates", type: "page" },
        { id: 2746, name: "Variables", type: "page" },
      ],
    },
  ],
};
const data={
  "modules": [
    {
      "id": 3119,
      "name": "Dashboard",
      "type": "directory",
      "children": [
        { "id": 3174, "name": "Data Entry", "type": "page" }
      ]
    },
    {
      "id": 3121,
      "name": "Settings",
      "type": "directory",
      "children": [
        { "id": 3126, "name": "Process", "type": "page" },
        { "id": 3123, "name": "Question", "type": "page" },
        { "id": 3173, "name": "Answer", "type": "page" },
        { "id": 3125, "name": "Input Type", "type": "page" }
      ]
    },
    {
      "id": 3232,
      "name": "Asset Management",
      "type": "directory",
      "children": []
    }
  ]
}
const task={
  "modules": [
    {
      "id": 3320,
      "name": "TASK TRAIL Dashboard",
      "type": "directory",
      "children": [
        {
          "id": 3203,
          "name": "Dashboard",
          "type": "directory",
          "children": []
        },
        {
          "id": 3204,
          "name": "Settings",
          "type": "directory",
          "children": []
        },
        {
          "id": 3299,
          "name": "Users",
          "type": "directory",
          "children": [
            { "id": 3300, "name": "Task Team Member", "type": "page" },
            { "id": 3306, "name": "TL", "type": "page" },
            { "id": 3302, "name": "Executive", "type": "page" },
            { "id": 3303, "name": "Role", "type": "page" }
          ]
        },
        {
          "id": 3207,
          "name": "List",
          "type": "page"
        },
        {
          "id": 3315,
          "name": "Data List",
          "type": "directory",
          "children": [
            { "id": 3316, "name": "TimeLine", "type": "page" }
          ]
        },
        {
          "id": 3340,
          "name": "My Data",
          "type": "directory",
          "children": [
            { "id": 3205, "name": "Tasks", "type": "page" },
            { "id": 3342, "name": "Task Create by Me", "type": "page" }
          ]
        }
      ]
    }
  ]
}
const download={
  "modules": [
    {
      "id": 3439,
      "name": "Download",
      "type": "directory",
      "children": [
        { "id": 3440, "name": "Download History", "type": "page" },
        {
          "id": 3445,
          "name": "User",
          "type": "directory",
          "children": [
            { "id": 3446, "name": "Download User List", "type": "page" },
            { "id": 3447, "name": "Role", "type": "page" },
            { "id": 3448, "name": "TL", "type": "page" },
            { "id": 3449, "name": "Executive", "type": "page" }
          ]
        },
        { "id": 3441, "name": "Download Settings", "type": "page" }
      ]
    }
  ]
}

const outlet={
  "modules": [
    {
      "id": 3148,
      "name": "Dashboard",
      "type": "directory",
      "children": []
    },
    {
      "id": 3150,
      "name": "Reports",
      "type": "directory",
      "children": [
        { "id": 2522, "name": "Sub Category Wise Demand", "type": "page" },
        { "id": 2523, "name": "Item Wise Demand", "type": "page" },
        { "id": 2524, "name": "Route Wise Demand", "type": "page" },
        { "id": 3436, "name": "Route Wise Demand (Today)", "type": "page" },
        { "id": 2525, "name": "Distributor Wise Demand", "type": "page" },
        { "id": 2543, "name": "Status Wise Report", "type": "page" },
        { "id": 3131, "name": "L2 Ledger Bal", "type": "page" },
        { "id": 3432, "name": "Distance Logs", "type": "page" }
      ]
    },
    {
      "id": 3200,
      "name": "Orders",
      "type": "directory",
      "children": [
        {
          "id": 3190,
          "name": "L1 Orders",
          "type": "directory",
          "children": [
            { "id": 3011, "name": "Pending", "type": "page" },
            { "id": 3012, "name": "Accepted", "type": "page" },
            { "id": 3462, "name": "Availability Passed", "type": "page" },
            { "id": 3463, "name": "Material Issued", "type": "page" },
            { "id": 3464, "name": "Invoiced", "type": "page" },
            { "id": 3013, "name": "Dispatched", "type": "page" },
            { "id": 3014, "name": "E-Invoiced", "type": "page" },
            { "id": 3015, "name": "Cancelled", "type": "page" },
            { "id": 3016, "name": "Delivered", "type": "page" },
            { "id": 3322, "name": "Not Delivered", "type": "page" },
            { "id": 3017, "name": "All Orders", "type": "page" },
            { "id": 3018, "name": "All TIDs", "type": "page" },
            { "id": 3529, "name": "Recurring Instructions", "type": "page" },
            { "id": 3544, "name": "AI Agent - Data Analyst Sale Order", "type": "page" }
          ]
        },
        {
          "id": 3192,
          "name": "L2 Orders",
          "type": "directory",
          "children": [
            { "id": 3019, "name": "Pending", "type": "page" },
            { "id": 3020, "name": "Invoiced", "type": "page" },
            { "id": 3021, "name": "Cancelled", "type": "page" },
            { "id": 3022, "name": "All", "type": "page" },
            { "id": 3023, "name": "All TIDs", "type": "page" },
            { "id": 3559, "name": "AI Agent - Data Analyst L2 Sale Order", "type": "page" }
          ]
        }
      ]
    },
    {
      "id": 3201,
      "name": "Dispatch",
      "type": "directory",
      "children": [
        {
          "id": 3199,
          "name": "L1 Adv Dispatch",
          "type": "directory",
          "children": [
            { "id": 2380, "name": "Vehicle Check In", "type": "page" },
            { "id": 2381, "name": "Unload", "type": "page" },
            { "id": 2382, "name": "Create Vehicle Plan", "type": "page" },
            { "id": 2415, "name": "Loaded (Item Grp. Wise)", "type": "page" },
            { "id": 3405, "name": "Loaded (Customer Wise)", "type": "page" },
            { "id": 2416, "name": "Dispatched", "type": "page" },
            { "id": 2520, "name": "E-Invoiced", "type": "page" },
            { "id": 2385, "name": "Gate Out", "type": "page" },
            { "id": 3257, "name": "Dispatch Slip", "type": "page" },
            { "id": 3634, "name": "Dispatch Slip TID", "type": "page" }
          ]
        },
        {
          "id": 3208,
          "name": "L1 Simple Dispatch",
          "type": "directory",
          "children": [
            { "id": 3214, "name": "Gate In", "type": "page" },
            { "id": 3216, "name": "Create Vehicle Plan", "type": "page" },
            { "id": 3217, "name": "Invoiced", "type": "page" },
            { "id": 3215, "name": "E-Invoiced", "type": "page" },
            { "id": 3218, "name": "Gate Out", "type": "page" },
            { "id": 3219, "name": "Dispatch Settings", "type": "page" }
          ]
        },
        {
          "id": 3309,
          "name": "Van Dispatch",
          "type": "directory",
          "children": [
            { "id": 3312, "name": "Load Slip", "type": "page" },
            { "id": 3310, "name": "L1 Van Dispatch", "type": "directory", "children": [] },
            { "id": 3311, "name": "L2 Van Dispatch", "type": "directory", "children": [] }
          ]
        },
        { "id": 3327, "name": "Dispatch Team", "type": "page" }
      ]
    },
    {
      "id": 3202,
      "name": "PJP",
      "type": "directory",
      "children": [
        {
          "id": 3223,
          "name": "L1 PJP",
          "type": "directory",
          "children": [
            { "id": 3225, "name": "Distributor PJP", "type": "page" },
            { "id": 3430, "name": "WH PJP", "type": "page" },
            { "id": 3228, "name": "L1 Activities", "type": "page" },
            { "id": 3187, "name": "L1 Logs Old", "type": "page" },
            { "id": 3583, "name": "L1 Individual EOD Report", "type": "page" },
            { "id": 3230, "name": "L1 Team EOD Report", "type": "page" },
            { "id": 3326, "name": "L1 PJP EOD Report", "type": "page" },
            { "id": 3453, "name": "L1 EOM Report", "type": "page" }
          ]
        },
        {
          "id": 3224,
          "name": "L2 PJP",
          "type": "directory",
          "children": [
            { "id": 3181, "name": "Beat PJP", "type": "page" },
            { "id": 3431, "name": "WH Beat PJP", "type": "page" },
            { "id": 3229, "name": "L2 Activities", "type": "page" },
            { "id": 3584, "name": "L2 Individual EOD Report", "type": "page" },
            { "id": 3231, "name": "L2 Team EOD Report", "type": "page" },
            { "id": 3267, "name": "L2 PJP EOD Report", "type": "page" },
            { "id": 3454, "name": "L2 EOM Report", "type": "page" }
          ]
        },
        { "id": 3186, "name": "Activity Type", "type": "page" }
      ]
    },
      {
      "id": 3221,
      "name": "Price List",
      "type": "directory",
      "children": [
        { "id": 3412, "name": "Division", "type": "page" },
        { "id": 3030, "name": "Price Contract", "type": "page" },
        { "id": 3323, "name": "Price List", "type": "page" },
        { "id": 3390, "name": "Discount List", "type": "page" },
        { "id": 3220, "name": "Offers & Schemes", "type": "page" },
        { "id": 3391, "name": "Price Settings", "type": "page" },
        { "id": 3258, "name": "Geo Tracker", "type": "page" }
      ]
    },
    {
      "id": 3152,
      "name": "Settings",
      "type": "directory",
      "children": [
        {
          "id": 3154,
          "name": "User",
          "type": "directory",
          "children": [
            { "id": 3162, "name": "Sale Team Members", "type": "page" },
            { "id": 3163, "name": "RSM", "type": "page" },
            { "id": 3164, "name": "ASM", "type": "page" },
            { "id": 3176, "name": "DSO", "type": "page" },
            { "id": 3167, "name": "BO", "type": "page" },
            { "id": 3166, "name": "Role", "type": "page" }
          ]
        }
      ]
    },
    {
      "id": 3153,
      "name": "Organization",
      "type": "directory",
      "children": [
        {
          "id": 3450,
          "name": "Sale Route Planner",
          "type": "directory",
          "children": [
            { "id": 3155, "name": "Zone", "type": "page" },
            { "id": 3157, "name": "Warehouse Region", "type": "page" },
            { "id": 3158, "name": "Warehouse Area", "type": "page" },
            { "id": 3160, "name": "Distributor Beat", "type": "page" },
            { "id": 3419, "name": "WH Beat", "type": "page" },
            { "id": 3542, "name": "Assign WH Beat to BO", "type": "page" },
            {
              "id": 3420,
              "name": "Assign Area (Divison Wise)",
              "type": "directory",
              "children": [
                { "id": 3421, "name": "Assign Zone (ZM)", "type": "page" },
                { "id": 3422, "name": "Assign Region (RSM)", "type": "page" },
                { "id": 3423, "name": "Assign Area (ASM)", "type": "page" },
                { "id": 3424, "name": "Assign Beat (Distribitor)", "type": "page" }
              ]
            }
          ]
        },
        {
          "id": 3451,
          "name": "Delivery Route Planner",
          "type": "directory",
          "children": [
            { "id": 2328, "name": "Delivery Routes", "type": "page" },
            { "id": 3465, "name": "Assign Distributor to BO", "type": "page" }
          ]
        }
      ]
    },
    {
      "id": 3466,
      "name": "Target vs Ach",
      "type": "directory",
      "children": [
        { "id": 3467, "name": "Target vs Ach Amt", "type": "page" },
        { "id": 3468, "name": "Target vs Ach Qty", "type": "page" },
        { "id": 3495, "name": "Ach Logs", "type": "page" }
      ]
    },
    { "id": 3709, "name": "Purchase Routes", "type": "page" },
    { "id": 3325, "name": "Godown", "type": "page" },
    { "id": 3179, "name": "Warehouse", "type": "page" },
    { "id": 3180, "name": "Distributor (L1 Customer)", "type": "page" },
    { "id": 3161, "name": "Outlet (L2 Customer)", "type": "page" },
    { "id": 3185, "name": "Zero Order Reason", "type": "page" },
    { "id": 3321, "name": "Not Delivered Reasons", "type": "page" },
    { "id": 3545, "name": "Vacation", "type": "page" }
  ]}
  const crm={
  "modules": [
    {
      "id": 3116,
      "name": "CRM TRAIL Dashboard",
      "type": "directory",
      "children": [
        {
          "id": 2855,
          "name": "Dashboard",
          "type": "directory",
          "children": [
            { "id": 2858, "name": "Leads", "type": "page" }
          ]
        },
        {
          "id": 2972,
          "name": "Dialer",
          "type": "directory",
          "children": [
            { "id": 2978, "name": "New", "type": "page" },
            { "id": 2980, "name": "Interactions", "type": "page" },
            { "id": 2979, "name": "Drop", "type": "page" },
            { "id": 2973, "name": "All", "type": "page" }
          ]
        },
        {
          "id": 2928,
          "name": "Leaderboard",
          "type": "directory",
          "children": [
            {
              "id": 3093,
              "name": "Reports",
              "type": "directory",
              "children": [
                { "id": 3289, "name": "Milestone", "type": "page" },
                { "id": 3292, "name": "Call Trail", "type": "page" },
                { "id": 3096, "name": "Lead", "type": "page" },
                { "id": 3404, "name": "VCC Response", "type": "page" }
              ]
            },
            {
              "id": 2856,
              "name": "Old Reports",
              "type": "directory",
              "children": [
                { "id": 2998, "name": "Calls", "type": "page" }
              ]
            }
          ]
        },
        {
          "id": 2857,
          "name": "Settings",
          "type": "directory",
          "children": []
        },
        {
          "id": 2878,
          "name": "Sales Team Management",
          "type": "directory",
          "children": [
            { "id": 2879, "name": "Sales Team Member", "type": "page" },
            { "id": 2880, "name": "Team Leader", "type": "page" },
            { "id": 2881, "name": "Sales Officer", "type": "page" },
            { "id": 2941, "name": "Caller", "type": "page" }
          ]
        },
        {
          "id": 2895,
          "name": "Crm Plugins",
          "type": "directory",
          "children": [
            {
              "id": 2896,
              "name": "Justdial",
              "type": "directory",
              "children": [
                { "id": 2901, "name": "JD API", "type": "page" },
                { "id": 2902, "name": "JD Response", "type": "page" },
                { "id": 2903, "name": "JD Agent", "type": "page" }
              ]
            },
            {
              "id": 2897,
              "name": "Indiamart",
              "type": "directory",
              "children": [
                { "id": 2904, "name": "IM API", "type": "page" },
                { "id": 2905, "name": "IM Response", "type": "page" },
                { "id": 2906, "name": "IM Agent", "type": "page" },
                { "id": 2907, "name": "IM Api Logs", "type": "page" }
              ]
            },
            {
              "id": 2942,
              "name": "Facebook",
              "type": "directory",
              "children": [
                { "id": 2947, "name": "FB Webhook", "type": "page" },
                { "id": 2948, "name": "FB Responses", "type": "page" },
                { "id": 2949, "name": "FB Agents", "type": "page" },
                { "id": 2961, "name": "FB Campaign", "type": "page" },
                { "id": 3259, "name": "CRM Form Mapper", "type": "page" },
                { "id": 3266, "name": "Lead Column Mapper", "type": "page" },
                { "id": 3268, "name": "FB Forms", "type": "page" },
                { "id": 3269, "name": "FB Pincode Agents", "type": "page" }
              ]
            },
            {
              "id": 2954,
              "name": "Make",
              "type": "directory",
              "children": [
                { "id": 2955, "name": "Make API", "type": "page" },
                { "id": 2956, "name": "Make Response", "type": "page" }
              ]
            },
            {
              "id": 2962,
              "name": "WhatsApp",
              "type": "directory",
              "children": [
                { "id": 2963, "name": "WhatsApp Webhook", "type": "page" },
                { "id": 2964, "name": "WhatsApp Responses", "type": "page" },
                { "id": 2965, "name": "WhatsApp Agent", "type": "page" },
                { "id": 3482, "name": "WA API Provider", "type": "page" },
                { "id": 3653, "name": "WhatsApp Templates", "type": "page" },
                { "id": 3671, "name": "WA Automation Rule", "type": "page" },
                { "id": 3692, "name": "WA Lead Automation Rule", "type": "page" },
                { "id": 3695, "name": "Product Catalogue (PDF)", "type": "page" },
                { "id": 3706, "name": "Product Catalogue (URL)", "type": "page" },
                { "id": 3723, "name": "WhatsApp Work Flow", "type": "page" }
              ]
            },
            {
              "id": 2966,
              "name": "Software Suggest",
              "type": "directory",
              "children": [
                { "id": 2967, "name": "SS Webhook", "type": "page" },
                { "id": 2968, "name": "SS Responses", "type": "page" },
                { "id": 2969, "name": "SS Agent", "type": "page" }
              ]
            },
            {
              "id": 2982,
              "name": "Techjockey",
              "type": "directory",
              "children": [
                { "id": 2983, "name": "TJ Webhook", "type": "page" },
                { "id": 2984, "name": "TJ Responses", "type": "page" },
                { "id": 2985, "name": "TJ Agent", "type": "page" }
              ]
            },
            {
              "id": 3077,
              "name": "Erp Themes",
              "type": "directory",
              "children": [
                { "id": 3078, "name": "Erp Webhook", "type": "page" },
                { "id": 3079, "name": "Erp Response", "type": "page" },
                { "id": 3080, "name": "Erp Agent", "type": "page" }
              ]
            },
            {
              "id": 3294,
              "name": "Trade India",
              "type": "directory",
              "children": [
                { "id": 3295, "name": "Trade India API", "type": "page" },
                { "id": 3296, "name": "Trade India Response", "type": "page" },
                { "id": 3297, "name": "Trade India Agent", "type": "page" }
              ]
            },
            {
              "id": 2987,
              "name": "Dialer Plugins",
              "type": "directory",
              "children": [
                {
                  "id": 2988,
                  "name": "Tele CMI",
                  "type": "directory",
                  "children": [
                    { "id": 2989, "name": "TCMI Webhook", "type": "page" },
                    { "id": 2990, "name": "TCMI Response", "type": "page" },
                    { "id": 2991, "name": "TCMI User", "type": "page" }
                  ]
                }
              ]
            },
          ]
        }
        ]
      },
         {
      "id": 3116,
      "name": "CRM TRAIL Dashboard",
      "type": "directory",
      "children": [
        {
          "id": 3037,
          "name": "VCC",
          "type": "directory",
          "children": [
            { "id": 3038, "name": "VCC Webhook", "type": "page" },
            { "id": 3039, "name": "VCC Response", "type": "page" },
            { "id": 3040, "name": "VCC Agent", "type": "page" },
            { "id": 3041, "name": "VCC Agent Groups", "type": "page" },
            { "id": 3042, "name": "VCC Response Logs", "type": "page" }
          ]
        },
        {
          "id": 3409,
          "name": "My Operator",
          "type": "directory",
          "children": [
            { "id": 3410, "name": "MO Webhook", "type": "page" },
            { "id": 3411, "name": "MO Response", "type": "page" }
          ]
        },
        {
          "id": 2874,
          "name": "CRM Form Setup",
          "type": "directory",
          "children": [
            { "id": 2886, "name": "Data Type", "type": "page" },
            { "id": 2887, "name": "Input Type", "type": "page" },
            { "id": 2865, "name": "CRM Form", "type": "page" },
            { "id": 2894, "name": "Ans Value", "type": "page" }
          ]
        },
        {
          "id": 2944,
          "name": "Contest Management",
          "type": "directory",
          "children": [
            { "id": 2945, "name": "Contests", "type": "page" },
            { "id": 2946, "name": "Participant", "type": "page" }
          ]
        },
        {
          "id": 3147,
          "name": "Data Lists",
          "type": "directory",
          "children": [
            { "id": 2890, "name": "Alt Address", "type": "page" },
            { "id": 3145, "name": "Visit Logs", "type": "page" },
            { "id": 2891, "name": "Alt Contact", "type": "page" },
            { "id": 2892, "name": "Timeline", "type": "page" }
          ]
        },
        { "id": 2859, "name": "Source", "type": "page" },
        { "id": 2860, "name": "Project", "type": "page" },
        { "id": 3271, "name": "Milestone", "type": "page" },
        { "id": 2861, "name": "Reasons", "type": "page" },
        { "id": 2959, "name": "Campaign", "type": "page" },
        {
          "id": 3170,
          "name": "Leads Settings",
          "type": "directory",
          "children": [
            { "id": 2996, "name": "Unique", "type": "page" },
            { "id": 3171, "name": "Mandatory", "type": "page" },
            { "id": 3293, "name": "Hide", "type": "page" }
          ]
        },
        { "id": 2872, "name": "ISD Code", "type": "page" },
        {
          "id": 2889,
          "name": "My Data",
          "type": "directory",
          "children": [
            { "id": 2908, "name": "All Leads", "type": "page" }
          ]
        },
        {
          "id": 3366,
          "name": "Call Trail",
          "type": "directory",
          "children": [
            {
              "id": 3367,
              "name": "My Call Trail",
              "type": "directory",
              "children": [
                { "id": 3373, "name": "In", "type": "page" },
                { "id": 3376, "name": "Out", "type": "page" },
                { "id": 3379, "name": "Missed", "type": "page" },
                { "id": 3382, "name": "Rejected", "type": "page" },
                { "id": 3385, "name": "UnAnswered", "type": "page" },
                { "id": 3388, "name": "All", "type": "page" }
              ]
            },
            {
              "id": 3368,
              "name": "My Team Call Trail",
              "type": "directory",
              "children": [
                { "id": 3374, "name": "In", "type": "page" },
                { "id": 3377, "name": "Out", "type": "page" },
                { "id": 3380, "name": "Missed", "type": "page" },
                { "id": 3383, "name": "Rejected", "type": "page" },
                { "id": 3386, "name": "UnAnswered", "type": "page" },
                { "id": 3389, "name": "All", "type": "page" }
              ]
            },
            {
              "id": 3369,
              "name": "All Call Trail",
              "type": "directory",
              "children": [
                { "id": 3372, "name": "In", "type": "page" },
                { "id": 3375, "name": "Out", "type": "page" },
                { "id": 3378, "name": "Missed", "type": "page" },
                { "id": 3381, "name": "Rejected", "type": "page" },
                { "id": 3384, "name": "UnAnswered", "type": "page" },
                { "id": 3387, "name": "All", "type": "page" }
              ]
            }
          ]
        },
        { "id": 3287, "name": "Call Trail", "type": "page" },
        { "id": 2977, "name": "Win Leads", "type": "page" },
        { "id": 2920, "name": "Drop Leads", "type": "page" },
        { "id": 3032, "name": "Quotation", "type": "page" },
        { "id": 2986, "name": "Call Logs", "type": "page" },
        { "id": 3469, "name": "Call Recordings", "type": "page" },
        { "id": 3577, "name": "Chat Logs", "type": "page" },
          { "id": 3577, "name": "CRM TRAIL Dashboard (Directory Id : 3116)", "type": "page" }
      ]
    }
    ]}
      const hrm={
  "modules": [
    {
      "id": 1098,
      "name": "Employee Records",
      "type": "directory",
      "children": [
        { "id": 1920, "name": "Roles IN Ledgers", "type": "page" },
        { "id": 1454, "name": "Employees", "type": "page" },
        { "id": 2805, "name": "Organogram Tree", "type": "page" },
        { "id": 3578, "name": "AI Agents", "type": "page" }
      ]
    },
    {
      "id": 1097,
      "name": "Payroll",
      "type": "directory",
      "children": [
        {
          "id": 2296,
          "name": "Salary Settings",
          "type": "directory",
          "children": [
            { "id": 2300, "name": "CTC Groups", "type": "page" },
            { "id": 2301, "name": "CTC Components", "type": "page" },
            { "id": 2302, "name": "Assign CTC", "type": "page" }
          ]
        },
        {
          "id": 2420,
          "name": "Salary Disbursal (by Accounts)",
          "type": "directory",
          "children": [
            { "id": 2427, "name": "Trans Failed", "type": "page" },
            { "id": 2433, "name": "Hold", "type": "page" },
            { "id": 2430, "name": "In Transit", "type": "page" },
            { "id": 2436, "name": "Paid", "type": "page" },
            { "id": 2317, "name": "Salary", "type": "page" },
            { "id": 2424, "name": "Approved", "type": "page" }
          ]
        },
        {
          "id": 2439,
          "name": "All Salary",
          "type": "directory",
          "children": [
            { "id": 2318, "name": "Earning Calculator (by HR)", "type": "page" }
          ]
        }
      ]
    },
    {
      "id": 1091,
      "name": "Attendance Reports",
      "type": "directory",
      "children": [
        { "id": 1822, "name": "Daily Attendance", "type": "page" },
        { "id": 1823, "name": "Monthly Attendance", "type": "page" },
        { "id": 1776, "name": "Daily Attendance Log", "type": "page" },
        { "id": 1116, "name": "Attendance LOGS", "type": "page" },
        { "id": 2526, "name": "Day Wise Attendance", "type": "page" }
      ]
    },
    {
      "id": 2527,
      "name": "Employee Applications",
      "type": "directory",
      "children": []
    },
    {
      "id": 2040,
      "name": "TA Reimbursements",
      "type": "directory",
      "children": [
        {
          "id": 2041,
          "name": "My TA Reimbursements",
          "type": "directory",
          "children": [
            { "id": 2057, "name": "Started", "type": "page" },
            { "id": 2051, "name": "Claimed", "type": "page" },
            { "id": 2048, "name": "Approved", "type": "page" },
            { "id": 2054, "name": "Declined", "type": "page" },
            { "id": 2045, "name": "All", "type": "page" },
            { "id": 1900, "name": "Trip Expenses", "type": "page" }
          ]
        },
        {
          "id": 2042,
          "name": "My Team TA Reimbursements",
          "type": "directory",
          "children": [
            { "id": 2058, "name": "Started", "type": "page" },
            { "id": 2052, "name": "Claimed", "type": "page" },
            { "id": 2049, "name": "Approved", "type": "page" },
            { "id": 2055, "name": "Declined", "type": "page" },
            { "id": 2046, "name": "All", "type": "page" }
          ]
        },
        {
          "id": 2043,
          "name": "All TA Reimbursements",
          "type": "directory",
          "children": [
            { "id": 2056, "name": "Started", "type": "page" },
            { "id": 2050, "name": "Claimed", "type": "page" },
            { "id": 2047, "name": "Approved", "type": "page" },
            { "id": 2053, "name": "Declined", "type": "page" },
            { "id": 2044, "name": "All", "type": "page" }
          ]
        }
      ]
    },
    {
      "id": 1897,
      "name": "Vehicle Management",
      "type": "directory",
      "children": [
        { "id": 1898, "name": "Vehicle Types", "type": "page" },
        { "id": 1899, "name": "Vehicles", "type": "page" }
      ]
    },
    {
      "id": 2631,
      "name": "DA Reimbursements",
      "type": "directory",
      "children": [
        { "id": 2544, "name": "DA Reimbursements", "type": "page" }
      ]
    },
    {
      "id": 2669,
      "name": "Leave Application",
      "type": "directory",
      "children": []
    },
    {
      "id": 2670,
      "name": "On Duty Application",
      "type": "directory",
      "children": []
    },
    {
      "id": 2671,
      "name": "Workday on offday Application",
      "type": "directory",
      "children": []
    },
    {
      "id": 2650,
      "name": "Bonus Incentive Compensation",
      "type": "directory",
      "children": [
        { "id": 2534, "name": "Bonus Incentive Compensation", "type": "page" }
      ]
    },
    {
      "id": 2672,
      "name": "Advance",
      "type": "directory",
      "children": [
        { "id": 3043, "name": "Advance", "type": "page" }
      ]
    },
    {
      "id": 3496,
      "name": "Other Reimbursements",
      "type": "directory",
      "children": [
        { "id": 3497, "name": "Other Reimbursement", "type": "page" }
      ]
    },
    {
      "id": 3597,
      "name": "Kaizen",
      "type": "directory",
      "children": [
        { "id": 3599, "name": "Kaizen List", "type": "page" }
      ]
    },
    {
      "id": 3655,
      "name": "PMS Goals",
      "type": "directory",
      "children": [
        { "id": 3601, "name": "PMS Goals", "type": "page" }
      ]
    },
    {
      "id": 1096,
      "name": "HR Settings",
      "type": "directory",
      "children": [
        {
          "id": 1102,
          "name": "Attendance Settings",
          "type": "directory",
          "children": [
            { "id": 1122, "name": "Attendance Groups", "type": "page" },
            { "id": 1697, "name": "Attendance Status", "type": "page" },
            { "id": 1634, "name": "Weekoff Groups", "type": "page" }
          ]
        },
        {
          "id": 1104,
          "name": "Holiday Settings",
          "type": "directory",
          "children": [
            { "id": 1633, "name": "Holiday Group", "type": "page" },
            { "id": 1128, "name": "Holiday List", "type": "page" }
          ]
        },
        {
      "id": 1783,
      "name": "Shift Settings",
      "type": "directory",
      "children": [
        { "id": 1784, "name": "Shifts", "type": "page" },
        { "id": 1785, "name": "Time Slots", "type": "page" }
      ]
    },
    {
      "id": 1103,
      "name": "Leave Settings",
      "type": "directory",
      "children": [
        { "id": 1124, "name": "Leave Groups", "type": "page" },
        { "id": 1699, "name": "Leave Policy (Readme)", "type": "page" },
        { "id": 1873, "name": "Leave Policy", "type": "page" },
        { "id": 1888, "name": "Leave Trial Balance", "type": "page" }
      ]
    },
    {
      "id": 1233,
      "name": "Virtual Office Settings",
      "type": "directory",
      "children": [
        { "id": 1234, "name": "Virtual Office", "type": "page" },
        { "id": 1240, "name": "Virtual Location", "type": "page" },
        { "id": 1236, "name": "Virtual Office Admin", "type": "page" },
        { "id": 1241, "name": "Assign Virtual Location - Optional", "type": "page" }
      ]
    },
    {
      "id": 1100,
      "name": "Training Catalogues",
      "type": "directory",
      "children": [
        { "id": 1148, "name": "Categories", "type": "page" },
        { "id": 1149, "name": "Topics", "type": "page" }
      ]
    },
    { "id": 1763, "name": "Biometric Device Setup", "type": "page" },
    { "id": 1145, "name": "Department", "type": "page" },
    { "id": 1146, "name": "Designation", "type": "page" },
    { "id": 1843, "name": "Profiles", "type": "page" },
    { "id": 1844, "name": "Roles", "type": "page" },
    { "id": 3115, "name": "Leave Type", "type": "page" },
    { "id": 3408, "name": "Expenses Condition", "type": "page" },
    { "id": 3654, "name": "Roles Permission", "type": "page" },
    {
      "id": 2592,
      "name": "Mobile Apps Management",
      "type": "directory",
      "children": [
        { "id": 3270, "name": "Device Whitelist Request", "type": "page" },
        { "id": 2600, "name": "Sign In Groups", "type": "page" },
        { "id": 2596, "name": "Mobile Apps", "type": "page" },
        { "id": 2597, "name": "Assign Apps", "type": "page" },
        { "id": 2748, "name": "Device Login Logs", "type": "page" },
        { "id": 3434, "name": "IP Whitelist", "type": "page" }
      ]
    },
    {
      "id": 2319,
      "name": "Charts Default",
      "type": "directory",
      "children": [
        { "id": 2822, "name": "Daily Attendance Status Count", "type": "page" },
        { "id": 2320, "name": "Employee Status Count", "type": "page" }
      ]
    }]},
          
        ]}
  const tester={
  "modules": [
    
  ]
}
  
/* ---------------- HELPERS ---------------- */

const collectIds = (nodes, acc = []) => {
  nodes.forEach((n) => {
    acc.push(n.id);
    if (n.children) collectIds(n.children, acc);
  });
  return acc;
};

/* ---------------- MAIN COMPONENT ---------------- */

function PermissionsStep({ onBack, onNext }) {
  const financeIds = useMemo(() => collectIds(content.modules), []);

  const [permissions, setPermissions] = useState({
    email: {
      checked: false,
      children: {
        inbox_3751: false,
      },
    },
    finance: {
      checked: false,
      children: Object.fromEntries(financeIds.map((id) => [id, false])),
    },
  });

  /* ---------------- TOGGLES ---------------- */

  const toggleParent = (key, value) => {
    setPermissions((prev) => ({
      ...prev,
      [key]: {
        checked: value,
        children: Object.fromEntries(
          Object.keys(prev[key].children).map((k) => [k, value]),
        ),
      },
    }));
  };

  const toggleChild = (parentKey, childKey, value) => {
    setPermissions((prev) => {
      const children = {
        ...prev[parentKey].children,
        [childKey]: value,
      };

      return {
        ...prev,
        [parentKey]: {
          checked: Object.values(children).every(Boolean),
          children,
        },
      };
    });
  };

  /* ---------------- RECURSIVE NODE ---------------- */

  const PermissionNode = ({ node }) => {
    const checked = permissions.finance.children[node.id];

    return (
      <div className="ml-4 space-y-2">
        <PermissionRow
          label={node.name}
          checked={checked}
          onChange={(v) => toggleChild("finance", node.id, v)}
        />

        {node.children?.map((child) => (
          <PermissionNode key={child.id} node={child} />
        ))}
      </div>
    );
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="space-y-6">
      <Accordion type="multiple">
        {/* EMAIL */}
        <AccordionItem value="email">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={permissions.email.checked}
                onCheckedChange={(v) => toggleParent("email", v)}
              />
              EMAIL
            </div>
          </AccordionTrigger>

          <AccordionContent className="ml-4">
            <PermissionRow
              label="Inbox (Directory Id : 3751)"
              checked={permissions.email.children.inbox_3751}
              onChange={(v) => toggleChild("email", "inbox_3751", v)}
            />
          </AccordionContent>
        </AccordionItem>

        {/* FINANCE */}
        <AccordionItem value="finance">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={permissions.finance.checked}
                onCheckedChange={(v) => toggleParent("finance", v)}
              />
              FINANCE CONNECT
            </div>
          </AccordionTrigger>

          <AccordionContent className="space-y-2">
            {content.modules.map((module) => (
              <PermissionNode key={module.id} node={module} />
            ))}
          </AccordionContent>
        </AccordionItem>
         <AccordionItem value="hrm">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={permissions.finance.checked}
                onCheckedChange={(v) => toggleParent("hrm", v)}
              />
        HRM CONNECT


            </div>
          </AccordionTrigger>

          <AccordionContent className="space-y-2">
            {hrm.modules.map((module) => (
              <PermissionNode key={module.id} node={module} />
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="sms">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={permissions.finance.checked}
                onCheckedChange={(v) => toggleParent("sms", v)}
              />
              SMS CONNECT
            </div>
          </AccordionTrigger>

          <AccordionContent className="space-y-2">
            {sms.modules.map((module) => (
              <PermissionNode key={module.id} node={module} />
            ))}
          </AccordionContent>
        </AccordionItem>
          <AccordionItem value="crm">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={permissions.finance.checked}
                onCheckedChange={(v) => toggleParent("crm", v)}
              />
            CRM TRAIL


            </div>
          </AccordionTrigger>

          <AccordionContent className="space-y-2">
            {crm.modules.map((module) => (
              <PermissionNode key={module.id} node={module} />
            ))}
          </AccordionContent>
        </AccordionItem>
         <AccordionItem value="filemanager">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={permissions.finance.checked}
                onCheckedChange={(v) => toggleParent("filemanager", v)}
              />
             File Manager
            </div>
          </AccordionTrigger>

          <AccordionContent className="space-y-2">
            {file.modules.map((module) => (
              <PermissionNode key={module.id} node={module} />
            ))}
          </AccordionContent>
        </AccordionItem>
           <AccordionItem value="dataentry">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={permissions.finance.checked}
                onCheckedChange={(v) => toggleParent("dataentry", v)}
              />
            DATA ENTRY
            </div>
          </AccordionTrigger>

          <AccordionContent className="space-y-2">
            {data.modules.map((module) => (
              <PermissionNode key={module.id} node={module} />
            ))}
          </AccordionContent>
        </AccordionItem>
           <AccordionItem value="outlet">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={permissions.finance.checked}
                onCheckedChange={(v) => toggleParent("outlet", v)}
              />
            OUTLET TRAIL


            </div>
          </AccordionTrigger>

          <AccordionContent className="space-y-2">
            {outlet.modules.map((module) => (
              <PermissionNode key={module.id} node={module} />
            ))}
          </AccordionContent>
        </AccordionItem>
           <AccordionItem value="task">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={permissions.finance.checked}
                onCheckedChange={(v) => toggleParent("task", v)}
              />
            TASK TRAIL
            </div>
          </AccordionTrigger>

          <AccordionContent className="space-y-2">
            {task.modules.map((module) => (
              <PermissionNode key={module.id} node={module} />
            ))}
          </AccordionContent>
        </AccordionItem>
          <AccordionItem value="download">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={permissions.finance.checked}
                onCheckedChange={(v) => toggleParent("download", v)}
              />
            DOWNLOAD MANAGER
            </div>
          </AccordionTrigger>

          <AccordionContent className="space-y-2">
            {download.modules.map((module) => (
              <PermissionNode key={module.id} node={module} />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex gap-2">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext}>Next</Button>
      </div>
    </div>
  );
}

function ReviewStep({ onBack }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-5 gap-4 bg-muted p-4 rounded-md text-sm">
        <div>
          <p className="text-muted-foreground">Role Name</p>
          <p>-</p>
        </div>
        <div>
          <p className="text-muted-foreground">Godown Name</p>
          <p>-</p>
        </div>
        <div>
          <p className="text-muted-foreground">Users</p>
          <p>0</p>
        </div>
        <div>
          <p className="text-muted-foreground">Modules</p>
          <p>0</p>
        </div>
        <div>
          <p className="text-muted-foreground">Permissions</p>
          <p>0</p>
        </div>
      </div>
      <PermissionsStep/>

     
    </div>
  );
}
