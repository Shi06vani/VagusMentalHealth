import React from "react";
import Button from "./Button";

const BlogCard = ({
  image,
  category,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
   
    <div className="rounded-xl font-poppins overflow-hidden shadow-lg bg-white shadow-[#00000026]  flex flex-col h-full">
      <div className="relative">
        <img src={image} alt={title} className="w-full lg:h-60 object-cover" />
        {category && (
          <span className="absolute top-2 right-2 bg-[#094C9F] text-white font-semibold text-xs px-[14px] py-1 rounded-full">
            {category}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base lg:text-lg font-semibold text-[#094C9F] mb-2">
          {title}
        </h3>
        <p className="text-[#000000] font-normal text-sm mb-4 leading-[25.13px] lg:leading-[28.13px]">
          {description}
        </p>

        {/* Spacer to push button to bottom */}
        <div className="mt-auto ">
          <button className="inline-block my-4 xl:my-10 bg-[#094C9F] font-normal hover:bg-[#094d9fde] text-xs text-white  sm:text-sm px-3 py-2 sm:px-6 sm:py-3  rounded-full">
            {" "}
            Read More {">>"}
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default BlogCard;
