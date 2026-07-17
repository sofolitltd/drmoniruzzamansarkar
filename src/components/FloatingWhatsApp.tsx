"use client";

import { SITE_CONFIG } from "@/constants";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hello Dr. Sarkar, I would like to book an appointment."
  );

  return (
    <a
      href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50 flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5 text-white" />
    </a>
  );
}
