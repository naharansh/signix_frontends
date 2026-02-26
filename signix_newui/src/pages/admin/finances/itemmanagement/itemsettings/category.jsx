import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
} from "../../../../../components/ui/card";
import { Input } from "../../../../../components/ui/input";
import { Label } from "../../../../../components/ui/label";
import { Button } from "../../../../../components/ui/Button";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Essentials,
  Paragraph,
  Bold,
  Italic,
  Alignment,

} from "ckeditor5";

import axios from 'axios'
import "ckeditor5/ckeditor5.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../../components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../components/ui/select";
import { DataTable } from "../../../../../utils/datatable";
import { createColumnHelper } from "@tanstack/react-table";


export const Category = () => {
  const logoRef = useRef(null);
  const photoRef = useRef(null);
const [lastId, setLastId] = useState(101);

  const [logoName, setLogoName] = useState("");
  const [photoName, setPhotoName] = useState("");
  const [category, setcategory] = useState({
    cDt: new Date().toISOString(),
    category_name: "",
    publish: "",
    description: "",
    SeqNo: "",
    publish_Id: lastId,
    pic: logoName,
    banner:photoName
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setcategory((prev) => ({ ...prev, [name]: value }));
  };
const handlesubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();

  formData.append("category_name", category.category_name);
  formData.append("publish", category.publish);
  formData.append("SeqNo", category.SeqNo);
  formData.append("description", category.description);
  formData.append("publish_Id", lastId);
  formData.append("cDt", category.cDt);

  // append files
  formData.append("pic", logoRef.current.files[0]);
  formData.append("banner", photoRef.current.files[0]);

  try {
    const res = await axios.post(
      "http://localhost:8080/api/category/create",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    console.log(res.data);

    setLastId(prev => prev + 1);

  } catch (err) {
    console.error(err.response?.data || err.message);
  }
};

  const handleSelectChange = (name, value) => {
    setcategory((prev) => ({ ...prev, [name]: value }));
  };
  const handleLogoChange = (e) => {
 
    const fileName = e.target.files?.[0]?.name || "";
    console.log(fileName);
    setLogoName(fileName)
    setcategory((prev) => ({ ...prev, pic: fileName }));
  };
  const bannerChange = (e) => {

    const fileName = e.target.files?.[0]?.name || "";
    console.log(fileName);
    setPhotoName(fileName)
    setcategory((prev) => ({ ...prev, banner: fileName }));
  };

  return (
    <>
      <div className="min-h-full py-6">
        <form onSubmit={handlesubmit}>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">cDt</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="cDt"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Category </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    onChange={handleChange}
                    name="category_name"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Publish ID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    name="publish_Id"
                    value={lastId}
                    readonly
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Publish</Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange("publish", value)
                    }
                  >
                    <SelectTrigger className="col-span-9 w-full ">
                      <SelectValue placeholder="Select pulish" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Y">Yes</SelectItem>
                        <SelectItem value="N">No</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">SeqNo**</Label>
                  <Input
                    type="number"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                    onChange={handleChange}
                    name="SeqNo"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Photo </Label>
                  <input
                    type="file"
                    accept="image/*"
                    ref={logoRef}
                    hidden
                    onChange={handleLogoChange}
                  />

                  <div
                    onClick={() => logoRef.current.click()}
                    className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition col-span-9"
                  >
                    <p className="font-medium text-gray-700">
                      {logoName || "Browse Images"}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">or Drag & Drop</p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Banner</Label>
                  <div className="col-span-9">
                    <input
                      type="file"
                      accept="image/*"
                      ref={photoRef}
                      hidden
                     onChange={bannerChange}
                    />

                    <div
                      onClick={() => photoRef.current.click()}
                      className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer 
                 hover:border-blue-500 transition"
                    >
                      <p className="font-medium text-gray-700">
                        {photoName|| "Browse Images"}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        or Drag & Drop
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Description</Label>

                  <div className="col-span-9">
                    <Dialog>
                      {/* Trigger Button */}
                      <DialogTrigger asChild>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-none hover:bg-blue-700 ">
                          Open Editor
                        </button>
                      </DialogTrigger>

                      {/* Dialog Content */}
                      <DialogContent className="max-w-2xl rounded-lg shadow-lg bg-white p-6">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-semibold text-gray-800">
                            Editor
                          </DialogTitle>
                          <DialogDescription className="text-sm text-gray-500 mb-4">
                            Customize your content below
                          </DialogDescription>
                        </DialogHeader>

                        {/* CKEditor Wrapper */}
                        <div className="border rounded-md shadow-sm p-4 bg-gray-50">
                          <CKEditor
                            editor={ClassicEditor}
                            config={{
                              licenseKey: "GPL",
                              plugins: [
                                Essentials,
                                Paragraph,
                                Bold,
                                Italic,
                                Alignment,
                              ],
                              toolbar: [
                                "undo",
                                "redo",
                                "|",
                                "heading",
                                "|",
                                "bold",
                                "italic",
                                "link",
                                "|",
                                "bulletedList",
                                "numberedList",
                                "blockQuote",
                                "|",
                                "formatPainter",
                              ],
                            }}
                            onChange={(event, editor) => {
                              const data = editor.getData();
                              setcategory((prev) => ({
                                ...prev,
                                description: data,
                              }));
                            }}
                          />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-3 mt-4">
                          <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition">
                            Cancel
                          </button>
                          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                            Save
                          </button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
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
export const Category_list=()=>{
  const data = [];
          const columnhelper = createColumnHelper();
          const column = [
            columnhelper.accessor("sno", {
              header: "S.no",
              cell: (info) => info.getValue(),
            }),
            columnhelper.accessor("contactgroup", {
              header: "Contact Group",
              cell: (info) => info.getValue(),
            }),
          ];
          return (
              <>
              <DataTable data={data} columns={column}/>
              </>
            );
}