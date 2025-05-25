import React from "react";
import CommonBanner from "../../components/common/ui/CommonBanner";
import coupleImg from "../../assets/images/couple-img.png";
import IssueList from "../../components/common/ui/IssueList";
import icon1 from "../../assets/icons/sleep-disorder.svg";
import icon2 from "../../assets/icons/sleep-disorder2.svg";
import icon3 from "../../assets/icons/thinking.svg";
import FreeConsultationButton from "../../components/common/ui/FreeConsultationButton";
import FAQAccordion from "../../components/common/ui/FAQAccordion";
import downArrow from "../../assets/icons/downarrow.svg";
import RelationTherapyOverview from "../../components/sections/relation/RelationTherapyOverview";
import HelpBanner from "../../components/common/ui/HelpBanner";
import arrow_right from "../../assets/icons/arrow-right-Bold.svg";
import needhelp from "../../assets/images/need help.jpg";


const issuesData = [
  {
    title: "Frequent Miscommunication",
    image: icon1,
  },
  {
    title: "Lack of Affection",
    image: icon2,
  },
  {
    title: "Emotional Distance",
    image: icon3,
  },
];

const faqs = [
  {
    question: "How can couples counselling help our relationship?",
    answer:
      "Couples counselling can improve communication, rebuild trust, and help partners better understand each other to strengthen their relationship.",
  },
  {
    question: "What if only one of us wants to attend counselling?",
    answer:
      "It’s okay if only one partner starts therapy. Individual sessions can still lead to personal growth and positively impact the relationship.",
  },
  {
    question: "How long does couples counselling take?",
    answer:
      "The duration varies depending on the couple’s needs and goals, but many benefit from consistent sessions over a few months.",
  },
];

const CouplesCounselling = () => {
  const handleClick = () => {};
  return (
    <div>
      <div className=" mt-5">
        <CommonBanner
          title="Couples Counselling"
          description="Relationships are a vital part of life, but even the strongest couples face challenges. Whether it's communication...  read more"
          image={coupleImg}
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
        <RelationTherapyOverview/>
      </div>

      <div className="container mx-auto">
        <div className="sm:mx-20">
          <FAQAccordion data={faqs} icon={downArrow} />
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

export default CouplesCounselling;
