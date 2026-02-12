'use client';

import { useState } from 'react';
import { SiteVisitForm } from '@/types/property';

export default function BookSiteVisit() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<SiteVisitForm>({
    name: '',
    phone: '',
    email: '',
    property: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon to confirm your site visit.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      property: '',
      date: '',
      message: '',
    });
    setIsOpen(false);
  };

  return (
    <>
      {/* Sticky Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-saffron text-white px-4 py-6 rounded-l-xl shadow-2xl hover:bg-saffron-dark transition-all duration-300 hover:px-6 group"
        style={{ writingMode: 'vertical-rl' }}
      >
        <span className="flex items-center gap-2 font-semibold text-lg">
          <svg className="w-5 h-5 rotate-90 group-hover:scale-110 transition-transform" viewBox="0 0 20 20" fill="none">
            <path d="M3 7h14M3 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Book Site Visit
        </span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Form Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="contact"
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-900">Book a Site Visit</h3>
              <p className="text-sm text-gray-600 mt-1">Schedule a personalized tour</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="visitor-name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="visitor-name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="visitor-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="visitor-phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="visitor-email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="visitor-email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="visitor-property" className="block text-sm font-semibold text-gray-700 mb-2">
                Interested In
              </label>
              <select
                id="visitor-property"
                value={formData.property}
                onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
              >
                <option value="">Select Property Type</option>
                <option value="villa">Villa</option>
                <option value="apartment">Apartment</option>
                <option value="plot">Plot</option>
                <option value="any">Any Property</option>
              </select>
            </div>

            <div>
              <label htmlFor="visitor-date" className="block text-sm font-semibold text-gray-700 mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                id="visitor-date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="visitor-message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="visitor-message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Any specific requirements?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-saffron text-white rounded-lg font-semibold hover:bg-saffron-dark transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path
                  d="M18 2L9 11M18 2l-6 16-3-7-7-3 16-6z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Schedule Visit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
