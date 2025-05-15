import React from "react";
import plus from "../../../assets/icons/plus.svg";
import image1 from "../../../assets/icons/2000+.svg";
import image2 from "../../../assets/icons/30+.svg";
import image3 from "../../../assets/icons/forstar.svg";

const statsData = [
  {
    value: "2,000",
    label: "Clients helped",
  },
  {
    value: "30",
    label: "Verified Therapist",
  },
  {
    value: "4 star ",
    label: "Ratings from most of our users",
  },
];
const statsNote = {
  text: "With thousands of sessions, we've helped clients gain clarity, and feel more confident on their path to well-being",
};

const Stats = () => {
  return (
    <div className="bg-[#E9F3FF] font-poppins  lg:py-32 my-10 sm:my-20">
      <div className="grid grid-cols-3 sm:grid-cols-2  gap-5 sm:gap-10   lg:grid-cols-4 items-center p-3 sm:p-6 rounded-md">
        {statsData.map((stat, index) => (
          <div key={index} className="text-center flex   flex-col gap-2 ">
            <div className="text-xl flex xl:text-6xl font-normal text-[#094C9F]  items-center justify-center">
               <h1 className="text-[#094C9F] text-2xl  sm:text-4xl lg:text-5xl xl:text-7xl font-normal flex items-center justify-center font-playfair">{stat.value} <span className=""><img src={plus} alt="" className="w-4 sm:w-7" /></span>  </h1>
            </div>
            <p className="text-[#3E3E3ECC] font-normal text-[12px] sm:text-sm">{stat.label}</p>
          </div>
        ))}
        <div className=" col-span-3 sm:col-span-1 text-center  text-sm lg:text-base font-light  xl:max-w-md text-[#3E3E3E] sm:px-4 lg:px-0 sm:mt-6 md:mt-0 md:ml-6">
          <p>{statsNote.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
