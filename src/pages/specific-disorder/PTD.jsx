import React from 'react'
import postmartum from "../../assets/images/postpartum.png"
import icon1 from "../../assets/icons/hratbeat.svg"
import icon2 from "../../assets/icons/sleep-disorde.svg"
import icon3 from "../../assets/icons/crying.svg"
import { commonImages } from '../../common-image-path/images'
import FAQAccordion from '../../components/common/ui/FAQAccordion'
import HelpBanner from '../../components/common/ui/HelpBanner'
import PostmartumTherpy from '../../components/sections/specific-disorder/PostmartumTherpy'
import IssueList from '../../components/common/ui/IssueList'
import FreeConsultationButton from '../../components/common/ui/FreeConsultationButton'
import CommonBanner from '../../components/common/ui/CommonBanner'
import PtdOverview from '../../components/sections/specific-disorder/PtdOverview'
import ScrollFadeUp from '../../components/animations/ScrollFadeUp'

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
    
    const faqData = [
  {
    question: "Can medication help with panic attacks?",
    answer: "Yes, medication can help manage the symptoms of panic attacks by reducing their frequency and severity, but it is often most effective when combined with therapy.",
  },
  {
    question: "How can therapy help?",
    answer: "Therapy helps by teaching coping mechanisms, addressing underlying triggers, and providing support to manage anxiety and panic symptoms effectively.",
  },
  {
    question: "Is online therapy effective?",
    answer: "Yes, online therapy is effective and convenient, offering the same benefits as in-person sessions while allowing you to attend from the comfort of your home.",
  },
  {
    question: "What should I do during a panic attack?",
    answer: "During a panic attack, try to focus on slow, deep breathing, remind yourself that the attack will pass, and use grounding techniques to stay present.",
  },
];



const PTD = () => {
  const handleClick =()=>{
    
  }

  return (
     <div>
  <ScrollFadeUp>
    <div className="mt-5">
      <CommonBanner
        title="Best Treatment for Postpartum depression  "
        description="Postpartum depression (PPD) is a serious mental health condition that affects new mothers after childbirth, causing...  read more"
        image={postmartum}
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
      <PtdOverview />
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

export default PTD
