import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import data from "../../utils/data.json";
import { vouchers, assets, contactuss, gst_docks,finances,inventorys,itemsSettings,settingss,ledgers } from "../../utils/iconmap";

export const Vochours = () => {
  const navigate=useNavigate()
  let selectedMenu = [];
  for (const menu of data.switchMenu.find((m) => m.id === "finance").menus) {
    if (menu.id === "record-one") {
      selectedMenu = menu.subMenus;
      break;
    }
  }

  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {selectedMenu.length > 0 ? (
          selectedMenu.map((menu) => {
            const Icon = vouchers[menu.icon];

            return (
              <Card
                key={menu.id}
                className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md" 
                onClick={()=>navigate(menu.route)}
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
  );
};
export const Ledger=()=>{
  const navigate=useNavigate()
    let ledger = [];
  for (const menu of data.switchMenu.find((m) => m.id === "finance").menus) {
    if (menu.id === "record-two") {
      ledger = menu.subMenus;
      break;
    }
  }

  return (
    <>
     <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {ledger.length > 0 ? (
          ledger.map((menu) => {
            const Icon = ledgers[menu.icon];

            return (
              <Card
                key={menu.id}
                className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                onClick={()=>{navigate(`${menu.route}`)}}
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
export const Items=()=>{
  const navigate=useNavigate()
    let Items = [];
  for (const menu of data.switchMenu.find((m) => m.id === "finance").menus) {
    if (menu.id === "record-three") {
      Items = menu.subMenus;
      break;
    }
  }
  return(
    <>
     <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {Items.length > 0 ? (
          Items.map((menu) => {
             const Icon = itemsSettings[menu.icon];

              // console.log(menu.route)
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
export const FinacialStatements = () => {
  let statements = [];
  for (const menu of data.switchMenu.find((m) => m.id === "finance").menus) {
    if (menu.id === "record-four") {
      statements = menu.subMenus;
      break;
    }
  }
  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {statements.length > 0 ? (
          statements.map((menu) => {
             const Icon = finances[menu.icon];


            return (
              <Card
                key={menu.id}
                className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
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
  );
};
export const Inventatory=()=>{
  const navigate=useNavigate()
   let Inventatory = [];
  for (const menu of data.switchMenu.find((m) => m.id === "finance").menus) {
    if (menu.id === "record-fifith") {
      Inventatory = menu.subMenus;
      break;
    }
  }
  return(
    <>
       <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {Inventatory.length > 0 ? (
          Inventatory.map((menu) => {
             const Icon = inventorys[menu.icon];


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
export const AssetsAudit = () => {
  const navigate=useNavigate()
  let assetsAudit = [];
  for (const menu of data.switchMenu.find((m) => m.id === "finance").menus) {
    if (menu.id === "record-sixth") {
      assetsAudit = menu.subMenus;
      break;
    }
  }
  console.log(assetsAudit);
  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {assetsAudit.length > 0 ? (
          assetsAudit.map((menu) => {
            const Icon = assets[menu.icon];

            return (
              <Card
                key={menu.id}
                className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                onClick={()=>{navigate(`${menu.route}`)}}
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
  );
};
export const BarCode = () => {//not done
  let Barcode = [];
  
  const navigate=useNavigate()
  for (const menus of data.switchMenu.find((m) => m.id === "finance").menus) {
    if (menus.id === "record-seventh") {
      Barcode = menus.subMenus;
    }
  }
 

  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {Barcode.length > 0 ? (
          Barcode.map((menu) => {
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
  );
};
export const GST_Management = () => {
  let gst = [];
   const navigate=useNavigate()
  for (const menu of data.switchMenu.find((m) => m.id === "finance").menus) {
    if (menu.id === "record-eight") {
      gst = menu.subMenus;
      break;
    }
  }

  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {gst.length > 0 ? (
          gst.map((menu) => {
            const Icon = gst_docks;

            return (
              <Card
                key={menu.id}
                className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                onClick={()=>{navigate(`${menu.route}`)}}
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
  );
};
export const ContactManagement = () => {
  const navigate=useNavigate()
  let contactus = [];
  for (const menu of data.switchMenu.find((m) => m.id === "finance").menus) {
    if (menu.id === "record-ninth") {
      contactus = menu.subMenus;
      break;
    }
  }
  console.log(contactus);

  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {contactus.length > 0 ? (
          contactus.map((menu) => {
            const Icon = contactuss[menu.icon];

            return (
              <Card
                key={menu.id}
                className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                onClick={()=>{navigate(`${menu.route}`)}}
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
  );
};
export const WhiteBills = () => {
  const navigate=useNavigate()
  let whiteBills = [];
  for (const menu of data.switchMenu.find((m) => m.id === "finance").menus) {
    if (menu.id === "record-tenth") {
      whiteBills = menu.subMenus;
      break;
    }
  }
  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {whiteBills.length > 0 ? (
          whiteBills.map((menu) => {
            const Icon = gst_docks;

            return (
              <Card
                key={menu.id}
                className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                onClick={()=>{navigate(`${menu.route}`)}}
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
  );
};
export const FinacialSettings=()=>{
  const navigate=useNavigate()
   let settings = [];
  for (const menu of data.switchMenu.find((m) => m.id === "finance").menus) {
    if (menu.id === "record-eleventh") {
      settings = menu.subMenus;
      break;
    }
  }
 
  return (
    <>
     <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {settings.length > 0 ? (
          settings.map((menu) => {
               const Icon = settingss[menu.icon];

            return (
              <Card
                key={menu.id}
                className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                onClick={()=>{navigate(`${menu.route}`)}}
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
