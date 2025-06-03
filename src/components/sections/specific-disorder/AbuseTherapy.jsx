import React from "react";
import TherapyInfoSection from "../../common/ui/TherapyInfoSection";
import FirstTherapySession from "../../common/ui/FirstTherapySession";
import CeoCard from "../../common/ui/CeoCard";

const AbuseTherapy = () => {
  return (
    <div className="font-[Poppins] px-4  lg:px-6">
      <TherapyInfoSection
        introParagraphs={[
          "Experiencing abuse—whether emotional, physical, or psychological—can deeply impact mental well-being. Seeking professional support can help individuals process their trauma, rebuild self-esteem, and regain control over their lives.",
          "Our expert therapists provide personalized care to address the root causes and equip you with techniques to regain control and confidence.",
        ]}
        heading="Why Choose Vagus Mind Health is Best for Abuse Recovery Treatment?"
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
          image={""}
          name="Survivor"
          testimonial="never thought I could heal from my past, but therapy at Vagus Mind Health gave me hope. My therapist helped me regain my confidence and find my strength again."
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

export default AbuseTherapy;
