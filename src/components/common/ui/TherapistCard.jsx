// TherapistCard.jsx
import React from "react";
import goldenright from "../../../assets/icons/golden-right.svg";
import expertise from "../../../assets/icons/filed-expertise.svg";
import speak from "../../../assets/icons/filled-speak.svg";
import experince from "../../../assets/icons/filled-experince.svg";
import ScrollFadeUp from "../../animations/ScrollFadeUp";

const TherapistCard = ({ therapist }) => {
  return (
    <ScrollFadeUp>
      <div className="bg-[#EEF6FF] shadow-md shadow-[#D6D6D626] font-poppins p-6 sm:p-6 rounded-2xl justify-between  flex flex-col sm:flex-row gap-10 sm:gap-2 sm:items-center">
        {/* Left - Profile */}

        <div className=" flex flex-col justify-center items-center sm:justify-start sm:items-start gap-5  ">
          <img
            src={therapist.image}
            alt={therapist.name}
            className="w-24 h-24 rounded-full object-cover"
          />

          <div className="flex-col flex justify-center sm:justify-start sm:items-start items-center">
            <h3 className=" text-lg sm:text-base lg:text-xl  font-medium text-[#101828] flex items-center sm:text-start gap-1">
              {therapist.name}
              {therapist.verified && <img src={goldenright} alt="" />}
            </h3>
            <p className="text-sm sm:text-xs  lg:text-sm font-normal text-[#3E3E3ECC]">
              {therapist.specialty}
            </p>
          </div>
        </div>

        {/* Middle - Info */}
        <div className="">
          <ul className="text-sm   mt-2 space-y-4">
            <li className="flex text-[#3E3E3E] gap-3 sm:gap-2">
              <span>
                <img src={experince} alt="" />
              </span>{" "}
              Years of Experience:{" "}
              <strong className="text-[#101828] font-normal">
                {therapist.experience}
              </strong>
            </li>
            <li className="flex  text-[#3E3E3E] gap-3 sm:gap-2">
              <span>
                <img src={speak} alt="" />
              </span>
              Speaks:{" "}
              <strong className="text-[#101828] font-normal">
                {therapist.languages.join(", ")}
              </strong>
            </li>
            <li className="flex items-start justify-start text-[#3E3E3E]  gap-3 sm:gap-2 lg:gap-3">
              <span>
                <img src={expertise} alt="" />
              </span>
              Expert in treating:{" "}
              <span className="text-[#101828] font-normal">
                {therapist.expertise}
              </span>
              {therapist.moreExpertiseCount > 0 && (
                <span className="text-[#094C9F]">
                  {" "}
                  +{therapist.moreExpertiseCount} more
                </span>
              )}
            </li>
          </ul>
        </div>

        {/* Right - Availability */}
        <div className="flex flex-col gap-4  sm:gap-2 text-sm text-center  lg:text-right">
          <p className="text-[#094C9F] font-normal">Therapist Availability</p>
          {therapist.availability.map((slot, index) => (
            <button
              key={index}
              className=" px-4 py-2 rounded-[20px] border bg-[#DBEBFF] border-gray-300 text-left hover:bg-[#bddbff] transition"
            >
              <div className="font-medium font-sm text-[#094C9F]">
                {slot.date}
              </div>
              <div className="text-[#3E3E3ECC]  text-xs font-normal mt-2">
                {slot.slotsAvailable} slots available
              </div>
            </button>
          ))}
          <button className="text-[#094C9F]  font-normal  mt-1 text-sm">
            View all available slots
          </button>
        </div>
      </div>
    </ScrollFadeUp>
  );
};

export default TherapistCard;
