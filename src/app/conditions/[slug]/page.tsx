import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCall from "@/components/FloatingCall";
import BottomMobileNav from "@/components/BottomMobileNav";
import { conditions, services, SITE_CONFIG } from "@/lib/data";
import { Calendar, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";

export function generateStaticParams() {
  return conditions.map((condition) => ({ slug: condition.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = conditions.find((c) => c.slug === slug);

  if (!condition) {
    return {
      title: `Condition Not Found - ${SITE_CONFIG.name}`,
      description: "The requested medical condition could not be found.",
    };
  }

  return {
    title: `${condition.name} - Symptoms, Causes, Treatment & Prevention | ${SITE_CONFIG.name}`,
    description: condition.overview,
    keywords: [
      condition.name,
      `${condition.name} treatment`,
      `${condition.name} symptoms`,
      `${condition.name} causes`,
      "Dr. Moniruzzaman Sarkar",
      ...condition.symptoms.slice(0, 3),
    ],
  };
}

export default async function ConditionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condition = conditions.find((c) => c.slug === slug);

  if (!condition) {
    notFound();
  }

  const relatedServicesList = services.filter((s) =>
    condition.relatedServices.includes(s.name)
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: condition.name,
    description: condition.overview,
    url: `${SITE_CONFIG.url}/conditions/${condition.slug}`,
    possibleTreatment: condition.treatment,
    riskFactor: condition.causes,
    signOrSymptom: condition.symptoms,
    prevention: condition.prevention,
    recognizingAuthority: {
      "@type": "Physician",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
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
        name: "Conditions",
        item: `${SITE_CONFIG.url}/conditions`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: condition.name,
        item: `${SITE_CONFIG.url}/conditions/${condition.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <Navbar />

      <main className="px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <section className="mx-auto max-w-5xl pt-28 pb-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/"
              className="hover:text-medical-blue transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/conditions"
              className="hover:text-medical-blue transition-colors"
            >
              Conditions
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{condition.name}</span>
          </nav>
        </section>

        {/* Hero */}
        <section className="mx-auto max-w-5xl py-8 lg:py-12">
          <div className="rounded-3xl border border-foreground/5 bg-white p-8 shadow-sm lg:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-healthcare-green">
              Condition
            </p>
            <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              {condition.name}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              {condition.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 bg-healthcare-green text-white px-6 py-3 rounded-full font-medium hover:bg-healthcare-green/90 transition-colors"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center gap-2 border border-medical-blue text-medical-blue px-6 py-3 rounded-full font-medium hover:bg-medical-blue hover:text-white transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mx-auto max-w-5xl py-8">
          <div className="rounded-3xl border border-foreground/5 bg-gradient-to-br from-medical-blue/5 to-healthcare-green/5 p-8 shadow-sm lg:p-12">
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Overview
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/70">
              {condition.overview}
            </p>
          </div>
        </section>

        {/* Symptoms & Causes */}
        <section className="mx-auto max-w-5xl py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Symptoms */}
            <div className="rounded-3xl border border-foreground/5 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">
                  Symptoms
                </h2>
              </div>
              <ul className="space-y-4">
                {condition.symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-red-400" />
                    <span className="text-foreground/80 leading-relaxed">
                      {symptom}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Causes */}
            <div className="rounded-3xl border border-foreground/5 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">
                  Causes
                </h2>
              </div>
              <ul className="space-y-4">
                {condition.causes.map((cause, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-orange-400" />
                    <span className="text-foreground/80 leading-relaxed">
                      {cause}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Diagnosis & Treatment */}
        <section className="mx-auto max-w-5xl py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Diagnosis */}
            <div className="rounded-3xl border border-foreground/5 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">
                  Diagnosis
                </h2>
              </div>
              <ul className="space-y-4">
                {condition.diagnosis.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-blue-400" />
                    <span className="text-foreground/80 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatment */}
            <div className="rounded-3xl border border-foreground/5 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-healthcare-green/10">
                  <CheckCircle2 className="h-5 w-5 text-healthcare-green" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">
                  Treatment
                </h2>
              </div>
              <ul className="space-y-4">
                {condition.treatment.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-healthcare-green" />
                    <span className="text-foreground/80 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Prevention */}
        <section className="mx-auto max-w-5xl py-8">
          <div className="rounded-3xl border border-foreground/5 bg-white p-8 shadow-sm lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
              <h2 className="font-heading text-xl font-bold text-foreground">
                Prevention
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {condition.prevention.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl bg-background p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-healthcare-green" />
                  <span className="text-sm text-foreground/80 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When to See a Doctor */}
        <section className="mx-auto max-w-5xl py-8">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8 shadow-sm lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="font-heading text-xl font-bold text-foreground">
                When to See a Doctor
              </h2>
            </div>
            <p className="mb-4 text-foreground/80">
              Consult a healthcare professional if you experience any of the
              following:
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {condition.whenToSeeDoctor.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-xl bg-white p-4"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    !
                  </span>
                  <span className="text-sm text-foreground/80 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQs */}
        <section className="mx-auto max-w-5xl py-8">
          <div className="rounded-3xl border border-foreground/5 bg-white p-8 shadow-sm lg:p-10">
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {condition.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServicesList.length > 0 && (
          <section className="mx-auto max-w-5xl py-8">
            <div className="rounded-3xl border border-foreground/5 bg-white p-8 shadow-sm lg:p-10">
              <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl mb-6">
                Related Services
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedServicesList.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="group rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-medical-blue transition-colors">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/70 line-clamp-2">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-healthcare-green">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mx-auto max-w-5xl py-12">
          <div className="rounded-3xl bg-medical-blue p-8 text-center shadow-sm lg:p-12">
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Concerned about your symptoms?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/80 text-lg">
              Book a consultation with {SITE_CONFIG.name} for a personalized
              diagnosis and treatment plan.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-full font-semibold text-medical-blue shadow-sm transition-colors hover:bg-healthcare-green hover:text-white"
              >
                <Calendar className="h-4 w-4" />
                Book an Appointment
              </Link>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 px-8 py-3 rounded-full font-semibold text-white transition-colors hover:bg-white/10"
              >
                WhatsApp Us
              </a>
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
