import React from "react";
import fluent1 from "../../../assets/icons/fluent_people.svg";
import fluent2 from "../../../assets/icons/fluent-2.svg";
import material from "../../../assets/icons/material-symbols.svg";
import icon1 from "../../../assets/icons/mental-disorder.svg";
import icon2 from "../../../assets/icons/anxiety.svg";
import icon3 from "../../../assets/icons/sleeping.svg";
import TestCard from "../../../components/common/ui/TestCard";
import AOSFade from "../../animations/AOSFade";

export const features = [
  {
    icon: fluent1,
    title: "Receive expert feedback to guide your well-being.",
  },
  {
    icon: fluent2,
    title: "Your results, 100% free. No Payment, just your peace of mind",
  },
  {
    icon: material,
    title: "Understand your mental well-being and pattern",
  },
];

export const testCards = [
  {
    title: "Stress",
    people: 305,
    time: 5,
    icon: icon1, // replace with actual icon path
  },
  {
    title: "Anxiety",
    people: 45,
    time: 5,
    icon: icon2, // replace with actual icon path
  },
  {
    title: "Sleep Deprived",
    people: 45,
    time: 5,
    icon: icon3, // replace with actual icon path
  },
];

const FeatureCard = ({ icon, title }) => {
  return (
    <div className="flex items-start  gap-3 max-w-xs xl:max-w-[300px]">
      <img src={icon} alt="" />
      <p className="text-[#101828] text-sm font-normal">{title}</p>
    </div>
  );
};
const MentalHealthCheck = () => {
  return (
    <div className="container mx-auto my-24 font-poppins">
      <AOSFade  >
        <div className="flex justify-center items-center pb-9">
          <h1 className=" text-2xl  text-center sm:text-3xl lg:text-[32px]  xl:text-4xl font-normal text-[#101828]">
            Check In on Your Mental Health for Free!
          </h1>
        </div>
        <div className="hidden   sm:flex  justify-center items-center gap-6 lg:gap-6 xl:gap-16 mx-14 lg:mx-20 xl:mx-0  ">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>
      </AOSFade>
      <AOSFade  delay={5000} >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6 xl:gap-10  justify-center sm:px-10 xl:px-12 sm:pt-20">
          {testCards.map((test, index) => (
            <TestCard
              key={index}
              icon={test.icon}
              title={test.title}
              peopleCount={test.peopleCount}
              time={test.time}
              onTakeTest={() => console.log(`Take Test: ${test.title}`)}
              onKnowMore={() => console.log(`Know More: ${test.title}`)}
            />
          ))}
        </div>
      </AOSFade>
    </div>
  );
};

export default MentalHealthCheck;
