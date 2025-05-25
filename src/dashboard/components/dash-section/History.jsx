import React from "react";
import attachment from "../../../dashboard/assets/images/attachment.png";

const attachments = [attachment, attachment];
const History = () => {
  return (
    // <div className="bg-blue-50 font-poppins p-4 rounded-[30px]  max-w-xs w-full">
    //   <h3 className="text-xl font-normal text-[#3E3E3E] mb-4">History</h3>
    //   <ol className="list-decimal ml-5 font-normal space-y-6 text-[#000000] text-base">
    //     <li>My day at work</li>
    //     <li>Feelings about my husband</li>
    //     <li>Getting my work done today</li>
    //   </ol>

    //   <div>
    //     <h3 className="text-xl font-normal text-[#3E3E3E] mt-6 mb-2">
    //       Attachments
    //     </h3>
    //     <div className="flex gap-2">
    //       {attachments.map((img, idx) => (
    //         <img
    //           key={idx}
    //           src={img}
    //           alt={`attachment-${idx}`}
    //           className="w-20 h-16 object-cover rounded-md"
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="bg-[#E9F3FF] py-10  font-poppins p-4 rounded-[30px] lg:max-w-xs w-full  flex flex-col justify-between">
  <div>
    <h3 className=" text-lg sm:text-xl font-normal text-[#3E3E3E] mb-4">History</h3>
    <ol className="list-decimal ml-5 font-normal space-y-4 sm:space-y-6 text-[#000000] text-[15px] sm:text-base">
      <li>My day at work</li>
      <li>Feelings about my husband</li>
      <li>Getting my work done today</li>
    </ol>
  </div>

  <div className="mt-6">
    <h3 className="text-lg sm:text-xl font-normal text-[#3E3E3E] mb-4">Attachments</h3>
    <div className="flex gap-2">
      {attachments.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`attachment-${idx}`}
          className="w-20 h-16 object-cover rounded-md"
        />
      ))}
    </div>
  </div>
</div>

  );
};

export default History;
