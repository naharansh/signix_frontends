import { useNavigate } from "react-router-dom"
import data from '../../../../utils/data.json'
import { Card, CardContent } from "../../../../components/ui/card"
import { gst_docks } from "../../../../utils/iconmap"
export const PO_submenus=()=>{
      const first_stage_menu=data.switchMenu.find((mid)=>mid.id === 'finance').menus?.find((sid)=>sid.id === 'record-one').subMenus?.find((submid)=>submid.id === 'submenu-fourthent').subsubmeus?.find((nextid)=>nextid.id === 'subsubmenu-one').subsubsubmenu||[]
        console.log(first_stage_menu)
        const navigate=useNavigate()
        return (
            <>
             <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                            {first_stage_menu.length > 0 ? (
                              first_stage_menu.map((menu) => {
                                const Icon = gst_docks;
                    
                                return (
                                  <Card
                                    key={menu.id}
                                    className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                                    onClick={()=>navigate(`${menu.route}`)}
                                    
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
export const PO_delevery_submenus=()=>{
      const first_stage_menu=data.switchMenu.find((mid)=>mid.id === 'finance').menus?.find((sid)=>sid.id === 'record-one').subMenus?.find((submid)=>submid.id === 'submenu-fourthent').subsubmeus?.find((nextid)=>nextid.id === 'subsubmenu-two').subsubsubmenu||[]
        console.log(first_stage_menu)
        const navigate=useNavigate()
        return (
            <>
             <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                            {first_stage_menu.length > 0 ? (
                              first_stage_menu.map((menu) => {
                                const Icon = gst_docks;
                    
                                return (
                                  <Card
                                    key={menu.id}
                                    className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                                    onClick={()=>navigate(`${menu.route}`)}
                                    
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
export const PO_quality_submenus=()=>{
      const first_stage_menu=data.switchMenu.find((mid)=>mid.id === 'finance').menus?.find((sid)=>sid.id === 'record-one').subMenus?.find((submid)=>submid.id === 'submenu-fourthent').subsubmeus?.find((nextid)=>nextid.id === 'subsubmenu-three').subsubsubmenu||[]
        console.log(first_stage_menu)
        const navigate=useNavigate()
        return (
            <>
             <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                            {first_stage_menu.length > 0 ? (
                              first_stage_menu.map((menu) => {
                                const Icon = gst_docks;
                    
                                return (
                                  <Card
                                    key={menu.id}
                                    className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                                    onClick={()=>navigate(`${menu.route}`)}
                                    
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
export const PO_MDN_submenus=()=>{
      const first_stage_menu=data.switchMenu.find((mid)=>mid.id === 'finance').menus?.find((sid)=>sid.id === 'record-one').subMenus?.find((submid)=>submid.id === 'submenu-fourthent').subsubmeus?.find((nextid)=>nextid.id === 'subsubmenu-eight').subsubsubmenu||[]
        console.log(first_stage_menu)
        const navigate=useNavigate()
        return (
            <>
             <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                            {first_stage_menu.length > 0 ? (
                              first_stage_menu.map((menu) => {
                                const Icon = gst_docks;
                    
                                return (
                                  <Card
                                    key={menu.id}
                                    className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                                    onClick={()=>navigate(`${menu.route}`)}
                                    
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