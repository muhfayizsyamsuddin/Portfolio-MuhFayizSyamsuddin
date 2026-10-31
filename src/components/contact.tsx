"use client";

import type React from "react";
import { useState, useRef } from "react";
import {
  Check,
  Copy,
  Mail,
  Github,
  Linkedin,
  Send,
  AlertCircle,
  Instagram,
  MapPin,
  ArrowUpRight,
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
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("muhfayiz14@gmail.com");
    setCopiedEmail(true);
    toast({
      title: "Email copied to clipboard",
      description: "muhfayiz14@gmail.com is ready to paste.",
    });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

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
      contactFormSchema.parse(data);

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_REPLY!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast({
        title: "Message sent successfully",
        description: "Thank you for reaching out. I will get back to you shortly.",
      });

      form.current.reset();
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          if (err.path) {
            fieldErrors[String(err.path[0])] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Failed to send message",
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
      href: "https://linkedin.com/in/muh-fayiz-syamsuddin",
      label: "linkedin.com/in/muh-fayiz-syamsuddin",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/faizms14_",
      label: "@faizms14_",
    },
  ];

  return (
    <div className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header selaras dengan section lain */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">
            Collaboration & Inquiries
          </p>
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4"
          >
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Available for full-time software engineering roles, backend/AI automation projects, and technical collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels & Availability Info */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Status Card */}
            <div className="rounded-2xl border border-border/80 bg-card/40 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Work
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  Makassar, ID
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Open to remote or on-site opportunities as a Full-Stack Developer, Backend Engineer, or AI Workflow Engineer.
              </p>
            </div>

            {/* Social Channels dengan Fitur Quick Copy untuk Email */}
            <div className="rounded-2xl border border-border/80 bg-card/40 divide-y divide-border/50 overflow-hidden">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={link.name === "Email" ? handleCopyEmail : undefined}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="flex items-center justify-between p-4 hover:bg-primary/5 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <link.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {link.name}
                      </p>
                      <p className="text-xs font-mono text-muted-foreground">
                        {link.label}
                      </p>
                    </div>
                  </div>
                  {link.name === "Email" ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono border border-border bg-background/60 text-muted-foreground group-hover:border-primary/40 group-hover:text-primary transition-colors">
                      {copiedEmail ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-400" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          Copy
                        </>
                      )}
                    </span>
                  ) : (
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-border/80 bg-card/40 backdrop-blur-sm p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs font-mono text-muted-foreground mb-6">
                Fill out the form below and I&apos;ll respond via email.
              </p>

              <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="honeypot"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-mono uppercase text-muted-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className={`rounded-xl bg-background/60 border-border/80 focus:border-primary ${errors.name ? "border-red-500" : ""
                        }`}
                      suppressHydrationWarning
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-mono uppercase text-muted-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className={`rounded-xl bg-background/60 border-border/80 focus:border-primary ${errors.email ? "border-red-500" : ""
                        }`}
                      suppressHydrationWarning
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-mono uppercase text-muted-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell me about your role, project timeline, or technical needs..."
                    rows={5}
                    className={`rounded-xl bg-background/60 border-border/80 focus:border-primary resize-none ${errors.message ? "border-red-500" : ""
                      }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 disabled:opacity-50 cursor-pointer"
                  suppressHydrationWarning
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}