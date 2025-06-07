import React, { useEffect, useState } from "react";
import therpry1 from "../../../assets/images/therpey1.png";
import therpry2 from "../../../assets/images/therpey2.png";
import therpry3 from "../../../assets/images/therpey3.png";
import therpry4 from "../../../assets/images/therpey4.png";
import therpry5 from "../../../assets/images/therpey5.png";
import video from "../../../assets/icons/video.svg";
import rightClick from "../../../assets/icons/charm_circle-tick.svg";
import AOSFade from "../../animations/AOSFade";
import FreeConsultationButton from "../../common/ui/FreeConsultationButton";

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
    <div className="flex font-poppins flex-row gap-[89px] sm:gap-0 items-center sm:flex-col sm:p-3 rounded-2xl overflow-hidden text-center">
      <div className="rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h- w-14 sm:w-full object-cover"
        />
      </div>
      <div className="">
        <h3 className="sm:mt-3  xl:mt-4 text-sm lg:text-base font-normal text-[#3E3E3E]">
          {title}
        </h3>
        <p className="text-xs text-[#3E3E3ECC]">{subtitle}</p>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [bgColor, setBgColor] = useState("");
  useEffect(() => {
    document.body.style.backgroundColor = bgColor || "";
    return () => {
      document.body.style.backgroundColor = "#ffffff";
    };
  }, [bgColor]);

  const handleClick = () => {};

  return (
    <div className=" pt-8 sm:pt-14  xl:pt-10">
      <div className="container mx-auto">
        <AOSFade duration={1300}>
          <h1 className="text-center pb-8 sm:pb-0 text-[30px]  sm:text-[35px]  lg:text-[45px] font-medium xl:text-[64px] text-[#094C9F] xl:font-normal font-playfair">
            The Best Online Platform for Mental Health
          </h1>
        </AOSFade>
        <AOSFade duration={1300}>
          <div className=" hidden  text-sm text-[#3E3E3ECC] font-normal  sm:flex sm:justify-center lg:justify-evenly py-9">
            <div className="flex gap-2 font-poppins">
              <img src={rightClick} alt="" />
              <h4>Easy access, anytime and anywhere</h4>
            </div>
            <div className="flex justify-center gap-2 font-poppins">
              <img src={rightClick} alt="" />
              <h4>Flexible therapy, tailored to you</h4>
            </div>
            <div className="flex justify-center items-center gap-2 font-poppins">
              <img src={rightClick} alt="" />
              <h4>Guidance from licensed professionals</h4>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6 sm:px-20 lg:px-12 xl:px-24 xl:pb-10">
            {therapyCards.map((card, index) => (
              <div key={index}>
                <div
                  className={`rounded-3xl `}
                  style={{ backgroundColor: card.bgColor }}
                  onMouseEnter={() => setBgColor(card.bgColor)}
                  onMouseLeave={() => setBgColor("")}
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
          <AOSFade duration={1400}>
            <div className=" flex justify-center font-poppins items-center py-7 sm:py-7">
              <div data-aos="fade-up">
                <p className="py-3 px-2 sm:px-12 rounded-lg text-xs sm:text-base  text-[#3E3E3ECC] border border-[#E4E7EC]">
                  Find the therapist who truly understands you
                </p>
              </div>
            </div>
          </AOSFade>
        </AOSFade>
      </div>
      <AOSFade duration={1500}>
        <div className=" container-none lg:pb-5 flex justify-center sm:flex font-poppins lg:justify-end py-8  xl:py-5 sm:px-6">
          <FreeConsultationButton onClick={handleClick} />
        </div>
      </AOSFade>
    </div>
  );
};

export default HeroSection;
