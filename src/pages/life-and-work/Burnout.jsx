import React from 'react'
import CommonBanner from '../../components/common/ui/CommonBanner'
import FreeConsultationButton from '../../components/common/ui/FreeConsultationButton'
import burnot from "../../assets/images/burnout.png"
import IssueList from '../../components/common/ui/IssueList'
import icon1 from "../../assets/icons/depression.svg"
import icon2 from "../../assets/icons/emotional.svg"
import icon3 from "../../assets/icons/sucidialmood.svg"
import BurnOutTherapy from '../../components/sections/lifeandwork/BurnOutTherapy'
import FAQAccordion from '../../components/common/ui/FAQAccordion'
import { commonImages } from '../../common-image-path/images'
import HelpBanner from '../../components/common/ui/HelpBanner'

const Burnout = () => {

  const  handleClick =()=>{

  }
  
   const issuesData = [
      {
        title: "Emotional exhaustion",
        image: icon1,
      },
      {
        title: "Detachment",
        image: icon2,
      },
      {
        title: "Reduced performance",
        image: icon3,
      },
    ];


    const faqData = [
  {
    question: "What should I do if I’m having suicidal thoughts?",
    answer:
      "If you're having suicidal thoughts, it's important to seek immediate help. Contact a mental health professional, reach out to a crisis hotline, or talk to someone you trust. You're not alone, and support is available to help you through this difficult time.",
  },
  {
    question: "Can therapy help with suicidal tendencies?",
    answer:
      "Yes, therapy can be highly effective in addressing suicidal thoughts and tendencies. A licensed therapist can help you explore the underlying causes, develop coping strategies, and work toward recovery in a safe, supportive environment.",
  },
  {
    question: "How can I help a loved one struggling with suicidal thoughts?",
    answer:
      "Listen without judgment, show empathy, and encourage them to seek professional help. Let them know they are not alone and that their feelings are valid. Supporting them in getting therapy or contacting a crisis line can make a life-saving difference.",
  },
];




  return (
    <div>
        <div className=" mt-5">
        <CommonBanner
          title="Burnout"
          description="Experiencing suicidal thoughts can feel overwhelming and isolating, but help is available. Suicidal tendencies often stem from...  read more"
          image={burnot}
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
        <BurnOutTherapy/>
      </div>

      <div className="container mx-auto">
        <div className="sm:mx-20">
          <FAQAccordion data={faqData} icon={commonImages.downArrow} />
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

export default Burnout
