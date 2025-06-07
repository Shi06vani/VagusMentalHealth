import React from "react";
import CommonBanner from "../../components/common/ui/CommonBanner";
import crisesImg from "../../assets/images/crises.png";
import FreeConsultationButton from "../../components/common/ui/FreeConsultationButton";
import IssueList from "../../components/common/ui/IssueList";
import icon1 from "../../assets/icons/immotional.svg";
import icon2 from "../../assets/icons/confusion.svg";
import icon3 from "../../assets/icons/overthing.svg";
import FAQAccordion from "../../components/common/ui/FAQAccordion";
import arrow_right from "../../assets/icons/arrow-right-Bold.svg";
import needhelp from "../../assets/images/need help.jpg";
import downArrow from "../../assets/icons/downarrow.svg";
import HelpBanner from "../../components/common/ui/HelpBanner";
import CrisisTherapyOverview from "../../components/sections/lifeandwork/CrisisTherapyOverview";
import ScrollFadeUp from "../../components/animations/ScrollFadeUp";

const issuesData = [
  {
    title: "Emotional outbursts",
    image: icon1,
  },
  {
    title: "Extreme confusion",
    image: icon2,
  },
  {
    title: "Overthinking",
    image: icon3,
  },
];

const crisisFAQs = [
  {
    question: "What should I do if I’m in a mental health crisis?",
    answer:
      "If you are in immediate danger or need urgent help, please call emergency services or visit the nearest emergency room. For non-life-threatening crises, reach out to a mental health professional or crisis hotline for support.",
  },
  {
    question: "Can I get same-day support?",
    answer:
      "Yes, many crisis intervention services offer same-day support to ensure you receive timely help when you need it most. Contact your provider or local helpline for immediate assistance.",
  },
  {
    question: "Is crisis intervention the same as therapy?",
    answer:
      "Crisis intervention is short-term support aimed at stabilizing an immediate mental health crisis. While therapy involves ongoing treatment and deeper exploration, crisis intervention focuses on immediate needs and safety.",
  },
  {
    question: "How do I know if I need crisis intervention?",
    answer:
      "You may need crisis intervention if you're feeling overwhelmed, unsafe, or unable to cope with a sudden emotional or psychological challenge. It's okay to seek help even if you're unsure — a professional can guide you through the next steps.",
  },
];

const CrisisIntervention = () => {
  const handleClick = () => {};

  return (

<div>
  <ScrollFadeUp>
    <div className="mt-5">
      <CommonBanner
        title="Infertility Counselling"
        description="Infertility can be an emotionally challenging experience, bringing feelings of grief, frustration...  read more"
        image={crisesImg}
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
      <CrisisTherapyOverview />
    </div>
  </ScrollFadeUp>

  <ScrollFadeUp>
    <div className="container mx-auto">
      <div className="sm:mx-20">
        <FAQAccordion data={crisisFAQs} icon={downArrow} />
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
          window.open("https://wa.me/your-number", "_blank");
        }}
      />
    </div>
  </ScrollFadeUp>
</div>

  );
};

export default CrisisIntervention;
