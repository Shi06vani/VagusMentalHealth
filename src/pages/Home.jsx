import React from "react";
import HeroSection from "../components/sections/home/HeroSection";
import TrustedBy from "../components/sections/home/TrustedBy";
import WhyChooseUs from "../components/sections/home/WhyChooseUs";
import Testimonials from "../components/sections/home/Testimonials";
import HowWeWork from "../components/sections/home/HowWeWork";
import Stats from "../components/sections/home/Stats";
import MentalHealthCheck from "../components/sections/home/MentalHealthCheck";
import FAQ from "../components/sections/home/FAQ";
import Help from "../components/sections/home/Help";
import ScrollFadeUp from "../components/animations/ScrollFadeUp";

const Home = () => {

    const sections = [
    <HeroSection />,
    <TrustedBy />,
    <WhyChooseUs />,
    <Testimonials />,
    <HowWeWork />,
    <Stats />,
    <MentalHealthCheck />,
    <FAQ />,
    <Help />,
  ];

  

  return (
    // <div>
    //   <HeroSection />
    //   <TrustedBy />
    //   <WhyChooseUs />
    //   <Testimonials />
    //   <HowWeWork />
    //   <Stats />
    //   <MentalHealthCheck />
    //   <FAQ />
    //   <Help/>
    // </div>

     <div>
      {sections.map((Component, index) => (
        <ScrollFadeUp key={index} delay={index * 0.1}>
          {Component}
        </ScrollFadeUp>
      ))}
    </div>
  );
};

export default Home;
