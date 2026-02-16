import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../../../../components/ui/card';
import data from '../../../../utils/data.json'
import { gst_docks } from '../../../../utils/iconmap';
   const getFinanceMenu = () => {
      return data.switchMenu.find((m) => m.id === "hrm");
    };
export const SalesSettings=()=>{
 const navigate=useNavigate()
    const financeMenu = getFinanceMenu();
    
  if (!financeMenu) return;

  // 👇 YOU MISSED THIS STEP
  const recordOne = financeMenu.menus.find((m) => m.id === "record-two");
// 
  if (!recordOne) return;

  const submenuOne = recordOne.subMenus.find((m) => m.id === "submenu-one");
//   if (!submenuOne || !submenuOne.subsubmeus) return;
    
  let salesetting = [];

  for (const item of submenuOne.subsubmenu) {
    salesetting.push(item);
  }

    return (
        <>
            <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                  {salesetting.length > 0 ? (
                    salesetting.map((menu) => {
                      const Icon = gst_docks;
          
                      return (
                        <Card
                          key={menu.id}
                          className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                           onClick={()=>navigate(`${menu.route}`)}
                        >
                          <CardContent className="flex items-center h-full space-x-3">
                            <img src={Icon} className="w-10 h-10 object-contain" />
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
export const Salery_Disbursal=()=>{
    
    const financeMenu = getFinanceMenu();
      
  if (!financeMenu) return;

  // 👇 YOU MISSED THIS STEP
  const recordOne = financeMenu.menus.find((m) => m.id === "record-two");
//   console.log(recordOne)
  if (!recordOne) return;

  const submenuOne = recordOne.subMenus.find((m) => m.id === "submenu-three");
//   if (!submenuOne || !submenuOne.subsubmeus) return;
    
  let salesetting = [];

  for (const item of submenuOne.subsubmenu) {
    salesetting.push(item);
  }
  const navigate=useNavigate()
    return (
        <>
        <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
                  {salesetting.length > 0 ? (
                    salesetting.map((menu) => {
                      const Icon = gst_docks;
          
                      return (
                        <Card
                          key={menu.id}
                          className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                          onClick={()=>navigate(`${menu.route}`)}
                        >
                          <CardContent className="flex items-center h-full space-x-3">
                            <img src={Icon} className="w-10 h-10 object-contain" />
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