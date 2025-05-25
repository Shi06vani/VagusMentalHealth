import React from "react";
import TherapyInfoSection from "../../common/ui/TherapyInfoSection";
import CeoCard from "../../common/ui/CeoCard";
import ceo from "../../../assets/images/divorse-ceo.png";
import FirstTherapySession from "../../common/ui/FirstTherapySession";

const FamilyTherpyOverview = () => {
  return (
    <div className="font-[Poppins]  px-4  lg:px-6">
      <TherapyInfoSection
        introParagraphs={[
          "While families provide essential emotional support, challenges can affect everyone. Conflicts, misunderstandings, and life transitions can create stress and disrupt harmony. At Fitcy Health, family counseling offers a safe and supportive space to openly address issues, improve communication, and rebuild strong connections. Our experienced therapists guide families through difficult times, helping them grow closer and stronger together.",
          "Our expert therapists help families navigate these struggles, fostering understanding, resilience, and a stronger bond for a healthier future.",
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
          name="Gaurav, Soldier"
          title="CEO"
          testimonial="Going through my divorce felt overwhelming, but Vagus Mind Health provided the guidance and support I needed. My therapist helped me process my emotions, rebuild my confidence, and find clarity for my future."
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
    </div>
  );
};

export default FamilyTherpyOverview;
