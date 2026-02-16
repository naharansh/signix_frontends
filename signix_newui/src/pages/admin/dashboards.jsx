import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import data from "../../utils/data.json";
import { submenuicons } from "../../utils/iconmap";
export const Finance = () => {
  const navigate=useNavigate()

  const selectedMenu = data.switchMenu.find((m) => m.id === "finance");

  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {selectedMenu?.menus?.map((menu) => {
          const Icon = submenuicons[menu.icon];
          return (
            <Card
              key={menu.id}
              className="h-28 cursor-pointer duration-300 rounded-sm dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md"
              onClick={()=>navigate(`${menu.route
                
              }`)}
            >
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
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
};
export const HR_Dashboard = () => {
  const navigate=useNavigate()
  const selectedMenu = data.switchMenu.find((m) => m.id === "hrm");
   return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {selectedMenu?.menus?.map((menu) => {
          const Icon = submenuicons[menu.icon];
          return (
            <Card
              key={menu.id}
              className="h-28 cursor-pointer duration-300 rounded-sm dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md"
              onClick={()=>navigate(`${menu.route
                
              }`)}
            >
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
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
};
export const SMS_Connect=()=>{
  const selectedMenu=data.switchMenu.find((m)=>m.id==='sms')
  const navigate=useNavigate()
 return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {selectedMenu?.menus?.map((menu) => {
          const Icon = submenuicons[menu.icon];
          return (
            <Card
              key={menu.id}
              className="h-28 cursor-pointer duration-300 rounded-sm dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md"
              onClick={()=>navigate(`${menu.route}`)}
            >
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
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
export const File_Manager=()=>{
   const navigate=useNavigate()
    const selectedMenu = data.switchMenu.find((m) => m.id === "file-manager");
     return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {selectedMenu?.menus?.map((menu) => {
          const Icon = submenuicons[menu.icon];
          return (
            <Card
              key={menu.id}
              className="h-28 cursor-pointer duration-300 rounded-sm dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md"
              onClick={()=>navigate(`${menu.route}`)}
            >
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
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
export const Data_Entry=()=>{
  const navigate=useNavigate()
    const selectedMenu = data.switchMenu.find((m) => m.id === "data-entry");
     return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {selectedMenu?.menus?.map((menu) => {
          const Icon = submenuicons[menu.icon];
          return (
            <Card
              key={menu.id}
              className="h-28 cursor-pointer duration-300 rounded-sm dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md"
              onClick={()=>navigate(`${menu.route}`)}
            >
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
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
export const Download=()=>{
    const selectedMenu = data.switchMenu.find((m) => m.id === "download");
    const navigate=useNavigate()
     return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {selectedMenu?.menus?.map((menu) => {
          const Icon = submenuicons[menu.icon];
          return (
            <Card
              key={menu.id}
              className="h-28 cursor-pointer duration-300 rounded-sm dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md"
              onClick={()=>{navigate(`${menu.route}`)}}
            >
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
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}