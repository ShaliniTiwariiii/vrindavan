'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen lg:h-screen pt-20 bg-white overflow-hidden flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center lg:flex-row lg:items-center">
        
        {/* Mobile: Image on top, Text below */}
        {/* Desktop: Image on right, Text on left */}
        <div className="flex flex-col lg:flex-row items-center w-full gap-12 lg:gap-16">
          
          {/* Left Side - Content Area */}
          <div className="w-full lg:w-[45%] order-2 lg:order-1 z-10 flex flex-col justify-center pt-8 lg:pt-0">
            <h1 
              className={`text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-serif font-bold text-gray-900 leading-[1.1] mb-6 transition-all duration-1000 ease-out transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Your Partner in Real Estate
            </h1>
            
            <p 
              className={`text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 font-light tracking-wide transition-all duration-1000 ease-out delay-300 transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Residential. Commercial. Lease. Land.
            </p>
            
            <div 
              className={`transition-all duration-1000 ease-out delay-500 transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Link 
                href="/#properties" 
                className="group relative inline-flex items-center gap-3 bg-blue-950 text-white px-8 py-4 rounded-full text-lg font-medium overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-blue-800 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0"></div>
                <span className="relative z-10">See All Projects</span>
                <svg 
                  className="relative z-10 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            {/* Quick Stats or extra details could go here, but keep it minimal as requested */}
            <div 
               className={`mt-16 flex items-center gap-8 transition-all duration-1000 ease-out delay-700 transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex flex-col">
                <span className="text-3xl  font-bold text-gray-900 border-b-2 border-blue-900 pb-1 mb-2 inline-block">100+</span>
                <span className="text-sm text-gray-500 font-medium">Premium properties</span>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
              {/* <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900 border-b-2 border-blue-900 pb-1 mb-2 inline-block">15+</span>
                <span className="text-sm text-gray-500 font-medium">Years excellence</span>
              </div> */}
            </div>
          </div>

          {/* Right Side - Visual Area */}
          <div 
            className={`w-full lg:w-[55%] order-1 lg:order-2 h-[50vh] min-h-[400px] lg:h-[80vh] lg:min-h-[650px] relative rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-1000 ease-out delay-200 transform ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/30 via-transparent to-transparent z-10"></div>
            
          
            <Image
                          src="/images/heroImage.png"
                          alt="Premium luxury residential apartment"
                          fill
                          className="object-cover transition-transform duration-[20s] ease-linear hover:scale-110 "
                           sizes="(max-width: 1024px) 100vw, 60vw"
                        />
          </div>
        </div>
      </div>
    </section>
  );
}
