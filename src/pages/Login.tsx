import React from "react";
import { ReactComponent as LogoText } from "../assets/images/logo-text.svg";

const Login = () => {
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2 bg-blue-50 flex items-center justify-center">
            <LogoText className="w-60 h-36" />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>
              <div className="block text-gray-700 dark:text-gray-400">
                <span>Email</span>
                <input
                  className="mt-1 p-2 block w-full focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-purple-400 border border-gray-300 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700"
                  type="email"
                  placeholder="john@doe.com"
                />
              </div>

              <div className="mt-4 block text-gray-700 dark:text-gray-400">
                <span>Password</span>
                <input
                  className="mt-1 p-2 block w-full focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:border-purple-400 border border-gray-300 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700"
                  type="password"
                  placeholder="*****"
                />
              </div>

              <div className="mt-8 align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none w-full px-4 py-2 rounded-lg text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:ring focus:ring-purple-300">
                Log in
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Login;
