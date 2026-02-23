'use client';

import { useState } from 'react';

const WHATSAPP_NUMBER = '919068464048';
const DEFAULT_MESSAGE = 'Hello KMD , are you available ?';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  const handleSend = () => {
    const encoded = encodeURIComponent(message);
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
      navigator.userAgent
    );
    const url = isMobile
      ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
      : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encoded}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#1ebe5d] transition-all duration-300 hover:scale-110 group"
      >
        {/* Pulse ring */}
        <span className="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-60 animate-ping" />
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative w-7 h-7 text-white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </button>

      {/* Popup Chat Bubble */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsOpen(false)}
          />

          {/* Chat Card */}
          <div className="fixed bottom-24 left-6 z-50 w-80 rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[#075E54]">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold text-lg">
                  K
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#075E54] rounded-full" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">KMD</p>
                <p className="text-green-300 text-xs">Typically replies instantly</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="ml-auto text-white/70 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Chat Body */}
            <div className="bg-[#ECE5DD] px-4 py-4">
              {/* Preview bubble */}
              <div className="bg-white rounded-xl rounded-tl-none px-4 py-2 shadow-sm mb-4 max-w-[90%]">
                <p className="text-gray-700 text-sm leading-relaxed">
                  👋 Hi there! How can we help you today?
                </p>
                <p className="text-gray-400 text-[10px] text-right mt-1">KMD</p>
              </div>

              {/* Message input */}
              <div className="bg-white rounded-xl p-3 shadow-sm">
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-sm text-gray-800 resize-none outline-none placeholder-gray-400 bg-transparent"
                  placeholder="Type a message..."
                />
                <div className="flex items-center justify-between mt-2">
                  <button
                    onClick={() => setMessage(DEFAULT_MESSAGE)}
                    className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    Reset
                  </button>
                  <button
                    onClick={handleSend}
                    disabled={!message.trim()}
                    className="flex items-center gap-1.5 px-4 py-1.5 bg-[#25D366] hover:bg-[#1ebe5d] disabled:opacity-50 text-white text-sm font-semibold rounded-full transition-all"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                      <path d="M18 2L9 11M18 2l-6 16-3-7-7-3 16-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Send
                  </button>
                </div>
              </div>
            </div>

            {/* Footer note */}
            <div className="bg-[#ECE5DD] pb-3 text-center">
              <p className="text-[10px] text-gray-500">
                Powered by{' '}
                <span className="font-semibold text-[#25D366]">WhatsApp</span>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
