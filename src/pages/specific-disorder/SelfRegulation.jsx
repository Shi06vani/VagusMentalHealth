import React from 'react'
import CommonBanner from '../../components/common/ui/CommonBanner';
import FreeConsultationButton from '../../components/common/ui/FreeConsultationButton';
import IssueList from '../../components/common/ui/IssueList';
import FAQAccordion from '../../components/common/ui/FAQAccordion';
import HelpBanner from '../../components/common/ui/HelpBanner';
import { commonImages } from '../../common-image-path/images';
import self from "../../assets/images/selfregular.png"
import icon1 from "../../assets/icons/sad.svg";
import icon2 from "../../assets/icons/mood.svg";
import icon3 from "../../assets/icons/sleep-disorde.svg";
import SelfRegulationTherapy from '../../components/sections/specific-disorder/SelfRegulationTherapy';
import ScrollFadeUp from '../../components/animations/ScrollFadeUp';


const issuesData = [
  {
    title: "Negative Self-Talk",
    image: icon1,
  },
  {
    title: "Frequent Mood Swings",
    image: icon2,
  },
  {
    title: "Lack of motivation",
    image: icon3,
  },
];


const emotionalRegulationFAQs = [
  {
    question: "What causes difficulties with emotional regulation?",
    answer: "Difficulties with emotional regulation can stem from a variety of factors, including childhood experiences, trauma, mental health conditions such as anxiety or depression, or neurological differences like ADHD or autism.",
  },
  {
    question: "Can emotional self-regulation be improved?",
    answer: "Yes, emotional self-regulation can be improved with strategies such as mindfulness, cognitive-behavioral therapy (CBT), emotional awareness practices, and consistent support from a mental health professional.",
  },
  {
    question: "How can I help my child with emotional regulation?",
    answer: "You can help your child by modeling healthy emotional responses, validating their feelings, teaching calming techniques like deep breathing, and seeking guidance from a child therapist if needed.",
  },
];

const SelfRegulation = () => {
      const handleClick = () => {};

  return (
    <div>
  <ScrollFadeUp>
    <div className="mt-5">
      <CommonBanner
        title="Best Treatment for Emotional Self-Regulation"
        description="Emotional self-regulation is the ability to manage and respond to emotional experiences in a healthy way. It helps individuals...  read more"
        image={self}
        linkText="Take Test"
        linkHref="/take-test"
      />
      <div className="flex justify-center sm:justify-end items-center my-7 sm:my-11 px-4">
        <FreeConsultationButton onClick={handleClick} />
      </div>
    </div>
  </ScrollFadeUp>

    <div>
  <ScrollFadeUp>
      <IssueList issues={issuesData} />
  </ScrollFadeUp>
    </div>

  <ScrollFadeUp>
    <div className="container mx-auto my-10 xl:my-32">
      <SelfRegulationTherapy />
    </div>
  </ScrollFadeUp>

  <ScrollFadeUp>
    <div className="container mx-auto">
      <div className="sm:mx-20">
        <FAQAccordion data={emotionalRegulationFAQs} icon={commonImages.downArrow} />
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

export default SelfRegulation
