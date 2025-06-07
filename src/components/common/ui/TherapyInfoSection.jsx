import React from "react";
import ScrollFadeUp from "../../animations/ScrollFadeUp";

const TherapyInfoSection = ({
  introParagraphs = [],
  heading,
  subheading,
  features = [],
}) => {
  return (
    <ScrollFadeUp>
       <div className="space-y-6">
      {/* Intro Paragraphs */}
      <div className="space-y-2.5">
        {introParagraphs.map((para, index) => (
          <p
            key={index}
            className="text-[#3E3E3E] text-sm lg:text-base leading-[30px]"
          >
            {para}
          </p>
        ))}
      </div>

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

      {/* Bullet Points */}
      {features.length > 0 && (
        <div className="space-y-5 pt-4">
          {features.map((feature, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-[#3E3E3E] font-semibold text-sm lg:text-base">
                {feature.title}
              </h3>
              <p className="text-[#3E3E3E] text-sm lg:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
    </ScrollFadeUp>
   
  );
};

export default TherapyInfoSection;
