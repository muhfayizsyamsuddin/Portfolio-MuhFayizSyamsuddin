"use client";

import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // const socialLinks = [
  //   {
  //     name: "GitHub",
  //     icon: Github,
  //     href: "https://github.com/muhfayizsyamsuddin",
  //     label: "github.com/muhfayizsyamsuddin",
  //   },
  //   {
  //     name: "LinkedIn",
  //     icon: Linkedin,
  //     href: "https://linkedin.com/in/muhfayizsyamsuddin",
  //     label: "linkedin.com/in/muh-fayiz-syamsuddin-b43ba2339",
  //   },
  //   {
  //     name: "Email",
  //     icon: Mail,
  //     href: "mailto:muhfayiz14@gmail.com",
  //     label: "muhfayiz14@gmail.com",
  //   },
  // ];
  const bottomSocialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/muhfayizsyamsuddin",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:muhfayiz14@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/muh-fayiz-syamsuddin-b43ba2339",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/muhfayizsyamsuddin", // Ganti dengan Instagram Anda
    },
  ];

  return (
    <motion.footer
      className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-4 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"> */}
        {/* Brand Section */}
        {/* <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Muh. Fayiz Syamsuddin
            </h3>
            <p className="text-sm text-muted-foreground text-pretty">
              Full-Stack Developer passionate about creating innovative web
              solutions and turning ideas into reality.
            </p>
            <p className="text-sm text-muted-foreground">
              Currently available for freelance projects and full-time
              opportunities.
            </p>
          </div> */}

        {/* Quick Links */}
        {/* <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              >
                About Me
              </Link>
              <Link
                href="#skills"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              >
                Skills
              </Link>
              <Link
                href="#experience"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              >
                Contact
              </Link>
            </nav>
          </div> */}

        {/* Connect Section */}
        {/* <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Let&apos;s Connect
            </h4>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  aria-label={`Connect with Alex Johnson on ${link.name}`}
                >
                  <link.icon
                    className="h-4 w-4 group-hover:text-primary transition-colors"
                    aria-hidden="true"
                  />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div> */}
        {/* </div> */}

        {/* Bottom Section */}
        <motion.div
          className="border-border/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-sm text-foreground text-center md:text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              © {currentYear} Muh. Fayiz Syamsuddin. All rights reserved.
            </motion.p>

            {/* Social Media Icons */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {bottomSocialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary transition-all duration-300 p-2"
                    aria-label={`Visit ${link.name} profile`}
                  >
                    <link.icon
                      className="h-5 w-5 group-hover:scale-110 transition-all duration-300"
                      aria-hidden="true"
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
