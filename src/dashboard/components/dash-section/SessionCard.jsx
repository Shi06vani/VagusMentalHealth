import React from 'react';

const SessionCard = () => {
  const available = 13;
  const used = 7;
  const total = available + used;

  return (
    <div className=" font-poppins rounded-[30px] bg-[#FEFEFEB2] p-7 sm:p-4  shadow-md  py-7 sm:py-9 space-y-5 sm:space-y-7 shadow-[#D1D1D14D] ">
      <h3 className="text-[#3E3E3ECC] text-base xl:text-xl font-medium">SESSION</h3>

      <div className="flex justify-between gap-12 items-center px-3 py-2 rounded-xl" style={{ backgroundColor: '#E9F3FF' }}>
        <span className=" text-base xl:text-xl font-medium text-[#3E3E3E] ">{available}</span>
        <span className="text-sm  xl:text-base font-normal text-[#3E3E3E99]">Available</span>
      </div>  

      <div className="flex justify-between items-center px-3 py-2 rounded-xl" style={{ backgroundColor: '#E7E6FFBD' }}>
        <span className=" text-base xl:text-xl font-medium text-[#3E3E3E]">{used}</span>
        <span className="text-sm  xl:text-base  font-normal text-[#3E3E3E99]">Used</span>
      </div>

      <div className="flex justify-between items-center px-3 py-2 rounded-xl" style={{ backgroundColor: '#E9F3FF' }}>
        <span className=" text-base xl:text-xl font-medium text-[#3E3E3E]">{total}</span>
        <span className="text-sm  xl:text-base  font-normal text-[#3E3E3E99]">Total</span>
      </div>
    </div>
  );
};

export default SessionCard;
