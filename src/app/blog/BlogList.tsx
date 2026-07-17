"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { BLOG_CATEGORIES } from "@/constants";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const categories = ["All", ...BLOG_CATEGORIES];

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={
              "px-5 py-2 rounded-full text-sm font-medium transition-colors " +
              (activeCategory === category
                ? "bg-medical-blue text-white"
                : "bg-white border border-border text-foreground hover:border-medical-blue hover:text-medical-blue")
            }
          >
            {category}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-muted-foreground">
          No articles found in this category.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video bg-gradient-to-br from-medical-blue/20 to-healthcare-green/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-medical-blue/50 font-heading text-4xl font-bold">
                    {post.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-healthcare-green text-white text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-medical-blue transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-healthcare-green font-medium hover:gap-3 transition-all"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
