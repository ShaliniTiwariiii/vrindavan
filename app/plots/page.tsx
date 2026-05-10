import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plots in Vrindavan | Residential & Investment',
  description: 'Explore premium residential and commercial plots in Mathura and Vrindavan. Secure your future with high-growth real estate investments.',
};

// Dummy data structure for plots
const dummyPlots = [
  {
    id: "plot-1",
    title: "435 Gaj Studio for sale At 30 lakhs  in nandan retreat Omaxe",
    location: "Vrindavan Phase 1",
    description: "Best for pg location Krishna Heights colony Demand 32 k per Gaj only",
    size: "500 sq. yards",
    price: "",
    status: "Available",
    distanceFromTemple: "1.2",
    images: [
   "/images/room1.jpeg",
      "", // Add another image URL here
    ],
    videos: [
      "", // Add YouTube embed URL here
    ],
    features: ["Corner Plot", "East Facing", "Gated Society", "Park Facing"],
  },
  {
    id: "plot-2",
    title: "21.5 front Depth 45 Plot area 100 gaj + 10 gaj extra Room - 3 big rooms 1 small 2 washroom",
    location: "Near KrishnaHeights Colony",
    description: "21.5 front Depth 45 Plot area 100 gaj + 10 gaj extra Room - 3 big rooms 1 small 2 washroom",
    size: "110 sq yards",
    price: "",
    status: "Available",
    distanceFromTemple: "4.5",
    images: [
      "/images/room2.jpeg", // Add image URL here
    ],
    videos: [
      "", // Add YouTube embed URL here
    ],
    features: ["Commercial Approved", "Highway Facing", "High ROI", "Clear Title"],
  }
];

export default function PlotsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Residential & Investment Plots
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Secure your future with premium plots in high-growth areas of Mathura & Vrindavan
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-800 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Plots List */}
        <div className="flex flex-col gap-12">
          {dummyPlots.map((plot, index) => (
            <div 
              key={plot.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col lg:flex-row animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Media Section (Images & Videos) */}
              <div className="w-full lg:w-2/5 flex flex-col bg-gray-100 border-b lg:border-b-0 lg:border-r border-gray-200">
                
                {/* Main Media (Video or First Image) */}
                <div className="relative aspect-video lg:aspect-square bg-gray-200 flex items-center justify-center overflow-hidden">
                  {/* Replace this block with actual video iframe or Next Image when URLs are added */}
                  {plot.videos[0] ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={plot.videos[0]}
                      title={`${plot.title} Video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0"
                    ></iframe>
                  ) : plot.images[0] ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                      src={plot.images[0]} 
                      alt={plot.title} 
                      className="object-cover w-full h-full absolute inset-0"
                    />
                  ) : (
                    <div className="text-gray-400 flex flex-col items-center">
                      <svg className="w-12 h-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Media Placeholder</span>
                    </div>
                  )}
                </div>
                
                {/* Thumbnails (Other images) */}
                {plot.images.length > 1 && (
                  <div className="flex gap-2 p-4 overflow-x-auto bg-gray-50 border-t border-gray-200">
                    {plot.images.map((img, i) => (
                      <div key={i} className="w-20 h-20 flex-shrink-0 bg-gray-200 rounded-md overflow-hidden flex items-center justify-center relative">
                        {img ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={img} alt={`Thumbnail ${i}`} className="object-cover w-full h-full absolute inset-0" />
                        ) : (
                          <span className="text-xs text-gray-400">Image {i+1}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Details Section */}
              <div className="w-full lg:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                          <path d="M8 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor" />
                          <path d="M8 1a5.5 5.5 0 0 0-5.5 5.5c0 3.86 5.5 8.5 5.5 8.5s5.5-4.64 5.5-8.5A5.5 5.5 0 0 0 8 1z" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        <span>{plot.location}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-2">
                        {plot.title}
                      </h2>
                    </div>
                    <div className="bg-blue-50 text-blue-900 px-4 py-2 rounded-lg font-semibold whitespace-nowrap">
                      {plot.price}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {plot.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <div className="text-sm text-gray-500 mb-1">Plot Size</div>
                      <div className="font-semibold text-gray-900">{plot.size}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <div className="text-sm text-gray-500 mb-1">Status</div>
                      <div className="font-semibold text-green-600">{plot.status}</div>
                    </div>
                    {plot.distanceFromTemple && (
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 md:col-span-2">
                        <div className="text-sm text-gray-500 mb-1">From Banke Bihari Temple</div>
                        <div className="font-semibold text-gray-900">{plot.distanceFromTemple} km</div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Key Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {plot.features.map((feature, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* <div className="flex gap-4 pt-6 border-t border-gray-100">
                  <button className="flex-1 bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors shadow-md shadow-blue-900/20">
                    Contact Agent
                  </button>
                  <button className="flex-1 bg-white border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                    Download Brochure
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
