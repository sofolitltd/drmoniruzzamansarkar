import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCall from "@/components/FloatingCall";
import BottomMobileNav from "@/components/BottomMobileNav";
import { notFound } from "next/navigation";
import { specialties, conditions, SITE_CONFIG } from "@/lib/data";
import Link from "next/link";
import type { Specialty, Condition } from "@/types";

interface SpecialtyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return specialties.map((specialty: Specialty) => ({
    slug: specialty.slug,
  }));
}

export async function generateMetadata({ params }: SpecialtyPageProps) {
  const { slug } = await params;
  const specialty = specialties.find((s: Specialty) => s.slug === slug);

  if (!specialty) {
    return {
      title: `Specialty Not Found - ${SITE_CONFIG.name}`,
    };
  }

  return {
    title: `${specialty.name} - ${SITE_CONFIG.name}`,
    description: specialty.description,
  };
}

export default async function SpecialtyPage({ params }: SpecialtyPageProps) {
  const { slug } = await params;
  const specialty = specialties.find((s: Specialty) => s.slug === slug);

  if (!specialty) {
    notFound();
  }

  const relatedConditions = conditions.filter((condition: Condition) => {
    const specialtyName = specialty.name.toLowerCase();
    const conditionName = condition.name.toLowerCase();
    const conditionDesc = condition.description.toLowerCase();

    if (
      specialtyName === "gastroenterology" &&
      (conditionName.includes("gerd") ||
        conditionName.includes("ibs") ||
        conditionDesc.includes("digestive") ||
        conditionDesc.includes("gastrointestinal") ||
        conditionDesc.includes("esophagus"))
    ) {
      return true;
    }

    if (
      specialtyName === "diabetes care" &&
      (conditionName.includes("diabetes") ||
        conditionDesc.includes("blood sugar") ||
        conditionDesc.includes("insulin"))
    ) {
      return true;
    }

    if (
      specialtyName === "liver diseases" &&
      (conditionName.includes("fatty liver") ||
        conditionName.includes("hepatitis") ||
        conditionDesc.includes("liver"))
    ) {
      return true;
    }

    if (
      specialtyName === "general medicine" &&
      (conditionName.includes("hypertension") ||
        conditionName.includes("thyroid"))
    ) {
      return true;
    }

    if (
      specialtyName === "digestive health" &&
      (conditionName.includes("ibs") ||
        conditionName.includes("gerd") ||
        conditionDesc.includes("digestive") ||
        conditionDesc.includes("gut"))
    ) {
      return true;
    }

    if (
      specialtyName === "preventive medicine" &&
      (conditionName.includes("hypertension") ||
        conditionName.includes("diabetes") ||
        conditionName.includes("thyroid"))
    ) {
      return true;
    }

    return false;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <section className="bg-medical-blue text-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Link
                href="/specialties"
                className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-6"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Specialties
              </Link>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {specialty.name}
              </h1>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                {specialty.description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  About This Specialty
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {specialty.description} Dr. Md. Moniruzzaman Sarkar brings
                  extensive expertise and advanced training to this specialty,
                  ensuring comprehensive care that addresses the root causes of
                  your condition. With a patient-centered approach, every
                  treatment plan is tailored to your unique needs and health
                  goals.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">
                  What We Treat
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedConditions.length > 0 ? (
                    relatedConditions.map((condition: Condition) => (
                      <Link
                        key={condition.id}
                        href={`/conditions/${condition.slug}`}
                        className="group block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:-translate-y-0.5"
                      >
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-medical-blue transition-colors">
                          {condition.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                          {condition.description}
                        </p>
                      </Link>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-8">
                      <p className="text-gray-500">
                        Detailed condition information is available on our
                        conditions page.
                      </p>
                      <Link
                        href="/conditions"
                        className="inline-block mt-4 text-medical-blue hover:text-healthcare-green font-medium transition-colors"
                      >
                        View All Conditions
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-background rounded-2xl p-8 md:p-12">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  Our Approach
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-medical-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      <svg
                        className="w-5 h-5 text-medical-blue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                        Comprehensive Evaluation
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Thorough assessment of your medical history, symptoms,
                        and lifestyle factors.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-medical-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      <svg
                        className="w-5 h-5 text-medical-blue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                        Evidence-Based Treatment
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Latest research and proven protocols to guide your
                        treatment plan.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-medical-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      <svg
                        className="w-5 h-5 text-medical-blue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 014.146 4.364M12 4.354a4 4 0 00-4.146 4.364M12 4.354v4.364m0 4.364a4 4 0 014.146 4.364M12 12.682a4 4 0 01-4.146-4.364m4.146 4.364a4 4 0 004.146-4.364M12 16.682v2.364"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                        Ongoing Support
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Continuous monitoring and adjustments to ensure the best
                        possible outcomes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-medical-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      <svg
                        className="w-5 h-5 text-medical-blue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                        Collaborative Care
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Coordination with other specialists when needed for
                        holistic treatment.
                      </p>
                    </div>
                  </div>
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
