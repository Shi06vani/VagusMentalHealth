// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const ScrollFadeUp = ({ children, delay = 0, duration = 0.6, yOffset = 40 }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: yOffset }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration, delay, ease: "easeOut" }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default ScrollFadeUp;







// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const ScrollFadeUp = ({ children, delay = 0, duration = 0.8, yOffset = 50 }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.15,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: yOffset, scale: 0.95 }}
//       animate={
//         inView
//           ? { opacity: 1, y: 0, scale: 1 }
//           : { opacity: 0, y: yOffset, scale: 0.95 }
//       }
//       transition={{
//         delay,
//         duration,
//         ease: [0.25, 0.8, 0.25, 1], // custom cubic-bezier for smoothness
//         type: "spring",
//         stiffness: 50,
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default ScrollFadeUp;



import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollFadeUp = ({ children, delay = 0, duration = 1, yOffset = 30 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
        stiffness: 50, // Smooth easeOutBack
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeUp;
