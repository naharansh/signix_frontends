import { Card, CardContent } from "../ui/card";
import { submenuicons } from "../../utils/iconmap";
import data from "../../utils/data.json";

export const DashboardCards = ({ activeMenu }) => {
  console.log
    const selectedMenu = data.switchMenu.find(
    (menu) => menu.label === activeMenu,
  );
  // console.log("Selected Menu in DashboardCards:", selectedMenu);

  return (
       <div className="my-10 mx-5 grid grid-cols-4 gap-6 justify-center">
        {selectedMenu?.menus?.map((menu) => {
          const Icon = submenuicons[menu.icon];
          return (
            <Card className="h-28 cursor-pointer duration-300 rounded-sm  dark:border-gray-700 bg-white dark:bg-gray-800  hover:shadow-md">
              <CardContent className="flex flex-col justify-between h-full">
                <div className="flex items-center space-x-3">
                  {Icon && (
                    <div className="w-15 h-15 flex items-center justify-center rounded-full bg-[#e0e0e0] shadow-sm hover:shadow-md transition-shadow duration-200">
                      <img
                        src={Icon}
                        alt={menu.label || "menu icon"} 
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  )}

                  <div className="text-sm font-semibold text-gray-900 tracking-wide">
                    {menu.label}
                  </div>
                </div>

                {/* Optional description / stats */}
              </CardContent>
            </Card>
          );
        })}
      </div>
  );
};
