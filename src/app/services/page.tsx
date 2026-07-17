import Link from "next/link";
import { services } from "@/lib/data";
import { SITE_CONFIG } from "@/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCall from "@/components/FloatingCall";
import BottomMobileNav from "@/components/BottomMobileNav";
import {
  Soup,
  HeartPulse,
  Activity,
  Scan,
  ClipboardList,
  Apple,
  ArrowRight,
} from "lucide-react";
import type { ElementType } from "react";

const iconMap: Record<string, ElementType> = {
  Stomach: Soup,
  Soup,
  HeartPulse,
  Activity,
  Scan,
  ClipboardList,
  Apple,
};

export const metadata = {
  title: `Our Services - ${SITE_CONFIG.name}`,
  description:
    "Explore the comprehensive medical services offered by Dr. Md. Moniruzzaman Sarkar, including Gastroenterology, Diabetes care, Endoscopy, and more.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
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
      name: "Services",
      item: `${SITE_CONFIG.url}/services`,
    },
  ],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive, evidence-based medical care tailored to your needs
              across gastroenterology, diabetes, and general medicine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Activity;
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group p-8 rounded-2xl border border-border bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-healthcare-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-healthcare-green transition-colors">
                    <Icon className="h-7 w-7 text-healthcare-green group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-healthcare-green font-medium group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FloatingCall />
      <BottomMobileNav />
    </div>
  );
}
