import { trustCards } from "@/lib/data";
import { GraduationCap, FileSearch, Microscope, HeartHandshake, Activity } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  FileSearch,
  Microscope,
  HeartHandshake,
  Activity,
};

export default function TrustCards() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Dr. Moniruzzaman Sarkar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining academic excellence with clinical expertise to provide
            world-class healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustCards.map((card) => {
            const Icon = iconMap[card.icon] || Activity;
            return (
              <div
                key={card.id}
                className="group p-8 rounded-2xl border border-border bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-medical-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-medical-blue group-hover:text-white transition-colors">
                  <Icon className="h-7 w-7 text-medical-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
