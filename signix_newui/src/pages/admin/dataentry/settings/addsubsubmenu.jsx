import { Card, CardContent } from '../../../../components/ui/card';
import data from '../../../../utils/data.json'
import { gst_docks } from '../../../../utils/iconmap';
export const Data_Subsubmenus=()=>{
      const firstmenu = data.switchMenu.find((m) => m.id === "data-entry").menus;
    
      if (!firstmenu) {
        return;
      }
      const submenu = firstmenu.find((sm) => sm.id === "menu-one").subMenus;
      if (!submenu) {
        return;
      }
      const submenus=submenu.find((ssm)=>ssm.id==='submenu-two').subsubmenu

    
    
    return (
        <>
           <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                        {submenus.length > 0 ? (
                          submenus.map((menu) => {
                            const Icon = gst_docks;
                
                            return (
                              <Card
                                key={menu.id}
                                className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                                onClick={() => navigate(`${menu.route}`)}
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