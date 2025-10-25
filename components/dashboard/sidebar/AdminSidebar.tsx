"use client";

import { useState } from "react";
import { adminMenu } from "../../../constant/admin";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import SidebarMenu from "./SidbarMenu";
import { VscSignOut } from "react-icons/vsc";

type MenuItemTitle = string | null;

export default function AdminSidebar() {
  const [openMenu, setOpenMenu] = useState<MenuItemTitle>(null);
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = (menu: MenuItemTitle) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const bottomMenu = ["Profile", "Settings"];

  const topMenu = adminMenu.filter((item) => !bottomMenu.includes(item.title));
  const bottomMenus = adminMenu.filter((item) =>
    bottomMenu.includes(item.title)
  );

  return (
    <aside
      className={`dark:bg-my-light h-screen shadow-lg flex flex-col justify-between transition-all duration-300 ${
        collapsed ? "" : "w-64"
      }`}>
      {/* Header */}
      <div>
        <div className='p-2 border-b border-my-gray/50'>
          <div
            className={`flex items-center pb-5 ${
              !collapsed && "justify-end"
            } `}>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className='p-1 rounded-full text-xl transition shadow-md shadow-my-white/20'>
              {collapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
            </button>
          </div>
          <div className='flex items-center'>
            <Image
              src={"/favicon.ico"}
              width={100}
              height={100}
              alt='logo'
              className={collapsed ? "w-8" : "w-12"}
            />
            {!collapsed && <p>Admin Panel</p>}
          </div>
        </div>

        {/* Menu */}
        <SidebarMenu
          topMenu={topMenu}
          collapsed={collapsed}
          openMenu={openMenu}
          toggleMenu={toggleMenu}
        />
      </div>
      <div className='p-2 pb-10 relative'>
       
        <SidebarMenu
          topMenu={bottomMenus}
          collapsed={collapsed}
          openMenu={openMenu}
          toggleMenu={toggleMenu}
        />
        <button className='ml-2 rounded flex items-center gap-2 hover:bg-my-gray/30  transition-all w-full p-2'>
          <VscSignOut /> {!collapsed && <span className='text-sm'>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
