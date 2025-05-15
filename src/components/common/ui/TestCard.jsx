import React from "react";
import Button from "./Button";
import prople from "../../../assets/icons/fluent_people.svg"

const TestCard = ({
  icon,
  title,
  peopleCount,
  time,
  onTakeTest,
  onKnowMore,
}) => {
  return (
    <div className="bg-[#E9F3FF] p-6 rounded-2xl  text-center shadow-sm">
      <div className="flex justify-center mb-4">
        <img src={icon} alt={`${title} icon`} className="w-12" />
      </div>
      <h3 className=" text-xl sm:text-2xl font-normal text-[#3E3E3E] mb-2">{title}</h3>
      <div className="text-[#3E3E3ECC] text-sm mb-4 flex items-center flex-col ">
        <div className="flex items-center  gap-2">
          <span className="text-xs"><img src={prople} alt="" /></span>
          <span>{peopleCount} people took the test</span>
        </div>
        <div className="flex items-center  gap-2">
          <span className="text-xs">⏱️</span>
          <span>{time} min</span>
        </div>
      </div>
      <div className="flex justify-between items-center pt-10 sm:pt-8 lg:pt-12">
        <div>
          <Button onClick={onTakeTest} className="hover:bg-[#083d85] text-sm font-medium">
            Take Test
          </Button>
        </div>
        <div>
            <button
          onClick={onKnowMore}
          className="text-sm font-medium text-[#3E3E3ECC]"
        >
          Know More
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default TestCard;
