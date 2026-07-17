import Link from "next/link";
import Image from "next/image";
import { doctor, SITE_CONFIG } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-background via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-healthcare-green/10 text-healthcare-green px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-healthcare-green rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">
                Accepting New Patients
              </span>
            </div>

            <div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
                {doctor.name}
              </h1>
              <p className="text-xl text-medical-blue font-medium mb-2">
                {doctor.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {doctor.qualifications.map((qual) => (
                  <span
                    key={qual}
                    className="bg-medical-blue/10 text-medical-blue px-3 py-1 rounded-full text-sm"
                  >
                    {qual}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {doctor.mission}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/appointment">
                <Button
                  size="lg"
                  className="bg-healthcare-green hover:bg-healthcare-green/90 text-white rounded-full px-8"
                >
                  <CalendarCheck className="h-5 w-5 mr-2" />
                  Book Appointment
                </Button>
              </Link>
              <a href={`tel:${SITE_CONFIG.phone}`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white rounded-full px-8"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-healthcare-green text-healthcare-green hover:bg-healthcare-green hover:text-white rounded-full px-8"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-medical-blue">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-medical-blue">5000+</p>
                <p className="text-sm text-muted-foreground">Happy Patients</p>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-medical-blue">5</p>
                <p className="text-sm text-muted-foreground">Specializations</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/20 to-healthcare-green/20 rounded-3xl blur-3xl"></div>
              <div className="relative w-full flex items-center justify-center">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name} - ${doctor.title} and ${doctor.qualifications.join(", ")}`}
                  width={500}
                  height={600}
                  priority
                  className="relative z-10 w-full h-auto object-cover rounded-3xl border-4 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
