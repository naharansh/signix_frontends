import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from '../../../../../components/ui/card'
import data from '../../../../../utils/data.json'
import { Employee_recordsss } from '../../../../../utils/iconmap'
export const  My_Bonus=()=>{
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
        const subsubmenu=submenu.find(ssm=>ssm.id==='submenu-six').subsubmenu.find((subsubmenu)=>subsubmenu.id==='subsubmenu-one').subsubsubmenu
        // console.log()
        const navigate=useNavigate()
        return (
            <>
              <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                       {subsubmenu.length > 0 ? (
                         subsubmenu.map((menu) => {
                           const Icon = Employee_recordsss[menu.icon];
               
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
export const Team_Bonus=()=>{
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
        const subsubmenu=submenu.find(ssm=>ssm.id==='submenu-six').subsubmenu.find((subsubmenu)=>subsubmenu.id==='subsubmenu-two').subsubsubmenu
        const navigate=useNavigate()
        console.log(subsubmenu)
         return (
            <>
              <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                       {subsubmenu.length > 0 ? (
                         subsubmenu.map((menu) => {
                           const Icon = Employee_recordsss[menu.icon];
               
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
export const All_Bonus=()=>{
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
        const subsubmenu=submenu.find(ssm=>ssm.id==='submenu-four').subsubmenu.find((subsubmenu)=>subsubmenu.id==='subsubmenu-three').subsubsubmenu  
         return (
            <>
              <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                       {subsubmenu.length > 0 ? (
                         subsubmenu.map((menu) => {
                           const Icon = Employee_recordsss[menu.icon];
               
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
