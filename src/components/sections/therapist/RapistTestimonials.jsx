import React from "react";
import SliderComponent from "../../common/ui/SliderComponent";
import testimonialimage from "../../../assets/images/testimonial-image.png";
import ScrollFadeUp from "../../animations/ScrollFadeUp";


const testimonials = [
  {
    name: "Amanda",
    role: "Housewife",
    text: "The support and guidance I received made a real difference in my journey. The team is professional, compassionate, and truly dedicated to helping you feel your best. I noticed a significant improvement in just a few weeks, and I love how personalized and flexible the approach is. Highly recommend to anyone looking for expert care and real results!",
    rating: 5,
    image: testimonialimage,
  },
  {
    name: "Amanda",
    role: "Housewife",
    text: "The team is incredibly supportive, and the process is seamless. I felt heard, understood, and guided every step of the way. Within weeks, I noticed positive changes, and the personalized approach made all the difference. Highly recommend to anyone looking for real, lasting results.",
    rating: 5,
    image: testimonialimage,
  },
  {
    name: "Prashnt Mehra",
    role: "Lawyer",
    text: "When I first started, I was overwhelmed and unsure if this would work for me. But from the very first session, I felt heard and supported. My therapist truly understood my struggles and gave me practical steps to improve. Within weeks, I noticed a shift—not just in my mindset, but in my daily life. Now, I feel more confident, balanced, and in control.",
    rating: 5,
    image: testimonialimage,
  },
  {
    name: "Thomas T",
    role: "Clinical Neuropsychologist & Clinical Therapist",
    text: "Thomas really helps me understand my thinking process and highlights areas of improvement.",
    rating: 5,
    image: testimonialimage,
  },
  {
    name: "Manuel T",
    role: "Counselling Therapy & Trauma-Focused Therapy",
    text: "I had a wonderful and constructive sessions with Manuel and Fitcy. I found Manuel to be very affable and he gave me the freedom to conduct our sessions in a pace where I am comfortable, this made it easier for me to discuss things I normally would not. My counseling was intended to focus solely on my stress triggers, but Manuel dug deep into my past and origins and helped me understand my issues and myself better.",
    rating: 5,
    image: testimonialimage,
  },
  {
    name: "Gaston M",
    role: "Clinical Psychologist & Therapist",
    text: "Seeing therapists can be daunting, Gaston makes it easy. He gets it, is able to help me break things down and work through everything, he’s brilliant!",
    rating: 5,
    image: testimonialimage,
  },
  {
    name: "Fatima I",
    role: "CBT Practitioner & Clinical Psychologist",
    text: "The sessions were really helpful, it made me understand myself more and I had a noticeable improvement with my mental health.",
    rating: 5,
    image: testimonialimage,
  },
  {
    name: "Christina P",
    role: "Counselling & Clinical Psychologist",
    text: "She is an excellent psychologist, really smart and insightful. She is definitely well-experienced as a psychologist as she was able to understand and respond very well to my thoughts and emotions. I would definitely recommend her.",
    rating: 5,
    image: testimonialimage,
  },
  {
    name: "Dayana B",
    role: "Clinical Psychologist & CBT Practitioner",
    text: "I liked the vigilance in asking questions and ensuring all information are understood. I like how I was provided all the necessary information about what to expect prior to the start of the session, and the reassurance provided throughout the session.",
    rating: 5,
    image: testimonialimage,
  },
];

const RapistTestimonials = () => {
  return (
    <div className="py-10 my-8 sm:my-14 xl:my-24">
      <div className="flex text-[#3E3E3E] flex-col justify-center items-center ">
        <h1 className="text-[#3E3E3E] text-center font-normal text-2xl  sm:text-3xl lg:text-[32px] xl:text-4xl">
          Reasons to keep us dedicated{" "}
        </h1>
        <p className="text-[#3E3E3ECC] text-sm sm:text-base pt-1.5 font-normal">
          Not just reviews, the stories of impact
        </p>
      </div>
      <ScrollFadeUp>
              <SliderComponent testimonials={testimonials} />

      </ScrollFadeUp>
    </div>
  );
};

export default RapistTestimonials;
