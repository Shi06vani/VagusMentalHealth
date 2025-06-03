import React from "react";
import CommonBanner from "../../components/common/ui/CommonBanner";
import FreeConsultationButton from "../../components/common/ui/FreeConsultationButton";
import IssueList from "../../components/common/ui/IssueList";
import DepressionTherpyOverview from "../../components/sections/specific-disorder/DepressionTherpyOverview";
import FAQAccordion from "../../components/common/ui/FAQAccordion";
import HelpBanner from "../../components/common/ui/HelpBanner";

import { commonImages } from "../../common-image-path/images";
import EatingdiscorderTherapy from "../../components/sections/specific-disorder/EatingdiscorderTherapy";
import icon1 from "../../assets/icons/weightloss.svg";
import icon2 from "../../assets/icons/skiipingmeals.svg";
import icon3 from "../../assets/icons/hairloss.svg";
import discorder from "../../assets/images/Eeatingdiscorder.png";
const EatingDisorder = () => {
  const handleClick = () => {};
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

  const depressionFAQs = [
    {
      question: "How do I know if I need therapy for depression?",
      answer:
        "If you're experiencing persistent sadness, lack of motivation, changes in sleep or appetite, or difficulty functioning in daily life, therapy can be beneficial. A professional can help you assess your symptoms and guide you toward appropriate treatment.",
    },
    {
      question: "Is depression treatment with Vagus Mind Health affordable?",
      answer:
        "Yes, Vagus Mind Health offers flexible and affordable therapy options to ensure everyone can access the help they need. We strive to make mental health support accessible and cost-effective.",
    },
    {
      question: "Is online therapy effective for depression?",
      answer:
        "Absolutely. Online therapy has been shown to be just as effective as in-person therapy for many individuals. It offers convenience, flexibility, and confidentiality—making it easier to stay consistent with your mental health care.",
    },
    {
      question: "How long does depression treatment take?",
      answer:
        "The duration of depression treatment varies based on the individual's needs and the severity of their symptoms. Some people begin to see improvements within a few weeks, while others may benefit from longer-term support. Your therapist will work with you to create a personalized plan.",
    },
  ];

  return (
    <div>
      <div className=" mt-5">
        <CommonBanner
          title="Best Treatment for Depression That Guides You to Healing"
          description="Depression is a persistent medical condition that can significantly impact your...  read more"
          image={discorder}
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
        <EatingdiscorderTherapy />
      </div>
      <div className="container mx-auto">
        <div className="sm:mx-20">
          <FAQAccordion data={depressionFAQs} icon={commonImages.downArrow} />
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

export default EatingDisorder;
