"use client"
import React, { useState, useEffect, useRef } from 'react';

interface StatCard {
  value: string;
  label: string;
  numericValue: number; // Added for animation
}

const stats: StatCard[] = [
  { value: "150+", label: "Bookings Per Month", numericValue: 150 },
  { value: "24/7", label: "Daily Service", numericValue: 24 },
  { value: "91%", label: "Positive Feedback", numericValue: 91 },
  { value: "5+", label: "Years of Experience", numericValue: 5 }
];

// Custom hook for counting animation
const useCountUp = (end: number, duration: number = 2500, start: number = 0) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      if (progress < 1) {
        const nextCount = Math.floor(progress * (end - start) + start);
        if (nextCount !== countRef.current) {
          countRef.current = nextCount;
          setCount(nextCount);
        }
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, start, isAnimating]);

  return [count, setIsAnimating] as const;
};

// Intersection Observer hook
const useIntersectionObserver = (callback: () => void) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const current = elementRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [callback]);

  return elementRef;
};

const StatBox = ({ value, label, numericValue }: StatCard) => {
  const [count, setIsAnimating] = useCountUp(numericValue);
  const ref = useIntersectionObserver(() => setIsAnimating(true));

  const displayValue = value.includes('+') ? `${count}+` : 
                      value.includes('/') ? `${count}/7` :
                      value.includes('%') ? `${count}%` : 
                      count.toString();

  return (
    <div 
      ref={ref}
      className="bg-white p-4 lg:p-6 flex flex-col items-center justify-center shadow-sm rounded-lg"
    >
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">{displayValue}</p>
      <p className="text-sm sm:text-base text-gray-600 font-normal text-center">{label}</p>
    </div>
  );
};

export const About = () => {
  return (
    <section id="about" className="bg-gray-50 pt-16 sm:pt-20 pb-28 scroll-mt-16">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col items-center px-6">
        <div className="mb-8 sm:mb-12">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black pb-4 text-center">About GAPSTAYS</div>
          <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-base sm:text-lg text-black">
            <div className="mb-2 text-center md:text-left">
              At <span className="font-semibold">GAPSTAYS</span>, we redefine hospitality by curating spaces that cater to your individuality, whether you crave solitude for deep focus or a vibrant atmosphere to spark new connections in your life. Every stay is a seamless blend of <span className="font-semibold">sophistication and warmth</span>, ensuring that wherever your journey takes you, you always feel at home.<br/>
            </div>
            <div className="text-center md:text-left">
              Our <span className="font-semibold">fully furnished, thoughtfully designed spaces</span> go beyond the ordinary, providing a sanctuary where you can <span className="font-semibold">work, unwind, and explore without compromise.</span> Elevate your travel experience with a place that isn&apos;t just somewhere to stay, it&apos;s somewhere to belong.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 bg-gray-100 p-4 sm:p-8 rounded-lg shadow-lg">
            {stats.map((stat, index) => (
              <StatBox key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};