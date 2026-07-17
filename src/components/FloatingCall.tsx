"use client";

import { SITE_CONFIG } from "@/constants";
import { Phone } from "lucide-react";

export default function FloatingCall() {
  return (
    <a
      href={`tel:${SITE_CONFIG.phone}`}
      className="fixed bottom-20 right-20 z-50 flex items-center justify-center w-12 h-12 bg-medical-blue rounded-full shadow-lg hover:bg-medical-blue/90 transition-all hover:scale-110"
      aria-label="Call now"
    >
      <Phone className="h-5 w-5 text-white" />
    </a>
  );
}
