import React from "react";
import CommonBanner from "../../components/common/ui/CommonBanner";
import FreeConsultationButton from "../../components/common/ui/FreeConsultationButton";
import IssueList from "../../components/common/ui/IssueList";
import FAQAccordion from "../../components/common/ui/FAQAccordion";
import HelpBanner from "../../components/common/ui/HelpBanner";
import { commonImages } from "../../common-image-path/images";
import addiction from "../../assets/images/addiction.png";

import icon1 from "../../assets/icons/lossofcontrol.svg";
import icon2 from "../../assets/icons/sleep-disorde.svg";

import icon3 from "../../assets/icons/crying.svg";
import AddictionTherapy from "../../components/sections/specific-disorder/AddictionTherapy";
const issuesData = [
  {
    title: "Loss of Control",
    image: icon1,
  },
  {
    title: "Neglecting Responsibilities",
    image: icon2,
  },
  {
    title: "Emotional Distress",
    image: icon3,
  },
];

const addictionFAQ = [
  {
    question: "How does therapy help with addiction?",
    answer:
      "Therapy helps address the underlying causes of addiction, such as trauma, stress, or mental health issues. It teaches coping skills, builds self-awareness, and supports long-term recovery through consistent guidance and support.",
  },
  {
    question: "Do I need to be completely sober to start therapy?",
    answer:
      "No, you don’t need to be completely sober to begin therapy. In fact, therapy can be an essential first step in motivating change and developing strategies to move toward sobriety.",
  },
  {
    question: "Is online therapy effective?",
    answer:
      "Yes, online therapy is effective and can be just as beneficial as in-person sessions. It provides flexibility, accessibility, and consistent support for those managing addiction.",
  },
  {
    question: "Can addiction therapy be done online?",
    answer:
      "Absolutely. Addiction therapy can be conducted online with licensed professionals who offer structured support, coping strategies, and relapse prevention plans tailored to your needs.",
  },
];

const Addiction = () => {
  const handleClick = () => {};
  return (
    <div>
      <div className=" mt-5">
        <CommonBanner
          title="Best Treatment for Addiction"
          description="Addiction is a chronic condition that affects the brain’s reward system, leading to compulsive substance use or behavior despite...  read more"
          image={addiction}
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
        <AddictionTherapy />
      </div>
      <div className="container mx-auto">
        <div className="sm:mx-20">
          <FAQAccordion data={addictionFAQ} icon={commonImages.downArrow} />
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
  );
};

export default Addiction;
