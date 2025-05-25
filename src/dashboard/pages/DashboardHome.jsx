import React from "react";
import Calendar from "../components/Calendar";
import SessionCard from "../components/dash-section/SessionCard";
import EducationalSourcesCard from "../components/dash-section/EducationalSourcesCard";
import bgImage from "../../dashboard/assets/images/dashboard-img.jpg";
import ProgressCard from "../components/dash-section/ProgressCard";

const DashboardHome = () => {
  return (
    <div className="">
      <h2 className=" text-lg sm:text-xl xl:text-[28px] my-4 sm:my-0 text-[#094C9F]  md:hidden">
        Hey Aman! Welcome back
      </h2>

      <div className=" flex flex-col  justify-center items-center space-y-10">
        <div className="flex flex-col  justify-center  sm:flex-row gap-5 lg:gap-7 w-full h-full">
          <Calendar />
          <SessionCard />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  font-poppins  gap-6 xl:px-10">
          <div
            className="relative rounded-[30px] w-full max-w-md overflow-hidden"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "260px",
            }}
          >
            <div className="absolute inset-0 bg-black/20 z-0 rounded-2xl " />

            <div className="relative z-10 text-white p-6 flex flex-col justify-between gap-14  lg:gap-0  h-full">
              <div className="space-y-2">
                <h3 className="font-medium text-lg lg:text-xl">
                  URGENT SUPPORT
                </h3>
                <p className="text-sm lg:text-base font-normal leading-relaxed">
                  Get immediate help with a quick call from a professional when
                  you need it most.
                </p>
              </div>

              <div className=" flex justify-center items-center ">
                <button className="bg-white text-[#3E3E3E] text-base font-semibold py-[10px] px-7 rounded-[12px] shadow hover:bg-gray-100 transition">
                  Find a therapist
                </button>
              </div>
            </div>
          </div>
          <ProgressCard />
          <EducationalSourcesCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
