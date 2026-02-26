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
  title: 'Vrindavan Premium Properties | Spiritual Living & Investment',
  description: 'Discover premium real estate opportunities in the sacred city of Vrindavan. Properties near Banke Bihari Temple with spiritual and investment value.',
  keywords: ['Vrindavan properties', 'real estate', 'spiritual living', 'Banke Bihari Temple', 'investment'],
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

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
