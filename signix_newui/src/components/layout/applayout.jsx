import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../common/navbar";

const AppLayout = () => {
  const [activeMenu, setActiveMenu] = useState("SMS CONNECT");

  return (
    <>
      <div className="min-h-screen w-full flex flex-col">
     
        <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

       
        <div className="flex-1 w-full">
          <Outlet context={{ activeMenu, setActiveMenu }} />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
