// import React from "react";

// const AOSFade = ({ children, duration = 2000, delay =100 }) => {
//   return (
//     <div
//       data-aos="fade-up"
//       data-aos-duration={duration}
//       data-aos-delay={delay}
//        data-aos-anchor-placement="top-bottom"
//     >
//       {children}
//     </div>
//   );
// };

// export default AOSFade;


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSFade = ({ children, duration = 2000, delay = 100, offset = 120 }) => {
  useEffect(() => {
    AOS.init({
      duration,
      once: false, // Allow animation to happen more than once
      offset, // Distance in px before triggering animation
      easing: "ease-in-out",
    });
    AOS.refresh(); 
  }, [duration, offset]);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration={duration}
      data-aos-delay={delay}
      data-aos-anchor-placement="top-bottom"
      data-aos-once="false"
    >
      {children}
    </div>
  );
};

export default AOSFade;
