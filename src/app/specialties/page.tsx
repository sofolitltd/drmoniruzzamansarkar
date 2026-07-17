import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCall from "@/components/FloatingCall";
import BottomMobileNav from "@/components/BottomMobileNav";
import { specialties, SITE_CONFIG } from "@/lib/data";
import type { Specialty } from "@/types";

export const metadata = {
  title: `Our Specialties - ${SITE_CONFIG.name}`,
  description: SITE_CONFIG.description,
  alternates: {
    canonical: `${SITE_CONFIG.url}/specialties`,
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
      name: "Specialties",
      item: `${SITE_CONFIG.url}/specialties`,
    },
  ],
};

export default function SpecialtiesPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navbar />

      <main>
        <section className="bg-medical-blue text-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Specialties
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Expert care across multiple medical disciplines, delivered with
              precision, compassion, and the latest medical advancements.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialties.map((specialty: Specialty) => (
                <a
                  key={specialty.id}
                  href={`/specialties/${specialty.slug}`}
                  className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-medical-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-medical-blue group-hover:text-white transition-colors duration-300">
                    <span className="text-medical-blue group-hover:text-white font-heading text-xl font-bold transition-colors duration-300">
                      {specialty.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                    {specialty.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {specialty.description}
                  </p>
                  <span className="inline-flex items-center text-medical-blue font-medium group-hover:text-healthcare-green transition-colors duration-300">
                    Learn More
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Why Choose Our Specialties?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Each specialty is backed by years of clinical experience, advanced
              training, and a commitment to staying at the forefront of medical
              science. Our integrated approach ensures you receive comprehensive
              care tailored to your unique health needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-background">
                <div className="w-12 h-12 bg-healthcare-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-healthcare-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Expert Diagnosis
                </h3>
                <p className="text-gray-600 text-sm">
                  Accurate and timely diagnosis using the latest medical
                  technologies.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-background">
                <div className="w-12 h-12 bg-healthcare-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-healthcare-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Patient-Centered Care
                </h3>
                <p className="text-gray-600 text-sm">
                  Personalized treatment plans focused on your overall
                  well-being.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-background">
                <div className="w-12 h-12 bg-healthcare-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-healthcare-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Advanced Treatment
                </h3>
                <p className="text-gray-600 text-sm">
                  Evidence-based therapies and modern treatment protocols for
                  optimal outcomes.
                </p>
              </div>
            </div>
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
