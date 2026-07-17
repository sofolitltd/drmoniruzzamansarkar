"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { doctor, SITE_CONFIG } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Calendar, User, Phone, Mail, FileText, Clock } from "lucide-react";

const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  reason: z.string().min(10, "Please provide more details"),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

export default function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      reason: "",
    },
  });

  const onSubmit = async (data: AppointmentFormData) => {
    console.log("Appointment submitted:", data);
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert(
      "Thank you for booking an appointment! We will confirm your appointment shortly via phone or email."
    );
    form.reset();
    setIsSubmitting(false);
  };

  const timeSlots = [
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Book an Appointment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule your visit with Dr. Md. Moniruzzaman Sarkar. Fill out the
            form below and we&apos;ll confirm your appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                              placeholder="Your full name"
                              className="pl-10"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              className="pl-10"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                              type="tel"
                              placeholder="+8801XXXXXXXXX"
                              className="pl-10"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Date *</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                              type="date"
                              className="pl-10"
                              min={new Date().toISOString().split("T")[0]}
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Time *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <select
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-background"
                            {...field}
                          >
                            <option value="">Select a time slot</option>
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot}>
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="reason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reason for Visit *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <FileText className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                          <Textarea
                            placeholder="Please describe your symptoms or reason for visit..."
                            className="pl-10 min-h-[120px]"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-healthcare-green hover:bg-healthcare-green/90 text-white rounded-full"
                >
                  {isSubmitting ? "Booking..." : "Book Appointment"}
                </Button>
              </form>
            </Form>
          </div>

          <div className="space-y-6">
            <div className="bg-background p-6 rounded-2xl border border-border">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Appointment Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground">Chamber</p>
                  <p className="text-sm text-muted-foreground">
                    {doctor.chambers[0]?.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {doctor.chambers[0]?.address}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Visiting Hours</p>
                  <p className="text-sm text-muted-foreground">
                    {doctor.chambers[0]?.visitingHours}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Contact</p>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-sm text-healthcare-green hover:underline"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-healthcare-green/5 p-6 rounded-2xl border border-healthcare-green/20">
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                Important Notes
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Please arrive 10 minutes before your scheduled time</li>
                <li>• Bring your previous medical reports and ID</li>
                <li>• Fasting may be required for certain tests</li>
                <li>• We accept most major insurance providers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
