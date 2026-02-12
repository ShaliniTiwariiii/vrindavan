'use client';

import { useState } from 'react';
import { SearchFilters } from '@/types/property';

export default function SearchBar() {
  const [filters, setFilters] = useState<SearchFilters>({
    propertyType: '',
    location: '',
    budget: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search filters:', filters);
    // Implement search functionality
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Property Type */}
        <div className="space-y-2">
          <label htmlFor="property-type" className="block text-sm font-semibold text-gray-700">
            Property Type
          </label>
          <select
            id="property-type"
            value={filters.propertyType}
            onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all text-gray-900"
          >
            <option value="">All Types</option>
            <option value="residential">Residential</option>
            <option value="villa">Villa</option>
            <option value="plot">Plot</option>
            <option value="apartment">Apartment</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label htmlFor="location" className="block text-sm font-semibold text-gray-700">
            Location
          </label>
          <select
            id="location"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all text-gray-900"
          >
            <option value="">All Locations</option>
            <option value="chatikara">Chatikara</option>
            <option value="sunrakh">Sunrakh</option>
            <option value="banke-bihari">Near Banke Bihari Temple</option>
            <option value="prem-mandir">Near Prem Mandir</option>
            <option value="iskcon">Near ISKCON</option>
          </select>
        </div>

        {/* Budget */}
        <div className="space-y-2">
          <label htmlFor="budget" className="block text-sm font-semibold text-gray-700">
            Budget
          </label>
          <select
            id="budget"
            value={filters.budget}
            onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all text-gray-900"
          >
            <option value="">Any Budget</option>
            <option value="30-50">₹30-50 Lakhs</option>
            <option value="50-75">₹50-75 Lakhs</option>
            <option value="75-100">₹75 Lakhs - 1 Cr</option>
            <option value="100-150">₹1-1.5 Cr</option>
            <option value="150+">₹1.5 Cr+</option>
          </select>
        </div>

        {/* Search Button - Full Width on Mobile */}
        <div className="md:col-span-3">
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-saffron text-white rounded-lg font-semibold hover:bg-saffron-dark transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
              <path
                d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Search Properties
          </button>
        </div>
      </form>
    </div>
  );
}
