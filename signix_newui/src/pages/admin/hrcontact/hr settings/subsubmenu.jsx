import { Card, CardContent } from '../../../../components/ui/card'
import data from '../../../../utils/data.json'
import { gst_docks } from '../../../../utils/iconmap'
export const Attendance_Settings=()=>{
    const mainmenu=data.switchMenu.find(m=>m.id ==='hrm').menus
    
    if(!mainmenu)
    {
        return
    }
    const submenu=mainmenu.find(sm=>sm.id==='record-five' ).subMenus
    
    
    if(!submenu)
    {
        return
    }
    const subsubmenu=submenu.find(ssm=>ssm.id==='submenu-one').subsubmenu

    return(
        <>
         <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
               {subsubmenu.length > 0 ? (
                 subsubmenu.map((menu) => {
                   const Icon = gst_docks;
       
                   return (
                     <Card
                       key={menu.id}
                       className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                       onClick={() => {
                       
                       }}
                     >
                       <CardContent className="flex items-center h-full space-x-3">
                         {Icon && (
                           <img
                             src={Icon}
                             alt={menu.label}
                             className="w-10 h-10 object-contain"
                           />
                         )}
                         <span className="text-sm font-semibold">{menu.label}</span>
                       </CardContent>
                     </Card>
                   );
                 })
               ) : (
                 <p className="text-gray-400">No submenus found</p>
               )}
             </div>
        </>
    )
}
export const Holiday_settings=()=>{
    const first_menu=data.switchMenu.find(m=>m.id === 'hrm').menus
    if(!first_menu)
    {
        return
    }
    const sub_menu=first_menu.find(sm=>sm.id === 'record-five').subMenus
    if(!sub_menu)
    {
        return
    }
    const sub_sub_menu=sub_menu.find(ssm=>ssm.id==='submenu-three').subsubmenu
     return(
        <>
         <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
               {sub_sub_menu.length > 0 ? (
                 sub_sub_menu.map((menu) => {
                   const Icon = gst_docks;
       
                   return (
                     <Card
                       key={menu.id}
                       className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                       onClick={() => {
                       
                       }}
                     >
                       <CardContent className="flex items-center h-full space-x-3">
                         {Icon && (
                           <img
                             src={Icon}
                             alt={menu.label}
                             className="w-10 h-10 object-contain"
                           />
                         )}
                         <span className="text-sm font-semibold">{menu.label}</span>
                       </CardContent>
                     </Card>
                   );
                 })
               ) : (
                 <p className="text-gray-400">No submenus found</p>
               )}
             </div>
        </>
    )

}
export const Shift_Settings=()=>{
       const mainmenu=data.switchMenu.find(m=>m.id ==='hrm').menus
    
    if(!mainmenu)
    {
        return
    }
    const submenu=mainmenu.find(sm=>sm.id==='record-five').subMenus
    // console.log(submenu)
    
    if(!submenu)
    {
        return
    }
    const subsubmenus=submenu.find(ssm=>ssm.id ==='submenu-four').subsubmenu
    return(
        <>
        <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
               {subsubmenus.length > 0 ? (
                 subsubmenus.map((menu) => {
                   const Icon = gst_docks;
       
                   return (
                     <Card
                       key={menu.id}
                       className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                       onClick={() => {
                       
                       }}
                     >
                       <CardContent className="flex items-center h-full space-x-3">
                         {Icon && (
                           <img
                             src={Icon}
                             alt={menu.label}
                             className="w-10 h-10 object-contain"
                           />
                         )}
                         <span className="text-sm font-semibold">{menu.label}</span>
                       </CardContent>
                     </Card>
                   );
                 })
               ) : (
                 <p className="text-gray-400">No submenus found</p>
               )}
             </div>
        </>
    )
}
export const Leave_Submenu=()=>{
        const mainmenu=data.switchMenu.find(m=>m.id ==='hrm').menus
    
    if(!mainmenu)
    {
        return
    }
    const submenu=mainmenu.find(sm=>sm.id==='record-five').subMenus
    // console.log(submenu)
    
    if(!submenu)
    {
        return
    }
    const subsubmenus=submenu.find(ssm=>ssm.id ==='submenu-five').subsubmenu
    return(
        <>
        <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
               {subsubmenus.length > 0 ? (
                 subsubmenus.map((menu) => {
                   const Icon = gst_docks;
       
                   return (
                     <Card
                       key={menu.id}
                       className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                       onClick={() => {
                       
                       }}
                     >
                       <CardContent className="flex items-center h-full space-x-3">
                         {Icon && (
                           <img
                             src={Icon}
                             alt={menu.label}
                             className="w-10 h-10 object-contain"
                           />
                         )}
                         <span className="text-sm font-semibold">{menu.label}</span>
                       </CardContent>
                     </Card>
                   );
                 })
               ) : (
                 <p className="text-gray-400">No submenus found</p>
               )}
             </div>
        </>
    )
}
export const Virtual_Acccount=()=>{
       const mainmenu=data.switchMenu.find(m=>m.id ==='hrm').menus
    
    if(!mainmenu)
    {
        return
    }
    const submenu=mainmenu.find(sm=>sm.id==='record-five').subMenus
    // console.log(submenu)
    
    if(!submenu)
    {
        return
    }
    const subsubmenus=submenu.find(ssm=>ssm.id ==='submenu-six').subsubmenu
    return (
        <>
             <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
               {subsubmenus.length > 0 ? (
                 subsubmenus.map((menu) => {
                   const Icon = gst_docks;
       
                   return (
                     <Card
                       key={menu.id}
                       className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                       onClick={() => {
                       
                       }}
                     >
                       <CardContent className="flex items-center h-full space-x-3">
                         {Icon && (
                           <img
                             src={Icon}
                             alt={menu.label}
                             className="w-10 h-10 object-contain"
                           />
                         )}
                         <span className="text-sm font-semibold">{menu.label}</span>
                       </CardContent>
                     </Card>
                   );
                 })
               ) : (
                 <p className="text-gray-400">No submenus found</p>
               )}
             </div>
        </>
    )
}
export const Traninerr=()=>{
    const mainmenu=data.switchMenu.find(m=>m.id ==='hrm').menus
    
    if(!mainmenu)
    {
        return
    }
    const submenu=mainmenu.find(sm=>sm.id==='record-five').subMenus
    // console.log(submenu)
    
    if(!submenu)
    {
        return
    }
    const subsubmenus=submenu.find(ssm=>ssm.id ==='submenu-seven').subsubmenu
    return (
        <>
         <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
               {subsubmenus.length > 0 ? (
                 subsubmenus.map((menu) => {
                   const Icon = gst_docks;
       
                   return (
                     <Card
                       key={menu.id}
                       className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                       onClick={() => {
                       
                       }}
                     >
                       <CardContent className="flex items-center h-full space-x-3">
                         {Icon && (
                           <img
                             src={Icon}
                             alt={menu.label}
                             className="w-10 h-10 object-contain"
                           />
                         )}
                         <span className="text-sm font-semibold">{menu.label}</span>
                       </CardContent>
                     </Card>
                   );
                 })
               ) : (
                 <p className="text-gray-400">No submenus found</p>
               )}
             </div>
        </>
    )
}