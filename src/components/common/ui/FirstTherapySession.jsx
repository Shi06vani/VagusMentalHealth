import React from 'react';

const FirstTherapySession = ({ heading, subheading, steps = [] }) => {
  return (
    <div className="font-[Poppins] space-y-6">
      {/* Heading */}
      {heading && (
        <h2 className="text-[#094C9F] text-lg lg:text-xl font-semibold">
          {heading}
        </h2>
      )}

      {/* Subheading */}
      {subheading && (
        <p className="text-[#667085] text-sm lg:text-base">{subheading}</p>
      )}

      {/* Steps */}
      {steps.length > 0 && (
        <div className="space-y-5 pt-4">
          {steps.map((step, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-[#3E3E3E] font-semibold text-sm lg:text-base">
                {`${index + 1}. ${step.title}`}
              </h3>
              <p className="text-[#3E3E3E] font-normal text-sm lg:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FirstTherapySession;
