import PropertyCard from './PropertyCard';
import propertiesData from '@/data/properties.json';

export default function FeaturedProperties() {
  const properties = propertiesData.properties;

  return (
    <section id="properties" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked premium properties near sacred sites
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-saffron to-gold mx-auto mt-6 rounded-full" />
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* <PropertyCard property={property} /> */}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-saffron text-saffron rounded-lg font-semibold hover:bg-saffron hover:text-white transition-all duration-300 hover:shadow-lg">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}
