import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/appointment`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/conditions`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/specialties`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.1,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.1,
    },
  ];

  const blogPosts = [
    {
      slug: "understanding-fatty-liver-disease",
      publishedAt: "2024-12-15",
    },
    {
      slug: "managing-diabetes-comprehensive-guide",
      publishedAt: "2024-11-28",
    },
    {
      slug: "foods-that-support-digestive-health",
      publishedAt: "2024-11-10",
    },
    {
      slug: "when-to-see-doctor-for-heartburn",
      publishedAt: "2024-10-20",
    },
    {
      slug: "gut-health-and-overall-wellness",
      publishedAt: "2024-09-15",
    },
    {
      slug: "understanding-hepatitis",
      publishedAt: "2024-08-05",
    },
  ];

  const conditions = [
    { slug: "gerd", priority: 0.9 },
    { slug: "fatty-liver", priority: 0.9 },
    { slug: "diabetes", priority: 0.9 },
    { slug: "ibs", priority: 0.8 },
    { slug: "hypertension", priority: 0.8 },
    { slug: "thyroid", priority: 0.8 },
  ];

  const specialties = [
    { slug: "gastroenterology", priority: 0.8 },
    { slug: "diabetes-care", priority: 0.8 },
    { slug: "general-medicine", priority: 0.7 },
    { slug: "liver-diseases", priority: 0.8 },
    { slug: "preventive-medicine", priority: 0.7 },
    { slug: "digestive-health", priority: 0.7 },
  ];

  const dynamicPages = [
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...conditions.map((condition) => ({
      url: `${baseUrl}/conditions/${condition.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: condition.priority,
    })),
    ...specialties.map((specialty) => ({
      url: `${baseUrl}/specialties/${specialty.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: specialty.priority,
    })),
  ];

  return [...staticPages, ...dynamicPages];
}
