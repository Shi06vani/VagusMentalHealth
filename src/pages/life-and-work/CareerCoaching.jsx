import React from 'react'
import CommonBanner from '../../components/common/ui/CommonBanner'
import FreeConsultationButton from '../../components/common/ui/FreeConsultationButton';
import FAQAccordion from '../../components/common/ui/FAQAccordion';
import HelpBanner from '../../components/common/ui/HelpBanner';
import { commonImages } from '../../common-image-path/images';
import carrer from "../../assets/images/carrercoching.png"
import CareerCocingTherapy from '../../components/sections/lifeandwork/CareerCocingTherapy';
const CareerCoaching = () => {
  const handleClick=()=>{

  }

  const careerFaq = [
  {
    question: "What therapy is best for phobia?",
    answer:
      "Cognitive Behavioral Therapy (CBT) is considered the most effective treatment for phobias. It helps individuals identify and challenge irrational fears, and gradually exposes them to the source of their fear in a safe and controlled manner.",
  },
  {
    question: "How long does it take to overcome a phobia?",
    answer:
      "The duration varies from person to person, but many individuals see significant improvement within 8 to 16 therapy sessions. Factors such as the severity of the phobia and the individual's commitment to treatment can influence recovery time.",
  },
  {
    question: "Can medications help with phobias?",
    answer:
      "Medications such as anti-anxiety drugs or antidepressants can be used to manage symptoms of severe phobias, especially when combined with therapy. However, they are generally not a standalone cure and are best used short-term under professional guidance.",
  },
];

  return (
    <div>
       <div className=" mt-5">
        <CommonBanner
          title="Career Coaching"
          description="Career coaching helps individuals navigate professional challenges, set career goals, and make informed decisions about...  read more"
          image={carrer}
          linkText="Take Test"
          linkHref="/take-test"
        />
        <div className="flex justify-center sm:justify-end items-center my-7 sm:my-11 px-4">
          <FreeConsultationButton onClick={handleClick} />
        </div>
      </div>
      <div className="container mx-auto my-10 xl:my-24">
        <CareerCocingTherapy/>
      </div>

       <div className="container mx-auto">
        <div className="sm:mx-20">
          <FAQAccordion data={careerFaq} icon={commonImages.downArrow} />
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

export default CareerCoaching
