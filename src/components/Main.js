import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <>
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-7xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
          <div className="basis-1/4 bg-gray-900 px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
            <Sidebar></Sidebar>
          </div>
          <div className="min-h-[70vh] w-full">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
