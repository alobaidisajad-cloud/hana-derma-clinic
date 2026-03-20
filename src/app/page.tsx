import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Results from '@/components/sections/Results';
import Promotions from '@/components/sections/Promotions';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Results />
        <Promotions />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
