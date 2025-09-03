"use client";

import type React from "react";

import { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  AlertCircle,
  Instagram,
  MapPin,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { contactFormSchema } from "@/lib/validation";
import { ZodError } from "zod";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      honeypot: formData.get("honeypot") as string,
    };

    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(data);

      // Send email using EmailJS
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // Send auto reply to user
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_REPLY!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast({
        title: "✅ Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      form.current.reset();
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          if (err.path) {
            fieldErrors[String(err.path[0])] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "❌ Failed to send message",
          description:
            error instanceof Error ? error.message : "Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:muhfayiz14@gmail.com",
      label: "muhfayiz14@gmail.com",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/muhfayizsyamsuddin",
      label: "github.com/muhfayizsyamsuddin",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/muh-fayiz-syamsuddin-b43ba2339",
      label: "linkedin.com/in/muh-fayiz-syamsuddin-b43ba2339",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/faizms14_",
      label: "instagram.com/faizms14_",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 px-4 scroll-mt-16"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance"
          >
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you and discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="space-y-6 flex flex-col h-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <CardHeader className="pb-6">
                  <CardTitle className="text-foreground text-xl">
                    Send a Message
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Fill out the form below and I&apos;ll get back to you as
                    soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <input
                      type="text"
                      name="honeypot"
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className={`transition-all duration-200 focus:ring-2 focus:ring-primary/20 rounded-lg border-border/50 ${
                          errors.name
                            ? "border-red-500 focus:ring-red-500/20"
                            : "focus:border-primary/50"
                        }`}
                        suppressHydrationWarning={true}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500 flex items-center gap-1 mt-2">
                          <AlertCircle className="h-3 w-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        className={`transition-all duration-200 focus:ring-2 focus:ring-primary/20 rounded-lg border-border/50 ${
                          errors.email
                            ? "border-red-500 focus:ring-red-500/20"
                            : "focus:border-primary/50"
                        }`}
                        suppressHydrationWarning={true}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500 flex items-center gap-1 mt-2">
                          <AlertCircle className="h-3 w-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell me about your project..."
                        rows={4}
                        className={`transition-all duration-200 focus:ring-2 focus:ring-primary/20 resize-none rounded-lg border-border/50 ${
                          errors.message
                            ? "border-red-500 focus:ring-red-500/20"
                            : "focus:border-primary/50"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500 flex items-center gap-1 mt-2">
                          <AlertCircle className="h-3 w-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group transition-all duration-300 hover:scale-105 rounded-lg py-3 bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                      suppressHydrationWarning={true}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3 text-lg">
                    Available for Work
                  </h3>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                    I&apos;m currently available for freelance projects and
                    full-time opportunities. Let&apos;s discuss how we can work
                    together to bring your ideas to life.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="h-full flex flex-col space-y-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 flex-1">
                <CardHeader className="pb-0">
                  <CardTitle className="text-foreground text-xl">
                    Let&apos;s Connect
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Feel free to reach out through any of these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col justify-center">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300 group hover:shadow-sm"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                        <link.icon className="h-5 w-5 text-primary transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {link.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {link.label}
                        </p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">
                      Location
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                    Makassar, Sulawesi Selatan, Indonesia
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
