import React from "react";
import { Camera, Link, Bold, Italic, Plus } from "lucide-react";
import camera from "../../../dashboard/assets/icons/cameraaa.svg";
import bold from "../../../dashboard/assets/icons/bold-journal.svg";
import italic from "../../../dashboard/assets/icons/italic-journal.svg";
import aatachmnet from "../../../dashboard/assets/icons/attachment-journal.svg";
import add from "../../../dashboard/assets/icons/add.svg";

const MyJournal = () => {
  return (
    <div className="bg-[#E9F3FF]  rounded-[30px] ">
      <div className=" flex  font-poppins items-center justify-center ">
        <div className="w-full sm:max-w-4xl px-4 sm:px-6 xl:px-0">
          <h2 className=" text-lg sm:text-xl font-medium text-[#3E3E3E] my-5 sm:my-7 mx-2">
            My Journal
          </h2>
          <div className="bg-white p-4 min-h-[460px] text-sm text-gray-500 bg-opacity-70 rounded-2xl  shadow-md ">
            Start writing here ..........
          </div>
          <div className="flex justify-center my-10 space-x-4">
            <button className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100">
              <img src={camera} alt="" className="  w-4 h-4  sm:w-5 sm:h-5 text-gray-600" />
            </button>
            <button className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100">
              <img src={aatachmnet} alt="" className=" w-4 h-4  sm:w-5 sm:h-5 text-gray-600" />
            </button>
            <button className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100">
              <img src={bold} alt="" className=" w-4 h-4  sm:w-5 sm:h-5 text-gray-600" />
            </button>
            <button className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100">
              <img src={italic} alt="" className=" w-4 h-4  sm:w-5 sm:h-5 text-gray-600" />
            </button>
            <button className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100">
              <img src={add} alt="" className=" w-4 h-4  sm:w-5 sm:h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJournal;
