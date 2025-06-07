import React from "react";
import CommonBanner from "../../components/common/ui/CommonBanner";
import cronic from "../../assets/images/long-term-illness.png";
import FreeConsultationButton from "../../components/common/ui/FreeConsultationButton";
import IssueList from "../../components/common/ui/IssueList";
import icon1 from "../../assets/icons/mental-disorder.svg";
import icon2 from "../../assets/icons/depression.svg";
import icon3 from "../../assets/icons/thinking.svg";
import HelpBanner from "../../components/common/ui/HelpBanner";
import FAQAccordion from "../../components/common/ui/FAQAccordion";
import { commonImages } from "../../common-image-path/images";
import CronicIllnessTherapy from "../../components/sections/lifeandwork/CronicIllnessTherapy";


const ChronicIllness = () => {
  const handleClick = () => {};
  const issuesData = [
    {
      title: " Persistent stress",
      image: icon1,
    },
    {
      title: "Feelings of sadness",
      image: icon2,
    },
    {
      title: "Fear of the future",
      image: icon3,
    },
  ];
  const chronicIllnessFAQs = [
    {
      question: "How can therapy help with long-term illness?",
      answer:
        "Therapy provides emotional support, helps you develop healthy coping mechanisms, and addresses the mental strain that often accompanies chronic illness. It can also improve your quality of life by teaching strategies to manage stress, anxiety, and depression related to your condition.",
    },
    {
      question:
        "What mental health challenges are common with chronic illness?",
      answer:
        "People living with chronic illness often experience anxiety, depression, grief, frustration, and feelings of isolation. Therapy can help manage these emotions and improve emotional resilience throughout the treatment journey.",
    },
    {
      question: "Can I attend therapy while undergoing medical treatment?",
      answer:
        "Yes, therapy can be a valuable complement to medical treatment. Many people find it beneficial to work with a therapist alongside their physical care team to address emotional well-being and maintain motivation during treatment.",
    },
    {
      question: "How long does the treatment take?",
      answer:
        "The length of therapy varies based on individual needs, the type of illness, and the emotional challenges you're facing. Some clients benefit from short-term support, while others may continue therapy for longer periods. Your therapist will help determine a plan that works best for you.",
    },
  ];

  return (
    <div>
      <div className=" mt-5">
        <CommonBanner
          title="Long-Term Illness"
          description="Living with a chronic illness can be physically, emotionally, and mentally exhausting. The ongoing challenges of managing...  read more"
          image={cronic}
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
        <CronicIllnessTherapy />
      </div>
      <div className="container mx-auto">
        <div className="sm:mx-20">
          <FAQAccordion
            data={chronicIllnessFAQs}
            icon={commonImages.downArrow}
          />
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
  window.open("https://wa.me/91954857638", "_blank");
}}

        />
      </div>
    </div>
  );
};

export default ChronicIllness;
