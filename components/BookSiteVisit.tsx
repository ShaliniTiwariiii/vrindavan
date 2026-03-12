'use client';

import { openSiteVisitModal } from './BookSiteVisitModal';

export default function BookSiteVisit() {
  return (
    <button
      onClick={() => openSiteVisitModal()}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-blue-900 text-white px-4 py-6 rounded-l-xl shadow-2xl hover:bg-indigo-950 transition-all duration-300 hover:px-6 group"
      style={{ writingMode: 'vertical-rl' }}
    >
      <span className="flex items-center gap-2 font-semibold text-lg">
        <svg className="w-5 h-5 rotate-90 group-hover:scale-110 transition-transform" viewBox="0 0 20 20" fill="none">
          <path d="M3 7h14M3 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        Book Site Visit
      </span>
    </button>
  );
}
