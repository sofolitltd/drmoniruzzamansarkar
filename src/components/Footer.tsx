import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, SITE_CONFIG } from "@/constants";
import { doctor } from "@/lib/data";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white border border-gray-300">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name} - ${doctor.title}`}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-heading font-bold text-sm leading-tight">
                  Dr. Md. Moniruzzaman Sarkar
                </p>
                <p className="text-[10px] text-white/70 leading-tight">
                  MBBS · BCS (Health) · FCPS (Medicine | Gastroenterology)
                </p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Providing compassionate, evidence-based medical care with a focus on
              Gastroenterology, Diabetes, and General Medicine.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-healthcare-green" />
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-sm hover:text-healthcare-green transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-healthcare-green" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm hover:text-healthcare-green transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-healthcare-green mt-0.5" />
                <p className="text-sm">{SITE_CONFIG.address}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-healthcare-green transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-healthcare-green transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              Chamber Information
            </h3>
            <div className="space-y-4">
              {FOOTER_LINKS.chambers.map((chamber, index) => (
                <div key={index} className="border-l-2 border-healthcare-green pl-4">
                  <p className="text-sm text-white/80">{chamber}</p>
                </div>
              ))}
              <div className="flex items-start gap-3 mt-4">
                <Clock className="h-4 w-4 text-healthcare-green mt-0.5" />
                <p className="text-sm text-white/80">
                  Sat - Thu: 5:00 PM - 9:00 PM
                  <br />
                  Sun, Tue, Thu: 4:00 PM - 8:00 PM (Popular Diagnostic)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Dr. Md. Moniruzzaman Sarkar. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
