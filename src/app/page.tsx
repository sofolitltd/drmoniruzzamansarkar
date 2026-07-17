import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustCards from "@/components/TrustCards";
import ExpertiseCards from "@/components/ExpertiseCards";
import ConditionCards from "@/components/ConditionCards";
import Timeline from "@/components/Timeline";
import Chambers from "@/components/Chambers";
import Testimonials from "@/components/Testimonials";
import BlogCards from "@/components/BlogCards";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCall from "@/components/FloatingCall";
import BottomMobileNav from "@/components/BottomMobileNav";
import { SITE_CONFIG, testimonials } from "@/lib/data";

export const metadata = {
  title: `${SITE_CONFIG.name} - ${SITE_CONFIG.description}`,
  description: SITE_CONFIG.description,
  keywords: [
    "Dr. Moniruzzaman Sarkar",
    "Gastroenterologist Rangpur",
    "Diabetologist Bangladesh",
    "Fatty Liver specialist",
    "GERD treatment Rangpur",
    "Diabetes doctor Rangpur",
    "Liver disease specialist",
    "IBS treatment",
    "MBBS Dhaka",
    "FCPS Medicine",
    "FCPS Gastroenterology",
    "Yale University diabetologist",
  ],
};

export default function Home() {
  const avgRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/drmdmoniruzzamansarkar.png`,
    description: SITE_CONFIG.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Medical Mor, Dhap Jail Road (Opposite Sarak Bhaban), Rangpur",
      addressLocality: "Rangpur",
      addressCountry: "BD",
    },
    telephone: SITE_CONFIG.phone,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      reviewCount: testimonials.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: testimonials.slice(0, 3).map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      datePublished: t.date,
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: t.content,
    })),
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustCards />
        <ExpertiseCards />
        <ConditionCards />
        <Timeline />
        <Chambers />
        <Testimonials />
        <BlogCards />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FloatingCall />
      <BottomMobileNav />
    </div>
  );
}
