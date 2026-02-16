import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../../components/ui/card";
import data from "../../../utils/data.json";
import {
  employee_applications,
  Employee_records,
  gst_docks,
  hr_settings,
  Mobile,
  Salery,
} from "../../../utils/iconmap";
export const Employee_Records = () => {
  const navigator=useNavigate()
  const submenu =
    data.switchMenu
      .find((m) => m.id === "hrm")
      ?.menus.find((x) => x.id === "record-one" )?.subMenus || [];

  return (
    <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
     {submenu?.filter(menu => !menu.hidden).length > 0 ? (
  submenu
    ?.filter(menu => !menu.hidden)
    .map((menu) => {
      const Icon = Employee_records[menu.icon];

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
            <span className="text-sm font-semibold">
              {menu.label}
            </span>
          </CardContent>
        </Card>
      );
    })
) : (
  <p className="text-gray-400">No submenus found</p>
)}

    </div>
  );
};
export const Payroll = () => {
  const navigate = useNavigate();
  const submenu =
    data.switchMenu
      .find((m) => m.id === "hrm")
      ?.menus.find((sm) => sm.id === "record-two").subMenus || [];

  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {submenu.length > 0 ? (
          submenu.map((menu) => {
            const Icon = Salery[menu.icon];

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
export const Attendence = () => {
  const navigate = useNavigate();
  const submenu =
    data.switchMenu
      .find((m) => m.id === "hrm")
      ?.menus.find((sm) => sm.id === "record-three").subMenus || [];
  const Icon = gst_docks;
  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {submenu.length > 0 ? (
          submenu.map((menu) => (
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
          ))
        ) : (
          <p className="text-gray-400">No submenus found</p>
        )}
      </div>
    </>
  );
};
export const Employee_Applications = () => {
  const navigate = useNavigate();
  const submenu =
    data.switchMenu
      .find((m) => m.id === "hrm")
      ?.menus.find((m) => m.id === "record-four").subMenus || [];
  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {submenu.length > 0 ? (
          submenu.map((menu) => {
            const Icon = employee_applications[menu.icon];

            return (
              <Card
                key={menu.id}
                className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                onClick={()=>navigate(`${menu.route}`)}
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
export const Hr_Settings = () => {
  const navigate = useNavigate();
  const submenu =
    data.switchMenu
      .find((m) => m.id === "hrm")
      .menus.find((m) => m.id === "record-five").subMenus || [];
  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {submenu.length > 0 ? (
          submenu.map((menu) => {
            const Icon = hr_settings[menu.icon];

            return (
              <Card
                key={menu.id}
                className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                onClick={() => {
                  navigate(`${menu.route}`);
                }}
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
export const Mobile_Application = () => {
  const navigate=useNavigate()
  const submenu =
    data.switchMenu
      .find((m) => m.id === "hrm")
      .menus.find((m) => m.id === "record-six").subMenus || [];
  return (
    <>
      <div className="my-10 mx-5 grid grid-cols-1 gap-6 justify-center lg:grid-cols-4 md:grid-cols-3">
        {submenu.length > 0 ? (
          submenu.map((menu) => {
            const Icon = Mobile[menu.icon];

            return (
              <Card
                key={menu.id}
                className="h-28 cursor-pointer rounded-sm bg-white hover:shadow-md"
                onClick={()=>{navigate(`${menu.route}`)}}
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
