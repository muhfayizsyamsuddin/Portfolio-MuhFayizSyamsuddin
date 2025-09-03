"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react"; // icon spinner

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    try {
      // kirim email ke kamu
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // auto reply ke user
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_REPLY!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast({
        title: "✅ Message Sent",
        description: "Thanks for reaching out! I’ll get back to you soon.",
      });

      form.current.reset();
    } catch (err) {
      toast({
        title: "❌ Failed to Send",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="max-w-lg mx-auto p-6 bg-card shadow-lg rounded-2xl border border-border"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-primary mb-4">Get in Touch</h2>
      <p className="text-muted-foreground mb-6">
        Have a question or just want to say hi? Fill out the form below and I’ll
        get back to you soon.
      </p>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          required
          className="p-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <motion.button
          type="submit"
          whileHover={{ scale: loading ? 1 : 1.05 }}
          whileTap={{ scale: loading ? 1 : 0.95 }}
          disabled={loading}
          className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium py-3 rounded-xl shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </motion.button>
      </form>
    </motion.section>
  );
}
