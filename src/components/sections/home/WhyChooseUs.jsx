import React from "react";
import ourImpact from "../../../assets/images/whychoosasbanner.png";
import tailored from "../../../assets/images/tailored.svg";
import TherapyPlans from "../../../components/TherapyPlans";
import { FeatureList } from "../../../components/TherapyPlans";
import AOSFade from "../../animations/AOSFade";
const ImpactSection = () => {
  const impactData = [
    {
      percentage: "91%",
      text: (
        <div className="font-poppins">
          of our members feel <strong>truly satisfied</strong> and happy.
        </div>
      ),
    },
    {
      percentage: "78%",
      text: (
        <div className="font-poppins">
          Our members experience noticeable improvement{" "}
          <strong>within 9 weeks</strong>.
        </div>
      ),
    },
    {
      percentage: "83%",
      text: (
        <div className="font-poppins">
          of our customers are{" "}
          <strong className="text-sm font-medium">happy to recommend</strong> us
          to their loved ones.
        </div>
      ),
    },
  ];

  return (
    <div className="flex font-poppins justify-center items-center mx-14 lg:mx-0">
      <div className="py-6 sm:py-10 px-6 rounded-3xl border border-[#3C81D6] max-w-4xl">
        <div className=" gap-8   text-gray-700 relative">
          <div className="flex justify-center items-center relative">
            <div className="text-center text-sm  text-gray-500 mb-6 tracking-wide -bottom-3 sm:-top-[52px] absolute">
              <span className="px-1 font-normal text-base text-center w-full text-[#094C9F] bg-[#EDF4FB] z-10 relative border border-b-0">
                OUR IMPACT
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center ">
            {impactData.map((item, index) => (
              <div key={index}>
                <p className=" text-xl  lg:text-3xl font-semibold text-[#094C9F]">
                  {item.percentage}
                </p>
                <p className="mt-2 text-sm lg:px-5 font-normal text-[#3E3E3ECC]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="bg-[#E9F3FF]  my-20 sm:my-28 rounded-b-[55px]  rounded-t-[55px]  xl:rounded-b-[200px] xl:rounded-t-[200px]">
      <div className="container mx-auto">
        <AOSFade delay={1000}>
          <div className="text-center font-poppins py-[70px]">
            <h1 className="text-[#3E3E3E] font-normal text-2xl sm:text-3xl lg:text-[32px]  xl:text-4xl pb-4">
              Why choose Vagus Mind Health?
            </h1>
            <p className="text-[#3E3E3ECC] font-normal text-base sm:text-sm lg:text-base">
              Guidance, encouragement, and expert care at every step of your
              journey
            </p>
          </div>

          <div className="">
            <ImpactSection />
          </div>
        </AOSFade>

        <AOSFade delay={2000}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 xl:py-24 container mx-auto">
            <TherapyPlans />
            <FeatureList />
          </div>

          <div className="flex font-poppins justify-center items-center pb-8">
            <button className="text-sm   lg:text-base px-7 py-2 rounded-xl bg-[#094C9F] text-white font-semibold">
              Find a therapist
            </button>
          </div>
        </AOSFade>
      </div>
    </div>
  );
};

export default WhyChooseUs;
