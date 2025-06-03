import React from 'react'
import TherapyInfoSection from '../../common/ui/TherapyInfoSection'
import FirstTherapySession from '../../common/ui/FirstTherapySession'
import CeoCard from '../../common/ui/CeoCard'
import ceo from "../../../assets/images/taruma-ceo.png"
const MoodDisorderTherapy = () => {
    
  return (
    <div className="font-[Poppins] px-4  lg:px-6">
      <TherapyInfoSection
  heading="Why Choose Vagus Mind Health is Best for Treatment?"
  description="Mood disorders affect emotional states, leading to persistent feelings of sadness, extreme mood swings, or emotional instability. These conditions can impact daily life, relationships, and overall well-being. With the right treatment, including therapy and support, individuals can regain stability and improve their quality of life. While mood fluctuations are a normal part of life, mood disorders involve prolonged and intense emotional disturbances that require professional care and support."
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
          name="Samir, Gardener"
          title="CEO"
          testimonial="AVagus Mind Health helped me break free from my Mood Disorder. My therapist provided the support and tools I needed to manage my anxiety and feel in control again."
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
  )
}

export default MoodDisorderTherapy
