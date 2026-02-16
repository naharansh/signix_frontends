import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const ForgetPassword = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-full max-w-sm rounded-sm  shadow-sm">
          <CardHeader>
            <CardTitle>Forget Password</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
              
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
            <Link to="/enter_otp">  Send OTP </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
