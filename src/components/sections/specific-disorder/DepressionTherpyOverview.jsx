import React from "react";
import TherapyInfoSection from "../../common/ui/TherapyInfoSection";
import CeoCard from "../../common/ui/CeoCard";
import ceo from "../../../assets/icons/dipressionceo.svg";
import FirstTherapySession from "../../common/ui/FirstTherapySession";

const DepressionTherpyOverview = () => {
  return (
    <div className="font-[Poppins] px-4  lg:px-6">
      <TherapyInfoSection
        introParagraphs={[
          "Depression is a persistent medical condition that affects your thoughts, emotions, and daily life—but help is available. With the right therapy and support, you can regain control, find clarity, and restore your well-being. You are not alone, and healing is possible.",
          "Some of the common symptoms are constant feeling of sorrow, fatigue, difficulty focusing on important tasks, loss of interest, and changes in appetite and sleeping patterns.",
          "If left unaddressed, these symptoms can deeply impact relationships, work, and overall well-being. Whether you're experiencing mild discomfort or overwhelming emotional distress, recognizing the signs and seeking professional support is essential.",
        ]}
        heading="Why Choose Vagus Mind Health is Best for Depression Treatment?"
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
              "Get matched with a therapist and start your journey within 24 hours—because your mental health shouldn’t wait.",
          },
          {
            title: "Confidential and Secure Online Sessions",
            description:
              "Your privacy is our top-most priority. That’s why your sessions at our depression therapy clinic in Dubai are designed to be 100% confidential and secure. Moreover, you can get in touch with our depression therapists from the comfort of your home, making it convenient and stress free.",
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
        heading="What to Expect in Your First Session of Depression Therapy?"
        subheading="We are committed to providing high-quality services to people who are looking for the best depression treatment clinics."
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

export default DepressionTherpyOverview;
