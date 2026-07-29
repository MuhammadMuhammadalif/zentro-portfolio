import { Hero } from '@/components/Hero';
import { Intro } from '@/components/Intro';
import { Solutions } from '@/components/Solutions';
import { CaseStudies } from '@/components/CaseStudies';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Solutions />
      <CaseStudies />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
