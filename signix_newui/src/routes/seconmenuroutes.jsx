import { BrowserRouter, Route, Routes } from "react-router-dom"
import { View_Company } from "../pages/secondmenu/viewcompany"
import AppLayout from "../components/layout/applayout"

export const Second_Menu=()=>{
    return (
           <BrowserRouter>
            <Routes>
  <Route path="/admin/dashboard" element={<AppLayout />}>
    
  </Route>
</Routes>
           </BrowserRouter>
    )
}