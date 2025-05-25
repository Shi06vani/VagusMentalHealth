import React from 'react'

import ceo from "../../../assets/images/ceo.png"
const TestimonialCard = ({ image, name, title, testimonial }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center font-poppins text-center sm:text-start gap-6 sm:gap-10 xl:gap-20 items-center sm:iteam-start bg-[#E9F3FF] px-6  sm:px-10 py-7 rounded-2xl ">
      <img
        src={image}
        alt={name}
        className=" w-24 h-24 sm:w-28 sm:h-28  lg:w-32 lg:h-32 rounded-full object-cover "
      />
      <div>
        <h3 className="text-[#3E3E3E] text-lg sm:text-xl font-semibold">{name},{title}</h3>
        <p className="text-gray-700 text-sm sm:text-base mt-1">{testimonial}</p>
      </div>
    </div>
  );
};
const CeoCard = () => {
  return (
   <div className=" my-20 sm:mx-6 lg:mx-10 xl:mx-20 ">
      <TestimonialCard
        image={ceo}
        name="Rahul Jain"
        title="CEO"
        testimonial="Vagus Mind Health has greatly improved our team’s well-being and productivity. A fantastic investment."
     
     />
    </div>
  )
}

export default CeoCard
