import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import AboutVrindavan from '@/components/AboutVrindavan';
import BookSiteVisit from '@/components/BookSiteVisit';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedProperties />
      <AboutVrindavan />
      <BookSiteVisit />
    </main>
  );
}
