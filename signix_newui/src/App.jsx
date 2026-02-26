import { useState } from "react";

import "./App.css";

import { AppRoutes } from "./routes/approutes.jsx";
import { AdminRoutes } from "./routes/adminroutes.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Protected_Routes } from "./context/protectedroute.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <BrowserRouter>

      <Routes>

      
        <Route path="/*" element={<AppRoutes />} />

      
        <Route path="/admin/*" element={<AdminRoutes />} />

      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
