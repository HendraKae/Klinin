import { useEffect, useRef, useState } from "react";

export default function AnimatedNumber({ target, duration = 1000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const hasAnimatedRef = useRef(false); // Ganti dari useState ke useRef

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          animateNumber();
          obs.unobserve(entry.target); // stop observing setelah animasi mulai
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const animateNumber = () => {
    let start = 0;
    const increment = target / (duration / 12);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
  };

  return <span ref={ref}>{count.toLocaleString()}</span>;
}
