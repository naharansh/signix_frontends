import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Button } from "../../../../../../components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
} from "../../../../../../components/ui/card";
import { Input } from "../../../../../../components/ui/input";
import { Label } from "../../../../../../components/ui/label";
import {
  Alignment,
  Bold,
  ClassicEditor,
  Essentials,
  Italic,
  Paragraph,
} from "ckeditor5";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../../../components/ui/dialog";

export const Leave_Policy = () => {
  return (
    <>
      <div className="min-h-full py-6">
        <form>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">cDt</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Leave Group</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Leave Group ID </Label>
                  <Input
                    type="datetime"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3  px-4">
                  <Label className="col-span-3">Leave Policy Readme * </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
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

                {/* </form> */}
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
