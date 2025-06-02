import React from 'react'
import CommonBanner from '../../components/common/ui/CommonBanner';
import FreeConsultationButton from '../../components/common/ui/FreeConsultationButton';
import IssueList from '../../components/common/ui/IssueList';
import PtdOverview from '../../components/sections/specific-disorder/PtdOverview';
import FAQAccordion from '../../components/common/ui/FAQAccordion';
import HelpBanner from '../../components/common/ui/HelpBanner';
import { commonImages } from '../../common-image-path/images';
import ptsd from "../../assets/images/ptsd.png"
import icon1 from "../../assets/icons/mood.svg"
import icon2 from "../../assets/icons/crying.svg"
import icon3 from "../../assets/icons/thinking.svg"
import PTsdTherapy from '../../components/sections/specific-disorder/PTsdTherapy';

 const issuesData = [
      {
        title: " Rapid Heartbeat",
        image: icon1,
      },
      {
        title: "Having sleep disorders",
        image: icon2,
      },
      {
        title: "Mood swings",
        image: icon3,
      },
    ];


    const faqs = [
  {
    question: "Can PTSD be treated?",
    answer: "Yes, PTSD can be treated effectively with therapies such as Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), and medication when necessary. With the right support, many individuals experience significant improvement.",
  },
  {
    question: "Can PTSD go away on its own?",
    answer: "While some symptoms of PTSD may lessen over time, professional treatment is often necessary to fully recover and prevent the condition from becoming chronic or worsening.",
  },
  {
    question: "How do I know if I have PTSD?",
    answer: "Common symptoms of PTSD include flashbacks, nightmares, severe anxiety, emotional numbness, and avoidance of reminders of the trauma. A mental health professional can provide a proper diagnosis.",
  },
  {
    question: "Does PTSD only affect people who have been in war or accidents?",
    answer: "No, PTSD can affect anyone who has experienced or witnessed a traumatic event, including abuse, natural disasters, serious illness, or loss of a loved one—not just war or accidents.",
  },
];


const Ptcd = () => {

    const handleClick =()=>{
    
  }

  return (
    <div>
      <div className=" mt-5">
        <CommonBanner
          title="Best Treatment for PTSD "
          description="Post-traumatic stress disorder is a mental health condition triggered by experiencing or witnessing a traumatic...  read more"
          image={ptsd}
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
        <PTsdTherapy />
      </div>
      <div className="container mx-auto">
        <div className="sm:mx-20">
          <FAQAccordion data={faqs} icon={commonImages.downArrow} />
        </div>
      </div>
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
    </div>
  )
}

export default Ptcd
