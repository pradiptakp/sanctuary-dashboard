import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { RootState } from "../redux/store";

const routes: {
  path?: string;
  icon?: string;
  name: string;
  routes?: { path: string; icon?: string; name: string }[];
}[] = [
  {
    path: "/vlab-admin/home", // the url
    icon: "home", // the component being exported from icons/index.js
    name: "Dashboard", // name that appear in Sidebar
  },
  {
    path: "/vlab-admin/quiz",
    icon: "chalkboard-teacher",
    name: "Quiz",
  },

  {
    name: "Course Data",
    routes: [
      // submenu
      {
        path: "/vlab-admin/data/course",
        name: "Courses",
      },
      {
        path: "/vlab-admin/data/module",
        name: "Modules",
      },
      {
        path: "/vlab-admin/data/lesson",
        name: "Lessons",
      },
    ],
  },
  {
    name: "User Data",
    routes: [
      {
        path: "/vlab-admin/data/class",
        name: "Classes",
      },
      {
        path: "/vlab-admin/data/lecturer",
        name: "Lecturers",
      },
      {
        path: "/vlab-admin/data/student",
        name: "Students",
      },
      {
        path: "/vlab-admin/data/role",
        name: "Roles",
      },
    ],
  },
];

export const Sidebar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dark = useSelector((state: RootState) => state.app.dark);
  const { pathname } = useLocation();
  return (
    <aside className="z-30 flex-shrink-0  w-64  bg-white dark:bg-blueGray-800 relative h-screen flex flex-col">
      <div className="flex px-6 items-center h-16">
        <Link to="/vlab">Sanctuary</Link>
      </div>
      <ul className="text-blueGray-800 dark:text-gray-400 flex-1 overflow-y-auto scrollbar-thin">
        {routes.map((v) => {
          const isActive = v.path === pathname;
          if (v.routes) {
            return (
              <li className="my-6" key={v.name}>
                <div className="py-2 px-6 mt-2 text-xs uppercase tracking-widest font-bold text-blue-600 ">
                  {v.name}
                </div>
                {v.routes.map((_v) => {
                  const _isActive = _v.path === pathname;
                  return (
                    <Link
                      to={_v.path}
                      key={_v.name}
                      className={` py-3 px-6 flex items-center hover:bg-blueGray-100 dark:hover:bg-blueGray-800 hover:text-blue-600  font-medium transition cursor-pointer ${
                        isActive &&
                        "bg-blueGray-100 dark:bg-blueGray-800 text-blue-900 dark:text-white"
                      }`}
                    >
                      {_v.icon && (
                        <div className="w-4 mr-4 flex items-center justify-center ">
                          <i className={`fas fa-${_v.icon} text-md `} />
                        </div>
                      )}
                      {_v.name}
                      <div className="flex-1" />
                      {_isActive && (
                        <div className="h-full absolute inset-y-0 right-0 flex items-center">
                          <div className="rounded-tl-md rounded-bl-md bg-blue-600 dark:bg-blue-400 w-1 h-4/5" />
                        </div>
                      )}
                      {/* <i className="fas fa-chevron-down text-xs" /> */}
                    </Link>
                  );
                })}
                {/* <i className="fas fa-chevron-down text-xs" /> */}
              </li>
            );
          } else {
            return (
              <Link
                to={v.path ?? ""}
                key={v.name}
                className={`relative py-3 px-6 flex items-center hover:bg-blueGray-100 dark:hover:bg-blueGray-800 hover:text-blue-600 ${
                  isActive &&
                  "bg-blueGray-100 dark:bg-blueGray-800 text-blue-900 dark:text-white"
                } font-medium transition cursor-pointer `}
              >
                {v.icon && (
                  <div className="w-4 mr-4 flex items-center justify-center ">
                    <i className={`fas fa-${v.icon} text-md `} />
                  </div>
                )}
                {v.name}
                <div className="flex-1" />
                {isActive && (
                  <div className="h-full absolute inset-y-0 right-0 flex items-center">
                    <div className="rounded-tl-md rounded-bl-md bg-blue-600 dark:bg-blue-400 w-1 h-4/5" />
                  </div>
                )}
              </Link>
            );
          }
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
