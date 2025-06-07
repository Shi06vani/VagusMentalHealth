import React from "react";

import downArrow from "../../assets/icons/downarrow.svg";
import arrow_right from "../../assets/icons/arrow-right-Bold.svg";
import needhelp from "../../assets/images/need help.jpg";
import HelpBanner from "../../components/common/ui/HelpBanner";
import icon1 from "../../assets/icons/anxiety-divorse.svg";
import icon2 from "../../assets/icons/sleep-disorder-divorse.svg";
import icon3 from "../../assets/icons/thinking.svg";

import CommonBanner from "../../components/common/ui/CommonBanner";
import FreeConsultationButton from "../../components/common/ui/FreeConsultationButton";
import parentalcouncelling from "../../assets/images/parental-councelling.png";
import IssueList from "../../components/common/ui/IssueList";
import FAQAccordion from "../../components/common/ui/FAQAccordion";
import ParentallTherapyOverview from "../../components/sections/relation/ParentallTherapyOverview";
import ScrollFadeUp from "../../components/animations/ScrollFadeUp";

const issuesData = [
  {
    title: "Anxiety and overwhelm",
    image: icon1,
  },
  {
    title: "Emotional numbness",
    image: icon2,
  },
  {
    title: "Intense sadness",
    image: icon3,
  },
];

const PartentalFAQs = [
  {
    question: "How can counseling help with infertility struggles?",
    answer:
      "Counseling helps individuals and couples manage the emotional impact of infertility by providing support, coping strategies, and guidance throughout the journey.",
  },
  {
    question: "Is infertility counseling only for women?",
    answer:
      "No, infertility counseling is for anyone affected by fertility issues, including men, women, and couples. It supports all individuals dealing with emotional or relational challenges.",
  },
  {
    question: "What can I expect in my first infertility counselling session?",
    answer:
      "In the first session, your therapist will talk with you about your experiences, concerns, and emotions to better understand your situation and begin building a personalized support plan.",
  },
];
const SexualIntimacy = () => {
  const handleClick = () => {};

  return (
    <div>
  <ScrollFadeUp>
    <div className="mt-5">
      <CommonBanner
        title="Parental Counselling"
        description="Sexual well-being is a vital part of overall health, yet many individuals face challenges such as communication barriers...  read more"
        image={parentalcouncelling}
        linkText="Take Test"
        linkHref="/take-test"
      />
      <div className="flex justify-center sm:justify-end items-center my-7 sm:my-11 px-4">
        <FreeConsultationButton onClick={handleClick} />
      </div>
    </div>
  </ScrollFadeUp>

  <ScrollFadeUp>
    <div>
      <IssueList issues={issuesData} />
    </div>
  </ScrollFadeUp>

  <ScrollFadeUp>
    <div className="container mx-auto my-10 xl:my-32">
      <ParentallTherapyOverview />
    </div>
  </ScrollFadeUp>

  <ScrollFadeUp>
    <div className="container mx-auto">
      <div className="sm:mx-20">
        <FAQAccordion data={PartentalFAQs} icon={downArrow} />
      </div>
    </div>
  </ScrollFadeUp>

  <ScrollFadeUp>
    <div>
      <HelpBanner
        title="Need Help Choosing?"
        description="Connect with our team and they’ll guide you to the right therapist and support your journey."
        buttonText="Chat on Whatsapp"
        buttonIcon={arrow_right}
        backgroundImage={needhelp}
        onButtonClick={() => {
          window.open("https://wa.me/91954857638", "_blank");
        }}
      />
    </div>
  </ScrollFadeUp>
</div>
  );
};

export default SexualIntimacy;
