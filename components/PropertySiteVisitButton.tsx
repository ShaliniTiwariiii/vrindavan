'use client';

import { openSiteVisitModal } from './BookSiteVisitModal';

interface Props {
  propertyName: string;
}

export default function PropertySiteVisitButton({ propertyName }: Props) {
  return (
    <button 
      onClick={() => openSiteVisitModal(propertyName)}
      className="w-full mt-8 group relative overflow-hidden rounded-full block bg-slate-950 px-8 py-4 font-medium text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-950 to-blue-900 opacity-100 transition-all group-hover:scale-105"></div>
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full"></div>
      
      <span className="relative z-10 flex justify-center items-center gap-2">
        Book Site Visit
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
      <div className="absolute inset-0 rounded-full opacity-0 shadow-[0_0_20px_rgba(30,58,138,0.5)] transition-opacity group-hover:opacity-100"></div>
    </button>
  );
}
