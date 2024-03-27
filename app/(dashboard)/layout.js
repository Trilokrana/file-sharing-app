import React from "react";
import SideNavBar from "./_components/SideNavBar";
import TopHeader from "./_components/TopHeader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function layout({ children }) {
  return (
    <div>
      <div className="h-full w-64 flex-col fixed inset-y-0 z-50 md:flex hidden">
        <SideNavBar />
      </div>
      <div className="md:ml-64">
        <TopHeader />
        <ToastContainer
          theme="light"
          position="top-right"
          autoClose={2000}
          closeOnClick
          pauseOnHover={true}
        />
        {children}
      </div>
    </div>
  );
}

export default layout;
