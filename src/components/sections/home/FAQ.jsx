import React from "react";
import FAQAccordion from "../../../components/common/ui/FAQAccordion";
import { faqs } from "../../../data/faqs";
import downArrow from "../../../assets/icons/downarrow.svg"

const FAQ = () => {
  return (
    <div className="container mx-auto">
      <div className="sm:mx-20">
        <FAQAccordion data={faqs} icon={downArrow} />
      </div>
    </div>
  );
};

export default FAQ;
