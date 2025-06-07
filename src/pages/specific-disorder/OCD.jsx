import React from 'react'
import CommonBanner from '../../components/common/ui/CommonBanner';
import FreeConsultationButton from '../../components/common/ui/FreeConsultationButton';
import IssueList from '../../components/common/ui/IssueList';
import FAQAccordion from '../../components/common/ui/FAQAccordion';
import HelpBanner from '../../components/common/ui/HelpBanner';
import { commonImages } from '../../common-image-path/images';
import  ocd from "../../assets/images/ocd.png"
import icon1  from "../../assets/icons/mood.svg"
import icon2  from "../../assets/icons/contamination.svg"
import icon3  from "../../assets/icons/symmetry.svg"
import OcdTherapy from '../../components/sections/specific-disorder/OcdTherapy';
import ScrollFadeUp from '../../components/animations/ScrollFadeUp';

  const issuesData = [
      {
        title: " Rapid weight loss or gain",
        image: icon1,
      },
      {
        title: "Skipping meals",
        image: icon2,
      },
      {
        title: "Hair loss",
        image: icon3,
      },
    ];
    
    const ocdFAQs = [
  {
    question: "What therapy is best for OCD?",
    answer:
      "Cognitive Behavioral Therapy (CBT), specifically Exposure and Response Prevention (ERP), is considered the most effective treatment for OCD. It helps individuals face their fears and reduce compulsive behaviors over time.",
  },
  {
    question: "Can OCD be cured?",
    answer:
      "While OCD may not have a definitive cure, it can be effectively managed with therapy, medication, and lifestyle adjustments. Many individuals lead fulfilling lives by learning to manage their symptoms.",
  },
  {
    question: "How long does treatment take?",
    answer:
      "The duration of OCD treatment varies by individual. Some may see improvement within a few months of consistent therapy, while others may require longer-term support depending on symptom severity and personal progress.",
  },
];



const OCD = () => {

    const handleClick = () => {};

  return (
   <div>
  <ScrollFadeUp>
    <div className="mt-5">
      <CommonBanner
        title="Best Treatment for OCD "
        description="OCD is a mental health condition that causes persistent, unwanted thoughts (obsessions) and repetitive behaviours or...  read more"
        image={ocd}
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
      <OcdTherapy />
    </div>
  </ScrollFadeUp>

  <ScrollFadeUp>
    <div className="container mx-auto">
      <div className="sm:mx-20">
        <FAQAccordion data={ocdFAQs} icon={commonImages.downArrow} />
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
          window.open("https://wa.me/your-number", "_blank");
        }}
      />
    </div>
  </ScrollFadeUp>
</div>
  )
}

export default OCD
