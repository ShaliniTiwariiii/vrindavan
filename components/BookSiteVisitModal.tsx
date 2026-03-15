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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
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
      setSubmitStatus('idle'); // Reset status when opening
    };

    window.addEventListener('openSiteVisitModal', handleOpen as EventListener);
    return () => window.removeEventListener('openSiteVisitModal', handleOpen as EventListener);
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Numbers only
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Apps Script Web App URL (User needs to replace this with their deployed URL)
    const scriptUrl = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || '';

    if (!scriptUrl) {
      console.warn('Apps Script URL is not defined. Using mock submission.');
      // Fallback for demonstration if URL is not set
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      alert('Success (Mock): Thank you for your interest! (Please configure NEXT_PUBLIC_APPS_SCRIPT_URL for live integration)');
    } else {
      try {
        const response = await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors', // Important for Apps Script Web Apps
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            property: propertyName || 'General Inquiry',
          }),
        });

        // Note: With mode 'no-cors', response.ok/status won't be easily accessible
        // We assume success if no error is thrown
        setSubmitStatus('success');
      } catch (error) {
        console.error('Submission error:', error);
        setSubmitStatus('error');
      }
    }

    setIsSubmitting(false);

    if (submitStatus) {
      setTimeout(() => {
        if (submitStatus === 'success' || !scriptUrl) {
          setFormData({
            name: '',
            phone: '',
            email: '',
            date: '',
            time: '',
            message: '',
          });
          setIsOpen(false);
        }
      }, 3000);
    }
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
          {submitStatus === 'success' ? (
            <div className="py-12 text-center space-y-4 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Thank you!</h4>
              <p className="text-gray-600">Our team will contact you shortly to confirm your visit.</p>
            </div>
          ) : (
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
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all placeholder-gray-400 text-gray-800 disabled:opacity-50"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Phone */}
                <div className="sm:col-span-1">
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="Phone Number *"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all placeholder-gray-400 text-gray-800 disabled:opacity-50"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email */}
                <div className="sm:col-span-1">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email Address *"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all placeholder-gray-400 text-gray-800 disabled:opacity-50"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Date */}
                <div className="sm:col-span-1">
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all text-gray-600 disabled:opacity-50"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Time */}
                <div className="sm:col-span-1">
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all text-gray-600 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center] disabled:opacity-50"
                    disabled={isSubmitting}
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
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all placeholder-gray-400 text-gray-800 resize-none disabled:opacity-50"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {submitStatus === 'error' && (
                <p className="text-red-500 text-sm text-center">
                  Something went wrong. Please try again or contact us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 py-4 rounded-full bg-slate-950 font-medium text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 relative overflow-hidden group disabled:opacity-70 disabled:translate-y-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 transition-opacity opacity-100 group-hover:scale-105 duration-500"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Confirm Site Visit
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
