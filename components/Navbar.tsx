'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          {/* Logo Container */}
<Link href="/" className="flex items-center">
  <Image 
    src="/logoImage.png" 
    alt="Vrindavan Temple"
    // These define the original quality/ratio
    width={180} 
    height={180}
    quality={100} 
    priority
    // w-28: small on mobile (~112px)
    // md:w-40: medium on desktop (~160px)
    // h-auto: keeps the logo from stretching
    className="w-28 md:w-40 h-auto object-contain"
    sizes="(max-width: 768px) 112px, 160px"
  />
</Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#properties" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
                Properties
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
                About KDM
              </Link>
            </li>
            <li>
              {/* <a
                href="#contact"
                className="px-6 py-2.5 bg-saffron text-white rounded-lg font-medium hover:bg-saffron-dark transition-all duration-300 hover:shadow-lg"
              >
                Book Site Visit
              </a> */}
              <button className="group relative overflow-hidden rounded-full bg-slate-950 px-8 py-3 font-medium text-white transition-all">
  {/* The Dark Blue Gradient Base */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-950 to-blue-900 opacity-100 transition-all group-hover:scale-105"></div>
  
  {/* The "Shine" Overlay (Moves on hover) */}
  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full"></div>

  {/* Button Content */}
  <span className="relative z-10 flex items-center gap-2">
    Book Site Visit
    {/* <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg> */}
  </span>
  
  {/* Subtle Outer Glow */}
  <div className="absolute inset-0 rounded-full opacity-0 shadow-[0_0_20px_rgba(30,58,138,0.5)] transition-opacity group-hover:opacity-100"></div>
</button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slide-up">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-blue-900 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#properties"
                  className="block text-gray-700 hover:text-blue-900 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="block text-gray-700 hover:text-blue-900 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Vrindavan
                </Link>
              </li>
              <li>
                {/* <a
                  href="#contact"
                  className="block px-6 py-2.5 bg-saffron text-white rounded-lg font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Site Visit
                </a> */}
                  <button className="group w-full relative overflow-hidden rounded-full bg-slate-950 px-8 py-3 font-medium text-white transition-all">
  {/* The Dark Blue Gradient Base */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-950 to-blue-900 opacity-100 transition-all group-hover:scale-105"></div>
  
  {/* The "Shine" Overlay (Moves on hover) */}
  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full"></div>

  {/* Button Content */}
  <span className="relative z-10 flex justify-center items-center gap-2">
    Book Site Visit
    {/* <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg> */}
  </span>
  
  {/* Subtle Outer Glow */}
  <div className="absolute inset-0 rounded-full opacity-0 shadow-[0_0_20px_rgba(30,58,138,0.5)] transition-opacity group-hover:opacity-100"></div>
</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
