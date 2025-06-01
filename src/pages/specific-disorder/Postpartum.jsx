import React from 'react'
import CommonBanner from '../../components/common/ui/CommonBanner';
import FreeConsultationButton from '../../components/common/ui/FreeConsultationButton';
import IssueList from '../../components/common/ui/IssueList';
import FAQAccordion from '../../components/common/ui/FAQAccordion';
import { commonImages } from '../../common-image-path/images';
import HelpBanner from '../../components/common/ui/HelpBanner';
import postmartum from "../../assets/images/postpartum.png"
import icon1 from "../../assets/icons/crying.svg"
import icon2 from "../../assets/icons/sleep-disorde.svg"
import icon3 from "../../assets/icons/lossofintrest.svg"
import PostmartumTherpy from '../../components/sections/specific-disorder/PostmartumTherpy';
const postpartumFAQs = [
  {
    question: "How do I know if I have postpartum depression or just baby blues?",
    answer:
      "Baby blues are common and usually resolve within two weeks after childbirth. Postpartum depression lasts longer, involves more intense symptoms such as persistent sadness, hopelessness, and difficulty bonding with your baby, and may require professional treatment.",
  },
  {
    question: "How can therapy help with postpartum depression?",
    answer:
      "Therapy provides a safe space to talk through your feelings, manage overwhelming emotions, and learn coping strategies. It can help improve your mood, strengthen your connection with your baby, and support your overall recovery.",
  },
  {
    question: "Is online therapy effective for depression?",
    answer:
      "Yes, online therapy has been shown to be just as effective as in-person therapy for many individuals. It offers flexibility, privacy, and access to professional help from the comfort of your home.",
  },
  {
    question: "Is my therapy session confidential?",
    answer:
      "Yes, therapy sessions are fully confidential. Licensed therapists adhere to strict privacy regulations, ensuring your personal information and conversations remain secure and protected.",
  },
];


 const issuesData = [
      {
        title: " Excessive crying",
        image: icon1,
      },
      {
        title: "sleep",
        image: icon2,
      },
      {
        title: "Loss of interest",
        image: icon3,
      },
    ];
    
const Postpartum = () => {

  const handleClick =()=>{
    
  }
  return (
    <div>
      <div className=" mt-5">
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
      <div>
        <IssueList issues={issuesData} />
      </div>
      <div className="container mx-auto my-10 xl:my-32">
        <PostmartumTherpy />
      </div>
      <div className="container mx-auto">
        <div className="sm:mx-20">
          <FAQAccordion data={postpartumFAQs} icon={commonImages.downArrow} />
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

export default Postpartum
