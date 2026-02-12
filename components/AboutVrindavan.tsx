export default function AboutVrindavan() {
  const features = [
    {
      icon: '🕉️',
      title: 'Spiritual Epicenter',
      description: 'Home to over 5,500 temples including the revered Banke Bihari Temple, attracting millions of devotees annually',
    },
    {
      icon: '📈',
      title: 'Growing Tourism',
      description: '15%+ annual growth in religious tourism, driving demand for hospitality and rental properties',
    },
    {
      icon: '🏗️',
      title: 'Infrastructure Development',
      description: 'Upcoming Metro connectivity, improved roads, and modern facilities enhancing property values',
    },
    {
      icon: '💰',
      title: 'High ROI Potential',
      description: 'Properties near temples showing 12-18% annual appreciation with strong rental yields',
    },
  ];

  const stats = [
    { number: '5,500+', label: 'Temples' },
    { number: '50L+', label: 'Annual Visitors' },
    { number: '15%', label: 'YoY Growth' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cream via-white to-saffron/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Why Invest in Vrindavan?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Vrindavan is not just a spiritual haven but also a rapidly growing investment destination. The sacred city offers unique opportunities for those seeking both spiritual fulfillment and financial growth.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-saffron/10 rounded-lg p-4">
                  <div className="text-2xl md:text-3xl font-bold text-saffron font-serif mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Cards */}
          <div className="relative animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-saffron to-saffron-dark text-white rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">🕉️</div>
                <h4 className="text-xl font-semibold mb-2">Sacred Heritage</h4>
                <p className="text-saffron-light/90">5000+ years of spiritual significance</p>
              </div>
              
              <div className="bg-gradient-to-br from-gold-dark to-gold text-white rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300 mt-8">
                <div className="text-5xl mb-4">🏛️</div>
                <h4 className="text-xl font-semibold mb-2">Cultural Hub</h4>
                <p className="text-gold-light/90">Year-round festivals and celebrations</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300 -mt-8 col-span-2">
                <div className="text-5xl mb-4">🌿</div>
                <h4 className="text-xl font-semibold mb-2">Peaceful Living</h4>
                <p className="text-green-200">Pollution-free, spiritual environment perfect for families</p>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-saffron/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
