import React from "react";
import FirstTherapySession from "../../common/ui/FirstTherapySession";
import TherapyInfoSection from "../../common/ui/TherapyInfoSection";
import CeoCard from "../../common/ui/CeoCard";
import ceo from "../../../assets/images/taruma-ceo.png";
const HypochondriasisTherapyOverview = () => {
  return (
    <div className="font-[Poppins] px-4  lg:px-6">
      <TherapyInfoSection
        introParagraphs={[
          "It is also known as illness anxiety disorder, is a condition where individuals become excessively worried about having a serious illness, even when medical tests show no underlying health issue.",
          "This persistent fear can lead to frequent doctor visits, constant self-checking for symptoms, and heightened anxiety over minor bodily sensations.",
          "While it’s natural to be concerned about health, hypochondriasis can interfere with daily life, relationships, and overall well-being. Therapy, mindfulness techniques, and cognitive-behavioral strategies can help individuals manage their health anxiety and regain control over their thoughts.",
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
          name="Jessie, Housemaker"
          title="CEO"
          testimonial="As a homemaker, I felt trapped in an endless cycle of exhaustion and sadness. Therapy  with Vagus Mind Health helped me rediscover joy in the little things and regain control of my life."
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

export default HypochondriasisTherapyOverview;
