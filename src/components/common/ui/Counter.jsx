// import { useEffect, useState } from "react";

// const Counter = ({ end, isVisible, duration = 8000 }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!isVisible) return;

//     let start = 0;
//     setCount(0); // Reset on re-visibility

//     const cleanEnd = parseInt(end.replace(/,/g, ""));
//     const incrementTime = Math.floor(duration / cleanEnd);

//     const timer = setInterval(() => {
//       start += 1;
//       setCount((prev) => {
//         if (prev >= cleanEnd) {
//           clearInterval(timer);
//           return cleanEnd;
//         }
//         return start;
//       });
//     }, incrementTime);

//     return () => clearInterval(timer);
//   }, [isVisible, end, duration]);

//   const formatNumber = (num) => {
//     return num.toLocaleString();
//   };

//   return <>{formatNumber(count)}</>;
// };

// export default Counter;
import { useEffect, useState } from "react";

const Counter = ({ end, isVisible, duration = 7000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const cleanEnd = parseInt(end.replace(/,/g, ""));
    const totalSteps = 100;
    const increment = Math.ceil(cleanEnd / totalSteps);
    const intervalTime = duration / (cleanEnd / increment);

    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      setCount((prev) => {
        if (current >= cleanEnd) {
          clearInterval(timer);
          return cleanEnd;
        }
        return current;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return <>{formatNumber(count)}</>;
};

export default Counter;
