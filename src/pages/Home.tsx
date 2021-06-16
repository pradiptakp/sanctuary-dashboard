import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../components/Card";
import { RootState } from "../redux/store";
import { ReactComponent as WelcomeSVG } from "../assets/images/welcome.svg";
import { motion } from "framer-motion";

const Home = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <motion.div exit={{ opacity: 0 }} className="grid grid-cols-3 gap-6">
      <Card className="bg-gradient-to-tr from-purple-200 to-blue-100 col-span-2 lg:h-52 flex items-center shadow-none">
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-lg font-bold">
            Hello, {user?.userData.username}
          </div>
          <div className="">Welcome back to Sanctuary Smarthome</div>
        </div>
        <div>
          <WelcomeSVG className="h-60" />
        </div>
      </Card>
      <a href="http://www.google.com" target="_blank" rel="noreferrer">
        <Card className="bg-gradient-to-tr from-lightBlue-900 to-lightBlue-700 shadow-none h-full hover:shadow-md transform hover:scale-105 transition">
          <div className="rounded-full w-12 h-12 flex items-center justify-center bg-white bg-opacity-50">
            <i className="fas fa-book text-2xl text-lightBlue-900" />
          </div>
          <div className="text-lg font-bold text-white mt-5">Documentation</div>
          <div className="mt-1 text-blueGray-200">
            Click here to visit documentation for Sanctuary Smarthome
          </div>
        </Card>
      </a>

      <Card className="flex items-center">
        <div className="flex-1">
          <div className="font-bold">Total Devices</div>
          <div className="text-xl mt-2 font-bold">1</div>
        </div>
        <div
          className={`w-12 h-12 flex items-center justify-center rounded bg-lightBlue-100`}
        >
          <i className={`fas fa-laptop-house text-xl text-lightBlue-600`} />
        </div>
      </Card>
      <Card className="flex items-center">
        <div className="flex-1">
          <div className="font-bold">Total Rooms</div>
          <div className="text-xl mt-2 font-bold">1</div>
        </div>
        <div
          className={`w-12 h-12 flex items-center justify-center rounded bg-lightBlue-100`}
        >
          <i className={`fas fa-door-closed text-xl text-lightBlue-600`} />
        </div>
      </Card>
      <Card className="flex items-center">
        <div className="flex-1">
          <div className="font-bold">Total Users</div>
          <div className="text-xl mt-2 font-bold">1</div>
        </div>
        <div
          className={`w-12 h-12 flex items-center justify-center rounded bg-lightBlue-100`}
        >
          <i className={`fas fa-users text-xl text-lightBlue-600`} />
        </div>
      </Card>
    </motion.div>
  );
};

export default Home;
