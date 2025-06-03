import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import home from "../../dashboard/assets/icons/gray_home.svg";
import chat from "../../assets/icons/chat.svg";

import book from "../../assets/icons/gala_book.svg";

const Sidebar = () => {
  const sidebarItems = [
    { path: "/dashboard", label: "Home", icon: home },
    { path: "/dashboard/chat", label: "Chat", icon: chat },
    { path: "/dashboard/journal", label: "Journal", icon: book },
  ];

  const [activePath, setActivePath] = useState("/dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (path) => {
    setActivePath(path);
    navigate(path);
  };

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <div className=" h-screen flex flex-col items-center ">
      {/* Logo */}
      <div className="mb-20 w-24">
        <img src={logo} alt="" className=" " />
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col items-center space-y-14">
        {sidebarItems.map(({ path, label, icon }) => (
          <button
            key={path}
            onClick={() => handleClick(path)}
            className={`p-[10px] flex items-center justify-center rounded-full ${
              activePath === path
                ? "bg-[#094C9F] text-white"
                : "bg-white text-[#393939] "
            }`}
            title={label}
          >
            {/* <img  src={icon} alt="" className="w-7 h-7"/> */}
            <img
              src={icon}
              alt={label}
              className="w-7 h-7"
             style={{
    filter:
      activePath === path
        ? "invert(43%) sepia(89%) saturate(3083%) hue-rotate(203deg) brightness(97%) contrast(89%)" // blue-ish active
        : "invert(90%) sepia(50%) saturate(0%) brightness(45%) contrast(85%)", // darker inactive
  }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

// import home from "../../assets/images/proicons_home.png";
// import chat from "../../assets/images/mynaui_chat.png";

// import book from "../../assets/images/gala_book.png";
