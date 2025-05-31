import { useEffect, useState } from "react";

const Counter = ({ end, isVisible, duration = 4000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    setCount(0); // Reset on re-visibility

    const cleanEnd = parseInt(end.replace(/,/g, ""));
    const incrementTime = Math.floor(duration / cleanEnd);

    const timer = setInterval(() => {
      start += 1;
      setCount((prev) => {
        if (prev >= cleanEnd) {
          clearInterval(timer);
          return cleanEnd;
        }
        return start;
      });
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return <>{formatNumber(count)}</>;
};

export default Counter;
