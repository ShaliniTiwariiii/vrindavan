import PropertyCard from './PropertyCard';
import propertiesData from '@/data/properties.json';
import Link from 'next/link';

const ArrowRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default function FeaturedProperties() {
  const properties = propertiesData.properties;

  const categories = [
    { 
      title: 'Premium Projects in Mathura & Vrindavan', 
      description: 'Discover top residential and commercial developments in prime locations.',
      href: '/properties' 
    },
    { 
      title: 'Luxury Houses & Villas in Mathura & Vrindavan', 
      description: 'Find beautifully designed homes for comfortable and spiritual living.',
      href: '/properties' 
    },
    { 
      title: 'Residential & Investment Plots in Mathura & Vrindavan', 
      description: 'Secure your future with premium plots in high-growth areas.',
      href: '/properties' 
    },
    { 
      title: 'Buy Large Land Parcels in Mathura & Vrindavan', 
      description: 'Own valuable land near NH2 and prime developing zones.',
      href: '/properties' 
    },
    { 
      title: 'Special Discounted Properties & Exclusive Offers', 
      description: 'Explore limited-time deals at the best prices.',
      href: '/properties' 
    },
  ];

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="space-y-4">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              href={category.href}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 gap-4"
            >
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-blue-800 transition-colors mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {category.description}
                </p>
              </div>
              <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-blue-50 group-hover:bg-blue-800 transition-colors self-end sm:self-auto">
                <ArrowRight className="w-6 h-6 text-blue-800 group-hover:text-white transition-colors" />
              </div>
            </Link>
          ))}
        </div>

        {/* Section Header */}
        {/* <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked premium properties near sacred sites
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-800 to-blue-500 mx-auto mt-6 rounded-full" />
        </div> */}

        {/* Properties Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div> */}

        {/* <div className="text-center mt-12">
          <Link
            href="/properties"
            className="inline-block px-8 py-3 border-2 border-blue-800 text-blue-800 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-all duration-300 hover:shadow-lg"
          >
            View All Properties
          </Link>
        </div> */}
      </div>
    </section>
  );
}
