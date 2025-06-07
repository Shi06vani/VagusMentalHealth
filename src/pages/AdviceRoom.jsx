import React from "react";
import BlogCard from "../components/common/ui/BlogCard";
import AdviceCard from "../components/sections/advice-room/AdviceCard";
import AdviceBanner from "../components/sections/advice-room/AdviceBanner";
import HelpBanner from "../components/common/ui/HelpBanner";
import arrow_right from "../assets/icons/arrow-right-Bold.svg";
import needhelp from "../assets/images/need help.jpg";
import ScrollFadeUp from "../components/animations/ScrollFadeUp";

const AdviceRoom = () => {

    const sections = [
    <AdviceBanner />,
    <AdviceCard />,
    <HelpBanner
      title="Need Help Choosing?"
      description="Connect with our team and they’ll guide you to the right therapist and support your journey."
      buttonText="Chat on Whatsapp"
      buttonIcon={arrow_right}
      backgroundImage={needhelp}
      onButtonClick={() => {
        window.open("https://wa.me/your-number", "_blank");
      }}
    />,
  ];

  return (
    <div>
      {sections.map((Component, index) => (
        <ScrollFadeUp key={index} delay={index * 0.1}>
          {Component}
        </ScrollFadeUp>
      ))}
    </div>
  );
};

export default AdviceRoom;
