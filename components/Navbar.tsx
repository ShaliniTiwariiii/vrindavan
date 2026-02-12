'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-3xl md:text-4xl text-saffron">ॐ</span>
            <span className="text-xl md:text-2xl font-serif font-bold text-gray-900">
              Vrindavan <span className="text-saffron">Properties</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <a href="#home" className="text-gray-700 hover:text-saffron transition-colors font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#properties" className="text-gray-700 hover:text-saffron transition-colors font-medium">
                Properties
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-saffron transition-colors font-medium">
                About Vrindavan
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="px-6 py-2.5 bg-saffron text-white rounded-lg font-medium hover:bg-saffron-dark transition-all duration-300 hover:shadow-lg"
              >
                Book Site Visit
              </a>
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
                <a
                  href="#home"
                  className="block text-gray-700 hover:text-saffron transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#properties"
                  className="block text-gray-700 hover:text-saffron transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block text-gray-700 hover:text-saffron transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Vrindavan
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block px-6 py-2.5 bg-saffron text-white rounded-lg font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Site Visit
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
