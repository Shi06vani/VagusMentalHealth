import React from "react";

const IssueList = ({ issues }) => {
  return (
    <div className="bg-[#EDF5FF] py-10 sm:py-8 ">
      <div className="container mx-auto">
        <div className="  font-poppins mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-12 sm:gap-6 text-center">
          {issues.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <img
                src={item.image}
                alt={item.title}
                className=" w-8 h-8 lg:w-12 lg:h-12 object-cover"
              />
              <p className="text-sm font-normal text-[#3E3E3ECC]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IssueList;
