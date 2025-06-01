import React from 'react'
import TherapyInfoSection from '../../common/ui/TherapyInfoSection'
import FirstTherapySession from '../../common/ui/FirstTherapySession'
import CeoCard from '../../common/ui/CeoCard'
import ceo from "../../../assets/images/cronicillnesceo.png"
const PersonlitydisocrderTherapy = () => {
  return (
    <div className="font-[Poppins] px-4  lg:px-6">
      <TherapyInfoSection
  introParagraphs={[
    "Personality disorders affect how a person thinks, feels, and interacts with others, often leading to challenges in relationships, work, and daily life. These disorders can cause extreme emotions, difficulty in adapting to situations, and persistent patterns of unhealthy behavior.",
    "At Vagus Mind Health, we provide expert therapy tailored to each individual’s needs, helping clients build self-awareness, manage emotions, and develop healthier relationships. With professional support, structured therapy, and coping strategies, individuals can learn to navigate life with greater stability and confidence.",
  ]}
  heading="Why Choose Vagus Mind Health is Best for Treatment?"
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
          testimonial="Vagus Mind Health helped me break free. My therapist provided the support and tools I needed to manage my anxiety and feel in control again.."
        />
      </div>
<FirstTherapySession
  heading="What to Expect in Your First Session of Depression Therapy?"
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

export default PersonlitydisocrderTherapy
