import React from 'react';
import { Check } from 'lucide-react';
import doubleTick  from "../../../dashboard/assets/icons/tick-double.svg"
const EducationalSourcesCard = () => {
  const total = 10;
  const completed = 4;
  const percentage = Math.round(((completed / total) * 100) - 100); // -60% if completed < total

  const topics = [
    'Simple strategies for emotional well-being',
    'How rest affects mental health',
    'How talking can transform lives',
  ];

  return (
    <div className="rounded-[30px] font-poppins bg-[#FEFEFEB2] px-7 w-full max-w-md shadow-sm py-7 ">
      <div className="flex justify-between items-start pb-4">
        <h3 className="text-[#3E3E3ECC] font-medium text-base xl:text-xl ">EDUCATIONAL SOURCES</h3>
        <div className="text-right text-[#3E3E3E]">
          <p className="font-medium text-sm sm:text-base ">{completed}/{total}</p>
          <p className=" text-xs sm:text-sm  text-[#FF0000] font-light ">{percentage}%</p>
        </div>
      </div>

      <ul className="space-y-6  ">
        {topics.map((topic, index) => (
          <li key={index} className="flex items-start space-x-2 text-sm sm:text-base font-normal text-[#3E3E3ECC]">
            <img src={doubleTick} alt="" className='w-6 h-6' />
            <span>{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationalSourcesCard;
