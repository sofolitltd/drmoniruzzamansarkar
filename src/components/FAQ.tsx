"use client";

import { faqs } from "@/lib/data";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, appointments,
            and treatments.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-medical-blue" />
                {category}
              </h3>
              <div className="space-y-4">
                {faqs
                  .filter((faq) => faq.category === category)
                  .map((faq) => (
                    <div
                      key={faq.id}
                      className="border border-border rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setOpenId(openId === faq.id ? null : faq.id)
                        }
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-background transition-colors"
                        aria-expanded={openId === faq.id}
                      >
                        <span className="font-medium text-foreground pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                            openId === faq.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openId === faq.id ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <p className="p-4 text-muted-foreground border-t border-border">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
