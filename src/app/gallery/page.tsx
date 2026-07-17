import { galleryItems } from "@/lib/data";
import { SITE_CONFIG } from "@/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCall from "@/components/FloatingCall";
import BottomMobileNav from "@/components/BottomMobileNav";

export const metadata = {
  title: `Gallery - ${SITE_CONFIG.name}`,
  description:
    "A glimpse into the chambers, conferences, awards, and medical camps of Dr. Md. Moniruzzaman Sarkar.",
};

function getInitials(title: string) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join("");
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Glimpses from chambers, medical conferences, award ceremonies, and
              community health camps.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-medical-blue/15 to-healthcare-green/15 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-medical-blue/40 font-heading text-5xl font-bold">
                  {getInitials(item.title)}
                </span>
                <div className="absolute inset-x-0 bottom-0 bg-foreground/70 px-4 py-3">
                  <p className="text-white text-sm font-medium">{item.title}</p>
                  <p className="text-white/70 text-xs">{item.category}</p>
                </div>
              </div>
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
