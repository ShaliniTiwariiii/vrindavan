import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kmdrealestatevrindavan.com'),
  title: {
    default: 'KMD Real Estate Vrindavan | Property in Vrindavan',
    template: '%s | KMD Real Estate Vrindavan',
  },
  description: 'Find the best property in Vrindavan with KMD Real Estate. Explore premium flats, villas, and investment opportunities in the sacred city. Real Estate Vrindavan experts.',
  keywords: ['Property in Vrindavan', 'Flats in Vrindavan', 'Real Estate Vrindavan', 'KMD Real Estate', 'buy property Vrindavan', 'flats near Banke Bihari', 'investment opportunities in Vrindavan'],
  openGraph: {
    title: 'KMD Real Estate Vrindavan | Property in Vrindavan',
    description: 'Find the best property in Vrindavan with KMD Real Estate. Explore premium flats, villas, and investment opportunities in the sacred city.',
    url: 'https://kmdrealestatevrindavan.com',
    siteName: 'KMD Real Estate Vrindavan',
    images: [
      {
        url: 'https://kmdrealestatevrindavan.com/logoImage.png',
        width: 800,
        height: 600,
        alt: 'KMD Real Estate Vrindavan Logo'
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://kmdrealestatevrindavan.com',
  },
  icons: {
    icon: [
      { url: '/logoImage.png', sizes: '32x32', type: 'image/png' },
      { url: '/logoImage.png', sizes: '64x64', type: 'image/png' },
      { url: '/logoImage.png', sizes: '128x128', type: 'image/png' },
    ],
    shortcut: [{ url: '/logoImage.png', sizes: '64x64' }],
    apple: [{ url: '/logoImage.png', sizes: '180x180' }],
  },
};

import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import BookSiteVisitModal from '@/components/BookSiteVisitModal';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'KMD Real Estate Vrindavan',
  image: 'https://kmdrealestatevrindavan.com/logoImage.png',
  '@id': 'https://kmdrealestatevrindavan.com',
  url: 'https://kmdrealestatevrindavan.com',
  telephone: '+919068464048',
  email: 'kmdrealestatevrindavan@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vrindavan',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans">
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <BookSiteVisitModal />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
