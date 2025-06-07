import React from "react";
import PlanCard from "../components/common/ui/PlanCard";
import emrald from "../assets/icons/emrald.svg";
import ruby from "../assets/icons/ruby.svg";
import diamond from "../assets/icons/diamond.svg";
import States from "../components/sections/pricing/States";
import HelpBanner from "../components/common/ui/HelpBanner";
import { commonImages } from "../common-image-path/images";
import ScrollFadeUp from "../components/animations/ScrollFadeUp";
const plans = [
  {
    id: 1,
    title: "Emerald",
    subtitle: "Therapists with 2–3 years of hands-on experience.",
    price: 1600,
    icon: emrald,
    bgColor:"#CEEFEC",
    features: [
      "One-on-one therapy sessions",
      "Personalized care plan",
      "5 Video sessions",
      "2–3 years of experience",
    ],
  },
  {
    id: 2,
    title: "Ruby",
    subtitle: "Therapists with 3–5 years of hands-on experience.",
    price: 2200,
    icon: ruby,
    bgColor: "#FF525236",
    features: [
      "One-on-one therapy sessions",
      "Personalized care plan",
      "8 Video sessions",
      "3–5 years of experience",
    ],
  },
  {
    id: 3,
    title: "Diamond",
    subtitle: "Therapists with 8–10 years of hands-on experience.",
    price: 3000,
    icon: diamond,
    bgColor: "#F3F5FF", // Update with actual image path
    features: [
      "One-on-one therapy sessions",
      "Personalized care plan",
      "10 Video sessions",
      "8–10 years of experience",
    ],
  },
];

const PlanSection = () => (
  <div className="container mx-auto">
    <h1 className="text-center my-7 sm:my-12 pb-10 text-[30px] sm:text-[35px] lg:text-[40px] font-medium xl:text-[60px] text-[#094C9F] xl:font-normal font-playfair">
      Find the Right Plan for Your Mental Well-being
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-16 mx-4 lg:mx-0 xl:mx-10">
      {plans.map((plan) => (
        <ScrollFadeUp>
        <PlanCard key={plan.id} {...plan} />
        </ScrollFadeUp>
      ))}
    </div>
  </div>
);

const sections = [
  <PlanSection />,
  <States />,
  <HelpBanner
    title="Need Help Choosing?"
    description="Connect with our team and they’ll guide you to the right therapist and support your journey."
    buttonText="Chat on Whatsapp"
    buttonIcon={commonImages.arrow_right}
    backgroundImage={commonImages.needhelp}
    onButtonClick={() => {
      window.open("https://wa.me/your-number", "_blank");
    }}
  />,
];

const Pricing = () => {
  return (
    <div className="">
     
      {sections.map((Section, index) => (
        <ScrollFadeUp key={index}>{Section}</ScrollFadeUp>
      ))}
    </div>
  );
};

export default Pricing;
