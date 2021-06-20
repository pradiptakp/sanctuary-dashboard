/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { useHistory, useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getDevice,
  postDevice,
  updateDevice,
} from "../../redux/actions/deviceActions";
import { DeviceType } from "../../types";
import { toast } from "react-toastify";

const DeviceTypes: { value: DeviceType; name: string }[] = [
  {
    value: "Lamp",
    name: "Lamp",
  },
  {
    value: "Lock",
    name: "Door Lock",
  },
  {
    value: "Temperature",
    name: "Temperature Sensor",
  },
];

export const CreateDevice = () => {
  const { roomId, deviceId } =
    useParams<{ roomId?: string; deviceId: string }>();
  const dispatch = useDispatch();
  const history = useHistory();
  const [deviceType, setDeviceType] = React.useState<DeviceType>("Lamp");

  React.useEffect(() => {
    if (deviceId) {
      dispatch(
        getDevice.request({
          id: deviceId,
          onSuccess: (res) => {
            setDeviceType(res.type);
          },
          onFailure: (err) => {
            toast.error(err);
            history.replace("/devices");
          },
        })
      );
    }
  }, []);

  const onCreate = () => {
    if (deviceType && roomId) {
      dispatch(
        postDevice.request({
          data: {
            type: deviceType,
            roomId,
          },
          onFailure: (err) => {
            toast.error(err);
            history.replace("/devices");
          },
          onSuccess: () => {
            toast.success("Device added!");
            history.replace("/devices");
          },
        })
      );
    }
  };

  const onUpdate = () => {
    if (deviceId && deviceType) {
      dispatch(
        updateDevice.request({
          id: deviceId,
          data: {
            type: deviceType,
          },
          onSuccess: () => {
            toast.success("Device updated!");
            history.replace("/devices");
          },
          onFailure: () => {},
        })
      );
    }
  };

  return (
    <div>
      <Card>
        <form
          className="lg:w-1/3"
          onSubmit={(e) => {
            e.preventDefault();
            if (deviceId) {
              onUpdate();
            } else {
              onCreate();
            }
          }}
        >
          <div className="block text-gray-700 dark:text-gray-400">
            <span>Room Id</span>
            <div className="font-medium text-lg">{roomId}</div>
          </div>
          <div className="mt-4 block text-gray-700 dark:text-gray-400">
            <span>Device Type</span>
            <div className="relative inline-block w-full text-gray-700">
              <select
                onChange={(e) => setDeviceType(e.target.value as DeviceType)}
                className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
                placeholder="Regular input"
              >
                {DeviceTypes.map((v) => (
                  <option key={v.value} value={v.value}>
                    {v.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <Link to="/rooms" className="flex-1 ">
              <Button
                type="button"
                className="flex-1 w-full bg-blueGray-200 hover:bg-blueGray-300 text-blueGray-900"
              >
                Cancel
              </Button>
            </Link>
            <Button type="submit" className="flex-1">
              Create
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CreateDevice;
