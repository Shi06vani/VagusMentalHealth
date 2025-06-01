import React from "react";
import CeoCard from "../../common/ui/CeoCard";
import ceo from "../../../assets/images/suciadialceo.png";
import FirstTherapySession from "../../common/ui/FirstTherapySession";
import TherapyInfoSection from "../../common/ui/TherapyInfoSection";
const SuicidalTendenciesTherpay = () => {
  return (
    <div className="font-[Poppins]  px-4 lg:px-6">
      <TherapyInfoSection
        introParagraphs={[
          "Experiencing suicidal thoughts can feel overwhelming and isolating, but help is available. Suicidal tendencies often stem from deep emotional pain, mental health struggles, or personal crises. Seeking support is a crucial step toward healing and finding hope.",
          "At Vagus Mind Health, we provide expert therapy tailored to each individual's needs, helping clients build self-awareness, manage emotions, and develop healthier relationships.",
        ]}
        heading="Why Choose Vagus Mind Health is Best for Treatment ?"
        subheading="We are committed to providing high-quality services to people who are looking for the best depression treatment clinics."
        features={[
          {
            title: "Experienced and Licensed Therapists",
            description:
              "Our licensed and experienced therapists use proven techniques to help you navigate depression with confidence.",
          },
          {
            title: "Immediate Appointments (Available Within 24 Hours)",
            description:
              "Get matched with a therapist and start your journey within 24 hours—because your mental health shouldn't wait.",
          },
          {
            title: "Confidential and Secure Online Sessions",
            description:
              "Your privacy is our top-most priority. That's why your sessions at our depression therapy clinic in Dubai are designed to be 100% confidential and secure. Moreover, you can get in touch with our depression therapists from the comfort of your home, making it convenient and stress free.",
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
        heading="What to Expect in Your First Session of Depression Therapy?"
        subheading="We are committed to providing high-quality services to people who are looking for the best depression treatment clinics."
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

export default SuicidalTendenciesTherpay;
