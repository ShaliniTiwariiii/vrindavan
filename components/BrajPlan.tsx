'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

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

export default function BrajPlan() {
  const [textRef, textIsVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[60vh] min-h-[500px] lg:h-[80vh] lg:min-h-[600px] flex items-center justify-center overflow-hidden rounded-[2rem] shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Premium Living Room"
              fill
              className="object-cover transition-transform duration-[20s] ease-linear hover:scale-105"
              priority
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div 
            ref={textRef as any}
            className={`relative z-10 container mx-auto px-6 sm:px-12 text-center max-w-5xl transition-all duration-1000 ease-out transform ${
              textIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.3] font-medium drop-shadow-lg">
              The ₹32,000 crore Braj 2041 Plan is modernizing Vrindavan with new infrastructure, heritage revival, and sustainable tourism growth.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
