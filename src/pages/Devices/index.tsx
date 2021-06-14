import React from "react";
import { Card } from "../../components/Card";
import { Disclosure, Transition, Switch } from "@headlessui/react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

export const Devices = () => {
  return (
    <div className="flex flex-col">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full focus:outline-none">
              <Card className="flex gap-6">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded bg-lightBlue-100 self-center`}
                >
                  <i
                    className={`fas fa-door-closed text-xl text-lightBlue-600`}
                  />
                </div>
                <div className=" flex flex-col items-start">
                  <span className="text-blueGray-400 text-xs mb-1">Room</span>
                  <span className="text-lg font-bold">Living Room</span>
                  <span className="text-blueGray-500">
                    Current temperature is{" "}
                    <span className="text-blueGray-800 font-medium">32 C</span>
                  </span>
                </div>

                <div className="flex-1" />

                <Button className="self-center text-xs">Set as Main</Button>

                <div className="flex justify-end items-center">
                  <i
                    className={`${
                      open ? "fa-chevron-up" : "fa-chevron-down"
                    } fas text-purple-500`}
                  />
                </div>
              </Card>
            </Disclosure.Button>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform -translate-y-12 opacity-0"
              enterTo="transform translate-y-0 opacity-100"
              leave="transition  duration-75 ease-out"
              leaveFrom="transform translate-y-0  opacity-100"
              leaveTo="transform  -translate-y-12 opacity-0"
            >
              <Disclosure.Panel className="mt-1">
                <Card className="flex flex-col gap-4">
                  <Card className="flex gap-6 bg-blue-100 shadow-none">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded bg-white self-center`}
                    >
                      <i
                        className={`fas fa-door-closed text-xl text-lightBlue-600`}
                      />
                    </div>
                    <div>
                      <div className=" flex flex-col items-start">
                        <span className="text-blueGray-500 text-xs mb-1">
                          Device
                        </span>
                        <span className="text-lg font-bold">Lamp #1</span>
                      </div>
                    </div>

                    <div className="flex-1" />
                    <div>
                      <Button className="self-center text-xs mr-2">Edit</Button>
                      <Button className="self-center text-xs bg-red-400">
                        Delete
                      </Button>
                    </div>
                  </Card>
                  <div className="bg-blueGray-200 flex justify-center items-center rounded-lg p-4">
                    <i className="fas fa-plus text-xl text-blue-600 mr-4" />
                    <div className="font-medium text-blueGray-600">
                      Add device
                    </div>
                  </div>
                </Card>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <div className="bg-blueGray-200 flex justify-center items-center rounded-lg p-4 mt-6">
        <i className="fas fa-plus text-xl text-blue-600 mr-4" />
        <div className="font-medium text-blueGray-600">Add Room</div>
      </div>
    </div>
  );
};

export default Devices;
