import { Calendar, MapPin, Stethoscope, ClipboardList, FileText, RefreshCw } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Calendar,
  MapPin,
  Stethoscope,
  ClipboardList,
  FileText,
  RefreshCw,
};

export default function Timeline() {
  const timeline = [
    {
      step: "01",
      title: "Book Appointment",
      description:
        "Schedule your appointment online or by phone. Choose your preferred time and chamber location.",
      icon: "Calendar",
    },
    {
      step: "02",
      title: "Visit Chamber",
      description:
        "Arrive at the chamber with your medical reports and ID. Our staff will assist you with check-in.",
      icon: "MapPin",
    },
    {
      step: "03",
      title: "Consultation",
      description:
        "Dr. Sarkar will review your history, perform examination, and discuss your concerns in detail.",
      icon: "Stethoscope",
    },
    {
      step: "04",
      title: "Diagnosis",
      description:
        "Based on symptoms and tests, Dr. Sarkar will provide a clear diagnosis explaining your condition.",
      icon: "ClipboardList",
    },
    {
      step: "05",
      title: "Treatment Plan",
      description:
        "You'll receive a personalized treatment plan with medications, diet advice, and follow-up schedule.",
      icon: "FileText",
    },
    {
      step: "06",
      title: "Follow-up",
      description:
        "Regular follow-up visits ensure your progress and allow adjustments to your treatment plan.",
      icon: "RefreshCw",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Consultation Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, step-by-step process designed to provide you with the best
            possible care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {timeline.map((item, index) => {
            const Icon = iconMap[item.icon] || ClipboardList;
            return (
              <div
                key={item.step}
                className="relative p-8 rounded-2xl border border-border bg-white"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-medical-blue" />
                  </div>
                  <span className="text-sm font-bold text-medical-blue">
                    Step {item.step}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
