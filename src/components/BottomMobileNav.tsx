"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION, SITE_CONFIG } from "@/constants";
import {
  Home,
  User,
  Calendar,
  BookOpen,
  Phone,
} from "lucide-react";
import { cn } from "@/utils/cn";

const iconMap: Record<string, React.ElementType> = {
  Home: Home,
  About: User,
  Appointment: Calendar,
  Blog: BookOpen,
};

export default function BottomMobileNav() {
  const pathname = usePathname();
  const mainItems = NAVIGATION.slice(0, 4);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-border lg:hidden">
      <div className="flex items-center justify-around py-1.5 pb-2">
        {mainItems.map((item) => {
          const Icon = iconMap[item.name] || Home;
          const active = isActive(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center gap-0.5 px-3 py-1.5 text-xs font-medium transition-colors min-w-[64px]",
                active
                  ? "text-medical-blue"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className="relative">
                <Icon
                  className={cn(
                    "h-6 w-6 transition-transform",
                    active && "scale-110"
                  )}
                />
                {active && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-medical-blue" />
                )}
              </div>
              <span
                className={cn(
                  "text-[10px] transition-colors",
                  active && "text-medical-blue font-semibold"
                )}
              >
                {item.name}
              </span>
            </Link>
          );
        })}

        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="relative flex flex-col items-center gap-0.5 px-3 py-1.5 text-xs font-medium text-healthcare-green min-w-[64px]"
        >
          <div className="relative">
            <Phone className="h-6 w-6" />
            <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-healthcare-green" />
          </div>
          <span className="text-[10px] font-semibold">Call</span>
        </a>
      </div>
    </nav>
  );
}
