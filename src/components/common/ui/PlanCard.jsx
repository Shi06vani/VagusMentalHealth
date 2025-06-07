// components/PlanCard.jsx
import React from "react";
import right from "../../../assets/icons/right-cericle.svg";
import cn from "../../../utils/cn";
const PlanCard = ({
  icon,
  title,
  subtitle,
  price,
  features,
  className = "",
  bgColor,
}) => {
  return (
    <div className="bg-white font-poppins shadow-xl w-full shadow-[#63636326]  rounded-b-[24px] rounded-t-[35px] overflow-hidden">
      <div
        className={cn(
          `flex flex-col items-center pt-[11px] pb-6 w-full bg-[${bgColor}]`,
          className
        )}
      >
        {icon && <img src={icon} alt={title} className="h-10 mb-2" />}
        
        <h2 className="text-xl font-normal mb-1.5">{title}</h2>
        <p className="text-xs text-center font-normal text-[#667085] px-3">{subtitle}</p>
      </div>
      <div className="py-4 pl-6">
        <p className=" text-2xl sm:text-[27px] xl:text-3xl font-normal text[#0B0C0D]  ">
          ₹{price}
          <span className="text-sm font-light text-[#3E3E3E]">/month</span>
        </p>
        <ul className=" text-[15px]  xl:text-base text-[#3E3E3ECC] font-normal space-y-3 pt-8 xl:pt-10 ">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2.5 text-gray-700">
              <span className="text-blue-600 text-lg">
                <img src={right} alt="" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
