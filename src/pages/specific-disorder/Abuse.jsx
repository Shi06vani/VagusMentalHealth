import React from "react";
import CommonBanner from "../../components/common/ui/CommonBanner";
import FreeConsultationButton from "../../components/common/ui/FreeConsultationButton";
import IssueList from "../../components/common/ui/IssueList";
import FAQAccordion from "../../components/common/ui/FAQAccordion";
import HelpBanner from "../../components/common/ui/HelpBanner";
import { commonImages } from "../../common-image-path/images";
import abuse from "../../assets/images/abuse.png"
import icon1 from "../../assets/icons/trustissue.svg"
import icon2 from "../../assets/icons/sleep-disorde.svg"

import icon3 from "../../assets/icons/crying.svg"
import AbuseTherapy from "../../components/sections/specific-disorder/AbuseTherapy";

const Abuse = () => {
  const handleClick = () => {};

  const issuesData = [
    {
      title: " Trust Issues",
      image: icon1,
    },
    {
      title: "Having sleep disorders",
      image: icon2,
    },
    {
      title: "Emotional Distress",
      image: icon3,
    },
  ];

  const abuseFAQ = [
  {
    question: "Is online therapy effective for abuse trauma?",
    answer: "Yes, online therapy can be highly effective for abuse trauma. It provides a safe and private space to process experiences, learn coping strategies, and begin healing—all from the comfort of your own environment."
  },
  {
    question: "Can I remain anonymous during sessions?",
    answer: "Yes, you can choose to remain anonymous by using a nickname and keeping your camera off during online sessions. However, for the most personalized care, some basic information may be required by your therapist."
  },
  {
    question: "Is online therapy effective?",
    answer: "Absolutely. Many people find online therapy just as beneficial as in-person sessions, especially when it is delivered by licensed professionals and tailored to individual needs."
  },
  {
    question: "How soon can I start therapy?",
    answer: "At Vagus Mind Health, you can typically start therapy within 24 hours of booking your first appointment. We prioritize quick access so your mental health care doesn't have to wait."
  }
];

  return (
    <div>
      <div className=" mt-5">
        <CommonBanner
          title="Best Treatment for Autism"
          description="Autism Spectrum Disorder (ASD) is a neurodevelopmental condition that affects communication, social...  read more"
          image={abuse}
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
        <AbuseTherapy />
      </div>
      <div className="container mx-auto">
        <div className="sm:mx-20">
          <FAQAccordion data={abuseFAQ} icon={commonImages.downArrow} />
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

export default Abuse;
