import { SITE_CONFIG } from "@/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCall from "@/components/FloatingCall";

export const metadata = {
  title: `Terms & Conditions - ${SITE_CONFIG.name}`,
  description:
    "Terms and Conditions for the official website of Dr. Md. Moniruzzaman Sarkar, outlining the use of our website and services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Last updated: {new Date().getFullYear()}
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the website of {SITE_CONFIG.name}, you
                agree to be bound by these Terms &amp; Conditions. If you do not
                agree with any part of these terms, please do not use our
                website.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                Use of Website
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  The content provided on this website is for general
                  informational purposes only and is not a substitute for
                  professional medical advice.
                </li>
                <li>
                  You agree not to misuse the website or attempt to gain
                  unauthorized access to any part of it.
                </li>
                <li>
                  Information you submit through forms must be accurate and
                  complete.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                Medical Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The articles, blog posts, and health information on this website
                are intended for educational purposes and do not establish a
                doctor-patient relationship. Always consult a qualified
                healthcare provider for diagnosis and treatment.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, including text, graphics, logos, and images, is the
                property of {SITE_CONFIG.name} and is protected by applicable
                intellectual property laws. You may not reproduce or distribute
                any content without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We are not liable for any direct, indirect, or consequential
                damages arising from your use of, or inability to use, this
                website or reliance on its content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to update these Terms &amp; Conditions at
                any time. Continued use of the website after changes constitutes
                acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms &amp; Conditions, contact us at{" "}
                {SITE_CONFIG.email} or call {SITE_CONFIG.phone}.
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FloatingCall />
    </div>
  );
}
