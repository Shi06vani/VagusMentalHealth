import React from 'react'
import CommonBanner from '../../components/common/ui/CommonBanner';
import FreeConsultationButton from '../../components/common/ui/FreeConsultationButton';
import IssueList from '../../components/common/ui/IssueList';
import HypochondriasisTherapyOverview from '../../components/sections/specific-disorder/HypochondriasisTherapyOverview';
import FAQAccordion from '../../components/common/ui/FAQAccordion';
import HelpBanner from '../../components/common/ui/HelpBanner';
import mooddisorder from "../../assets/images/mooddiscorder.png"
import icon1  from "../../assets/icons/mood.svg"
import icon2  from "../../assets/icons/sleep-disorde.svg"
import icon3  from "../../assets/icons/skiipingmeals.svg"
import { commonImages } from '../../common-image-path/images';
import MoodDisorderTherapy from '../../components/sections/specific-disorder/MoodDisorderTherapy';

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
    
    const moodDisordersFAQ = [
  {
    question: "What are mood disorders?",
    answer:
      "Mood disorders are mental health conditions that primarily affect a person's emotional state. They include conditions like depression, bipolar disorder, and cyclothymic disorder, and involve prolonged or intense emotional disturbances that impact daily functioning.",
  },
  {
    question: "What causes mood disorders?",
    answer:
      "Mood disorders can be caused by a combination of genetic, biological, environmental, and psychological factors. Stress, trauma, chemical imbalances in the brain, and family history can all contribute.",
  },
  {
    question: "How long does treatment take?",
    answer:
      "The duration of treatment varies depending on the individual and the severity of the disorder. Some people may see improvement in a few months, while others may need long-term support through therapy, medication, or both.",
  },
];


const MoodDisorder = () => {
  const handleClick = () => {};



  return (
   <div>
      <div className=" mt-5">
        <CommonBanner
          title="Best Treatment for Mood disorders "
          description="It affect emotional states, leading to persistent feelings of sadness, extreme mood swings, or emotional...  read more"
          image={mooddisorder}
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
        <MoodDisorderTherapy />
      </div>
      <div className="container mx-auto">
        <div className="sm:mx-20">
          <FAQAccordion data={moodDisordersFAQ} icon={commonImages.downArrow} />
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

export default MoodDisorder
