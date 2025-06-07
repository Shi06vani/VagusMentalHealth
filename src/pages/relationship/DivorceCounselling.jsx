import React from "react";
import CommonBanner from "../../components/common/ui/CommonBanner";
import FreeConsultationButton from "../../components/common/ui/FreeConsultationButton";
import divorsebg from "../../assets/images/divorse-bg.png";
import IssueList from "../../components/common/ui/IssueList";
import downArrow from "../../assets/icons/downarrow.svg";

import icon1 from "../../assets/icons/anxiety-divorse.svg";
import icon2 from "../../assets/icons/sleep-disorder-divorse.svg";
import icon3 from "../../assets/icons/thinking.svg";
import DivorseTherapyOverview from "../../components/sections/relation/DivorseTherapyOverview";
import HelpBanner from "../../components/common/ui/HelpBanner";
import arrow_right from "../../assets/icons/arrow-right-Bold.svg";
import needhelp from "../../assets/images/need help.jpg";
import FAQAccordion from "../../components/common/ui/FAQAccordion";
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

const faqQuestions = [
  {
    question: "Can counselling help with an amicable divorce?",
    answer:
      "Yes, counselling can facilitate healthy communication, help both parties understand each other's perspectives, and reduce conflict during the divorce process. This can lead to a more respectful and amicable separation.",
  },
  {
    question: "How does counselling help with co-parenting?",
    answer:
      "Counselling supports co-parents by teaching effective communication, conflict resolution, and parenting strategies. It helps establish boundaries and routines that prioritize the children's well-being.",
  },
  {
    question: "Who can benefit from divorce counselling?",
    answer:
      "Anyone going through a divorce—including individuals, couples, and families—can benefit. It helps manage emotional distress, provides clarity, and supports personal growth and adjustment during and after the divorce.",
  },
];

const DivorceCounselling = () => {
  const handleClick = () => {};

  return (
    

<div>
  <ScrollFadeUp>
    <div className="mt-5">
      <CommonBanner
        title="Divorce Counselling"
        description="Divorce is one of life’s most challenging transitions, bringing emotional, practical, and relational struggles. It affects...  read more"
        image={divorsebg}
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
      <DivorseTherapyOverview />
    </div>
  </ScrollFadeUp>

  <ScrollFadeUp>
    <div className="container mx-auto">
      <div className="sm:mx-20">
        <FAQAccordion data={faqQuestions} icon={downArrow} />
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

export default DivorceCounselling;
