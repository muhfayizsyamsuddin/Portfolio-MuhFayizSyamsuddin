"use client";

import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "./ui/badge";
import { Database, Globe, Settings, Layers, Code2 } from "lucide-react";
import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      icon: Globe,
      skills: [
        "React.js",
        "Next.js",
        "React Native",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      category: "Backend",
      icon: Layers,
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "GraphQL",
        "Apollo Server",
      ],
    },
    {
      category: "Database & Cloud",
      icon: Database,
      skills: [
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "AWS EC2",
        "Vercel",
        "Supabase",
      ],
    },
    {
      category: "Programming Languages",
      icon: Code2,
      skills: ["JavaScript", "TypeScript", "ES6+", "C++", "OOP"],
    },
    {
      category: "Development Tools",
      icon: Settings,
      skills: [
        "Git & GitHub",
        "VS Code",
        "Responsive Design",
        "API Testing",
        "Performance Optimization",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 scroll-mt-16" id="skills">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Technologies and tools I use to craft exceptional digital
            experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group h-full">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                        <IconComponent className="w-4 h-4 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {category.category}
                      </h3>
                    </div>

                    <div className="space-y-1.5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-0.5 leading-relaxed cursor-default"
                        >
                          <span className="text-primary">•</span> {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Core Competencies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* <Card className="bg-gradient-to-r from-primary/5 via-primary/3 to-primary/5 border-primary/20 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Core Competencies
              </h3>
              <p className="text-muted-foreground mb-6 max-w-3xl mx-auto text-lg">
                Specializing in modern web development with a focus on
                performance, scalability, and user experience
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "Full-Stack Development",
                  "Modern JavaScript",
                  "React Ecosystem",
                  "API Design",
                  "Database Architecture",
                  "Cloud Deployment",
                ].map((competency) => (
                  <Badge
                    key={competency}
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 text-sm py-2 px-4 font-medium border-primary/30 bg-background/50 backdrop-blur-sm text-foreground hover:shadow-md"
                  >
                    {competency}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card> */}
        </motion.div>
      </div>
    </section>
  );
}
