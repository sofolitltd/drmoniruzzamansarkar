import { doctor } from "@/lib/data";
import { SITE_CONFIG } from "@/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCall from "@/components/FloatingCall";
import BottomMobileNav from "@/components/BottomMobileNav";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata = {
  title: `Book an Appointment - ${SITE_CONFIG.name}`,
  description:
    "Book an appointment with Dr. Md. Moniruzzaman Sarkar. Schedule your consultation for Gastroenterology, Diabetes, and General Medicine.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/appointment`,
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
      name: "Appointment",
      item: `${SITE_CONFIG.url}/appointment`,
    },
  ],
};

export default function AppointmentPage() {
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
              Book an Appointment
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Schedule your visit with Dr. Md. Moniruzzaman Sarkar. Fill out the
              form and we&apos;ll confirm your appointment shortly.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-2xl border border-border shadow-sm">
              <AppointmentForm />
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Chamber Information
                </h3>
                <div className="space-y-5">
                  {doctor.chambers.map((chamber) => (
                    <div
                      key={chamber.id}
                      className="border-l-2 border-healthcare-green pl-4"
                    >
                      <p className="font-medium text-foreground">
                        {chamber.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {chamber.address}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {chamber.visitingHours}
                      </p>
                      <a
                        href={`tel:${chamber.phone}`}
                        className="text-sm text-healthcare-green hover:underline"
                      >
                        {chamber.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-medical-blue/5 p-6 rounded-2xl border border-medical-blue/15">
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                  Need Help Booking?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Prefer to talk to us directly? Reach out via phone or WhatsApp
                  and our team will assist you.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="bg-medical-blue text-white text-center px-6 py-3 rounded-full text-sm font-medium hover:bg-medical-blue/90 transition-colors"
                  >
                    Call {SITE_CONFIG.phone}
                  </a>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-healthcare-green text-white text-center px-6 py-3 rounded-full text-sm font-medium hover:bg-healthcare-green/90 transition-colors"
                  >
                    Message on WhatsApp
                  </a>
                </div>
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
