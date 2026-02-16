import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { Checkbox } from "../../components/ui/checkbox";
import { useEffect, useState } from "react";

import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const [login_credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setcredentials((prev) => ({ ...prev, [name]: value }));
  };
  const SubmitData = (e) => {
    e.preventDefault();
    console.log(login_credentials)
    axios
      .post("http://localhost:8080/api/user/login", login_credentials, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("otp", res.data.otp);
          alert(localStorage.getItem("otp"))
          navigate("/enter_otp");
        }
      })
      .catch((err) => {
        if (err.response) {
          let msg;

          // normalize message
          if (typeof err.response.data === "string") {
            msg = err.response.data;
          } else {
            msg = err.response.data?.message || err.message;
          }

          switch (err.response.status) {
            case 411:
              alert(msg || "Length required");
              break;
            case 400:
              alert(msg || "Bad request");
              break;
            case 401:
              alert(msg || "Unauthorized");
              break;
            case 404:
              alert(msg || "Not found");
              break;
            default:
              alert("An error occurred");
          }
        } else {
          // network or other error
          alert(err.message);
        }
      });
  };
  return (
    <>
   
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">

  <h1 className="text-center mb-6 text-3xl font-bold tracking-wide text-gray-800">
    KEM
  </h1>

  <Card className="w-full max-w-sm rounded-sm shadow-sm">
    <CardHeader>
      <CardTitle>Login to your ERP Portal</CardTitle>
    </CardHeader>

    <Separator />

    <form onSubmit={SubmitData}>
      <CardContent>
        <div className="flex flex-col gap-6">

          <Input
            type="email"
            placeholder="m@example.com"
            name="email"
            onChange={handleChange}
            required
          />

          <div className="flex flex-col gap-2">
            <Input
              type="password"
              name="password"
              required
              autoComplete="current-password"
              onChange={handleChange}
            />

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Checkbox />
                <label>Remember me</label>
              </div>

              <Link
                to="/forgetPassword"
                className="text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>

          </div>

        </div>
      </CardContent>

      <CardFooter className="flex-col gap-2 my-4">
        <Button type="submit" className="w-full">
          Login
        </Button>
      </CardFooter>

    </form>
  </Card>

</div>

    </>
  );
};
