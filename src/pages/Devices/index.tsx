/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Card } from "../../components/Card";
import { Disclosure, Transition } from "@headlessui/react";
import Button from "../../components/Button";
import Switch from "react-switch";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteRoom, getRooms } from "../../redux/actions/roomActions";
import { Device, Room } from "../../types";
import swal from "sweetalert2";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";

export const DeviceCard = ({ data }: { data: Device }) => {
  const [deviceState, setDeviceState] = React.useState(false);
  return (
    <Card className="flex gap-6 bg-blue-100 shadow-none">
      <div
        className={`w-12 h-12 flex items-center justify-center rounded bg-white self-center`}
      >
        <i className={`fas fa-laptop-house text-xl text-lightBlue-600`} />
      </div>
      <div>
        <div className=" flex flex-col items-start">
          <span className="text-blueGray-500 text-xs mb-1">Device</span>
          <span className="text-lg font-bold">{data.id}</span>
        </div>
        <label className=" flex flex-col items-start mt-2">
          <span className="text-blueGray-500 text-xs mb-1">State</span>
          <Switch
            onColor="#3B82F6"
            offColor="#A1A1AA"
            onChange={() => setDeviceState(!deviceState)}
            checked={deviceState}
          />
        </label>
      </div>

      <div className="flex-1" />
      <div>
        <Button className="self-center text-xs mr-2">Edit</Button>
        <Button className="self-center text-xs bg-red-600 hover:bg-red-700">
          Delete
        </Button>
      </div>
    </Card>
  );
};

export const Devices = () => {
  const dispatch = useDispatch();

  const [rooms, setRooms] = React.useState<Room[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = () => {
    setLoading(true);
    dispatch(
      getRooms.request({
        onSuccess: (res) => {
          setRooms(res);
          setLoading(false);
        },
        onFailure: () => {
          setLoading(false);
        },
      })
    );
  };

  const onDelete = (id: string) => {
    swal
      .fire({
        title: "Delete Device?",
        text: "Device and its devices will be deleted, are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: `Delete`,
      })
      .then(({ isConfirmed }) => {
        if (isConfirmed) {
          dispatch(
            deleteRoom.request({
              id,
              onSuccess: () => {
                toast.success("Room deleted!");
                setRooms([]);
                fetchRooms();
              },
              onFailure: (err) => {
                toast.error(err);
              },
            })
          );
        }
      });
  };

  return (
    <div className="flex flex-col pb-8">
      {loading ? (
        <div className="h-40 flex justify-center items-center">
          <ClipLoader size={40} color={"#123abc"} />
        </div>
      ) : (
        <>
          {rooms.map((v, i) => {
            return (
              <Disclosure>
                {({ open }) => (
                  <>
                    {i !== 0 ? <div className="mt-8" /> : null}
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
                          <span className="text-blueGray-400 text-xs mb-1">
                            Room
                          </span>
                          <span className="text-lg font-bold">{v.name}</span>
                          <span className="text-blueGray-500">
                            {v.description}
                            {/* Current temperature is{" "}
                        <span className="text-blueGray-800 font-medium">
                          {v.temperature}
                        </span> */}
                          </span>
                        </div>

                        <div className="flex-1" />

                        {/* <Button className="self-center text-xs">Set as Main</Button> */}
                        <div className="flex items-center">
                          <Link to={`/devices/create-room/${v.id}`}>
                            <Button className="self-center text-xs mr-2">
                              Edit
                            </Button>
                          </Link>
                          <Button
                            onClick={(e) => {
                              e.preventDefault();
                              onDelete(v.id);
                            }}
                            className="self-center text-xs bg-red-600 hover:bg-red-700"
                          >
                            Delete
                          </Button>
                        </div>

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
                          <div
                            className={`${
                              v.devices.length > 0
                                ? "grid grid-cols-2 gap-4"
                                : ""
                            }`}
                          >
                            {v.devices.map((_v, _i) => {
                              return (
                                <>
                                  <DeviceCard data={_v} />
                                </>
                              );
                            })}
                            <Link
                              to="/devices/create-device"
                              className="bg-blueGray-200 flex justify-center items-center rounded-lg p-4 "
                            >
                              <i className="fas fa-plus text-xl text-blue-600 mr-4" />
                              <div className="font-medium text-blueGray-600">
                                Add device
                              </div>
                            </Link>
                          </div>
                        </Card>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            );
          })}
          <Link
            to="/devices/create-room"
            className="bg-blueGray-200 flex justify-center items-center rounded-lg p-4 mt-8"
          >
            <i className="fas fa-plus text-xl text-blue-600 mr-4" />
            <div className="font-medium text-blueGray-600">Add Room</div>
          </Link>
        </>
      )}
    </div>
  );
};

export default Devices;
