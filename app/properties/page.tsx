import PropertyCard from '@/components/PropertyCard';
import propertiesData from '@/data/properties.json';
import Link from 'next/link';
import { Property } from '@/types/property';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flats & Properties in Vrindavan',
  description: 'Browse our extensive listing of exclusive flats, villas, and premium properties in Vrindavan. Top real estate investment opportunities with KMD Real Estate.',
  alternates: {
    canonical: 'https://kmdrealestatevrindavan.com/properties',
  },
};

export default function PropertiesPage() {
  const properties = propertiesData.properties as unknown as Property[];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16 animate-slide-up">
          {/* <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-900 font-medium hover:text-blue-700 transition-colors mb-6"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link> */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            All Properties
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Explore our complete portfolio of premium real estate offerings
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-800 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
