import React from "react";
import CommonBanner from "../../components/common/ui/CommonBanner";
import FreeConsultationButton from "../../components/common/ui/FreeConsultationButton";
import crisiesimg from "../../assets/images/extnsiis.png";
import IssueList from "../../components/common/ui/IssueList";
import icon1 from "../../assets/icons/fellingdisconnected.svg";
import icon2 from "../../assets/icons/anxiety-divorse.svg";
import arrow_right from "../../assets/icons/arrow-right-Bold.svg";
import needhelp from "../../assets/images/need help.jpg";
import icon3 from "../../assets/icons/sleepdisorder.svg";
import FAQAccordion from "../../components/common/ui/FAQAccordion";
import downArrow from "../../assets/icons/downarrow.svg";
import HelpBanner from "../../components/common/ui/HelpBanner";
import ExtenialCrisesTherpyOverview from "../../components/sections/lifeandwork/ExtenialCrisesTherpyOverview";

const LandWExistential = () => {
  const handleClick = () => {};

  const issuesData = [
    {
      title: "Feeling disconnected",
      image: icon1,
    },
    {
      title: "Anxiety",
      image: icon2,
    },
    {
      title: "Fatigue or Low Energy",
      image: icon3,
    },
  ];

  const faqs = [
    {
      question: "Is an existential crisis the same as depression?",
      answer:
        "No, an existential crisis is not the same as depression. While they can feel similar and sometimes overlap, an existential crisis is typically characterized by deep questioning of life’s meaning, purpose, and values. Depression, on the other hand, is a mental health condition involving persistent sadness, loss of interest, and other emotional and physical symptoms.",
    },
    {
      question: "How long does an existential crisis last?",
      answer:
        "The duration of an existential crisis varies from person to person. It can last from a few days to several months or even longer, depending on personal circumstances, support systems, and coping mechanisms.",
    },
    {
      question: "Is it normal to have an existential crisis?",
      answer:
        "Yes, it is completely normal. Many people experience existential crises at some point in their lives, especially during major life changes or transitions. It's a sign of deep reflection and personal growth.",
    },
  ];

  return (
    <div>
      <div className=" mt-5">
        <CommonBanner
          title="Existential Crisis"
          description="An existential crisis occurs when individuals question the meaning, purpose, or value of life, leading to feelings of...  read more"
          image={crisiesimg}
          linkText="Take Test"
          linkHref="/take-test"
        />
        <div className="flex justify-center sm:justify-end items-center my-7 sm:my-11 px-4">
          <FreeConsultationButton onClick={handleClick} />
        </div>
      </div>
      <div>
        <IssueList issues={issuesData} />
      </div>

      <div className="container mx-auto my-10 xl:my-32">
        <ExtenialCrisesTherpyOverview />
      </div>
      <div className="container mx-auto">
        <div className="sm:mx-20">
          <FAQAccordion data={faqs} icon={downArrow} />
        </div>
      </div>
      <div>
        <HelpBanner
          title="Need Help Choosing?"
          description="Connect with our team and they’ll guide you to the right therapist and support your journey."
          buttonText="Chat on Whatsapp"
          buttonIcon={arrow_right}
          backgroundImage={needhelp}
          onButtonClick={() => {
            window.open("https://wa.me/your-number", "_blank");
          }}
        />
      </div>
    </div>
  );
};

export default LandWExistential;
