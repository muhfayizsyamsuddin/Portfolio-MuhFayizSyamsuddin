import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/johndeveloper",
      color: "hover:text-foreground",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/johndeveloper",
      color: "hover:text-primary",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:john@developer.com",
      color: "hover:text-accent",
    },
  ];

  return (
    <section className="py-16 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-6">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="ghost"
              size="lg"
              asChild
              className={`group transition-all duration-300 hover:scale-110 ${link.color}`}
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-6 w-6" />
                <span className="sr-only">{link.name}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
