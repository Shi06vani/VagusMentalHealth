import React from "react";
import TherapyInfoSection from "../../common/ui/TherapyInfoSection";
import FirstTherapySession from "../../common/ui/FirstTherapySession";
import CeoCard from "../../common/ui/CeoCard";
import ceo from "../../../assets/images/lbtqceo.png";
const LbtqTherapy = () => {
  return (
    <div className="font-[Poppins] px-4  lg:px-6">
      <TherapyInfoSection
        introParagraphs={[
          "Psychosis is a mental health condition that affects the way a person perceives reality. It can cause hallucinations, delusions, disorganized thinking, and difficulty distinguishing between what is real and what is not.",
          "Psychosis can occur as part of various mental health disorders, including schizophrenia, bipolar disorder, and severe depression, or it can be triggered by trauma, substance use, or medical conditions.",
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
              "Tailored therapy sessions to help you manage fears and regain control.",
          },
        ]}
      />
      <div className="py-20">
        <CeoCard
          image={ceo}
          name="Lesslie, Student"
          title="CEO"
          testimonial="As an LGBTQ+ individual, finding a therapist who truly understands my experiences was life-changing. My sessions provided a safe space where I felt heard, supported, and empowered to embrace my identity with confidence."
        />
      </div>
      <FirstTherapySession
        title="What to Expect in Your First Session of Therapy?"
        description="We are committed to providing high-quality services to people who are looking for the best depression treatment clinics."
        steps={[
          {
            title: "1. Initial assessment",
            description:
              "At the beginning of the session, we engage in an open conversation about your experiences, challenges, and emotions. This allows your therapist to gain insight into your situation and determine the best support for you.",
          },
          {
            title: "2. Set Personalized Therapy Goals",
            description:
              "In the second step of your depression treatment, you will set goals with your therapist.",
          },
          {
            title: "3. Discuss Your Tailored Care Plan",
            description:
              "Your therapist will outline a customized care plan designed to meet your unique needs and recovery goals.",
          },
        ]}
      />
    </div>
  );
};

export default LbtqTherapy;
