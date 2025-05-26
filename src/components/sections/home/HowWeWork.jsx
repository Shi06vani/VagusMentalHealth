import React from "react";
import image1 from "../../../assets/images/how-we-wrork1.svg";
import image2 from "../../../assets/images/how-we-wrork2.svg";
import image3 from "../../../assets/images/how-we-wrork3.svg";
import AOSFade from "../../animations/AOSFade";

const HowWeWork = () => {
  return (
    <div className="container mx-auto my-20 sm:my-20 font-poppins">
      <AOSFade direction="right">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#101828]  text-2xl  sm:text-3xl lg:text-[32px]  xl:text-4xl  pb-5">
            How We Work
          </h1>
          <p className="text-[#3E3E3ECC] text-center font-normal text-[15px]">
            Personalized care that connects you with the right therapist for a
            healthier, happier you.
          </p>
        </div>
      </AOSFade>

      <div className=" mt-6  xl:mt-12 flex flex-col justify-center items-center">
        <AOSFade direction="left">
          <img src={image1} alt="" />
        </AOSFade>
        <AOSFade direction="right">
          <img src={image2} alt="" />
        </AOSFade>
        <AOSFade direction="left">
          <img src={image3} alt="" />
        </AOSFade>
      </div>
    </div>
  );
};

export default HowWeWork;
