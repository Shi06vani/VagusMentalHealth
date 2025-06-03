import React from 'react'
import CommonBanner from '../../components/common/ui/CommonBanner';
import FreeConsultationButton from '../../components/common/ui/FreeConsultationButton';
import IssueList from '../../components/common/ui/IssueList';
import FAQAccordion from '../../components/common/ui/FAQAccordion';
import HelpBanner from '../../components/common/ui/HelpBanner';
import { commonImages } from '../../common-image-path/images';
import schizophrenia from "../../assets/images/schizophernia.png"
import icon1 from "../../assets/icons/sucidialmood.svg"
import icon2 from "../../assets/icons/mood.svg"
import icon3 from "../../assets/icons/sleep-disorde.svg"
import SchizophreniaTherpyOverview from '../../components/sections/specific-disorder/SchizophreniaTherpyOverview';

const schizophreniaFAQs = [
  {
    question: "Is schizophrenia the same as having multiple personalities?",
    answer: "No, schizophrenia is not the same as having multiple personalities. Schizophrenia involves symptoms like hallucinations, delusions, and disorganized thinking, while dissociative identity disorder (formerly known as multiple personality disorder) involves two or more distinct identities within one person."
  },
  {
    question: "What causes schizophrenia?",
    answer: "The exact cause of schizophrenia is not fully understood, but it is believed to be a combination of genetics, brain chemistry, and environmental factors. Stress or substance use can also trigger symptoms in people who are at risk."
  },
  {
    question: "Can people with schizophrenia live normal lives?",
    answer: "Yes, with proper treatment and support, many people with schizophrenia can manage their symptoms and lead fulfilling lives. Therapy, medication, and a strong support system are key to improving quality of life."
  }
];

 const issuesData = [
      {
        title: " Hallucination",
        image: icon1,
      },
      {
        title: "Disorganized Thinking",
        image: icon2,
      },
      {
        title: "Lack",
        image: icon3,
      },
    ];

const Schizophrenia = () => {
      const handleClick =()=>{

    }


  return (
   <div>
      <div className=" mt-5">
        <CommonBanner
          title="Best Treatment for Schizophrenia"
          description="Schizophrenia is a complex mental health disorder that affects a person’s thoughts, emotions, and perceptions of...  read more"
          image={schizophrenia}
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
       <SchizophreniaTherpyOverview/>
      </div>
      <div className="container mx-auto">
        <div className="sm:mx-20">
          <FAQAccordion data={schizophreniaFAQs} icon={commonImages.downArrow} />
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

export default Schizophrenia
