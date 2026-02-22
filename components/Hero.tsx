'use client';

import { useState } from 'react';
import SearchBar from './SearchBar';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-blue-900/10 via-blue-50 to-blue-800/10"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-800 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Sacred Symbol */}
          <div className="text-6xl md:text-7xl text-blue-800 mb-6 animate-float">
            ॐ
          </div>

          {/* Hero Title */}
          <h1 className="font-serif mb-6">
            <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-3">
              Discover Sacred Living
            </span>
            <span className="block text-xl md:text-3xl lg:text-4xl text-blue-800 font-semibold">
              Premium Properties in the Heart of Vrindavan
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience spiritual serenity while making a sound investment in one of India's most revered pilgrimage destinations
          </p>

          {/* Search Bar */}
          {/* <SearchBar /> */}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-800 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-2 bg-blue-800 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
