import React from "react";
import therpry1 from "../../../assets/images/therpey1.png";
import therpry2 from "../../../assets/images/therpey2.png";

import therpry3 from "../../../assets/images/therpey3.png";

import therpry4 from "../../../assets/images/therpey4.png";

import therpry5 from "../../../assets/images/therpey5.png";

// const therapyCards = [
//   {
//     title: "Teenagers",
//     subtitle: "Therapy for 13-17",
//     image: therpry1,
//     bgColor: "#D88D9533",
//   },
//   {
//     title: "Couples",
//     subtitle: "Therapy for us",
//     image: therpry2,
//     bgColor: "#F7BF4433",
//   },
//   {
//     title: "Teenagers",
//     subtitle: "Therapy for 18+",
//     image:therpry3,
//     bgColor: "#4CC6EB33",
//   },
//   {
//     title: "Elderly",
//     subtitle: "Therapy for 50+",
//     image: therpry4,
//     bgColor: "#6DB84833",
//   },
//   {
//     title: "LGBTQ+",
//     subtitle: "Therapy for LGBTQ+",
//     image: therpry5,
//     bgColor: "#6F749633",
//   }
// ];

const therapyCards = [
  {
    title: "Teenagers",
    subtitle: "Therapy for 13-17",
    image: therpry1,
    bgColor: "rgba(216, 141, 149, 0.2)",
  },
  {
    title: "Couples",
    subtitle: "Therapy for us",
    image: therpry2,
    bgColor: "rgba(247, 191, 68, 0.2)",
  },
  {
    title: "Teenagers",
    subtitle: "Therapy for 18+",
    image: therpry3,
    bgColor: "rgba(76, 198, 235, 0.2)",
  },
  {
    title: "Elderly",
    subtitle: "Therapy for 50+",
    image: therpry4,
    bgColor: "rgba(109, 184, 72, 0.2)",
  },
  {
    title: "LGBTQ+",
    subtitle: "Therapy for LGBTQ+",
    image: therpry5,
    bgColor: "rgba(111, 116, 150, 0.2)",
  },
];

const TherapyCard = ({ image, title, subtitle }) => {
  return (
    <div className=" p-3 rounded-2xl  text-center">
      <div className="rounded-2xl overflow-hidden">
        <img src={image} alt={title} className="w-full  object-cover" />
      </div>
      <h3 className="mt-4 text-base font-normal text-[#3E3E3E]">{title}</h3>
      <p className="text-xs text-[#3E3E3ECC]">{subtitle}</p>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div>
      <h1 className="text-center text-[58px] text-[#094C9F] font-normal">
        The Best Online Platform for Mental Health
      </h1>
      <div className="text-sm text-[#3E3E3ECC] font-normal flex justify-between py-9">
        <h4>Easy access, anytime and anywhere</h4>
        <h4>Flexible therapy, tailored to you</h4>
        <h4>Guidance from licensed professionals</h4>
      </div>

      <div className="grid grid-cols-5 gap-6">
        {therapyCards.map((card, index) => (
          <div key={index}>
            <div
              className={`rounded-2xl `}
              style={{ backgroundColor: card.bgColor }}
            >
              <TherapyCard
                image={card.image}
                title={card.title}
                subtitle={card.subtitle}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
