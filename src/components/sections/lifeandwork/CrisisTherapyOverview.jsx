import React from "react";
import TherapyInfoSection from "../../common/ui/TherapyInfoSection";
import CeoCard from "../../common/ui/CeoCard";
import ceo from "../../../assets/images/lifeandwork.png";
import FirstTherapySession from "../../common/ui/FirstTherapySession";

const CrisisTherapyOverview = () => {
  return (
    <div className="font-[Poppins] px-4  lg:px-6">
      <TherapyInfoSection
        introParagraphs={[
          "Crisis intervention provides immediate, short-term support to individuals facing extreme emotional distress, trauma, or urgent mental health concerns.",
          "The goal is to stabilize emotions, ensure safety, and connect individuals with ongoing professional care. Whether dealing with panic, grief, or overwhelming stress, timely intervention can make a crucial difference.",
        ]}
        heading="Why Choose Vagus Mind Health is Best for Hypochondriasis treatment?"
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
          name="Ronnie, Soldier"
          title="CEO"
          testimonial="Vagus Mind Health helped me break free from constant health worries. My therapist provided the support and tools I needed to manage my anxiety and feel in control again."
        />
      </div>
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
  );
};

export default CrisisTherapyOverview;
