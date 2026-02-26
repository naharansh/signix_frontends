import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../../components/ui/card";
import data from "../../../utils/data.json";
import { dispatch_trail, gst_docks, outlet_settings, pjp } from "../../../utils/iconmap";
export const Reports = () => {
  const menus = data.switchMenu.find((item) => item.id === "outlets").menus;
  const submenus = menus.find((item) => item.id === "menu-one").subMenus;
  console.log(submenus);
  return (
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
  );
};
export const PriceList=()=>{
    const menu=data.switchMenu.find((item)=>item.id==="outlets").menus.find((item)=>item.id==="menu-two").subMenus
    return(
        <>
          <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {menu?.filter((menu) => !menu.hidden).length > 0 ? (
          menu
            ?.filter((menu) => !menu.hidden)
            .map((menu) => {
              const Icon = gst_docks;

              return (
                <Card
                  key={menu.id}
                  className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                 
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
export const DisPatch=()=>{
  const navigator=useNavigate()
      const menus = data.switchMenu.find((item) => item.id === "outlets").menus;
  const submenus = menus.find((item) => item.id === "menu-three").subMenus;
  console.log(submenus);
 return (
    <>
     <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {submenus?.filter((menu) => !menu.hidden).length > 0 ? (
          submenus
            ?.filter((menu) => !menu.hidden)
            .map((menu) => {
              const Icon = dispatch_trail[menu.icon];
             
              return (
                <Card
                  key={menu.id}
                  className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                    onClick={()=>navigator(`${menu.route}`)}
                 
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
export const PJP=()=>{
    const menus = data.switchMenu.find((item) => item.id === "outlets").menus;
  const submenus = menus.find((item) => item.id === "menu-four").subMenus;
  const navigator=useNavigate()
  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {submenus?.filter((menu) => !menu.hidden).length > 0 ? (
          submenus
            ?.filter((menu) => !menu.hidden)
            .map((menu) => {
              const Icon = pjp[menu.icon];

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
export const Settings=()=>{
    const menus = data.switchMenu.find((item) => item.id === "outlets").menus;
  const submenus = menus.find((item) => item.id === "menu-fifth").subMenus;
  const navigator=useNavigate()
  return(
    <>
     <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {submenus?.filter((menu) => !menu.hidden).length > 0 ? (
          submenus
            ?.filter((menu) => !menu.hidden)
            .map((menu) => {
              const Icon = outlet_settings[menu.icon];

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
    </>
  )}