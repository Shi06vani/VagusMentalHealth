import React from 'react'
import HeroSection from '../components/sections/home/HeroSection'
import TrustedBy from '../components/sections/home/TrustedBy'
import WhyChooseUs from '../components/sections/home/WhyChooseUs'
import RecoveryJourney from '../components/sections/home/RecoveryJourney'
import Testimonials from '../components/sections/home/Testimonials'
import HowWeWork from '../components/sections/home/HowWeWork'
import Stats from '../components/sections/home/Stats'
import MentalHealthCheck from '../components/sections/home/MentalHealthCheck'
import FAQ from '../components/sections/home/FAQ'
import HelpBanner from '../components/sections/home/HelpBanner'

const Home = () => {
  return (
    <div >
      <HeroSection/>
      <TrustedBy/>
      <WhyChooseUs/>
      <RecoveryJourney/>
      <Testimonials/>
      <HowWeWork/>
      <Stats/>
      <MentalHealthCheck/>
      <FAQ/>
      <HelpBanner/>
    </div>
  )
}

export default Home
