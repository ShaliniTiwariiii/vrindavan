"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Custom hook for intersection observer to trigger animations
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isIntersecting] as const;
}

// Counter Component
const AnimatedCounter = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const [ref, isIntersecting] = useIntersectionObserver();

  useEffect(() => {
    if (!isIntersecting) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easing * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isIntersecting, end, duration]);

  // Format number with commas
  const formattedCount = count.toLocaleString();

  return <span ref={ref as any}>{formattedCount}</span>;
};

export default function AboutUs() {
  const [contentRef, contentIsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [imageRef, imageIsVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [statsRef, statsIsVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  // Parallax effect on image
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 120, suffix: "+", label: "Projects Delivered" },
    { value: 10000, suffix: "+", label: "Happy Customers" },
    { value: 8, suffix: "", label: "Cities Served" },
  ];

  return (
    <section id="about" className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div 
            ref={contentRef as any}
            className={`transition-all duration-1000 transform ${
              contentIsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-blue-900/40"></span>
              <span className="text-blue-900 font-semibold text-sm tracking-[0.2em] uppercase">
                About Our Company
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 leading-[1.15]">
              Building Premium Spaces for the Modern World
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-12 leading-relaxed font-light">
              We are a trusted real estate developer focused on creating premium residential and commercial spaces. Our projects are designed with modern architecture, high construction quality, and long-term value for homeowners and investors.
            </p>

            {/* Stats */}
            <div 
              ref={statsRef as any}
              className="grid grid-cols-2 gap-6 sm:gap-8"
            >
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`bg-white p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 ease-out border border-gray-100/50 group ${
                    statsIsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="text-4xl sm:text-5xl font-bold text-blue-950 font-serif mb-3 group-hover:scale-105 transition-transform duration-500 origin-left">
                    <AnimatedCounter end={stat.value} />
                    {stat.suffix && <span>{stat.suffix}</span>}
                  </div>
                  <div className="text-sm font-medium text-gray-500 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div 
            ref={imageRef as any}
            className={`relative h-[650px] lg:h-[800px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-1000 ease-out ${
              imageIsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Dark gradient overlay for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent z-10"></div>
            
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Premium luxury building"
              fill
              className="object-cover transition-transform duration-[20s] ease-linear hover:scale-110"
              style={{
                transform: `translateY(${(scrollY - 1000) * 0.15}px) scale(1.15)`,
              }}
            />
            
            <div className="absolute bottom-12 left-8 right-8 sm:left-12 sm:right-12 z-20">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl text-white transform hover:-translate-y-2 transition-transform duration-500">
                <p className="font-serif text-3xl mb-3 font-medium tracking-wide">Exceptional Quality</p>
                <p className="text-white/80 font-light text-lg leading-relaxed">Delivering excellence in every square foot with uncompromising attention to detail.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
