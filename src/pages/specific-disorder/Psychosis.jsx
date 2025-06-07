import React from 'react'
import CommonBanner from '../../components/common/ui/CommonBanner';
import FreeConsultationButton from '../../components/common/ui/FreeConsultationButton';
import IssueList from '../../components/common/ui/IssueList';
import PhobiaThrpyOverview from '../../components/sections/specific-disorder/PhobiaThrpyOverview';
import FAQAccordion from '../../components/common/ui/FAQAccordion';
import HelpBanner from '../../components/common/ui/HelpBanner';
import { commonImages } from '../../common-image-path/images';
import psychosis   from "../../assets/images/psycosis.png"
import icon1 from "../../assets/icons/sucidialmood.svg"
import icon2 from "../../assets/icons/mood.svg"

import icon3 from "../../assets/icons/sleep-disorde.svg"
import PsycosisTherapy from '../../components/sections/specific-disorder/PsycosisTherapy';
import ScrollFadeUp from '../../components/animations/ScrollFadeUp';

const faqData = [
  {
    question: "Is psychosis the same as schizophrenia?",
    answer: "No, psychosis is a symptom characterized by a loss of contact with reality, while schizophrenia is a chronic mental health disorder that may include psychosis as one of its symptoms.",
  },
  {
    question: "Can someone with psychosis live a normal life?",
    answer: "Yes, with proper treatment and support, many individuals with psychosis can manage their symptoms and lead fulfilling, productive lives.",
  },
  {
    question: "Can psychosis be treated?",
    answer: "Yes, psychosis can be treated effectively with a combination of medication, therapy, and support services.",
  },
];

 const issuesData = [
      {
        title: "Delusions",
        image: icon1,
      },
      {
        title: "Extreme mood swings",
        image: icon2,
      },
      {
        title: "Fatigue or Low Energy",
        image: icon3,
      },
    ];

const Psychosis = () => {
   const handleClick =()=>{

    }
  return (
  

<div>
  <ScrollFadeUp>
    <div className="mt-5">
      <CommonBanner
        title="Best Treatment for Psychosis"
        description="Psychosis is a mental health condition that affects the way a person perceives reality. It can cause hallucinations...  read more"
        image={psychosis}
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
      <PsycosisTherapy />
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
          window.open("https://wa.me/your-number", "_blank");
        }}
      />
    </div>
  </ScrollFadeUp>
</div>
  )
}

export default Psychosis
