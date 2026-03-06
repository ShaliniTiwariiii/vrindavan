import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import propertiesData from '@/data/properties.json';
import { Property } from '@/types/property';

// We need to match the type of params which in Next.js 15+ is a Promise
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailsPage({ params }: PageProps) {
  // Await the params to get the id
  const { id } = await params;
  
  const property = propertiesData.properties.find(p => p.id.toString() === id) as Property;

  if (!property) {
    notFound();
  }

  const formatPrice = (price?: number) => {
    if (!price) return 'Price on Request';
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(price / 100000).toFixed(0)} Lakhs`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-screen min-h-[600px] flex flex-col">
        {/* Desktop Image */}
        <Image
          src={property.image}
          alt={property.title}
          fill
          className={`object-cover ${property.mobileImage ? 'hidden md:block' : ''}`}
          priority
        />
        {/* Mobile Image */}
        {property.mobileImage && (
          <Image
            src={property.mobileImage}
            alt={property.title}
            fill
            className="object-cover md:hidden"
            priority
          />
        )}
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        
        {/* Back Link positioned at top */}
        <div className="relative z-20 container mx-auto px-4 pt-28">
          <Link 
            href="/#properties" 
            className="inline-flex items-center text-white/80 hover:text-white mb-8 font-medium transition-colors backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Properties
          </Link>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 w-full flex-1 flex flex-col justify-end pb-16">
          <div className="flex flex-col items-center justify-center text-center w-full mb-16 md:mb-24">
            {property.year && (
              <div className="text-xl md:text-2xl font-medium tracking-widest text-white/90 mb-4">{property.year}</div>
            )}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight max-w-5xl">
              {property.title}
            </h1>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center text-white">
            {property.year && (
              <div className="flex flex-col items-center justify-center">
                <div className="text-xs md:text-sm font-medium tracking-widest uppercase mb-2 text-white/80">Year</div>
                <div className="text-xl md:text-2xl font-semibold">{property.year}</div>
              </div>
            )}
            {property.location && (
              <div className="flex flex-col items-center justify-center">
                <div className="text-xs md:text-sm font-medium tracking-widest uppercase mb-2 text-white/80">Location</div>
                <div className="text-lg md:text-xl font-medium">{property.location}</div>
              </div>
            )}
            {property.size && (
              <div className="flex flex-col items-center justify-center">
                <div className="text-xs md:text-sm font-medium tracking-widest uppercase mb-2 text-white/80">Size</div>
                <div className="text-xl md:text-2xl font-semibold">{property.size}</div>
              </div>
            )}
            {property.apartments && (
              <div className="flex flex-col items-center justify-center">
                <div className="text-xs md:text-sm font-medium tracking-widest uppercase mb-2 text-white/80">Type</div>
                <div className="text-base md:text-lg font-medium">{property.apartments}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About the Project
                </h3>
                <div className="prose max-w-none prose-lg text-gray-600 prose-p:leading-relaxed">
                  {property.description.split('\n').filter(p => p.trim() !== '').map((paragraph, idx) => (
                    <p key={idx} className="mb-6">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>

              {/* Sidebar Details Card */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-md sticky top-24">
                  <div className="space-y-6">
                    {/* Status */}
                    {property.status && (
                      <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                        <span className="text-gray-500 font-medium">Status</span>
                        <span className="text-gray-900 font-medium text-right">{property.status}</span>
                      </div>
                    )}
                    
                    {/* Location */}
                    {property.location && (
                      <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                        <span className="text-gray-500 font-medium">Location</span>
                        <span className="text-gray-900 font-medium text-right">{property.location}</span>
                      </div>
                    )}
                    
                    {/* Size */}
                    {property.size && (
                      <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                        <span className="text-gray-500 font-medium">Size</span>
                        <span className="text-gray-900 font-medium text-right">{property.size}</span>
                      </div>
                    )}

                    {/* Floors */}
                    {property.floors && (
                      <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                        <span className="text-gray-500 font-medium">Floors</span>
                        <span className="text-gray-900 font-medium text-right">{property.floors}</span>
                      </div>
                    )}

                    {/* Towers */}
                    {property.towers && (
                      <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                        <span className="text-gray-500 font-medium">No. of Towers</span>
                        <span className="text-gray-900 font-medium text-right">{property.towers}</span>
                      </div>
                    )}
                    
                    {/* Apartments */}
                    {property.apartments && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 font-medium">Apartments</span>
                        <span className="text-gray-900 font-medium text-right w-1/2">{property.apartments}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

           

            {/* Top Facilities Section */}
            {property.facilities && property.facilities.length > 0 && (
              <div className="mt-20 border-t border-gray-100 pt-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif text-gray-900 tracking-tight">Top Facilities</h2>
                </div>
                
                <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 lg:gap-6 w-full">
                  {property.facilities.map((facility, idx) => (
                    <div 
                      key={idx} 
                      className="flex flex-col items-center justify-center p-6 bg-white border border-gray-100 shadow-sm transition-all duration-300 rounded-sm min-w-[140px] aspect-square group hover:border-b-2 hover:border-black hover:shadow-md hover:-translate-y-2 cursor-pointer"
                    >
                      <div 
                        className="mb-4 text-gray-800 group-hover:text-gray-900 transition-colors"
                        dangerouslySetInnerHTML={{ __html: `<svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">${facility.iconSvg}</svg>` }}
                      />
                      <div className="text-sm font-medium text-center text-gray-800 group-hover:text-gray-900 transition-colors" dangerouslySetInnerHTML={{ __html: facility.title.replace(' ', '<br/>') }} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Lifestyle Features Section */}
            {property.lifestyleFeatures && property.lifestyleFeatures.length > 0 && (
              <div className="mt-20 border-t border-gray-100 pt-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-5xl font-serif font-light text-gray-900 tracking-tight">Lifestyle Features on Podium</h2>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-1 justify-center">
                  {property.lifestyleFeatures.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="group relative h-[350px] md:h-[450px] w-full bg-gray-100 overflow-hidden shadow-sm"
                    >
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h4 
                          className="text-white text-lg md:text-xl font-light tracking-wide leading-tight" 
                          dangerouslySetInnerHTML={{ __html: feature.title.replace(' & ', ' &<br/>') }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

 {/* Master Plan Section */}
            {property.masterPlan && (
              <div className="mt-20 pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-serif font-light text-gray-900 mb-8 tracking-tight">Master Plan</h2>
                    <ul className="space-y-6 ml-4">
                      {property.masterPlan.features.map((feature, idx) => (
                        <li key={idx} className="flex text-gray-800 text-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2.5 mr-4 flex-shrink-0"></span>
                          <span className="font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative w-full rounded-2xl overflow-hidden bg-white">
                    <img 
                      src={property.masterPlan.image} 
                      alt="Master Plan" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            )}
            {/* Floor Plans Section */}
            {property.floorPlans && property.floorPlans.length > 0 && (
              <div className="mt-20 border-t border-gray-100 pt-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 tracking-tight">Floor Plans</h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 justify-center">
                  {property.floorPlans.map((plan, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white rounded-lg p-3 md:p-4 shadow-[0_4px_25px_rgb(0,0,0,0.06)] flex flex-col transition-transform hover:-translate-y-1"
                    >
                      <div className="relative w-full h-[140px] md:h-[160px] mb-4 bg-purple-50/30 rounded-md overflow-hidden p-2 flex items-center justify-center border border-purple-100/50">
                        {/* Fallback image using standard img tag so it doesn't break if missing immediately */}
                        <div className="absolute inset-0 flex items-center justify-center">
                           <img 
                             src={plan.image || "/images/placeholder-floorplan.png"} 
                             alt={plan.title} 
                             className="max-w-[90%] max-h-[90%] object-contain mix-blend-multiply opacity-80" 
                           />
                        </div>
                      </div>
                      <div className="text-center mt-auto">
                        <h4 className="text-gray-800 text-xs md:text-sm font-medium mb-1">{plan.title}</h4>
                        <div className="text-[10px] md:text-xs text-gray-600">
                          {plan.size} | <span className="font-semibold text-gray-900">{plan.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Nearest Destination Section */}
            {property.nearestDestination && (
              <div className="mt-20 border-t border-gray-100 pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1 relative w-full rounded-2xl overflow-hidden bg-white">
                    <img 
                      src={property.nearestDestination.image} 
                      alt="Nearest Destination Map" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <h2 className="text-3xl md:text-5xl font-serif font-light text-gray-900 mb-8 tracking-tight">Nearest Destination</h2>
                    <ul className="space-y-6 ml-4">
                      {property.nearestDestination.locations.map((location, idx) => (
                        <li key={idx} className="flex text-gray-800 text-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2.5 mr-4 flex-shrink-0"></span>
                          <span className="font-light">{location}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
      </div>
    </div>
  );
}
