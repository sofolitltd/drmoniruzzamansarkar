"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { NAVIGATION, SITE_CONFIG } from "@/constants";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/utils/cn";
import { doctor } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/95 backdrop-blur-sm py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white border border-gray-300">
              <Image
                src={doctor.image}
                alt={`${doctor.name} - ${doctor.title}`}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-heading font-bold text-foreground text-sm leading-tight">
                Dr. Md. Moniruzzaman Sarkar
              </p>
              <p className="text-[10px] text-muted-foreground leading-tight">
                MBBS · BCS (Health) · FCPS (Medicine | Gastroenterology)
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-medical-blue transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-medical-blue"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
            <Link
              href="/appointment"
              className="bg-healthcare-green text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-healthcare-green/90 transition-colors"
            >
              Book Appointment
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border mt-4">
            <nav className="flex flex-col gap-4">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground/80 hover:text-medical-blue transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-2 text-medical-blue font-medium"
                >
                  <Phone className="h-4 w-4" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>
                <Link
                  href="/appointment"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-healthcare-green text-white px-6 py-3 rounded-full text-center font-medium"
                >
                  Book Appointment
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
