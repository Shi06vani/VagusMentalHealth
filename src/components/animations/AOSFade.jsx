import React from "react";

const AOSFade = ({ children, direction = "right", duration = 2000, delay = 0 }) => {
  return (
    <div
      data-aos={`fade-${direction}`}
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {children}
    </div>
  );
};

export default AOSFade;
