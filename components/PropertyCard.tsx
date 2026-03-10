import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/types/property';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price?: number) => {
    if (!price) return 'Price on Request';
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(price / 100000).toFixed(0)} Lakhs`;
  };

  const getBadgeStyles = (badge?: string) => {
    switch (badge) {
      case 'Featured':
        return 'bg-blue-900 text-white';
      case 'Premium':
        return 'bg-gold-dark text-white';
      case 'New':
        return 'bg-green-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative">
      <Link href={`/properties/${property.id}`} className="absolute inset-0 z-0"></Link>
      
      {/* Property Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {property.badge && (
          <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-sm font-semibold ${getBadgeStyles(property.badge)}`}>
            {property.badge}
          </div>
        )}
        <button
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all duration-300 group/wishlist"
          aria-label="Add to wishlist"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Property Details */}
      <div className="p-6">
        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M8 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor" />
            <path d="M8 1a5.5 5.5 0 0 0-5.5 5.5c0 3.86 5.5 8.5 5.5 8.5s5.5-4.64 5.5-8.5A5.5 5.5 0 0 0 8 1z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span>{property.location}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
          {property.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-700">
          {property.size && (
            <div className="flex items-center gap-1.5">
              <span className="text-lg">📏</span>
              <span>{property.size}</span>
            </div>
          )}
          {property.apartments && (
            <div className="flex items-center gap-1.5">
              <span className="text-lg">🚪</span>
              <span>{property.apartments}</span>
            </div>
          )}
          {property.floors && (
            <div className="flex items-center gap-1.5">
              <span className="text-lg">🏢</span>
              <span>{property.floors} Floors</span>
            </div>
          )}
          {property.towers && (
            <div className="flex items-center gap-1.5">
              <span className="text-lg">🏙️</span>
              <span>{property.towers} Towers</span>
            </div>
          )}
          {property.status && (
            <div className="flex items-center gap-1.5">
              <span className="text-lg">🏗️</span>
              <span>{property.status}</span>
            </div>
          )}
          {property.sqft && (
            <div className="flex items-center gap-1.5">
              <span className="text-lg">�🏠</span>
              <span>{property.sqft} sq.ft</span>
            </div>
          )}
          {property.bedrooms && (
            <div className="flex items-center gap-1.5">
              <span className="text-lg">🛏️</span>
              <span>{property.bedrooms} Bed</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-1.5">
              <span className="text-lg">🚿</span>
              <span>{property.bathrooms} Bath</span>
            </div>
          )}
        </div>

        {/* Distance from Temple */}
        {property.distanceFromTemple && (
          <div className="flex items-center gap-2 text-blue-900 text-sm mb-4 font-medium">
            <svg className="w-4 h-4" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M7 3.5v3.5l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>{property.distanceFromTemple} km from Banke Bihari Temple</span>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-xl font-medium text-gray-900">
            {property?.priceunit }
          </div>
          <Link
            href={`/properties/${property.id}`}
            className="relative z-10 px-6 py-2.5 bg-gradient-to-r from-blue-900 via-indigo-950 to-blue-900 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105 inline-block text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
