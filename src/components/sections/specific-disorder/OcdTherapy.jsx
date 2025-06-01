import React from "react";
import TherapyInfoSection from "../../common/ui/TherapyInfoSection";
import CeoCard from "../../common/ui/CeoCard";
import FirstTherapySession from "../../common/ui/FirstTherapySession";
import ceo from "../../../assets/images/taruma-ceo.png";
const OcdTherapy = () => {
  return (
    <div className="font-[Poppins] px-4  lg:px-6">
      <TherapyInfoSection
        introParagraphs={[
          "Obsessive-Compulsive Disorder (OCD) is a mental health condition that causes persistent, unwanted thoughts (obsessions) and repetitive behaviours or rituals (compulsions). These patterns can interfere with daily life, making it difficult to focus on work, relationships, or personal well-being.",
          "It causes uncontrollable, distressing thoughts about contamination, harm, or orderliness. However, with the right treatment and support, managing OCD is possible.",
        ]}
        heading="Why Choose Vagus Mind Health is Best for OCD Treatment?"
        subheading="We are committed to providing high-quality services to people who are looking for the best treatment clinics."
        features={[
          {
            title: "Experienced and Licensed Therapists",
            description:
              "Our licensed and experienced therapists use proven techniques to help you navigate OCD with confidence.",
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
          name="Ryan, Lawyer"
          title="CEO"
          testimonial="Vagus Mind Health helped me break free. My therapist provided the support and tools I needed to manage my anxiety and feel in control again.."
        />
      </div>
      <FirstTherapySession
        heading="What to Expect in Your First Session of Therapy?"
        description="We are committed to providing high-quality services to people who are looking for the best depression treatment clinics."
        steps={[
          {
            title: "Initial Assessment",
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
  );
};

export default OcdTherapy;
