import PropertyCard from './PropertyCard';
import propertiesData from '@/data/properties.json';
import Link from 'next/link';
import Image from 'next/image';

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
      href: '/properties',
      image: '/images/shri-vivek-high-rise.jpg'
    },
    { 
      title: 'Luxury Houses & Villas in Mathura & Vrindavan', 
      description: 'Find beautifully designed homes for comfortable and spiritual living.',
      href: '/properties',
      image: '/images/shri-radha.png'
    },
    { 
      title: 'Residential & Investment Plots in Mathura & Vrindavan', 
      description: 'Secure your future with premium plots in high-growth areas.',
      href: '/properties',
      image: '/images/100acre.png'
    },
    { 
      title: 'Buy Large Land Parcels in Mathura & Vrindavan', 
      description: 'Own valuable land near NH2 and prime developing zones.',
      href: '/properties',
      image: '/images/omax.jpg'
    },
    { 
      title: 'Special Discounted Properties & Exclusive Offers', 
      description: 'Explore limited-time deals at the best prices.',
      href: '/properties',
      image: '/images/brajheritagelifestyle1.jpg'
    },
  ];

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect property across our curated categories in the sacred land of Vrindavan
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-800 to-blue-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {categories.map((category, index) => (
  <Link 
    key={index} 
    href={category.href}
    className={`group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 
      ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''} 
      ${index === 3 ? 'md:col-span-2 lg:col-span-2' : ''} 
      ${index === 4 ? 'md:col-span-2 lg:col-span-3' : ''}
    `}
  >
    {/* Background Layer: Image or Video */}
    <div className="absolute inset-0">
      {category.title === "Premium Projects in Mathura & Vrindavan" ? (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
         
            <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/YE23X9IKIHA?autoplay=1&mute=1&loop=1&playlist=YE23X9IKIHA&controls=1&rel=0"
    title="Premium Projects in Mathura & Vrindavan"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="absolute inset-0"
  ></iframe>
        </div>
      ) : (
        <Image 
          src={category.image}
          alt={category.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
      )}
      
      {/* Gradient Overlay (Keeps text readable over the video) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-blue-900/90 group-hover:via-blue-900/40 transition-colors duration-500" />
    </div>

    {/* Content stays the same */}
    <div className="relative h-full min-h-[280px] md:min-h-[320px] p-6 md:p-8 flex flex-col justify-end">
      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-3 leading-tight drop-shadow-md">
          {category.title}
        </h3>
        <p className="text-gray-200 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2 drop-shadow-md">
          {category.description}
        </p>
      </div>
      
      <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 border border-white/30">
        <ArrowRight className="w-6 h-6 text-white" />
      </div>
    </div>
  </Link>
))}
        </div>
      </div>
    </section>
  );
}
