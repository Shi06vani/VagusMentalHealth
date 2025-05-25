import React from "react";
import adicebg from "../../../assets/images/adviceromm-bg.jpg";
import SearchInput from "../../field/SearchInput";
import Banner from "../../common/ui/Banner";

const AdviceBanner = () => {
  return (
  
    <Banner
      backgroundImage={adicebg}
      heading="Advice Room"
      description="Access expert-reviewed resources, tools, and tips to enhance your
      mental and emotional well-being, backed by our trusted specialists."
    >
      <SearchInput />
    </Banner>
  );
};

export default AdviceBanner;


  // <div
    //   className="relative w-full  h-[380px] sm:h-[480px] lg:h-[100vh] bg-cover bg-center flex items-center justify-center "
    //   style={{ backgroundImage: `url(${adicebg})` }}
    // >
    //   {/* Overlay */}
    //   <div className="absolute inset-0 bg-black bg-opacity-40" />

    //   {/* Content */}
    //   <div className="relative z-10 text-center text-white px-4">
    //     <h1 className=" text-2xl sm:text-3xl xl:text-[38px]  font-semibold mb-4 font-playfair">
    //       Advice Room
    //     </h1>
    //     <p className="font-poppins text-base md:text-lg max-w-2xl font-normal mx-auto mb-6">
    //       Access expert-reviewed resources, tools, and tips to enhance your
    //       mental and emotional well-being, backed by our trusted specialists.
    //     </p>

    //     {/* Search Input */}

    //     <SearchInput />
    //   </div>
    // </div>