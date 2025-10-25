import {
  FaHome,
  FaUser,
  FaCogs,
  FaChartBar,
  FaFileAlt,
  FaImages,
  FaTags,
  FaUsers,
} from "react-icons/fa";

export const adminMenu = [
  {
    title: "Dashboard",
    icon: FaHome,
    path: "/dashboard",
  },
  {
    title: "Users",
    icon: FaUsers,
    path: "/users",
  },
  {
    title: "Content",
    icon: FaFileAlt,
    subMenu: [
      { title: "Pages", path: "/pages" },
      { title: "Posts", path: "/posts" },
      { title: "Media", path: "/media" },
    ],
  },
  {
    title: "Projects",
    icon: FaImages,
    subMenu: [
      { title: "All Projects", path: "/projects" },
      { title: "Add New", path: "/projects/new" },
      { title: "Categories", path: "/projects/categories" },
    ],
  },
  {
    title: "Services",
    icon: FaTags,
    subMenu: [
      { title: "All Services", path: "/services" },
      { title: "Add New", path: "/services/new" },
    ],
  },
  {
    title: "Settings",
    icon: FaCogs,
    path: "/settings",
  },
  {
    title: "Analytics",
    icon: FaChartBar,
    path: "/analytics",
  },
  {
    title: "Profile",
    icon: FaUser,
    path: "/profile",
  },
];
