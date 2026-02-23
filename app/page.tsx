import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import AboutVrindavan from '@/components/AboutVrindavan';
import BookSiteVisit from '@/components/BookSiteVisit';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <AboutVrindavan />
      <BookSiteVisit />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
