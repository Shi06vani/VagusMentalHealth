import React from "react";
import CommonBanner from "../../components/common/ui/CommonBanner";
import FreeConsultationButton from "../../components/common/ui/FreeConsultationButton";
import IssueList from "../../components/common/ui/IssueList";
import boosting from "../../assets/images/boosting.png";
import BoostingProductivityTherpy from "../../components/sections/lifeandwork/BoostingProductivityTherpy";
import FAQAccordion from "../../components/common/ui/FAQAccordion";
import { commonImages } from "../../common-image-path/images";
import HelpBanner from "../../components/common/ui/HelpBanner";
import ScrollFadeUp from "../../components/animations/ScrollFadeUp";
const BoostingProductivity = () => {
  const handleClick = () => {};

  const productivityFaq = [
    {
      question: "How can therapy help with productivity?",
      answer:
        "Therapy can help identify the emotional and psychological factors that affect your productivity, such as anxiety, low self-esteem, or burnout. It also equips you with tools to manage stress, improve focus, and create healthier work-life boundaries.",
    },
    {
      question: "Can productivity coaching help with procrastination?",
      answer:
        "Yes, productivity coaching specifically targets habits like procrastination by helping you understand the root causes and implement strategies such as goal setting, time blocking, and accountability techniques.",
    },
    {
      question: "Is therapy for productivity only for professionals?",
      answer:
        "No, therapy for productivity is for anyone who feels stuck, overwhelmed, or unmotivated—whether you're a student, stay-at-home parent, entrepreneur, or working professional. The goal is to help you function more effectively in your daily life.",
    },
  ];

  return (
    <div>
      <div className=" mt-5">
        <ScrollFadeUp>
          <CommonBanner
            title="Boosting Productivity"
            description="Productivity isn’t just about working harder—it’s about working smarter. Managing time effectively, staying...  read more"
            image={boosting}
            linkText="Take Test"
            linkHref="/take-test"
          />
          <div className="flex justify-center sm:justify-end items-center my-7 sm:my-11 px-4">
            <FreeConsultationButton onClick={handleClick} />
          </div>
        </ScrollFadeUp>
      </div>
      <div className="container mx-auto my-10 xl:my-24">
        <ScrollFadeUp>
          <BoostingProductivityTherpy />
        </ScrollFadeUp>
      </div>

      <div className="container mx-auto">
        <div className="sm:mx-20">
          <ScrollFadeUp>
            <FAQAccordion
              data={productivityFaq}
              icon={commonImages.downArrow}
            />
          </ScrollFadeUp>
        </div>
      </div>
      <div>
        <ScrollFadeUp>
           <HelpBanner
          title="Need Help Choosing?"
          description="Connect with our team and they’ll guide you to the right therapist and support your journey."
          buttonText="Chat on Whatsapp"
          buttonIcon={commonImages.arrow_right}
          backgroundImage={commonImages.needhelp}
          onButtonClick={() => {
            window.open("https://wa.me/91954857638", "_blank");
          }}
        />
        </ScrollFadeUp>
       
      </div>
    </div>
  );
};

export default BoostingProductivity;
