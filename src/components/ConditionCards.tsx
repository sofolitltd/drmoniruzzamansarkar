import { conditions } from "@/lib/data";
import Link from "next/link";

export default function ConditionCards() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conditions We Treat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive care for a wide range of medical conditions with
            personalized treatment plans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition) => (
            <Link
              key={condition.id}
              href={`/conditions/${condition.slug}`}
              className="group p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-medical-blue transition-colors">
                {condition.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                {condition.description}
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-healthcare-green group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/conditions"
            className="inline-flex items-center gap-2 bg-medical-blue text-white px-8 py-3 rounded-full font-medium hover:bg-medical-blue/90 transition-colors"
          >
            View All Conditions
          </Link>
        </div>
      </div>
    </section>
  );
}
