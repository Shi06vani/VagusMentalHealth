import React from 'react'
import CeoCard from "../../common/ui/CeoCard";
import ceo from "../../../assets/images/ceo.png";
import TherapyInfoSection from "../../common/ui/TherapyInfoSection";
import FirstTherapySession from "../../common/ui/FirstTherapySession";

const RelationTherapyOverview = () => {
  return (
     <div className="font-[Poppins]  px-4 ">
      <TherapyInfoSection
        introParagraphs={[
          "Relationships are a vital part of life, but even the strongest couples face challenges. Whether it’s communication barriers, unresolved conflicts, or major life transitions, seeking professional support can provide the tools and guidance needed to rebuild and strengthen your bond. At Vagus Mind Health, our expert therapists offer personalized support to help couples navigate difficulties and foster healthier, more fulfilling relationships.",
          "We can help you to identify strengths, passions, and the right career path.",
        ]}
        heading="Why Choose Vagus Mind Health is Best for treatment?"
        subheading="We are committed to providing high-quality services to people who are looking for the best treatment clinics."
        features={[
          {
            title: "Experienced and Licensed Therapists",
            description:
              "Our licensed and experienced therapists use proven techniques to help you navigate depression with confidence.",
          },
          {
            title: "Immediate Appointments (Available Within 24 Hours)",
            description:
              "Get matched with a therapist and start your journey within 24 hours—because your mental health shouldn’t wait.",
          },
          {
            title: "Personalized Care Plans",
            description:
              "Tailored treatment plans to fit your needs and progress.",
          },
        ]}
      />

      <div className="py-20">
        <CeoCard
          image={ceo}
          name="Rahul Jain"
          title="CEO"
          testimonial="Vagus Mind Health has greatly improved our team’s well-being and productivity. A fantastic investment."
        />
      </div>

      <div>
        <FirstTherapySession
          heading="What to Expect in Your First Session of Therapy?"
          subheading="We are committed to providing high-quality services to people who are looking for the best depression treatment clinics."
          steps={[
            {
              title: "Initial assessment",
              description:
                "At the beginning of the session, we engage in an open conversation about your experiences, challenges, and emotions. This allows your therapist to gain insight into your situation and determine the best support for you.",
            },
            {
              title: "Set Personalized Therapy Goals",
              description:
                "In the second step of your depression treatment, you will set goals with your therapist.",
            },
            {
              title: "Discuss Your Tailored Care Plan",
              description:
                "Your therapist will outline a customized care plan designed to meet your unique needs and recovery goals.",
            },
          ]}
        />
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default RelationTherapyOverview
