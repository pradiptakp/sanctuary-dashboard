import React from "react";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import Input from "../../components/Input";

export const CreateDevice = () => {
  const [deviceType, setDeviceType] =
    React.useState<"" | "Lamp" | "Lock" | "TempSensor">("");

  return (
    <div>
      <Card>
        <div className="lg:w-1/3">
          <div className="block text-gray-700 dark:text-gray-400">
            <span>Room Name</span>
            <div className="font-medium text-lg">Living Room</div>
          </div>
          <div className="mt-4 block text-gray-700 dark:text-gray-400">
            <span>Device Type</span>
            <div className="relative inline-block w-full text-gray-700">
              <select
                className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
                placeholder="Regular input"
              >
                <option>Lamp</option>
                <option>Door Lock</option>
                <option>Temperature Sensor</option>
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

          <div className="flex gap-4">
            <Button className="flex-1 mt-6 bg-blueGray-200 hover:bg-blueGray-300 text-blueGray-900">
              Cancel
            </Button>
            <Button className="mt-6 flex-1">Create</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CreateDevice;
