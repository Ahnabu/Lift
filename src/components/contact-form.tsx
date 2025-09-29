"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { contactFormSchema, type ContactFormData } from "@/schemas/contact";
import { submitContactForm } from "@/services/contact";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const result = await submitContactForm(data);

      if (result.success) {
        setSubmitMessage({ type: "success", text: result.message });
        reset();
      } else {
        setSubmitMessage({ type: "error", text: result.message });
      }
    } catch {
      setSubmitMessage({
        type: "error",
        text: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Call-to-Action Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Elevate Your Property?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Contact us today for a free consultation and a personalized quote
            from our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 px-8 py-3 text-lg font-semibold"
              onClick={() =>
                document
                  .getElementById("contact-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Request a Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-semibold"
              onClick={() =>
                document
                  .getElementById("contact-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Let&apos;s Discuss Your Project
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and our experts will get back to you
                with a personalized solution!
              </p>
            </div>

            <div className="bg-card rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      Your Name*
                    </label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Enter your full name"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      Your E-mail*
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="Enter your email address"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Your Phone*
                  </label>
                  <Input
                    id="phone"
                    {...register("phone")}
                    placeholder="Enter your phone number"
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Tell us about your project requirements, building type, floor count, or any specific needs"
                    rows={5}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {submitMessage && (
                  <div
                    className={`p-4 rounded-md ${
                      submitMessage.type === "success"
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-red-100 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitMessage.text}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  {isSubmitting ? "SENDING REQUEST..." : "Contact Us Now"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}