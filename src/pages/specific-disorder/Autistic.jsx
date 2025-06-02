import React from "react";
import CommonBanner from "../../components/common/ui/CommonBanner";
import FreeConsultationButton from "../../components/common/ui/FreeConsultationButton";
import IssueList from "../../components/common/ui/IssueList";
import PTsdTherapy from "../../components/sections/specific-disorder/PTsdTherapy";
import FAQAccordion from "../../components/common/ui/FAQAccordion";
import HelpBanner from "../../components/common/ui/HelpBanner";
import { commonImages } from "../../common-image-path/images";
import icon1 from "../../assets/icons/mood.svg";
import icon2 from "../../assets/icons/crying.svg";
import icon3 from "../../assets/icons/repeatative.svg";

import autistic from "../../assets/images/autistic.png";
import AutisticTherapy from "../../components/sections/specific-disorder/AutisticTherapy";
const Autistic = () => {
  const handleClick = () => {};

  const issuesData = [
    {
      title: " Sensory sensitivities",
      image: icon1,
    },
    {
      title: "Hyperarousal",
      image: icon2,
    },
    {
      title: "Repetitive behaviors",
      image: icon3,
    },
  ];

  const autismFAQs = [
    {
      question: "Can autistic individuals live independently?",
      answer:
        "Yes, many autistic individuals can live independently with the right support and skills tailored to their needs.",
    },
    {
      question: "Is therapy effective for autism?",
      answer:
        "Therapy, such as behavioral and social skills training, can be very effective in helping autistic individuals improve communication and daily functioning.",
    },
    {
      question: "Can autism be diagnosed in adults?",
      answer:
        "Yes, autism can be diagnosed in adults, although it is more commonly identified in childhood. Adult diagnosis can help in understanding challenges and accessing support.",
    },
  ];

  return (
    <div>
      <div className=" mt-5">
        <CommonBanner
          title="Best Treatment for Autism"
          description="Autism Spectrum Disorder (ASD) is a neurodevelopmental condition that affects communication, social...  read more"
          image={autistic}
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
        <AutisticTherapy />
      </div>
      <div className="container mx-auto">
        <div className="sm:mx-20">
          <FAQAccordion data={autismFAQs} icon={commonImages.downArrow} />
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

export default Autistic;
