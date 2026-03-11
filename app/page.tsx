import Hero from '@/components/Hero';
import BrajPlan from '@/components/BrajPlan';
import ExperienceDifference from '@/components/ExperienceDifference';
import FeaturedProperties from '@/components/FeaturedProperties';
import AboutUs from '@/components/AboutUs';
import BookSiteVisit from '@/components/BookSiteVisit';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate in Vrindavan | KMD Real Estate',
  description: 'Explore the best real estate in Vrindavan. From luxury flats to prime investment opportunities. Find your perfect property in Vrindavan today.',
  alternates: {
    canonical: 'https://kmdrealestatevrindavan.com',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BrajPlan />
      <ExperienceDifference />
      <FeaturedProperties />
      <AboutUs />
      <BookSiteVisit />
    </main>
  );
}
