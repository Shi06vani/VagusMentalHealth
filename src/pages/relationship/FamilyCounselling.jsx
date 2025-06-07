import React from "react";
import CommonBanner from "../../components/common/ui/CommonBanner";
import FreeConsultationButton from "../../components/common/ui/FreeConsultationButton";
import familyImg from "../../assets/images/family-image.png";
import IssueList from "../../components/common/ui/IssueList";
import icon1 from "../../assets/icons/anxiety-divorse.svg";
import icon2 from "../../assets/icons/sleep-disorder-divorse.svg";
import icon3 from "../../assets/icons/thinking.svg";
import DivorseTherapyOverview from "../../components/sections/relation/DivorseTherapyOverview";
import FAQAccordion from "../../components/common/ui/FAQAccordion";
import downArrow from "../../assets/icons/downarrow.svg";
import HelpBanner from "../../components/common/ui/HelpBanner";
import arrow_right from "../../assets/icons/arrow-right-Bold.svg";
import needhelp from "../../assets/images/need help.jpg";
import ScrollFadeUp from "../../components/animations/ScrollFadeUp";

const issuesData = [
  {
    title: "Anxiety and overwhelm",
    image: icon1,
  },
  {
    title: "Emotional numbness",
    image: icon2,
  },
  {
    title: "Intense sadness",
    image: icon3,
  },
];

const faqs = [
  {
    question: "How long does family counseling take?",
    answer:
      "The duration of family counseling varies depending on the specific needs and goals of the family. Typically, sessions may range from a few weeks to several months.",
  },
  {
    question: "Who should attend the sessions?",
    answer:
      "Family counseling sessions can include any family members experiencing conflict or communication challenges. This may involve parents, children, siblings, or extended family members.",
  },
  {
    question: "What issues can be addressed in family counselling?",
    answer:
      "Family counseling can help address a variety of issues, including communication problems, parenting conflicts, blended family challenges, and coping with major life transitions such as divorce or loss.",
  },
];

const FamilyCounselling = () => {
  const handleClick = () => {};

  return (
    <div>
      <ScrollFadeUp>
        <div className="mt-5">
          <CommonBanner
            title="Family Counselling"
            description="While families provide essential emotional support, challenges can affect everyone. Conflicts, misunderstandings...  read more"
            image={familyImg}
            linkText="Take Test"
            linkHref="/take-test"
          />
          <div className="flex justify-center sm:justify-end items-center my-7 sm:my-11 px-4">
            <FreeConsultationButton onClick={handleClick} />
          </div>
        </div>
      </ScrollFadeUp>

      <ScrollFadeUp>
        <div>
          <IssueList issues={issuesData} />
        </div>
      </ScrollFadeUp>

      <ScrollFadeUp>
        <div className="container mx-auto my-10 xl:my-32">
          <DivorseTherapyOverview />
        </div>
      </ScrollFadeUp>

      <ScrollFadeUp>
        <div className="container mx-auto">
          <div className="sm:mx-20">
            <FAQAccordion data={faqs} icon={downArrow} />
          </div>
        </div>
      </ScrollFadeUp>

      <ScrollFadeUp>
        <div>
          <HelpBanner
            title="Need Help Choosing?"
            description="Connect with our team and they’ll guide you to the right therapist and support your journey."
            buttonText="Chat on Whatsapp"
            buttonIcon={arrow_right}
            backgroundImage={needhelp}
            onButtonClick={() => {
              window.open("https://wa.me/91954857638", "_blank");
            }}
          />
        </div>
      </ScrollFadeUp>
    </div>
  );
};

export default FamilyCounselling;
