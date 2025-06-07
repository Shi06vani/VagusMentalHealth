import React from 'react'
import CommonBanner from '../../components/common/ui/CommonBanner';
import FreeConsultationButton from '../../components/common/ui/FreeConsultationButton';
import IssueList from '../../components/common/ui/IssueList';
import FAQAccordion from '../../components/common/ui/FAQAccordion';
import HelpBanner from '../../components/common/ui/HelpBanner';
import { commonImages } from '../../common-image-path/images';
import lGBTQ  from "../../assets/images/lgbtq.png"
import icon1 from "../../assets/icons/discrmination.svg"
import icon2 from "../../assets/icons/relationshipguidnes.svg"

import icon3 from "../../assets/icons/sucidialmood.svg"
import LbtqTherapy from '../../components/sections/specific-disorder/LbtqTherapy';
import ScrollFadeUp from '../../components/animations/ScrollFadeUp';

const LGBTQ = () => {
     const handleClick = () => {};

     const issuesData = [
         {
           title: " Discrimination",
           image: icon1,
         },
         {
           title: "Relationship guidance",
           image: icon2,
         },
         {
           title: "Identity Exploration",
           image: icon3,
         },
       ];

       const lgbtqFaqs = [
  {
    question: "Can therapy help with internalized homophobia or transphobia?",
    answer: "Yes, therapy can help individuals explore and work through internalized biases, build self-acceptance, and develop healthy coping mechanisms. LGBTQ+ affirming therapists provide a safe and supportive space for this healing process."
  },
  {
    question: "Will my therapist be LGBTQ+ affirming?",
    answer: "At Vagus Mind Health, we prioritize matching clients with LGBTQ+ affirming therapists who understand and respect diverse identities and experiences."
  },
  {
    question: "Is LGBTQ+ counselling different from regular therapy?",
    answer: "While the core therapeutic methods may be similar, LGBTQ+ counseling is tailored to address specific challenges and experiences faced by LGBTQ+ individuals, including discrimination, identity exploration, and coming out support."
  }
];


  return (
     <div>
      <ScrollFadeUp>
        <div className="mt-5">
          <CommonBanner
            title="Best Treatment for LGBTQ+"
            description="LGBTQ+ individuals often face unique challenges related to identity, acceptance, relationships, and...  read more"
            image={lGBTQ}
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
          <LbtqTherapy />
        </div>
      </ScrollFadeUp>

      <ScrollFadeUp>
        <div className="container mx-auto">
          <div className="sm:mx-20">
            <FAQAccordion data={lgbtqFaqs} icon={commonImages.downArrow} />
          </div>
        </div>
      </ScrollFadeUp>

      <ScrollFadeUp>
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
      </ScrollFadeUp>
    </div>
  )
}

export default LGBTQ
