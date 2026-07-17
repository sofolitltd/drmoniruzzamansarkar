import { SITE_CONFIG } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCall from "@/components/FloatingCall";
import BottomMobileNav from "@/components/BottomMobileNav";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: `Contact Us - ${SITE_CONFIG.name}`,
  description:
    "Get in touch with Dr. Md. Moniruzzaman Sarkar. Find chamber addresses, phone numbers, email, and visiting hours.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_CONFIG.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: `${SITE_CONFIG.url}/contact`,
    },
  ],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navbar />
      <main>
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FloatingCall />
      <BottomMobileNav />
    </div>
  );
}
