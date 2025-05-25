import React from "react";
import needhelp from "../../../assets/images/need help.jpg";
import arrow_right from "../../../assets/icons/arrow-right-Bold.svg";
import HelpBanner from "../../common/ui/HelpBanner";

const Help = () => {
  return (
    <HelpBanner
      title="Need Help Choosing?"
      description="Connect with our team and they’ll guide you to the right therapist and support your journey."
      buttonText="Chat on Whatsapp"
      buttonIcon={arrow_right}
      backgroundImage={needhelp}
      onButtonClick={() => {
        window.open("https://wa.me/your-number", "_blank");
      }}
    />
  );
};

export default Help;

// <div className="container mx-auto mt-20 lg:mt-28">
//   <div
//     className="relative font-poppins  lg:mx-20 xl:mx-0 flex justify-center items-center rounded-[20px] overflow-hidden h-[233px] lg:h-[300px] xl:h-[351px] bg-cover bg-center"
//     style={{ backgroundImage: `url(${needhelp})` }}
//   >
//     <div className="absolute inset-0 bg-black bg-opacity-40"></div>{" "}
//     <div className="relative text-center text-white px-4">
//       <h2 className="text-[23px] lg:text-3xl xl:text-4xl font-normal mb-2  xl:mb-3">Need Help Choosing?</h2>
//       <div className="flex justify-center items-center">
//         <p className="text-sm lg:text-base font-normal mb-4 sl:mb-6 sm:px-20 lg:w-[70%]">
//         Connect with our team and they’ll guide you to the right therapist
//         and support your journey.
//       </p>
//       </div>

//       <div className="flex justify-center items-center">
//         <button className="font-semibold text-lg xl:text-xl text-white flex items-center gap-2">
//           Chat on Whatsapp{" "}
//           <span>
//             <img src={arrow_right} alt="" />
//           </span>
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
