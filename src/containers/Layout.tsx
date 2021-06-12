import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

export const Layout: React.FC<{}> = ({ children }) => {
  const dark = useSelector((state: RootState) => state.app.dark);

  return (
    <div
      className={`${
        dark ? "dark" : ""
      } flex h-screen overflow-y-hidden bg-blueGray-100`}
    >
      <Sidebar />
      <div className="flex-1 relative flex flex-col w-full">
        <div>
          <Navbar />
        </div>
        <div className=" dark:bg-blueGray-900 h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
