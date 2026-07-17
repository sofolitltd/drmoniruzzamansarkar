import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCall from "@/components/FloatingCall";
import BottomMobileNav from "@/components/BottomMobileNav";
import { doctor, trustCards } from "@/lib/data";
import { SITE_CONFIG } from "@/constants";

export const metadata: Metadata = {
  title: `About Dr. Md. Moniruzzaman Sarkar | ${SITE_CONFIG.name}`,
  description:
    "Learn about Dr. Md. Moniruzzaman Sarkar — Assistant Professor, gastroenterologist, diabetologist (Yale University), and internal medicine specialist with 15+ years of clinical experience.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
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
      name: "About",
      item: `${SITE_CONFIG.url}/about`,
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-background px-6 py-24 md:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-healthcare-green">
              Meet Your Physician
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight text-medical-blue">
              About Dr. Md. Moniruzzaman Sarkar
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-foreground/80">
              {doctor.mission}
            </p>
          </div>
        </section>

        {/* Biography */}
        <section className="px-6 py-20 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-5 md:items-center">
              <div className="md:col-span-2">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={doctor.image}
                    alt={`${doctor.name} - ${doctor.title} portrait, ${doctor.qualifications.join(", ")}`}
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-medical-blue">
                  Biography
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/80">
                  {doctor.bio.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="bg-white px-6 py-20 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-medical-blue">
                Qualifications
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
                A foundation of rigorous academic training and international
                specialization.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {doctor.qualifications.map((qualification) => (
                <div
                  key={qualification}
                  className="rounded-2xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-healthcare-green/10 text-healthcare-green">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </span>
                    <p className="font-heading text-lg font-semibold text-foreground">
                      {qualification}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="px-6 py-20 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-medical-blue">
                Education Timeline
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
                The academic journey that shaped a dedicated physician.
              </p>
            </div>
            <div className="relative mt-14 pl-8">
              <span className="absolute left-3 top-2 h-full w-px bg-border" />
              {doctor.education.map((item) => (
                <div key={item.id} className="relative pb-12 last:pb-0">
                  <span className="absolute -left-8 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-medical-blue ring-4 ring-background">
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </span>
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {item.degree}
                      </h3>
                      <span className="rounded-full bg-healthcare-green/10 px-3 py-1 text-sm font-medium text-healthcare-green">
                        {item.year}
                      </span>
                    </div>
                    <p className="mt-2 text-foreground/70">{item.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-white px-6 py-20 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-medical-blue">
                Achievements
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
                Milestones of professional excellence and recognition.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {doctor.achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="rounded-2xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="font-heading text-3xl font-bold text-healthcare-green">
                    {achievement.year}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">
                    {achievement.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Memberships */}
        <section className="px-6 py-20 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-medical-blue">
                Professional Memberships
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
                Active involvement in leading national medical organizations.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {doctor.memberships.map((membership) => (
                <div
                  key={membership.id}
                  className="rounded-2xl border border-border bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-medical-blue/10 text-medical-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                  <p className="font-medium text-sm uppercase tracking-wide text-healthcare-green">
                    {membership.name}
                  </p>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
                    {membership.organization}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="bg-medical-blue px-6 py-20 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
              Years of Dedication
            </p>
            <h2 className="mt-4 font-heading text-5xl md:text-6xl font-bold text-white">
              15+ Years
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              {doctor.experience}
            </p>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {trustCards.map((card) => (
                <div
                  key={card.id}
                  className="rounded-2xl border border-white/15 bg-white/10 p-6 text-left backdrop-blur-0 transition-all hover:-translate-y-1 hover:bg-white/15"
                >
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {card.description}
                  </p>
                </div>
              ))}
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
