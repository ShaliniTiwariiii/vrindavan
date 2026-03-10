import Hero from '@/components/Hero';
import BrajPlan from '@/components/BrajPlan';
import ExperienceDifference from '@/components/ExperienceDifference';
import FeaturedProperties from '@/components/FeaturedProperties';
import AboutUs from '@/components/AboutUs';
import BookSiteVisit from '@/components/BookSiteVisit';

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
