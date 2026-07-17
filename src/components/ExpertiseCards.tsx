import { specialties } from "@/lib/data";
import Link from "next/link";
import {
  Soup,
  HeartPulse,
  Stethoscope,
  Activity,
  ShieldCheck,
  Apple,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Stomach: Soup,
  Soup,
  HeartPulse,
  Stethoscope,
  Activity,
  ShieldCheck,
  Apple,
};

export default function ExpertiseCards() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized care across multiple medical disciplines with
            evidence-based treatment approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty) => {
            const Icon = iconMap[specialty.icon] || Stethoscope;
            return (
              <Link
                key={specialty.id}
                href={`/specialties/${specialty.slug}`}
                className="group p-8 rounded-2xl border border-border bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-healthcare-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-healthcare-green transition-colors">
                  <Icon className="h-7 w-7 text-healthcare-green group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {specialty.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {specialty.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
