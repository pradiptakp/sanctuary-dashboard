import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../components/Card";
import { RootState } from "../redux/store";
import { ReactComponent as WelcomeSVG } from "../assets/images/welcome.svg";

const Home = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <div className="p-6">
      <div className="mb-1 text-gray-400 font-medium">
        Sanctuary<span className="mx-2">\</span>
        <span className="text-blue-500 font-bold">Dashboard</span>
      </div>
      <div className="text-2xl font-bold tracking-wide">Dashboard</div>
      <div className="grid grid-cols-3 gap-6 mt-8">
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
          <Card className="bg-gradient-to-tr from-blueGray-800 to-blueGray-600 shadow-none h-full">
            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-white bg-opacity-50">
              <i className="fas fa-book text-2xl text-blueGray-800" />
            </div>
            <div className="text-lg font-bold text-white mt-5">
              Documentation
            </div>
            <div className="mt-1 text-blueGray-200">
              Not sure where to start? Visit documentation for Sanctuary
              Smarthome
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
      </div>
    </div>
  );
};

export default Home;
