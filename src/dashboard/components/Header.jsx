import React from "react";
import bell from "../assets/icons/bell.svg"
import info from "../assets/icons/info-circle.svg"
import user from "../assets/icons/user.svg"
import { Menu } from "lucide-react";

const Header = ({ onMenuClick }) => {
  return (
    <div className="flex  justify-between font-poppins  px-6  rounded-lg ">

  {/* Mobile menu icon */}
      <button className="md:hidden" onClick={onMenuClick}>
        <Menu className="w-6 h-6 text-[#094C9F]" />
      </button>


      {/* Welcome Text */}
      <h2 className=" text-lg sm:text-xl xl:text-[28px]  font-normal text-[#094C9F] hidden md:block">
        Hey Aman! Welcome back
      </h2>

      {/* Icons Container */}
      <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-full shadow-md shadow-[#9D9D9D40]">
        {/* Replace below with your actual SVG icons */}
        <button className="text-gray-600 hover:text-blue-600">
          {/* Bell Icon */}
          <img src={bell} alt=""  className="w-6 h-6" />
        </button>

        <button className="text-gray-600 hover:text-blue-600">
          {/* Info Icon */}
         <img src={info} alt=""  className="w-6 h-6" />
        </button>

        {/* User Avatar */}
        <img
          src={user} // replace with actual avatar URL
          alt="User Avatar"
          className="w-6 h-6 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
