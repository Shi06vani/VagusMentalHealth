import React from 'react'
import CommonBanner from '../../components/common/ui/CommonBanner';
import FreeConsultationButton from '../../components/common/ui/FreeConsultationButton';
import IssueList from '../../components/common/ui/IssueList';
import FAQAccordion from '../../components/common/ui/FAQAccordion';
import HelpBanner from '../../components/common/ui/HelpBanner';
import { commonImages } from '../../common-image-path/images';
import personiltydiscorder from "../../assets/images/personality-discorder.png"
import icon1 from "../../assets/icons/self.svg"
import icon2 from "../../assets/icons/skiipingmeals.svg"

import icon3 from "../../assets/icons/unesatblerelationship.svg"
import PersonlitydisocrderTherapy from '../../components/sections/specific-disorder/PersonlitydisocrderTherapy';

const issuesData = [
      {
        title: " Distorted self-image",
        image: icon1,
      },
      {
        title: "Skipping meals",
        image: icon2,
      },
      {
        title: "Unstable relationships",
        image: icon3,
      },
    ];
    const personalityDisorderFAQs = [
  {
    question: "Can medication help with personality disorders?",
    answer: "",
  },
  {
    question: "What type of therapy is best for personality disorders?",
    answer: "",
  },
  {
    question: "Is online therapy effective for depression?",
    answer: "",
  },
];


const PersonalityDisorder = () => {
      const handleClick = () => {};

  return (
     <div>
      <div className=" mt-5">
        <CommonBanner
          title="Best Treatment for Personality Disorder "
          description="PD affects how a person thinks, feels, and interacts with others, often leading to challenges in relationships...  read more"
          image={personiltydiscorder}
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
        <PersonlitydisocrderTherapy />
      </div>
      <div className="container mx-auto">
        <div className="sm:mx-20">
          <FAQAccordion data={personalityDisorderFAQs} icon={commonImages.downArrow} />
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

export default PersonalityDisorder
