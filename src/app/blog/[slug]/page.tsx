import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { SITE_CONFIG } from "@/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCall from "@/components/FloatingCall";
import BottomMobileNav from "@/components/BottomMobileNav";
import { Calendar, Clock } from "lucide-react";

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listBuffer: string[] = [];
  let key = 0;

  const flushList = () => {
    if (listBuffer.length === 0) return;
    const items = listBuffer;
    listBuffer = [];
    elements.push(
      <ul key={`ul-${key++}`} className="list-disc pl-6 space-y-2 text-muted-foreground">
        {items.map((item, i) => (
          <li key={i} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    );
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushList();
      continue;
    }
    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={key++} className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={key++} className="font-heading text-3xl font-bold text-foreground mt-12 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("# ")) {
      flushList();
      elements.push(
        <h3 key={key++} className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">
          {line.replace("# ", "")}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      listBuffer.push(line.replace("- ", ""));
    } else if (/^\d+\.\s/.test(line)) {
      listBuffer.push(line.replace(/^\d+\.\s/, ""));
    } else {
      flushList();
      elements.push(
        <p key={key++} className="text-muted-foreground leading-relaxed mb-5">
          {line}
        </p>
      );
    }
  }
  flushList();
  return elements;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return { title: `Article Not Found - ${SITE_CONFIG.name}` };
  }
  return {
    title: `${post.title} - ${SITE_CONFIG.name}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/drmdmoniruzzamansarkar.png`,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
    timeRequired: post.readTime,
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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_CONFIG.url}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navbar />
      <main className="pt-32 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-medical-blue font-medium mb-8 hover:gap-3 transition-all"
          >
            &larr; Back to Blog
          </Link>

          <div className="mb-6">
            <span className="bg-healthcare-green text-white text-xs px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-10 border-b border-border pb-6">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {publishedDate}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
            <span className="font-medium text-foreground">{post.author}</span>
          </div>

          <div className="prose-medical">{renderContent(post.content)}</div>

          <div className="mt-16 bg-white p-8 rounded-2xl border border-border shadow-sm">
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
              Book a Consultation
            </h3>
            <p className="text-muted-foreground mb-6">
              Have questions about this topic? Schedule an appointment with Dr.
              Md. Moniruzzaman Sarkar for personalized medical advice.
            </p>
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 bg-healthcare-green text-white px-8 py-3 rounded-full font-medium hover:bg-healthcare-green/90 transition-colors"
            >
              Book an Appointment
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FloatingCall />
      <BottomMobileNav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </div>
  );
}
