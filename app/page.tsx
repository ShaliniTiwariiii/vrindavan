import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import AboutUs from '@/components/AboutUs';
import BookSiteVisit from '@/components/BookSiteVisit';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedProperties />
      <AboutUs />
      <BookSiteVisit />
    </main>
  );
}
