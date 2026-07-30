import { Hero } from '@/components/Hero';
import { Intro } from '@/components/Intro';
import { Solutions } from '@/components/Solutions';
import { Automation } from '@/components/Automation';
import { CaseStudies } from '@/components/CaseStudies';
import { Process } from '@/components/Process';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Solutions />
      <Automation />
      <CaseStudies />
      <Process />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
