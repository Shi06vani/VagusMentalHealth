import React from "react";
import TherapyInfoSection from "../../common/ui/TherapyInfoSection";
import CeoCard from "../../common/ui/CeoCard";
import ceo from "../../../assets/images/taruma-ceo.png"
import FirstTherapySession from "../../common/ui/FirstTherapySession";
const CareerCocingTherapy = () => {
  return (
    <div className="font-[Poppins]  px-4 lg:px-6">
      <TherapyInfoSection
        introParagraphs={[
          "Career coaching helps individuals navigate professional challenges, set career goals, and make informed decisions about their future. Whether you're seeking a job change, leadership development, or work-life balance, personalized coaching provides the guidance you need to grow and succeed.",
          "We can help you to identify strengths, passions, and the right career path.",
        ]}
        heading="Why Choose Vagus Mind Health is Best for Treatment?"
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
          name="Ryan, Lawyer"
          title="CEO"
          testimonial="Vagus Mind Health helped me break free. My therapist provided the support and tools I needed to manage my anxiety and feel in control again."
        />
      </div>
      <FirstTherapySession
  heading="What to Expect in Your First Session of Therapy?"
  subheading="We are committed to providing high-quality services to people who are looking for the best depression treatment clinics."
  steps={[
    {
      title: "1. Initial Assessment",
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

export default CareerCocingTherapy;
