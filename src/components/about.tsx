"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { BookOpen, Code2, Lightbulb, Rocket } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: <Code2 className="h-4 w-4" />,
      title: "Full-Stack Developer",
      description:
        "Experienced with Next.js, Node.js, Express.js, PostgreSQL, and MongoDB",
    },
    {
      icon: <Lightbulb className="h-4 w-4" />,
      title: "Problem Solving",
      description:
        "Transitioned from Agricultural Tech to Software Development",
    },
    {
      icon: <Rocket className="h-4 w-4" />,
      title: "Real-World Projects",
      description:
        "Built production-ready systems from enterprise operations platforms to payment and mobile apps",
    },
    {
      icon: <BookOpen className="h-4 w-4" />,
      title: "Continuous Learning",
      description: "Bootcamp graduate, eager to adapt and grow globally",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 scroll-mt-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Building reliable web applications for real-world business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Profile Image Section */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl overflow-hidden bg-primary/10 p-1">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/faiz.jpg"
                    alt="Muh. Fayiz Syamsuddin"
                    className="w-full h-full object-cover"
                    width={256}
                    height={256}
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary/50 backdrop-blur-sm rounded-full p-3 shadow-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold text-foreground">
                Muh. Fayiz Syamsuddin
              </h3>
              <Badge
                variant="secondary"
                className="text-sm bg-primary/10 text-primary border-primary/20"
              >
                Full-Stack Developer
              </Badge>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="lg:col-span-8 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Main Description */}
            <Card className="border-border/50 shadow-sm">
              <CardContent className="p-8 space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I&apos;m a{" "}
                  <span className="text-foreground font-medium">
                    Full-Stack Developer
                  </span>{" "}
                  who transitioned into software development after completing a degree in{" "}
                  <span className="text-foreground font-medium">
                    Agricultural Technology
                  </span>
                  . My academic background in automation and instrumentation shaped a
                  structured approach to problem-solving and technical systems.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  After completing the{" "}
                  <span className="text-foreground font-medium">
                    Full-Stack JavaScript Immersive program at Hacktiv8 Indonesia
                  </span>
                  , I continued developing my skills through real-world projects and
                  technical training in Docker and microservices.
                </p>
              </CardContent>
            </Card>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full group">
                    <CardContent className="p-4 text-center space-y-2">
                      <div className="mx-auto w-10 h-10 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center text-primary transition-all duration-300">
                        {item.icon}
                      </div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary text-xs transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
