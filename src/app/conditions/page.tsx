import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCall from "@/components/FloatingCall";
import BottomMobileNav from "@/components/BottomMobileNav";
import { conditions, SITE_CONFIG } from "@/lib/data";

export const metadata = {
  title: `Conditions We Treat - ${SITE_CONFIG.name}`,
  description:
    "Explore the medical conditions treated by Dr. Md. Moniruzzaman Sarkar, including GERD, fatty liver, diabetes, IBS, hypertension, and thyroid disorders.",
};

export default function ConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="px-4 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-6xl py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-healthcare-green">
              Medical Expertise
            </p>
            <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Conditions We Treat
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              Comprehensive, evidence-based care for a wide range of digestive,
              metabolic, and chronic conditions. Explore detailed information on
              symptoms, causes, and treatment approaches.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((condition) => (
              <a
                key={condition.id}
                href={`/conditions/${condition.slug}`}
                className="group flex flex-col rounded-2xl border border-foreground/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-medical-blue/10 text-medical-blue transition-colors duration-300 group-hover:bg-medical-blue group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  {condition.name}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/70">
                  {condition.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-medical-blue transition-colors duration-300 group-hover:text-healthcare-green">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </a>
            ))}
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
