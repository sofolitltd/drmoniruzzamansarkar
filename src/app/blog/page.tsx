import { SITE_CONFIG } from "@/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCall from "@/components/FloatingCall";
import BottomMobileNav from "@/components/BottomMobileNav";
import BlogList from "./BlogList";

export const metadata = {
  title: `Health Articles & Blog - ${SITE_CONFIG.name}`,
  description:
    "Read health articles, medical insights, and patient education from Dr. Md. Moniruzzaman Sarkar on gastroenterology, diabetes, nutrition, and more.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
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
      name: "Blog",
      item: `${SITE_CONFIG.url}/blog`,
    },
  ],
};

export default function BlogPage() {
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
              Health Articles &amp; Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest health tips, medical insights, and
              patient education written by Dr. Md. Moniruzzaman Sarkar.
            </p>
          </div>

          <BlogList />
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FloatingCall />
      <BottomMobileNav />
    </div>
  );
}
