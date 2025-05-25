import React from "react";
import Banner from "../components/common/ui/Banner";
import rapistbg from "../assets/images/therapistbg.jpg";
import FilterButton from "../components/common/ui/FilterButton";
import icon1 from "../assets/icons/gender-male.svg";
import icon2 from "../assets/icons/experince.svg";
import icon3 from "../assets/icons/language.svg";
import icon4 from "../assets/icons/pricing.svg";
import icon5 from "../assets/icons/expertise.svg";
import cn from "../utils/cn";
import searchIcon from "../assets/icons/search-icon.svg";
import ChooseYourSecialist from "../components/sections/therapist/ChooseYourSecialist";
import FreeConsultationButton from "../components/common/ui/FreeConsultationButton";
import SliderComponent from "../components/common/ui/SliderComponent";
import RapistTestimonials from "../components/sections/therapist/RapistTestimonials";
import RapistTrustedBy from "../components/sections/therapist/RapistTrustedBy";
import FAQAccordion from "../components/common/ui/FAQAccordion";
import downArrow from "../assets/icons/downarrow.svg";
import { filters } from "../data/faqs";
import RapistMentalHealthCheck from "../components/sections/therapist/RapistMentalHealthCheck";

// const filters = [
//   {
//     label: "Gender",
//     icon: icon1, // Font Awesome icon class
//     options: ["Male", "Female", "Other"],
//   },
//   {
//     label: "Language",
//     icon: icon3,
//     options: ["English", "Hindi", "Spanish"],
//   },
//   {
//     label: "Pricing",
//     icon: icon4,
//     options: ["Free", "Paid"],
//   },
//   {
//     label: "Expertise",
//     icon: icon5,
//     options: ["Therapist", "Psychiatrist", "Coach"],
//   },
//   {
//     label: "Years of Experience",
//     icon: icon2,
//     options: ["1-2 Years", "3-5 Years", "5+ Years"],
//   },
// ];

const faqs = [
  {
    question: "Are my therapy sessions confidential?",
    answer:
      "Yes, your therapy sessions are strictly confidential. Therapists adhere to ethical guidelines and legal standards to ensure your privacy, except in cases where disclosure is required by law (e.g., risk of harm).",
  },
  {
    question: "Is online therapy effective?",
    answer:
      "Absolutely. Numerous studies show that online therapy is just as effective as in-person therapy for many mental health concerns, offering greater flexibility and accessibility.",
  },
  {
    question: "Can I switch my therapist if I’m not satisfied?",
    answer:
      "Yes, you can switch therapists at any time. Finding the right fit is important, and we encourage you to work with someone you feel comfortable with.",
  },
  {
    question: "Do I need a diagnosis to start therapy?",
    answer:
      "No diagnosis is necessary to begin therapy. Therapy can be beneficial for anyone seeking support, guidance, or self-improvement, regardless of whether a diagnosis has been made.",
  },
];

const SearchableInput = ({
  placeholder = "Search",
  className = "",
  inputClass = "",
}) => {
  return (
    <div
      className={cn(" font-poppins w-full max-w-3xl mx-4 sm:mx-14 ", className)}
    >
      <div className="relative  ">
        <input
          type="text"
          placeholder={placeholder}
          className={cn(
            "w-full pl-14 lg:pl-20 pr-4 py-2.5 sm:py-3.5 xl:py-5 font-normal text-[#3E3E3E] rounded-full bg-[#EEF6FF] text-sm  placeholder:text-gray-500 outline-none border-none focus:ring-2 focus:ring-blue-200",
            inputClass
          )}
        />
        <div className="absolute left-7 lg:left-12 top-1/2 -translate-y-1/2">
          <img
            src={searchIcon}
            alt="search icon"
            className="w-4 h-4 text-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

const Therapist = () => {
  const handleSelect = (filter, option) => {
    console.log(`${filter} selected:`, option);
  };

  const handleClick = () => {
    console.log("Consultation button clicked!");
  };

  return (
    <div>
      <div className="relative">
        <Banner
          backgroundImage={rapistbg}
          heading="Find the Right Therapist for You"
          description="We match you with a therapist who understands your needs, so you feel supported from day one."
        ></Banner>
        <div className="flex justify-center items-center">
          <div className="absolute  -sm:bottom-4 sm:right-7">
            <FreeConsultationButton onClick={handleClick} />
          </div>
        </div>
      </div>

      <div className=" my-20 sm:my-28">
        <div className="flex justify-center items-center flex-wrap gap-3 mb-10 mx-4 sm:mx-2 ">
          {filters.map((filter) => (
            <FilterButton
              key={filter.label}
              icon={filter.icon}
              label={filter.label}
              options={filter.options}
              onSelect={(option) => handleSelect(filter.label, option)}
            />
          ))}
        </div>

        <div className="w-full flex justify-center items-center ">
          <SearchableInput placeholder="Search" className="" />
        </div>
      </div>
      <div className="container mx-auto">
        <ChooseYourSecialist />
      </div>
      <RapistTestimonials />
      <RapistTrustedBy />
      <div className="container mx-aut">
        <div className="sm:mx-20 py-10  my-10 sm:my-16 lg:py-16 lg:my-16  ">
          <FAQAccordion data={faqs} icon={downArrow} />
        </div>
      </div>
      <RapistMentalHealthCheck />
    </div>
  );
};

export default Therapist;
