import React from "react";
import CommonBanner from "../../components/common/ui/CommonBanner";
import FreeConsultationButton from "../../components/common/ui/FreeConsultationButton";
import familyImg from "../../assets/images/family-image.png";
import IssueList from "../../components/common/ui/IssueList";
import icon1 from "../../assets/icons/anxiety-divorse.svg";
import icon2 from "../../assets/icons/sleep-disorder-divorse.svg";
import icon3 from "../../assets/icons/thinking.svg";
import InfertilityTherapyOverview from "../../components/sections/relation/InfertilityTherapyOverview";
import FAQAccordion from "../../components/common/ui/FAQAccordion";
import downArrow from "../../assets/icons/downarrow.svg";
import HelpBanner from "../../components/common/ui/HelpBanner";
import arrow_right from "../../assets/icons/arrow-right-Bold.svg";
import needhelp from "../../assets/images/need help.jpg";
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

const infertilityFAQs = [
  {
    question: "How can counseling help with infertility struggles?",
    answer:
      "Counseling provides emotional support, helps process feelings of grief and frustration, and offers coping strategies to navigate the complexities of infertility. It empowers individuals and couples to make informed decisions and manage stress during their journey.",
  },
  {
    question: "Is infertility counseling only for women?",
    answer:
      "No, infertility counseling is for anyone affected by infertility, including men, women, and couples. It addresses emotional, relational, and psychological impacts for all involved individuals.",
  },
  {
    question: "What can I expect in my first infertility counselling session?",
    answer:
      "In your first session, your therapist will engage in an open discussion to understand your experiences, concerns, and emotional challenges. This helps in creating a tailored plan for emotional support and treatment guidance.",
  },
];

const InfertilityCounselling = () => {
  const handleClick = () => {};

  return (
   

<div>
  <ScrollFadeUp>
    <div className="mt-5">
      <CommonBanner
        title="Infertility Counselling"
        description="Infertility can be an emotionally challenging experience, bringing feelings of grief, frustration...  read more"
        image={familyImg}
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
      <InfertilityTherapyOverview />
    </div>
  </ScrollFadeUp>

  <ScrollFadeUp>
    <div className="container mx-auto">
      <div className="sm:mx-20">
        <FAQAccordion data={infertilityFAQs} icon={downArrow} />
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

export default InfertilityCounselling;
