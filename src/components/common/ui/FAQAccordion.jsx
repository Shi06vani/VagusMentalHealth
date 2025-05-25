import { useState } from "react";
import cn  from "../../../utils/cn"; // Ensure you have this utility or handle class names manually

export default function FAQAccordion({
  data = [],
  title = "Frequently Asked Questions",
  icon,
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-8 font-poppins">
      <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-3xl font-medium text-[#3E3E3E] lg:py-6">
        {title}
      </h2>
      {data.map((faq, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="w-full text-left bg-[#E9F3FF] py-2.5 px-4 sm:py-3 rounded-md flex justify-between items-center hover:bg-blue-100 transition-all"
          >
            <span className="font-medium text-base lg:text-lg text-[#3E3E3E]">
              {faq.question}
            </span>
            <span
              className={cn(
                "transition-transform px-3 ",
                openIndex === index && "rotate-180"
              )}
            >
              <img src={icon} alt="Toggle" className="w-full" />
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
