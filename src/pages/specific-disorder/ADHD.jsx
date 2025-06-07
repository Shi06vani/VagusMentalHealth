import React from "react";
import CommonBanner from "../../components/common/ui/CommonBanner";
import FreeConsultationButton from "../../components/common/ui/FreeConsultationButton";
import IssueList from "../../components/common/ui/IssueList";
import FAQAccordion from "../../components/common/ui/FAQAccordion";
import HelpBanner from "../../components/common/ui/HelpBanner";
import { commonImages } from "../../common-image-path/images";
import adhd from "../../assets/images/Adhd.png";
import ADHDTherAapy from "../../components/sections/specific-disorder/ADHDTherAapy";
import icon1 from "../../assets/icons/inattention.svg";

import icon2 from "../../assets/icons/sucidialmood.svg";
import icon3 from "../../assets/icons/thinking.svg";
import ScrollFadeUp from "../../components/animations/ScrollFadeUp";

const adhdFAQs = [
  {
    question: "Is ADHD only found in children?",
    answer:
      "No, ADHD can affect both children and adults, though it is often diagnosed in childhood.",
  },
  {
    question: "Can ADHD be managed without medication?",
    answer:
      "Yes, ADHD can be managed with therapy, lifestyle changes, and behavioral strategies, though medication is often recommended.",
  },
  {
    question: "Does ADHD affect mental health?",
    answer:
      "ADHD can impact mental health by increasing risks of anxiety, depression, and difficulties with emotional regulation.",
  },
];
const issuesData = [
  {
    title: " Inattention",
    image: icon1,
  },
  {
    title: "Hyperactivity",
    image: icon2,
  },
  {
    title: "Intense Anxiety",
    image: icon3,
  },
];

const ADHD = () => {
  const handleClick = () => {};
  const sections = [
    <div className="mt-5" key="banner">
      <CommonBanner
        title="Best Treatment for ADHD"
        description="Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental condition that affects focus, impulse control, and activity...  read more"
        image={adhd}
        linkText="Take Test"
        linkHref="/take-test"
      />
      <div className="flex justify-center sm:justify-end items-center my-7 sm:my-11 px-4">
        <FreeConsultationButton onClick={handleClick} />
      </div>
    </div>,

    <div key="issue-list">
      <IssueList issues={issuesData} />
    </div>,

    <div className="container mx-auto my-10 xl:my-32" key="therapy-overview">
      <ADHDTherAapy />
    </div>,

    <div className="container mx-auto" key="faq">
      <div className="sm:mx-20">
        <FAQAccordion data={adhdFAQs} icon={commonImages.downArrow} />
      </div>
    </div>,

    <div key="help-banner">
      <HelpBanner
        title="Need Help Choosing?"
        description="Connect with our team and they’ll guide you to the right therapist and support your journey."
        buttonText="Chat on Whatsapp"
        buttonIcon={commonImages.arrow_right}
        backgroundImage={commonImages.needhelp}
        onButtonClick={() => {
          window.open("https://wa.me/your-number", "_blank");
        }}
      />
    </div>,
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

export default ADHD;
