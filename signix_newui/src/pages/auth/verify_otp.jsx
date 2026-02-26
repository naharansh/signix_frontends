import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "../../components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../components/ui/input-otp";
import { useState } from "react";
import axios from "axios";
export const Verify_OTP = () => {
 const navigate = useNavigate()

  const [otp, setOtp] = useState("")
  

  function getCookie(name) {
    return document.cookie
      .split("; ")
      .find(row => row.startsWith(name + "="))
      ?.split("=")[1];
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = getCookie("email")

    if (!email) {
      alert("Email cookie not found")
      return
    }

    axios.post(
      "http://localhost:8080/api/user/verify",
      { otp, email },
      { withCredentials: true }
    )
    .then((res) => {
  
      document.cookie=`token=${res.data.token};path=/; max-age=86400; SameSite=Lax`

      navigate('/admin/dashboard')
    })
    .catch((err) => {
      if (err.response) {
        alert(err.response.data?.message || "Error occurred")
      } else {
        alert(err.message)
      }
    })
  }
  return (
    <>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-xs">
          <Card>
            <CardHeader>
              <CardTitle>Enter verification code</CardTitle>
              <CardDescription>
                We sent a 6-digit code to your email.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="otp">Verification code</FieldLabel>
                    <InputOTP maxLength={6} id="otp"    onChange={(value) => setOtp(value)} required>
                      <InputOTPGroup className="gap-2.5 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                    <FieldDescription>
                      Enter the 6-digit code sent to your email.
                    </FieldDescription>
                  </Field>
                  <FieldGroup>
                    <Button type="submit">
                        Verify OTP
                    </Button>
                    <FieldDescription className="text-center">
                      Didn&apos;t receive the code? <Link to='/'>Resend</Link>
                    </FieldDescription>
                  </FieldGroup>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
