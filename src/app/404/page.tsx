import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCall from "@/components/FloatingCall";
import BottomMobileNav from "@/components/BottomMobileNav";
import { SITE_CONFIG } from "@/constants";
import { Stethoscope } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4 flex flex-col items-center justify-center text-center min-h-[70vh]">
          <div className="max-w-2xl">
            <div className="w-24 h-24 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Stethoscope className="h-12 w-12 text-medical-blue" />
            </div>

            <p className="font-heading text-8xl md:text-9xl font-bold text-medical-blue/20 mb-4">
              404
            </p>

            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h1>

            <p className="text-lg text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
              The page you are looking for doesn&apos;t exist or may have been
              moved. Let&apos;s get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-healthcare-green text-white px-8 py-3 rounded-full font-medium hover:bg-healthcare-green/90 transition-colors"
              >
                Back to Home
              </Link>

              <Link
                href="/conditions"
                className="inline-flex items-center justify-center gap-2 border border-medical-blue text-medical-blue px-8 py-3 rounded-full font-medium hover:bg-medical-blue hover:text-white transition-colors"
              >
                View All Conditions
              </Link>
            </div>

            <div className="mt-16 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Need immediate assistance?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center justify-center gap-2 text-medical-blue font-medium hover:underline"
                >
                  📞 Call {SITE_CONFIG.phone}
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-healthcare-green font-medium hover:underline"
                >
                  💬 WhatsApp Us
                </a>
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
