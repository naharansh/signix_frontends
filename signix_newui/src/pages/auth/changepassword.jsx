import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";

export const ChangePassword = () => {
  return (
    <>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-xs">
          <Card>
            <CardHeader>
              <CardTitle>Update the Password</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent>
              <form>
                <div className="grid gap-3">
                  <Label>New Password</Label>
                  <Input type="password" />
                </div>
                <div className="grid gap-3 my-3">
                  <Label>Confirm Password</Label>
                  <Input type="password" />
                </div>
                <CardFooter>
                  <Button type="submit" className="w-full">
                   <Link to='/'> Submit</Link>
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
