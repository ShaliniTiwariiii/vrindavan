"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
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

export default function ExperienceDifference() {
  const [headingRef, headingIsVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [textRef, textIsVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [imageRef, imageIsVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="py-20 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Content side */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center text-left">
            <h2 
              ref={headingRef as any}
              className={`text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-gray-900 leading-[1.15] mb-6 transition-all duration-1000 ease-out transform ${
                headingIsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Experience the KMD Difference
            </h2>
            
            <div
              ref={textRef as any}
              className={`transition-all duration-1000 ease-out delay-200 transform ${
                textIsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-xl lg:text-2xl font-semibold text-blue-900 mb-6 tracking-wide">
                FairPrice. EasyProcess. OwnTrust.
              </h3>
              
              <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
                We’re Vrindavan-first property advisors who turn a complex market into a clear decision. Our on-ground team benchmarks real prices, vets developers, and guides you from shortlist to handover so you buy with confidence, not guesswork.
              </p>

              <Link 
                href="#contact" 
                className="group inline-flex items-center gap-3 bg-gray-900 border border-gray-900 text-white hover:text-gray-900 hover:bg-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg"
              >
                <span>Schedule a Call</span>
                <svg 
                  className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image side */}
          <div 
            ref={imageRef as any}
            className={`w-full lg:w-1/2 order-1 lg:order-2 h-[450px] lg:h-[650px] relative rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-1000 ease-out delay-300 transform ${
              imageIsVisible ? "opacity-100 lg:translate-x-0 translate-y-0" : "opacity-0 lg:translate-x-16 translate-y-12"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent z-10 pointer-events-none"></div>
            <Image
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Premium luxury modern building"
              fill
              className="object-cover transition-transform duration-[20s] ease-linear hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
