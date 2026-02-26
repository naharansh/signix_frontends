import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../../../../components/ui/card";
import data from "../../../../../utils/data.json";
import {  gst_docks, item_management } from "../../../../../utils/iconmap";
export const Item_Submenu = () => {
  const first_stage_menu = data.switchMenu
    .find((mid) => mid.id === "finance")
    .menus?.find((sid) => sid.id === "record-three")
    .subMenus.find((sid) => sid.id === "item-two").subsubmenus;
  const navigate = useNavigate();
  // console.log(first_stage_menu)
  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {first_stage_menu.length > 0 ? (
          first_stage_menu.map((menu) => {
            const Icon =item_management[menu.icon];

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
  );
};
export const Item_Subsubmenu=()=>{
    const first_stage_menu = data.switchMenu
    .find((mid) => mid.id === "finance")
    .menus?.find((sid) => sid.id === "record-three")
    .subMenus.find((sid) => sid.id === "item-two").subsubmenus?.find((smid)=>smid.id === 'subsubmenu-nineth').subsubmenu||[]
    const navigate=useNavigate()
    return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {first_stage_menu.length > 0 ? (
          first_stage_menu.map((menu) => {
            const Icon =gst_docks

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
  );
}