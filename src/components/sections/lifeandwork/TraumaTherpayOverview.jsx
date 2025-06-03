import React from "react";
import TherapyInfoSection from "../../common/ui/TherapyInfoSection";
import CeoCard from "../../common/ui/CeoCard";
import ceo from "../../../assets/images/taruma-ceo.png";
import FirstTherapySession from "../../common/ui/FirstTherapySession";
const TraumaTherpayOverview = () => {
  return (
    <div className="font-[Poppins]  px-4 lg:px-6">
      <TherapyInfoSection
        introParagraphs={[
          "Trauma is a deeply distressing experience that overwhelms an individual’s ability to cope. It can result from a single event or prolonged exposure to distressing situations, affecting both mental and physical well-being. Trauma can reshape how a person views themselves, others, and the world, often leading to emotional and psychological struggles.",
          "We can help you save from all the past.",
        ]}
        heading="Why Choose Vagus Mind Health is Best for treatment?"
        subheading="We are committed to providing high-quality services to people who are looking for the best treatment clinics."
        features={[
          {
            title: "Personalized Healing Plans",
            description:
              "Tailored treatment plans to fit your needs and progress.",
          },
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
        ]}
      />
      <div className="py-20">
        <CeoCard
          image={ceo}
          name="Samir, Gardener"
          title="CEO"
          testimonial="Vagus Mind Health helped me break free from my Mood Disorder. My therapist provided the support and tools I needed to manage my anxiety and feel in control again."
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

export default TraumaTherpayOverview;
