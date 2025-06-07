import React from "react";
import CommonBanner from "../../components/common/ui/CommonBanner";
import FreeConsultationButton from "../../components/common/ui/FreeConsultationButton";
import sucidiall from "../../assets/images/sucidial.png";
import IssueList from "../../components/common/ui/IssueList";

import icon1 from "../../assets/icons/sucidialthoughts.svg";
import icon2 from "../../assets/icons/sucidialmood.svg";

import icon3 from "../../assets/icons/unesatblerelationship.svg";
import FAQAccordion from "../../components/common/ui/FAQAccordion";
import { commonImages } from "../../common-image-path/images";
import HelpBanner from "../../components/common/ui/HelpBanner";
import SuicidalTendenciesTherpay from "../../components/sections/lifeandwork/SuicidalTendenciesTherpay";
import ScrollFadeUp from "../../components/animations/ScrollFadeUp";
const SuicidalTendencies = () => {
  const handleClick = () => {};

  const issuesData = [
    {
      title: "Suicidal thoughts",
      image: icon1,
    },
    {
      title: "Sudden mood changes",
      image: icon2,
    },
    {
      title: "Unstable relationships",
      image: icon3,
    },
  ];

  const faqData = [
    {
      question: "What should I do if I’m having suicidal thoughts?",
      answer:
        "If you are experiencing suicidal thoughts, it's crucial to seek help immediately. Talk to a trusted friend or family member, and contact a mental health professional or crisis line. In many countries, there are 24/7 helplines you can call or text for immediate support. You're not alone—help is available, and things can get better with the right support.",
    },
    {
      question: "Can therapy help with suicidal tendencies?",
      answer:
        "Yes, therapy can be very effective in treating suicidal thoughts and underlying issues like depression, anxiety, or trauma. A licensed therapist can provide a safe, nonjudgmental space to explore your thoughts and feelings, teach coping strategies, and create a safety plan. Cognitive Behavioral Therapy (CBT) and Dialectical Behavior Therapy (DBT) are especially effective in managing suicidal ideation.",
    },
    {
      question: "How can I help a loved one struggling with suicidal thoughts?",
      answer:
        "Supporting someone with suicidal thoughts involves being present, listening without judgment, and encouraging them to seek professional help. Avoid minimizing their feelings, and don’t leave them alone if they are in immediate danger—contact emergency services or a mental health crisis team. Let them know you care and that help is available.",
    },
  ];

  return (
    

<div>
  <ScrollFadeUp>
    <div className="mt-5">
      <CommonBanner
        title="Suicidal Tendencies"
        description="Experiencing suicidal thoughts can feel overwhelming and isolating, but help is available. Suicidal tendencies often stem from...  read more"
        image={sucidiall}
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
      <SuicidalTendenciesTherpay />
    </div>
  </ScrollFadeUp>

  <ScrollFadeUp>
    <div className="container mx-auto">
      <div className="sm:mx-20">
        <FAQAccordion data={faqData} icon={commonImages.downArrow} />
      </div>
    </div>
  </ScrollFadeUp>

  <ScrollFadeUp>
    <div>
      <HelpBanner
        title="Need Help Choosing?"
        description="Connect with our team and they’ll guide you to the right therapist and support your journey."
        buttonText="Chat on Whatsapp"
        buttonIcon={commonImages.arrow_right}
        backgroundImage={commonImages.needhelp}
        onButtonClick={() => {
          window.open("https://wa.me/91954857638", "_blank");
        }}
      />
    </div>
  </ScrollFadeUp>
</div>
  );
};

export default SuicidalTendencies;
