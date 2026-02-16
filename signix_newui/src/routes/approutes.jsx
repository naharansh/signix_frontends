import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/common/navbar";
import { Login } from "../pages/auth/login";
import { ForgetPassword } from "../pages/auth/forgetPassword";
import { Verify_OTP } from "../pages/auth/verify_otp";
import { ChangePassword } from "../pages/auth/changepassword";
import { Protected_Routes } from "../context/protectedroute";
import { Logout } from "../pages/auth/logout";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/enter_otp" element={<Verify_OTP />} />

        <Route path="/forgetPassword" element={<ForgetPassword />} />

        <Route path="/changePassword" element={<ChangePassword />} />
         <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
};
