/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/Card";
import { RootState } from "../redux/store";
import { ReactComponent as WelcomeSVG } from "../assets/images/welcome.svg";
import { getDashboardInfo } from "../redux/actions/appActions";
import { DashboardData } from "../types";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<DashboardData>();

  React.useEffect(() => {
    dispatch(
      getDashboardInfo.request({
        onFailure: (err) => {
          toast.error(err.message);
          setLoading(false);
        },
        onSuccess: (res) => {
          setData(res);
          setLoading(false);
        },
      })
    );
  }, []);

  return (
    <div>
      {loading ? (
        <div className="h-40 flex justify-center items-center">
          <ClipLoader size={40} color={"#123abc"} />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6">
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
              <div className="text-lg font-bold text-white mt-5">
                Documentation
              </div>
              <div className="mt-1 text-blueGray-200">
                Click here to visit documentation for Sanctuary Smarthome
              </div>
            </Card>
          </a>
          <Card className="flex items-center">
            <div className="flex-1">
              <div className="font-bold">Total Devices</div>
              <div className="text-xl mt-2 font-bold">
                {data?.devicesTotal || 0}
              </div>
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
              <div className="text-xl mt-2 font-bold">
                {data?.roomsTotal || 0}
              </div>
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
              <div className="text-xl mt-2 font-bold">
                {data?.usersTotal || 0}
              </div>
            </div>
            <div
              className={`w-12 h-12 flex items-center justify-center rounded bg-lightBlue-100`}
            >
              <i className={`fas fa-users text-xl text-lightBlue-600`} />
            </div>
          </Card>
          <a
            href="https://www.dropbox.com/s/h4fiex7nacxc6ip/sanctuary.apk"
            target="_blank"
            rel="noreferrer"
          >
            <Card className="bg-gradient-to-tr from-lightBlue-900 to-lightBlue-700 shadow-none h-full hover:shadow-md transform hover:scale-105 transition">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-white bg-opacity-50">
                <i className="fas fa-mobile-alt text-2xl text-lightBlue-900" />
              </div>
              <div className="text-lg font-bold text-white mt-5">
                Download Mobile App
              </div>
              <div className="mt-1 text-blueGray-200">
                Click here to download Sanctuary Smarthome mobile application
              </div>
            </Card>
          </a>
          <a
            href="https://www.dropbox.com/s/wtrpy4eorhnyjby/Sanctuary%201.0.0.exe"
            target="_blank"
            rel="noreferrer"
          >
            <Card className="bg-gradient-to-tr from-lightBlue-900 to-lightBlue-700 shadow-none h-full hover:shadow-md transform hover:scale-105 transition">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-white bg-opacity-50">
                <i className="fas fa-desktop text-2xl text-lightBlue-900" />
              </div>
              <div className="text-lg font-bold text-white mt-5">
                Download Desktop App
              </div>
              <div className="mt-1 text-blueGray-200">
                Click here to download Sanctuary Smarthome desktop application
              </div>
            </Card>
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;
