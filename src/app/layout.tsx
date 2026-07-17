import type { Metadata } from "next";
import { Outfit, Merriweather } from "next/font/google";
import "@/app/globals.css";
import { SITE_CONFIG } from "@/constants";
import { doctor, faqs } from "@/lib/data";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "900"],
});

export const metadataBase = new URL(SITE_CONFIG.url);

export const metadata: Metadata = {
  title: "Dr. Md. Moniruzzaman Sarkar - Gastroenterologist & Diabetologist | MBBS, FCPS (Medicine), FCPS (Gastroenterology)",
  description:
    "Dr. Md. Moniruzzaman Sarkar - Assistant Professor, Gastroenterologist & Diabetologist (Yale University). Specialist in GERD, Fatty Liver, Diabetes, IBS, and Liver Diseases. Chambers in Rangpur and Gaibandha.",
  keywords: [
    "Dr. Moniruzzaman Sarkar",
    "Gastroenterologist Rangpur",
    "Diabetologist Bangladesh",
    "Fatty Liver specialist",
    "GERD treatment Rangpur",
    "Diabetes doctor Rangpur",
    "Liver disease specialist",
    "IBS treatment",
    "FCPS Medicine",
    "FCPS Gastroenterology",
    "Yale University diabetologist",
    "MBBS Dhaka",
    "BCS Health",
    "Assistant Professor",
    "General Diagnostic Center Rangpur",
    "Gaibandha doctor",
    "Rangpur medical",
    "Bangladesh gastroenterologist",
    "Moniruzzaman Sarkar",
  ],
  authors: [{ name: "Dr. Md. Moniruzzaman Sarkar" }],
  creator: "Dr. Md. Moniruzzaman Sarkar",
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      "en-BD": SITE_CONFIG.url,
      "bn-BD": `${SITE_CONFIG.url}/bn`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: "Dr. Md. Moniruzzaman Sarkar",
    title: "Dr. Md. Moniruzzaman Sarkar - Gastroenterologist & Diabetologist",
    description:
      "Specialist in Gastroenterology, Diabetes, and Liver Diseases. MBBS, FCPS (Medicine), FCPS (Gastroenterology), Diabetologist (Yale University). Chambers in Rangpur and Gaibandha.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Md. Moniruzzaman Sarkar - Gastroenterologist & Diabetologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Md. Moniruzzaman Sarkar - Gastroenterologist & Diabetologist",
    description:
      "Specialist in Gastroenterology, Diabetes, and Liver Diseases. MBBS, FCPS (Medicine), FCPS (Gastroenterology), Diabetologist (Yale University).",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/drmdmoniruzzamansarkar.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.phone,
      contactType: "Appointment Booking",
      availableLanguage: ["English", "Bengali"],
    },
    sameAs: [],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: doctor.name,
    jobTitle: doctor.title,
    description: doctor.bio,
    image: `${SITE_CONFIG.url}${doctor.image}`,
    url: SITE_CONFIG.url,
    worksFor: {
      "@type": "Organization",
      name: doctor.institution,
    },
    knowsAbout: [
      "Gastroenterology",
      "Diabetes",
      "Liver Diseases",
      "General Medicine",
      "IBS",
      "GERD",
      "Fatty Liver",
    ],
    sameAs: [],
  };

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    jobTitle: doctor.title,
    description: doctor.bio,
    image: `${SITE_CONFIG.url}${doctor.image}`,
    url: SITE_CONFIG.url,
    worksFor: {
      "@type": "Organization",
      name: doctor.institution,
    },
    availableChannel: [
      {
        "@type": "ServiceChannel",
        serviceUrl: SITE_CONFIG.url,
        servicePhone: SITE_CONFIG.phone,
        availableLanguage: ["English", "Bengali"],
      },
    ],
    knowsAbout: [
      "Gastroenterology",
      "Diabetes",
      "Liver Diseases",
      "General Medicine",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: doctor.name,
    description: doctor.bio,
    image: `${SITE_CONFIG.url}${doctor.image}`,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    address: doctor.chambers.map((chamber) => ({
      "@type": "PostalAddress",
      streetAddress: chamber.address,
      addressLocality: chamber.city,
      addressCountry: "BD",
    })),
    openingHoursSpecification: doctor.chambers.map((chamber) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: chamber.visitingHours.includes("Fri")
        ? ["Friday"]
        : ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "16:00",
      closes: "21:00",
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.slice(0, 8).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: `${SITE_CONFIG.url}/drmdmoniruzzamansarkar.png`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const jsonLd = [
    organizationSchema,
    personSchema,
    physicianSchema,
    localBusinessSchema,
    faqSchema,
    websiteSchema,
  ];

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {jsonLd.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {children}
      </body>
    </html>
  );
}
