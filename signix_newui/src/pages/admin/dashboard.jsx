import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from '../../components/ui/card'
import data from '../../utils/data.json'
import { dashboardss } from '../../utils/iconmap'

export const DashBoard=()=>{
    const findmenus=data.switchMenu.find((msu)=>msu.id ==='Dashboard')
    const navigate=useNavigate()
  

    return (
        <>
            <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                {findmenus?.menus?.map((menu) => {
                  const Icon = dashboardss[menu.icon];
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
    )
}