import { Card, CardContent } from "../../../../../components/ui/card";
import data from "../../../../../utils/data.json"
import { gst_docks } from "../../../../../utils/iconmap";

export const Vanubmenus=()=>{
    const submenus=data.switchMenu.find((item)=>item.id==="outlets").menus.find((item)=>item.id==="menu-three").subMenus.find((item)=>item.id==="submenu-three").subsubmenu
    return(
        <>
           <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {submenus?.filter((menu) => !menu.hidden).length > 0 ? (
          submenus
            ?.filter((menu) => !menu.hidden)
            .map((menu) => {
              const Icon = gst_docks;

              return (
                <Card
                  key={menu.id}
                  className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                  onClick={() => navigator(`${menu.route}`)}
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