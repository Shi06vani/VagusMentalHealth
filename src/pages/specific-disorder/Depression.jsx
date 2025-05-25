import React from "react";
import CommonBanner from "../../components/common/ui/CommonBanner";
import spacificdisorder from "../../assets/images/depresiionimage.png";
import FreeConsultationButton from "../../components/common/ui/FreeConsultationButton";
import IssueList from "../../components/common/ui/IssueList";
import icon1 from "../../assets/icons/sadness.svg";
import icon2 from "../../assets/icons/lossofintrest.svg";
import icon3 from "../../assets/icons/sleepdisorder.svg";
import FAQAccordion from "../../components/common/ui/FAQAccordion";
import downArrow from "../../assets/icons/downarrow.svg";
import HelpBanner from "../../components/common/ui/HelpBanner";
import needhelp from "../../assets/images/need help.jpg";
import DepressionTherpyOverview from "../../components/sections/specific-disorder/DepressionTherpyOverview";
import arrow_right from "../../assets/icons/arrow-right-Bold.svg";



const faqData = [
  {
    question: "How do I know if I need therapy for depression?",
    answer:
      "If you're experiencing persistent sadness, loss of interest, changes in sleep or appetite, or difficulty functioning daily, therapy can be beneficial. A professional can help assess your condition and guide you toward effective treatment.",
  },
  {
    question: "Is depression treatment with Vagus Mind Health affordable?",
    answer:
      "Yes, we strive to provide affordable mental health care with flexible plans and pricing to suit different needs. Contact us for detailed information about costs and insurance coverage.",
  },
  {
    question: "Is online therapy effective for depression?",
    answer:
      "Absolutely. Online therapy offers the same level of care as in-person sessions and can be more accessible and convenient for many individuals.",
  },
  {
    question: "How long does depression treatment take?",
    answer:
      "The duration of treatment varies based on individual needs. Some people experience improvement in a few weeks, while others may benefit from longer-term support.",
  },
];

const issuesData = [
  {
    title: "Feelings of sadness",
    image: icon1,
  },
  {
    title: "Loss of interest",
    image: icon2,
  },
  {
    title: "Having sleep disorders",
    image: icon3,
  },
];

const Depression = () => {
  const handleClick = () => {};

  return (
    <div>
      <div className=" mt-5">
        <CommonBanner
          title="Best Treatment for Depression That Guides You to Healing"
          description="Depression is a persistent medical condition that can significantly impact your...  read more"
          image={spacificdisorder}
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
        <DepressionTherpyOverview />
      </div>
      <div className="container mx-auto">
        <div className="sm:mx-20">
          <FAQAccordion data={faqData} icon={downArrow} />
        </div>
      </div>
      <div>
        <HelpBanner
          title="Need Help Choosing?"
          description="Connect with our team and they’ll guide you to the right therapist and support your journey."
          buttonText="Chat on Whatsapp"
          buttonIcon={arrow_right}
          backgroundImage={needhelp}
          onButtonClick={() => {
            window.open("https://wa.me/your-number", "_blank");
          }}
        />
      </div>
    </div>
  );
};

export default Depression;
