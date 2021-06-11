import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { formatName } from "../utils/formatter";
import { RootState } from "../redux/store";
import { connect } from "react-redux";
import { toggleDarkMode } from "../redux/actions/appActions";
import { PayloadAction } from "typesafe-actions";

export const Navbar = ({
  dark,
  toggleDarkMode,
}: {
  dark?: boolean;
  toggleDarkMode: (dark: boolean) => PayloadAction<"TOGGLE_DARK_MODE", boolean>;
}) => {
  return (
    <div>
      <header className="z-50 bg-white dark:bg-blueGray-800 h-16 py-4 ">
        <nav className="container flex items-center justify-between h-full px-6 mx-auto">
          <div className="flex flex-1 space-x-10 mx-10">
            <div className="flex-1" />

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="cursor-pointer flex space-x-4 items-center focus:outline-none ml-4">
                    <img
                      src="https://ethol.pens.ac.id/api/images/user.png"
                      alt="avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="text-left">
                      <div className="font-medium text-blueGray-800 dark:text-blueGray-100">
                        {formatName("Sherly Maya Salsabilla")}
                      </div>
                      <div className="text-blueGray-400 text-xs mt-0.5">
                        2110171009
                      </div>
                    </div>
                    <i
                      className={`fas fa-chevron-down text-blueGray-800 dark:text-blueGray-100 text-xs transition duration-200 transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </Popover.Button>

                  <Transition
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1 "
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Overlay
                      className={`${
                        open ? "fixed inset-0 top-16 " : "opacity-0"
                      } bg-black opacity-50`}
                    />
                  </Transition>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200 transform"
                    enterFrom="opacity-0 translate-y-12"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150 transform"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-12"
                  >
                    <Popover.Panel className="absolute right-0 z-10 px-4 mt-2 sm:px-0 ">
                      <>
                        <i className="absolute right-12 fas fa-caret-up text-4xl text-white dark:text-blueGray-900" />
                        <div
                          className="overflow-hidden shadow-md rounded-lg mt-6 bg-white dark:bg-blueGray-900 flex flex-col dark:text-blueGray-100"
                          style={{ maxHeight: "500px" }}
                        >
                          <div className="p-4 pr-16 relative cursor-pointer hover:bg-blue-100 dark:hover:bg-blueGray-800 hover:text-blue-800 dark:hover:text-blue-400 transition ease-in-out duration-200 ">
                            Log Out
                          </div>
                        </div>
                      </>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <button
              onClick={() => {
                toggleDarkMode(!dark);
              }}
              className="focus:outline-none"
            >
              {dark ? (
                <i className="fas fa-sun text-lg text-yellow-200" />
              ) : (
                <i className="fas fa-moon text-lg text-lightBlue-800" />
              )}
            </button>
          </div>
        </nav>
      </header>
      {/* <div className="border-t dark:border-blueGray-800 bg-white dark:bg-blueGray-900 py-3 px-6">
        <nav
          aria-label="breadcrumb"
          className="text-xs font-bold text-blueGray-400 mb-1"
        >
          <ol className="list-reset flex">
            <li className="">Home</li>
            <li className="mx-2 ">/</li>
            <li className="">Library</li>
            <li className="mx-2 ">/</li>
            <li className="text-blueGray-600">Data</li>
          </ol>
        </nav>
        <div className="text-lg font-medium dark:text-white">Dashboard</div>
      </div> */}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  dark: state.app.dark,
});

const mapDispatchToProps = {
  toggleDarkMode,
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
