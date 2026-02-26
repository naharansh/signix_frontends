import { createColumnHelper } from "@tanstack/react-table";
import { Button } from "../../../../../../components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../../../../components/ui/card";
import { Input } from "../../../../../../components/ui/input";
import { Label } from "../../../../../../components/ui/label";
import { DataTable } from "../../../../../../utils/datatable";

export const Add_assets_group = () => {
  return (
    <>
      <div className="min-h-full py-6">
        <form>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                <CardHeader className="p-0 px-2  text-gray-500">
                  <CardTitle className="m-0">
                    Add Asset Groups
                  </CardTitle>
                </CardHeader>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">cDt</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Bom</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">BomID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Sub Sub Category</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Sub Sub CategoryID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">SeqNo</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Pic</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">PicID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Serial </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">SerialID </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Add More </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Add MoreID </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Default Asset</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                    <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Default AssetID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <div className="flex justify-end gap-2 w-full">
                <Button variant="outline">Cancel</Button>
                <Button>Save</Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
};
export const Add_Asset_Subgroup=()=>{
   const data = [
      {
        cDt: "2023-01-01",  
        Serial: "123456789",
        Asset: "Laptop",
        AssetID: "A001",  
        AssetCode: "LAP-001",
        Category: "Electronics",
        CategoryID: "C001",
        SubCategory: "Computers",
        SubCategoryID: "SC001",
        SubSubCategory: "Laptops",
        SubSubCategoryID: "SSC001",
        Bom: "Yes",
        BomID: "BOM001",
        Pic: "laptop.jpg",
        PrimaryBeat: "North",
      PrimaryBeatID: "PB001"
  
      },
      {
        cDt: "2023-02-01",
        Serial: "987654321",  
        Asset: "Projector",
  
        AssetID: "A002",
        AssetCode: "PROJ-001",
        Category: "Electronics",
        CategoryID: "C001",
        SubCategory: "Audio/Visual",
        SubCategoryID: "SC002",
        SubSubCategory: "Projectors",
        SubSubCategoryID: "SSC002",
        Bom: "No",
        BomID: "BOM002",
        Pic: "projector.jpg",
        PrimaryBeat: "South",
      PrimaryBeatID: "PB002"
      },
    ];
    const columnhelper=createColumnHelper()
    const columns=[
      columnhelper.accessor("cDt", {
        header: "Created Date",
        cell: (info) => info.getValue(),
      }),
      columnhelper.accessor("Serial", {
        header: "Serial Number",
        cell: (info) => info.getValue(),
      }),
      columnhelper.accessor("Asset", {
        header: "Asset Name",
        cell: (info) => info.getValue(),
      }),
      columnhelper.accessor("AssetID", {
        header: "Asset ID",
        cell: (info) => info.getValue(),
      }),
    ]
     return (
        <>
          <DataTable columns={columns} data={data} />
        </>
      )
}
