import { doctor } from "@/lib/data";
import { MapPin, Clock, Phone } from "lucide-react";
import Link from "next/link";

export default function Chambers() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Chambers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit us at our convenient locations for expert medical care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctor.chambers.map((chamber) => (
            <div
              key={chamber.id}
              className="p-8 rounded-2xl border border-border bg-background hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-medical-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-medical-blue" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {chamber.name}
                  </h3>
                  <p className="text-muted-foreground">{chamber.address}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-healthcare-green" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Visiting Hours
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {chamber.visitingHours}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-healthcare-green" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a
                      href={`tel:${chamber.phone}`}
                      className="text-sm text-healthcare-green hover:underline"
                    >
                      {chamber.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={chamber.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-medical-blue text-white text-center py-2.5 rounded-full text-sm font-medium hover:bg-medical-blue/90 transition-colors"
                >
                  View on Map
                </a>
                <Link
                  href="/appointment"
                  className="flex-1 bg-healthcare-green text-white text-center py-2.5 rounded-full text-sm font-medium hover:bg-healthcare-green/90 transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
