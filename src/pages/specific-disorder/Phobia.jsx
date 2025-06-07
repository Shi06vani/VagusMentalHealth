import React from 'react'
import CommonBanner from '../../components/common/ui/CommonBanner';
import FreeConsultationButton from '../../components/common/ui/FreeConsultationButton';
import { commonImages } from '../../common-image-path/images';
import FAQAccordion from '../../components/common/ui/FAQAccordion';
import HelpBanner from '../../components/common/ui/HelpBanner';
import phobia from "../../assets/images/phobia.png"

import icon1 from "../../assets/icons/containation.png"
import icon2 from "../../assets/icons/internalfear.svg"

import icon3 from "../../assets/icons/thinking.svg"
import PhobiaThrpyOverview from '../../components/sections/specific-disorder/PhobiaThrpyOverview';
import IssueList from '../../components/common/ui/IssueList';
import ScrollFadeUp from '../../components/animations/ScrollFadeUp';


const faqData = [
  {
    question: "What therapy is best for Phobia?",
    answer: "Cognitive Behavioral Therapy (CBT) is commonly used and effective for treating phobias by helping individuals change negative thought patterns.",
  },
  {
    question: "How long does it take to overcome a phobia?",
    answer: "The duration varies depending on the individual and severity, but many people see improvement within a few weeks to months of consistent therapy.",
  },
  {
    question: "Can medications help with phobias?",
    answer: "Medications can sometimes help manage symptoms of anxiety related to phobias, but they are usually combined with therapy for best results.",
  },
];

 const issuesData = [
      {
        title: " Fear of contamination",
        image: icon1,
      },
      {
        title: "Irrational fear",
        image: icon2,
      },
      {
        title: "Intense Anxiety",
        image: icon3,
      },
    ];


const Phobia = () => {
    const handleClick =()=>{

    }
  return (
  

<div>
  <ScrollFadeUp>
    <div className="mt-5">
      <CommonBanner
        title="Best Treatment for Phobia "
        description="A phobia is an intense, irrational fear of a specific object, situation, or activity that goes beyond normal fear...  read more"
        image={phobia}
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
      <PhobiaThrpyOverview />
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

export default Phobia
