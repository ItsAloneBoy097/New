import Navbar      from '@/components/Navbar';
import Hero        from '@/components/Hero';
import Stats       from '@/components/Stats';
import Features    from '@/components/Features';
import HowItWorks  from '@/components/HowItWorks';
import Commands    from '@/components/Commands';
import CTA         from '@/components/CTA';
import Footer      from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Commands />
      <CTA />
      <Footer />
    </main>
  );
}
