import { Button } from "../../../../../components/ui/Button"
import { Card, CardContent, CardFooter } from "../../../../../components/ui/card"
import { Input } from "../../../../../components/ui/input"
import { Label } from "../../../../../components/ui/label"

export const Excutive=()=>{
    return (
        <>
          <div className="min-h-full py-6">
            
        <form>
          <Card className="max-w-4xl rounded-none mx-auto border border-none shadow-none">
            <CardContent>
              <div className="max-w-4xl mx-auto bg-white rounded-none shadow-md  py-3">
           
                <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Executive</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                          <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">TL</Label>
                  <Input
                    type="text"
                    className="col-span-9 border rounded-none px-3 py-2  outline-none"
                  />
                </div>
                   <div className="grid grid-cols-12 gap-4 items-center my-3 px-4">
                  <Label className="col-span-3">Manager</Label>
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
    )
}