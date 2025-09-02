"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  MapPin,
  Award,
  Code,
  GraduationCap,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    {
      type: "internship",
      title: "Frontend Developer Intern",
      company: "TechStart Solutions",
      location: "Remote",
      duration: "Jun 2024 - Aug 2024",
      description:
        "Developed responsive web components using React and TypeScript. Collaborated with senior developers to implement new features and optimize existing codebase.",
      impact: [
        "Improved page load times by 35% through code optimization",
        "Built 12+ reusable components adopted across 3 product teams",
        "Reduced bug reports by 40% with comprehensive testing practices",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Git"],
      icon: <Code className="h-5 w-5" />,
    },
    {
      type: "education",
      title: "Full-Stack Web Development Bootcamp",
      company: "CodePath Academy",
      location: "Online",
      duration: "Jan 2024 - May 2024",
      description:
        "Intensive 20-week program covering full-stack development. Built multiple projects including e-commerce platforms, social media apps, and RESTful APIs.",
      impact: [
        "Completed 8 full-stack projects with 95% average grade",
        "Led team of 4 developers in capstone project deployment",
        "Mastered 15+ technologies in modern web development stack",
      ],
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express.js"],
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      type: "project",
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      duration: "Mar 2024 - Present",
      description:
        "Developing custom websites and web applications for small businesses. Managing client relationships, project timelines, and delivering solutions.",
      impact: [
        "Delivered 6 client projects with 100% satisfaction rate",
        "Increased client website traffic by average of 60%",
        "Generated $15K+ revenue while maintaining full-time studies",
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      icon: <Code className="h-5 w-5" />,
    },
    {
      type: "internship",
      title: "Assistant Supervisor",
      company: "Agricultural Extension Center",
      location: "Sidenreng Rappang, Sulawesi Selatan",
      duration: "January 2023 - February 2023",
      description:
        "Assisted in the development and implementation of agricultural programs. Coordinated with local farmers to improve crop yields and promote sustainable practices.",
      impact: [
        "Improved crop yields by an average of 30% through targeted training sessions",
        "Developed educational materials on sustainable farming practices",
        "Facilitated workshops for over 100 local farmers",
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      icon: <Code className="h-5 w-5" />,
    },
  ];

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Sep 2024",
      credentialId: "AWS-CCP-2024-001",
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "Aug 2024",
      credentialId: "META-REACT-2024",
    },
    {
      name: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      date: "Jul 2024",
      credentialId: "FCC-JS-2024-789",
    },
  ];

  const getTypeColor = () => {
    // Simplified color scheme - all using primary color for consistency
    return "bg-primary/10 text-primary border-primary/20";
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            My journey in software development through internships, education,
            and hands-on projects
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-border/50 hidden md:block"
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "top" }}
          ></motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, x: -60, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.15 + 0.5,
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block group-hover:scale-110 transition-transform duration-300"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.15 + 0.8,
                  }}
                  viewport={{ once: true }}
                ></motion.div>{" "}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 md:ml-16">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-300">
                          {exp.icon}
                        </div>
                        <div>
                          <CardTitle className="text-card-foreground">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-base font-medium text-muted-foreground">
                            {exp.company}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={`${getTypeColor()} capitalize`}>
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-pretty">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Key Impact
                      </h4>
                      <ul className="space-y-1">
                        {exp.impact.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <Zap className="h-3 w-3 mt-1 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-all duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1 + 0.4,
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              >
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-sm text-foreground leading-tight line-clamp-2">
                          {cert.name}
                        </h4>
                        <Badge
                          variant="outline"
                          className="text-xs border-primary/20 text-primary bg-primary/5"
                        >
                          Verified
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground font-medium">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {cert.date}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
