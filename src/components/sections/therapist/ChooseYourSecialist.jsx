import React, { useState } from "react";
import TherapistCard from "../../common/ui/TherapistCard";
import specialist from "../../../assets/images/specilaist.png";
import Pagination from "../../common/ui/Pagination ";
import ScrollFadeUp from "../../animations/ScrollFadeUp";
// therapistData.js
const therapists = [
  {
    name: "Dr Athrav Vijay",
    image: specialist,
    specialty: "Mindfulness-Based Therapy",
    experience: "15+ years",
    languages: ["English", "Hindi"],
    expertise: "Anxiety Disorders",
    moreExpertiseCount: 5,
    verified: true,
    availability: [
      { date: "Thu, May 1", slotsAvailable: 6 },
      { date: "Fri, May 6", slotsAvailable: 6 },
    ],
  },
  {
    name: "Dr Suhani Shah",
    image: specialist,
    specialty: "LGBTQ+ Counselling",
    experience: "5+ years",
    languages: ["English", "Chinese"],
    expertise: "Sexual",
    moreExpertiseCount: 5,
    verified: false,
    availability: [
      { date: "Thu, May 1", slotsAvailable: 3 },
      { date: "Tue, May 10", slotsAvailable: 4 },
    ],
  },
  {
    name: "Dr Jitendra Jha",
    image: specialist,
    specialty: "Mindfulness-Based Therapy",
    experience: "15+ years",
    languages: ["English"],
    expertise: "Depression",
    moreExpertiseCount: 3,
    verified: true,
    availability: [
      { date: "Wed, May 1", slotsAvailable: 2 },
      { date: "Fri, May 6", slotsAvailable: 6 },
    ],
  },
  {
    name: "Dr Zeenat",
    image: specialist,
    specialty: "LGBTQ+ Counselling",
    experience: "5+ years",
    languages: ["English", "Urdu"],
    expertise: "Anxiety",
    moreExpertiseCount: 5,
    verified: false,
    availability: [
      { date: "Mon, May 6", slotsAvailable: 5 },
      { date: "Fri, May 6", slotsAvailable: 6 },
    ],
  },
];

const ChooseYourSecialist = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("Page:", page); 
  };
  return (
  
    <div className=" lg:mx-14 xl:mx-24   ">
      <div>
        <h1 className="text-[#3E3E3E] font-poppins font-normal text-2xl mb-[10px]  sm:text-3xl lg:text-[32px]  xl:text-4xl ">
          Choose your specialist?
        </h1>
        <p className=" text-[#3E3E3ECC] font-normal text-[15px]">
          {" "}
          Expert support, tailored to you..
        </p>
      </div>

      <div className="">
        <div className="space-y-6 my-6 grid grid-cols-1 sm:grid-cols-1">
          {therapists.map((therapist, index) => (
            <TherapistCard key={index} therapist={therapist} />
          ))}
        </div>
      </div>

      <div className=" flex flex-col items-center justify-center">
        {/* Example content */}
        <p className="mb-6">Current Page: {currentPage}</p>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ChooseYourSecialist;
