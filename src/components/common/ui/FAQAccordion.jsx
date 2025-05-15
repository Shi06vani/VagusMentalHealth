// components/FAQAccordion.jsx
import { useState } from "react";
import { cn } from "../../../utils/cn";
import { faqs } from "../../../data/faqs";
import downArrow from "../../../assets/icons/downarrow.svg"
export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-8 font-poppins  ">
      <h2 className="text-2xl   sm:text-3xl lg:text-[32px]  xl:text-4xl   font-medium text-[#3E3E3E] sm:py-12">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="">
          <button
            onClick={() => toggle(index)}
            className="w-full  text-left bg-[#E9F3FF]  py-2.5 px-4 sm:py-3 rounded-md flex justify-between items-center hover:bg-blue-100 transition-all"
          >
            <span className="font-medium text-base   lg:text-lg text-[#3E3E3E]">{faq.question}</span>
            <span className={cn("transition-transform", openIndex === index && "rotate-180")}>
              <img src={downArrow} alt="" />
            </span>
          </button>
          {openIndex === index && (
            <div className="bg-[#E9F3FF] px-4 py-3 rounded-b-md text-[#3E3E3E] text-sm lg:text-base">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
