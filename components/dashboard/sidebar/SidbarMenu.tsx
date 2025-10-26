"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";

type SubMenuItem = {
  title: string;
  path: string;
};

type MenuItem = {
  title: string;
  icon: React.ElementType;
  path?: string;
  subMenu?: SubMenuItem[];
};

interface SidebarMenuProps {
  topMenu: MenuItem[];
  collapsed: boolean;
  openMenu: string | null;
  toggleMenu: (title: string) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  topMenu,
  collapsed,
  openMenu,
  toggleMenu,
}) => {
  const pathname = usePathname();

  return (
    <nav className='flex-1 overflow-y-auto text-my-light dark:text-my-white/80'>
      <ul className='p-2 space-y-1.5'>
        {topMenu.map((item, index) => {
          // Check if current item or any of its subMenu is active
          const isActive =
            item.path === pathname ||
            item.subMenu?.some((sub) => pathname.startsWith(sub.path));

          return (
            <li key={index}>
              {item.subMenu ? (
                <div className='font-light text-sm'>
                  <button
                    onClick={() => toggleMenu(item.title)}
                    className={`flex items-center justify-between w-full p-2 rounded-lg transition
                      ${
                        isActive
                          ? "bg-my-orange/30 text-my-light"
                          : "hover:bg-my-gray/20"
                      }`}>
                    <div className='flex items-center gap-3'>
                      <item.icon />
                      {!collapsed && <span>{item.title}</span>}
                    </div>
                    {!collapsed && (
                      <IoMdArrowDropdown
                        className={`transition-transform duration-200 ${
                          openMenu === item.title ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Submenu */}
                  {openMenu === item.title && !collapsed && (
                    <ul className='pl-10 mt-1 space-y-1'>
                      {item.subMenu.map((sub, i) => {
                        const isSubActive = pathname.startsWith(sub.path);
                        return (
                          <li key={i}>
                            <Link
                              href={sub.path}
                              className={`block p-2 rounded-md text-xs transition ${
                                isSubActive
                                  ? "bg-my-orange/40 text-my-light"
                                  : "hover:bg-my-gray/30"
                              }`}>
                              {sub.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.path || "#"}
                  className={`flex items-center text-sm gap-3 p-2 rounded-lg transition font-light 
                    ${isActive ? "text-my-light" : "hover:bg-my-gray/20"}`}>
                  <item.icon />
                  {!collapsed && <span>{item.title}</span>}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarMenu;
