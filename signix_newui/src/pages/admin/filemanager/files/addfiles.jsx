import { useRef, useState } from "react"
import { Button } from "../../../../components/ui/Button"
import { Card, CardContent, CardFooter } from "../../../../components/ui/card"
import { Input } from "../../../../components/ui/input"
import { Label } from "../../../../components/ui/label"

export const Add_files=()=>{
     const logoRef = useRef(null);
      const photoRef = useRef(null);
    
      const [logoName, setLogoName] = useState("");
      const [photoName, setPhotoName] = useState("");
    return (
        <>
           <div className="min-h-full py-6">
        <form>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">FileLabel</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">
File</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">FileType</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Page Id </Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Size</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                 <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">
Record ID</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Size Str</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Column Name</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Mobile Number(0/10)</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                  <div className="grid grid-cols-12 gap-4 items-start my-3 px-4">
                                  {/* Label */}
                                  <Label className="col-span-3 pt-2">URL</Label>
                
                                  {/* Upload Field */}
                                  <div className="col-span-9">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      ref={logoRef}
                                      hidden
                                      onChange={(e) =>
                                        setLogoName(e.target.files?.[0]?.name || "")
                                      }
                                    />
                
                                    <div
                                      onClick={() => logoRef.current.click()}
                                      className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer 
                                 hover:border-blue-500 transition"
                                    >
                                      <p className="font-medium text-gray-700">
                                        {logoName || "Browse Files"}
                                      </p>
                                      <p className="text-xs text-gray-500 mt-1">
                                        or Drag & Drop
                                      </p>
                                    </div>
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
    )
}