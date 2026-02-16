import { Card, CardContent } from "../../components/ui/card";
import data from "../../utils/data.json";
import { gst_docks, proposedDashbaord, Purchase_Vias_PO } from "../../utils/iconmap";
const getFinanceMenu = () => {
  return data.switchMenu.find((m) => m.id === "finance");
};
export const Sale_Management = () => {
  const financeMenu = getFinanceMenu();
  if (!financeMenu) return;

  // 👇 YOU MISSED THIS STEP
  const recordOne = financeMenu.menus.find((m) => m.id === "record-one");
  if (!recordOne) return;

  const submenuOne = recordOne.subMenus.find((m) => m.id === "submenu-one");
  if (!submenuOne || !submenuOne.subsubmeus) return;

  let SaleManagement = [];

  for (const item of submenuOne.subsubmeus) {
    SaleManagement.push(item);
  }

  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {SaleManagement.length > 0 ? (
          SaleManagement.map((menu) => {
            const Icon = gst_docks;

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
export const Purchase_Management = () => {
  const financeMenu = getFinanceMenu();
  if (!financeMenu) {
    return;
  }
  const recordsecond = financeMenu.menus.find(
    (m) => m.id === "record-one",
  ).subMenus;
  if (!recordsecond) {
    return;
  }

  let Purchase_Management = [];
  const submenuTwo = recordsecond.find(
    (m) => m.id === "submenu-two",
  ).subsubmeus;

  if (!submenuTwo || !submenuTwo.subsubmeus) {
  }

  for (const items of submenuTwo) {
    Purchase_Management.push(items);
  }

  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {Purchase_Management.length > 0 ? (
          Purchase_Management.map((menu) => {
            const Icon = gst_docks;

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
export const Receipt_Management = () => {
  const menus = getFinanceMenu();
  if (!menus) {
    return;
  }

  const recordOne = menus.menus.find((m) => m.id === "record-one");
  if (!recordOne) {
    return;
  }

  const submenu = recordOne.subMenus.find(
    (m) => m.id === "submenu-three",
  ).subsubmeus;
  if (!submenu || !submenu.length === 0) {
    return;
  }
  const receipt_management = [];
  for (const items of submenu) {
    receipt_management.push(items);
  }

  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {receipt_management.length > 0 ? (
          receipt_management.map((menu) => {
            const Icon = gst_docks;

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
export const Payment_Management = () => {
  const firstMenu = getFinanceMenu();
  if (!firstMenu) {
    return;
  }
  const recordOne = firstMenu.menus.find((m) => m.id === "record-one");
  if (!recordOne) {
    return;
  }

  const subMenus = recordOne.subMenus.find(
    (m) => m.id === "submenu-fourth",
  ).subsubmeus;

  if (!subMenus || subMenus.length === "0") {
    return;
  }
  let payment_management = [];
  for (const payment of subMenus) {
    payment_management.push(payment);
  }

  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {payment_management.length > 0 ? (
          payment_management.map((menu) => {
            const Icon = proposedDashbaord[menu.icon];

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
export const Contra_Management = () => {
  const financeMenu = getFinanceMenu();
  if (!financeMenu) {
    return;
  }
  const recordOne = financeMenu.menus.find((m) => m.id === "record-one");
  if (!recordOne) {
    return;
  }
  const submenus = recordOne.subMenus.find(
    (m) => m.id === "submenu-fifth",
  ).subsubmeus;

  const contra_management = [];
  for (const items of submenus) {
    contra_management.push(items);
  }

  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {contra_management.length > 0 ? (
          contra_management.map((menu) => {
            const Icon = gst_docks;

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
export const Delivery_Note = () => {
  const financeMenu = getFinanceMenu();
  if (!financeMenu) return;

  const recordOne = financeMenu.menus.find((m) => m.id === "record-one");
  if (!recordOne) return;

  const submenuOne = recordOne.subMenus.find(
    (m) => m.id === "submenu-sixth",
  ).subsubmeus;
 
  if (!submenuOne || submenuOne.length === 0) {
    return;
  }

  let delevary_management = [];
  for (const items of submenuOne) {
    delevary_management.push(items);
  }

  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {delevary_management.length > 0 ? (
          delevary_management.map((menu) => {
            const Icon = gst_docks;

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
export const Receipt_Note =()=>{
     const financeMenu = getFinanceMenu();
  if (!financeMenu) return;

  const recordOne = financeMenu.menus.find((m) => m.id === "record-one");
  if (!recordOne) return;

  const submenuOne = recordOne.subMenus.find(
    (m) => m.id === "sub-seventh",
  ).subsubmeus;

  if (!submenuOne || submenuOne.length === 0) {
    return;
  }

  let material = [];
  for (const items of submenuOne) {
    material.push(items);
  }
  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {material.length > 0 ? (
          material.map((menu) => {
            const Icon = gst_docks;

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

}
export const Material_In = () => {
  const financeMenu = getFinanceMenu();
  if (!financeMenu) return;

  const recordOne = financeMenu.menus.find((m) => m.id === "record-one");
  if (!recordOne) return;

  const submenuOne = recordOne.subMenus.find(
    (m) => m.id === "sub-eightedt",
  ).subsubmeus;

  if (!submenuOne || submenuOne.length === 0) {
    return;
  }

  let material = [];
  for (const items of submenuOne) {
    material.push(items);
  }


  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {material.length > 0 ? (
          material.map((menu) => {
            const Icon = gst_docks;

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
export const Material_Out = () => {
  const financeMenu = getFinanceMenu();
  if (!financeMenu) return;

  const recordOne = financeMenu.menus.find((m) => m.id === "record-one");
  if (!recordOne) return;

  const submenuOne = recordOne.subMenus.find(
    (m) => m.id === "sub-nineth",
  ).subsubmeus;

  if (!submenuOne || submenuOne.length === 0) {
    return;
  }

  let material = [];
  for (const items of submenuOne) {
    material.push(items);
  }

  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {material.length > 0 ? (
          material.map((menu) => {
            const Icon = gst_docks;

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
export const Proposals = () => {
  const firstMenu = getFinanceMenu();
  if (!firstMenu) {
    return;
  }
  const recordOne = firstMenu.menus.find((m) => m.id === "record-one");
  if (!recordOne) {
    return;
  }

  const subMenus = recordOne.subMenus.find(
    (m) => m.id === "sub-eleventh",
  ).subsubmeus;

  if (!subMenus || subMenus.length === "0") {
    return;
  }
  let proposals= [];
  for (const payment of subMenus) {
    proposals.push(payment);
  }

  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {proposals.length > 0 ? (
          proposals.map((menu) => {
            const Icon = proposedDashbaord[menu.icon];

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
export const Production = () => {
    const financeMenu = getFinanceMenu();
  if (!financeMenu) return;


  const recordOne = financeMenu.menus.find((m) => m.id === "record-one");
  if (!recordOne) return;

  const submenuOne = recordOne.subMenus.find((m) => m.id === "sub-thrirteen");
  if (!submenuOne || !submenuOne.subsubmeus) return;

  let Production = [];

  for (const item of submenuOne.subsubmeus) {
    Production.push(item);
  }
 

  return <>
  <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {Production.length > 0 ? (
          Production.map((menu) => {
            const Icon = gst_docks;

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
  </>;
};
export const Purchase_Via_PO = () => {
    const financeMenu = getFinanceMenu();
  if (!financeMenu) return;


  const recordOne = financeMenu.menus.find((m) => m.id === "record-one");
  if (!recordOne) return;

  const submenuOne = recordOne.subMenus.find((m) => m.id === "submenu-fourthent");
  if (!submenuOne || !submenuOne.subsubmeus) return;

  let Purchase_via_PO = [];

  for (const item of submenuOne.subsubmeus) {
   Purchase_via_PO.push(item);
  }


  return <>
  <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {Purchase_via_PO.length > 0 ? (
          Purchase_via_PO.map((menu) => {
              const Icon =Purchase_Vias_PO[menu.icon];


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
  </>;
};
