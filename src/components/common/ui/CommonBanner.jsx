
// components/common/ui/ServiceCard.jsx
import React from "react";
import linkexternal from  "../../../assets/icons/link-external.svg"

const CommonBanner = ({ title, description, image, linkText = "Take Test", linkHref = "#",className='' }) => {
  return (
    <div className="flex font-poppins flex-col-reverse lg:flex-row  h-full items-center justify-between gap-8 sm:gap-16  relative  overflow-hidden">
      {/* Left Section */}
      
      <div className="mx-5 space-y-4 pl-0  lg:pl-10">
        <h2 className="text-[#094C9F] text-2xl sm:text-3xl lg:text-4xl font-normal max-w-xl leading-[58px]">{title}</h2>
        <p className="text-[#3E3E3E] py-2 lg:py-4 text-sm font-normal lg:text-base max-w-xl">{description}</p>
        <a href={linkHref} className="text-[#3E3E3E] font-normal text-sm sm:text-base  inline-flex  items-center gap-1">
          {linkText}
          <img src={linkexternal} alt="" />
        </a>
      </div>  

      {/* Right Section */}
      <div className="-mr-5">
        <img src={image} alt={title} className=" object-cover w-full sm:max-w-lg  lg:max-w-2xl" />
      </div>

    </div>
  );  
};

export default CommonBanner;

