import React from 'react'
import CommonBanner from '../../components/common/ui/CommonBanner';
import FreeConsultationButton from '../../components/common/ui/FreeConsultationButton';
import IssueList from '../../components/common/ui/IssueList';
import EatingdiscorderTherapy from '../../components/sections/specific-disorder/EatingdiscorderTherapy';
import FAQAccordion from '../../components/common/ui/FAQAccordion';
import HelpBanner from '../../components/common/ui/HelpBanner';
import { commonImages } from '../../common-image-path/images';
import  hypochondriasis from "../../assets/images/hypochondrisis.png"
import icon1  from "../../assets/icons/illness.svg"
import icon2  from "../../assets/icons/sleep-disorde.svg"
import icon3  from "../../assets/icons/skiipingmeals.svg"
import HypochondriasisTherapyOverview from '../../components/sections/specific-disorder/HypochondriasisTherapyOverview';
const Hypochondriasis = () => {
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

    const faqData = [
  {
    question: "How can therapy help with health anxiety?",
    answer:
      "Therapy helps individuals identify and challenge irrational health-related thoughts, reduce excessive worry, and learn coping strategies to manage anxiety. Cognitive-behavioral therapy (CBT) is particularly effective in treating health anxiety by helping people reframe their thinking patterns and reduce reassurance-seeking behaviors."
  },
  {
    question: "What type of therapy is best for hypochondriasis?",
    answer:
      "Cognitive Behavioral Therapy (CBT) is considered the most effective treatment for hypochondriasis. It helps patients recognize distorted thoughts about health and replace them with more balanced and realistic thinking, while also managing compulsive checking and avoidance behaviors."
  },
  {
    question: "Is online therapy effective for depression?",
    answer:
      "Yes, online therapy has been shown to be just as effective as in-person therapy for many individuals dealing with depression. It offers flexibility, privacy, and access to qualified therapists from the comfort of your home."
  },
  {
    question: "Can I get treatment online?",
    answer:
      "Absolutely. Many therapy clinics, including Vagus Mind Health, offer secure and confidential online sessions so you can receive effective treatment from anywhere at your convenience."
  }
];

  return (
    <div>
      <div className=" mt-5">
        <CommonBanner
          title="Best Treatment for Hypochondriasis"
          description="Also known as illness anxiety disorder, is a condition where individuals become excessively worried about having...  read more"
          image={hypochondriasis}
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
        <HypochondriasisTherapyOverview />
      </div>
      <div className="container mx-auto">
        <div className="sm:mx-20">
          <FAQAccordion data={faqData} icon={commonImages.downArrow} />
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

export default Hypochondriasis
