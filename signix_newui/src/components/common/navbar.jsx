import { ArrowLeftRightIcon, User } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

import { menuicons, secondmenuicons } from "../../utils/iconmap";
import data from "../../utils/data.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import newmenu from "../../utils/menu.json";
import styles from '../../styles/style.module.css'
export const Navbar = ({ activeMenu, setActiveMenu }) => {
  const [mobileOpen, setMobileOpen] = useState(false); // <-- define here

  // console.log("Selected Menu:", selectedMenu);

  return (
    <>
      <div className={`w-full sticky top-0 z-50 bg-white shadow-sm ${styles.navbar}`}>
        <div className="flex justify-between items-center w-full px-4 sm:px-6 py-3 sm:py-4">
          <div className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Signix
          </div>

          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-1 sm:gap-6">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-3 sm:px-4 py-2 rounded-md w-32 sm:w-40 flex gap-2">
                    <ArrowLeftRightIcon size={18} />
                    Switch
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white shadow-lg p-2 rounded-lg">
                    <ul className="grid gap-1 w-[240px] sm:w-[260px]">
                      {data.switchMenu.map((menu) => {
                        const Icon = menuicons[menu.icon];
                        return (
                          <li key={menu.label}>
                            <NavigationMenuLink
                              asChild
                              className="hover:bg-transparent hover:text-inherit hover:shadow-none"
                            >
                              <Link
                                to={menu.route}
                                className="leading-none font-medium pointer-events-auto"
                                onClick={() => setActiveMenu(menu.label)}
                              >
                                <div className="flex items-center gap-2">
                                  {Icon && <Icon size={18} />}
                                  {menu.label}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger  className="px-3 sm:px-4 py-2 rounded-md w-32 sm:w-40 flex gap-1">
                    <User size={18} />
                    <span>Punnet Goyal</span>
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="bg-white shadow-lg p-3 rounded-lg min-w-[300px]">
                    <ul className="grid ">
                      {newmenu.menu.map((menu) => {
                        const Icon = secondmenuicons[menu.icon];
                        return (
                          <li key={menu.label}>
                            <NavigationMenuLink
                              asChild
                              onSelect={() => setActiveMenu(menu.label)}
                               className="hover:bg-transparent hover:text-inherit hover:shadow-none"
                            >
                              <Link
                                to={menu.route}
                                   className="leading-none font-medium pointer-events-auto"
                              >
                                 <div className="flex items-center gap-2">
                                  {Icon && <Icon size={20} />}
                                  {menu.label}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="md:hidden">
            <button
              className="p-2 rounded-md border border-gray-300 hover:bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-3">
            {data.switchMenu.map((menu) => {
              const Icon = menuicons[menu.icon];
              return (
                <Link
                  key={menu.label}
                  to={menu.route}
                  className="flex items-center gap-2 py-2 border-b border-gray-200"
                  onClick={() => {
                    setActiveMenu(menu.label);
                    setMobileOpen(false);
                  }}
                >
                  {Icon && <Icon size={18} />}
                  {menu.label}
                </Link>
              );
            })}
            
            <div className="flex items-center gap-2 py-2">
              <User size={18} />
              Punnet Goyal
            </div>
               {newmenu.menu.map((menu) => {
              const Icon = menuicons[menu.icon];
              return (
                <Link
                  key={menu.label}
                  to={menu.route}
                  className="flex items-center gap-2 py-2 border-b border-gray-200"
                  onClick={() => {
                    setActiveMenu(menu.label);
                    setMobileOpen(false);
                  }}
                >
                  {Icon && <Icon size={18} />}
                  {menu.label}
                </Link>
              );
            })}
            <div className="hidden md:flex"></div>
          </div>
        )}
      </div>
    </>
  );
};
