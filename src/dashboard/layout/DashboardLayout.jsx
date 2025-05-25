import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MobileSidebar from "../components/common/MobileSidebar";

const DashboardLayout = () => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const getBgColor = () => {
    if (location.pathname.includes("/chat")) return "bg-white";
    if (location.pathname.includes("/journal")) return "bg-white  ";
    return "bg-[#E9F3FF]";
  };

  return (
     
    <div className={`flex min-h-screen py-5 sm:py-14 px-3 sm:px-0 ${getBgColor()}`}>
      {/* Mobile Sidebar */}
      {showSidebar && (
        <div className=" md:hidden">
          <MobileSidebar onClose={() => setShowSidebar(false)} />
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-1 h-full">
        {/* Header */}
        <Header onMenuClick={() => setShowSidebar(true)}/>

        {/* Page content */}
        <main className="flex-1 py-10 sm:px-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
