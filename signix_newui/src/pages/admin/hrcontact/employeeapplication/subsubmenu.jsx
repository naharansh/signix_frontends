import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from '../../../../components/ui/card'
import data from '../../../../utils/data.json'
import {  dashboards, employee_applicationss } from '../../../../utils/iconmap'
export const T_A_Reimbursements=()=>{
       const mainmenu=data.switchMenu.find(m=>m.id ==='hrm').menus
        
        if(!mainmenu)
        {
            return
        }
        const submenu=mainmenu.find(sm=>sm.id==='record-four').subMenus

        
        if(!submenu)
        {
            return
        }
        const subsubmenu=submenu.find(ssm=>ssm.id==='submenu-one').subsubmenu
       const navigate=useNavigate()
    return (
        <>
          <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                       {subsubmenu.length > 0 ? (
                         subsubmenu.map((menu) => {
                           const Icon = employee_applicationss[menu.icon];
               
                           return (
                             <Card
                               key={menu.id}
                               className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                               onClick={() => {
                                navigate(`${menu.route}`)
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
export const DA_Reimbursements=()=>{ 
       const mainmenu=data.switchMenu.find(m=>m.id ==='hrm').menus
        
        if(!mainmenu)
        {
            return
        }
        const submenu=mainmenu.find(sm=>sm.id==='record-four').subMenus
       const Icon=dashboards
        
        if(!submenu)
        {
            return
        }
        const subsubmenu=submenu.find(ssm=>ssm.id==='submenu-two').subsubmenu
         const navigate=useNavigate()
    return (
        <>
          <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                       {subsubmenu.length > 0 ? (
                         subsubmenu.map((menu) => {
                        //    const Icon = gst_docks;
               
                           return (
                             <Card
                               key={menu.id}
                               className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                               onClick={() => {
                                navigate(`${menu.route}`)
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
export const Leave_Applications=()=>{
     const mainmenu=data.switchMenu.find(m=>m.id ==='hrm').menus
        
        if(!mainmenu)
        {
            return
        }
        const submenu=mainmenu.find(sm=>sm.id==='record-four').subMenus
        // console.log(submenu)
        
        if(!submenu)
        {
            return
        }
        const subsubmenu=submenu.find(ssm=>ssm.id==='submenu-three').subsubmenu
        const navigate=useNavigate()
        return (
            <>
            <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                       {subsubmenu.length > 0 ? (
                         subsubmenu.map((menu) => {
                           const Icon = employee_applicationss[menu.icon];
               
                           return (
                             <Card
                               key={menu.id}
                               className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                               onClick={() => {
                                navigate(`${menu.route}`)
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
export const On_Duty_Call=()=>{
     const mainmenu=data.switchMenu.find(m=>m.id ==='hrm').menus
        
        if(!mainmenu)
        {
            return
        }
        const submenu=mainmenu.find(sm=>sm.id==='record-four').subMenus
        // console.log(submenu)
        
        if(!submenu)
        {
            return
        }
        const subsubmenu=submenu.find(ssm=>ssm.id==='submenu-four').subsubmenu
       const navigate=useNavigate()
        return (
            <>
            <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                       {subsubmenu.length > 0 ? (
                         subsubmenu.map((menu) => {
                         const Icon = employee_applicationss[menu.icon];
               
                           return (
                             <Card
                               key={menu.id}
                               className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                               onClick={() => {
                                navigate(`${menu.route}`)
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
export const Work_Day=()=>{
     const mainmenu=data.switchMenu.find(m=>m.id ==='hrm').menus
        
        if(!mainmenu)
        {
            return
        }
        const submenu=mainmenu.find(sm=>sm.id==='record-four').subMenus
        // console.log(submenu)
        
        if(!submenu)
        {
            return
        }
        const subsubmenu=submenu.find(ssm=>ssm.id==='submenu-five').subsubmenu
        const navigate=useNavigate()
        return (
            <>
            <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                       {subsubmenu.length > 0 ? (
                         subsubmenu.map((menu) => {
                         const Icon = employee_applicationss[menu.icon];
               
                           return (
                             <Card
                               key={menu.id}
                               className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                              onClick={() => {
                                navigate(`${menu.route}`)
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
export const Bonou_Insentive=()=>{
     const mainmenu=data.switchMenu.find(m=>m.id ==='hrm').menus
        
        if(!mainmenu)
        {
            return
        }
        const submenu=mainmenu.find(sm=>sm.id==='record-four').subMenus
        // console.log(submenu)
        
        if(!submenu)
        {
            return
        }
        const subsubmenu=submenu.find(ssm=>ssm.id==='submenu-six').subsubmenu
      const navigate=useNavigate()
        return (
            <>
            <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                       {subsubmenu.length > 0 ? (
                         subsubmenu.map((menu) => {
                          const Icon = employee_applicationss[menu.icon];
               
                           return (
                             <Card
                               key={menu.id}
                               className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                               onClick={() => {
                                navigate(`${menu.route}`)
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
export const Advance=()=>{
     const mainmenu=data.switchMenu.find(m=>m.id ==='hrm').menus
        
        if(!mainmenu)
        {
            return
        }
        const submenu=mainmenu.find(sm=>sm.id==='record-four').subMenus
        // console.log(submenu)
        
        if(!submenu)
        {
            return
        }
        const subsubmenu=submenu.find(ssm=>ssm.id==='submenu-seaven').subsubmenu
        const navigate=useNavigate()
        return (
            <>
            <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                       {subsubmenu.length > 0 ? (
                         subsubmenu.map((menu) => {
                           const Icon = dashboards;
               
                           return (
                             <Card
                               key={menu.id}
                               className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                               onClick={() => {
                                navigate(`${menu.route}`)
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
export const Others=()=>{
     const mainmenu=data.switchMenu.find(m=>m.id ==='hrm').menus
        const Icon=dashboards
        if(!mainmenu)
        {
            return
        }
        const submenu=mainmenu.find(sm=>sm.id==='record-four').subMenus
        const navigate=useNavigate()
        
        if(!submenu)
        {
            return
        }
        const subsubmenu=submenu.find(ssm=>ssm.id==='submenu-eight').subsubmenu
        console.log(subsubmenu)
        return (
            <>
            <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                       {subsubmenu.length > 0 ? (
                         subsubmenu.map((menu) => {
                        //    const Icon = gst_docks;
               
                           return (
                             <Card
                               key={menu.id}
                               className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                              onClick={() => {
                                navigate(`${menu.route}`)
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
export const Kaizen=()=>{
     const mainmenu=data.switchMenu.find(m=>m.id ==='hrm').menus
    
        if(!mainmenu)
        {
            return
        }
        const submenu=mainmenu.find(sm=>sm.id==='record-four').subMenus
        // console.log(submenu)
        
        if(!submenu)
        {
            return
        }
        const subsubmenu=submenu.find(ssm=>ssm.id==='submenu-ninth').subsubmenu
        const navigate=useNavigate()
        return (
            <>
            <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                       {subsubmenu.length > 0 ? (
                         subsubmenu.map((menu) => {
                       const Icon = employee_applicationss[menu.icon];
               
                           return (
                             <Card
                               key={menu.id}
                               className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                              onClick={() => {
                                navigate(`${menu.route}`)
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
export const PMS=()=>{
     const mainmenu=data.switchMenu.find(m=>m.id ==='hrm').menus
            const Icon=dashboards
            const navigate=useNavigate()
        if(!mainmenu)
        {
            return
        }
        const submenu=mainmenu.find(sm=>sm.id==='record-four').subMenus
        // console.log(submenu)
        
        if(!submenu)
        {
            return
        }
        const subsubmenu=submenu.find(ssm=>ssm.id==='submenu-ten').subsubmenu
        console.log(subsubmenu)
        return (
            <>
            <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                       {subsubmenu.length > 0 ? (
                         subsubmenu.map((menu) => {
                        //    const Icon = gst_docks;
               
                           return (
                             <Card
                               key={menu.id}
                               className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                               onClick={() => {
                                navigate(`${menu.route}`)
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