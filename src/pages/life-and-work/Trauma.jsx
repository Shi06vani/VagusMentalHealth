import React from "react";
import CommonBanner from "../../components/common/ui/CommonBanner";
import FreeConsultationButton from "../../components/common/ui/FreeConsultationButton";
import IssueList from "../../components/common/ui/IssueList";
import icon1 from "../../assets/icons/mental-disorder.svg";
import icon2 from "../../assets/icons/sleep-disorder2.svg";
import icon3 from "../../assets/icons/emotional.svg";
import FAQAccordion from "../../components/common/ui/FAQAccordion";
import downArrow from "../../assets/icons/downarrow.svg";
import taruma from "../../assets/images/taruma.png";
import HelpBanner from "../../components/common/ui/HelpBanner";
import arrow_right from "../../assets/icons/arrow-right-Bold.svg";
import needhelp from "../../assets/images/need help.jpg";
import TraumaTherpayOverview from "../../components/sections/lifeandwork/TraumaTherpayOverview";
import ScrollFadeUp from "../../components/animations/ScrollFadeUp";
const Trauma = () => {
  const handleClick = () => {};

  const issuesData = [
    {
      title: "Flashbacks",
      image: icon1,
    },
    {
      title: "Sudden mood swings, ",
      image: icon2,
    },
    {
      title: "Emotional numbness",
      image: icon3,
    },
  ];

  const traumaFAQs = [
    {
      question: "How do I know if I need trauma therapy?",
      answer:
        "If you're experiencing persistent symptoms such as anxiety, nightmares, flashbacks, emotional numbness, difficulty trusting others, or trouble coping with daily life after a distressing event, trauma therapy may be helpful. It's important to seek professional help if these symptoms interfere with your well-being or quality of life.",
    },
    {
      question: "What types of trauma do you provide therapy for?",
      answer:
        "We offer therapy for a wide range of traumatic experiences, including childhood trauma, sexual or physical abuse, domestic violence, accidents, natural disasters, loss of a loved one, military-related trauma (PTSD), and emotional neglect. Our therapists are trained to support healing from both single-incident and complex trauma.",
    },
    {
      question: "How long does treatment take?",
      answer:
        "The duration of trauma therapy varies depending on the individual, the type and severity of the trauma, and personal healing goals. Some clients may see improvements in a few months, while others may benefit from longer-term support. Your therapist will work with you to create a tailored treatment plan that fits your unique needs.",
    },
  ];

  return (
   <div>
  <ScrollFadeUp>
    <div className="mt-5">
      <CommonBanner
        title="Trauma"
        description="Trauma is a deeply distressing experience the...  read more"
        image={taruma}
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
      <TraumaTherpayOverview />
    </div>
  </ScrollFadeUp>

  <ScrollFadeUp>
    <div className="container mx-auto">
      <div className="sm:mx-20">
        <FAQAccordion data={traumaFAQs} icon={downArrow} />
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

export default Trauma;
