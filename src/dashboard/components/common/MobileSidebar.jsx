import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import home from "../../../dashboard/assets/icons/gray_home.svg";
import chat from "../../../assets/icons/chat.svg";
import book from "../../../assets/icons/gala_book.svg";

const MobileSidebar = ({ onClose }) => {
  const sidebarItems = [
    { path: "/dashboard", label: "Home", icon: home },
    { path: "/dashboard/chat", label: "Chat", icon: chat },
    { path: "/dashboard/journal", label: "Journal", icon: book },
  ];

  const [activePath, setActivePath] = useState("/dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const handleClick = (path) => {
    setActivePath(path);
    navigate(path);
    onClose();
  };

  return (
    

     <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Sliding Sidebar */}
      <div className="relative w-60 h-full rounded-tr-lg  rounded-br-lg bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out translate-x-0">
        <div className="h-full font-poppins flex flex-col items-start px-5 pt-10">
          <div className="mb-10">
            <img src={logo} alt="logo" className="w-24" />
          </div>

          <div className="flex flex-col space-y-5">
            {sidebarItems.map(({ path, label, icon }) => (
              <button
                className="flex items-center gap-2"
                key={path}
                onClick={() => handleClick(path)}
              >
                <div
                  className={`p-2.5 rounded-full ${
                    activePath === path
                      ? "bg-[#094C9F] text-white"
                      : "bg-gray-100 text-[#393939]"
                  }`}
                >
                  <img src={icon} alt={label} className="w-4 h-4" />
                </div>
                <span className="text-sm text-[#393939] font-normal">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;


// <div className="fixed inset-0 z-50 flex">
    //   {/* Overlay */}
    //   <div
    //     className="fixed inset-0 bg-black bg-opacity-50"
    //     onClick={onClose}
    //   ></div>

    //   {/* Sidebar panel */}
    //   <div className="relative w-64 h-full bg-white shadow-lg animate-slide-in-left z-50 font-poppins px-5 pt-10">
    //     <div className="mb-10">
    //       <img src={logo} alt="logo" className="w-24" />
    //     </div>

    //     <div className="flex flex-col space-y-5">
    //       {sidebarItems.map(({ path, label, icon }) => (
    //         <button
    //           className="flex items-center gap-2"
    //           key={path}
    //           onClick={() => handleClick(path)}
    //         >
    //           <div
    //             className={`p-2.5 rounded-full ${
    //               activePath === path
    //                 ? "bg-[#094C9F] text-white"
    //                 : "bg-gray-100 text-[#393939]"
    //             }`}
    //           >
    //             <img src={icon} alt={label} className="w-4 h-4" />
    //           </div>
    //           <span className="text-sm text-[#393939] font-normal">
    //             {label}
    //           </span>
    //         </button>
    //       ))}
    //     </div>
    //   </div>
    // </div>