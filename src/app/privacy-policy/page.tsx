import { SITE_CONFIG } from "@/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCall from "@/components/FloatingCall";

export const metadata = {
  title: `Privacy Policy - ${SITE_CONFIG.name}`,
  description:
    "Privacy Policy for the official website of Dr. Md. Moniruzzaman Sarkar, explaining how we collect, use, and protect your information.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Last updated: {new Date().getFullYear()}
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy explains how {SITE_CONFIG.name} (&ldquo;we&rdquo;,
                &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and
                protects your personal information when you use our website and
                services. By using this website, you agree to the practices
                described in this policy.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Personal details you provide through appointment and contact
                  forms, such as your name, email, phone number, and message.
                </li>
                <li>
                  Technical information such as IP address, browser type, and
                  pages visited, collected automatically through cookies.
                </li>
                <li>
                  Communication records when you contact us via phone, email, or
                  WhatsApp.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To schedule and manage your appointments.</li>
                <li>To respond to your inquiries and provide medical information.</li>
                <li>To improve our website, services, and patient experience.</li>
                <li>To communicate important updates regarding your care.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                Data Protection
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                loss, or disclosure. However, no method of transmission over the
                internet is completely secure.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or request deletion of
                your personal data. To exercise these rights, please contact us
                using the information below.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, you can
                reach us at {SITE_CONFIG.email} or call {SITE_CONFIG.phone}.
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
