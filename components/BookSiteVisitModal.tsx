'use client';

import { useState, useEffect } from 'react';

// Custom event dispatcher
export const openSiteVisitModal = (propertyName: string = '') => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('openSiteVisitModal', { detail: { propertyName } })
    );
  }
};

export default function BookSiteVisitModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [propertyName, setPropertyName] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    message: '',
  });

  useEffect(() => {
    const handleOpen = (e: CustomEvent<{ propertyName: string }>) => {
      setPropertyName(e.detail.propertyName);
      setIsOpen(true);
    };

    window.addEventListener('openSiteVisitModal', handleOpen as EventListener);
    return () => window.removeEventListener('openSiteVisitModal', handleOpen as EventListener);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Site Visit Form submitted:', { ...formData, propertyName });
    alert('Thank you! We will contact you soon to confirm your site visit.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      message: '',
    });
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all animate-slide-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-6 sm:p-8 text-white relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          
          <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2">
            Book Site Visit
          </h3>
          <p className="text-blue-100 text-sm sm:text-base">
            {propertyName ? `For ${propertyName}` : 'Schedule a personalized tour of our properties'}
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="sm:col-span-2">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Full Name *"
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all placeholder-gray-400 text-gray-800"
                />
              </div>

              {/* Phone */}
              <div className="sm:col-span-1">
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Phone Number *"
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all placeholder-gray-400 text-gray-800"
                />
              </div>

              {/* Email */}
              <div className="sm:col-span-1">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email Address"
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all placeholder-gray-400 text-gray-800"
                />
              </div>

              {/* Date */}
              <div className="sm:col-span-1">
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all text-gray-600"
                />
              </div>

              {/* Time */}
              <div className="sm:col-span-1">
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all text-gray-600 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center]"
                >
                  <option value="" disabled hidden>Preferred Time</option>
                  <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                  <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
                  <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                  <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Message / Additional Notes..."
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all placeholder-gray-400 text-gray-800 resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-4 rounded-full bg-slate-950 font-medium text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 transition-opacity opacity-100 group-hover:scale-105 duration-500"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Confirm Site Visit
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
