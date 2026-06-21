import { getSiteContent } from '@/lib/api';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { PlatformStrip } from '@/components/PlatformStrip';
import { Services } from '@/components/Services';
import { Stats } from '@/components/Stats';
import { Process } from '@/components/Process';
import { Pricing } from '@/components/Pricing';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Testimonials } from '@/components/Testimonials';
import { CtaBanner } from '@/components/CtaBanner';
import { Faq } from '@/components/Faq';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default async function HomePage() {
  // All site content is fetched from the backend API (single source of truth).
  const content = await getSiteContent();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PlatformStrip />
        <Services services={content.services} />
        <Stats stats={content.stats} />
        <Process steps={content.processSteps} />
        <Pricing packages={content.packages} />
        <WhyChooseUs valueProps={content.valueProps} />
        <Testimonials testimonials={content.testimonials} />
        <CtaBanner />
        <Faq faqs={content.faqs} />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
