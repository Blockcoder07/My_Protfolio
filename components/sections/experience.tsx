"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, MapPin, Calendar, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              A timeline of{" "}
              <span className="gradient-text">real-world impact</span>
            </>
          }
          description="2.5+ years across enterprise .NET teams — shipping modules, optimizing databases, and integrating with Angular front-ends."
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical timeline line */}
          <div
            aria-hidden
            className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary/40 via-accent/40 to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 ${
                    isLeft ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Timeline dot */}
                  <span
                    aria-hidden
                    className="absolute left-4 top-5 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2"
                  >
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_0_4px_hsl(var(--background))]" />
                  </span>

                  <div className={`pl-10 md:pl-0 ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                    <Card className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                      {exp.current && (
                        <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-500 dark:text-emerald-400">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          </span>
                          Current
                        </div>
                      )}
                      <CardContent className="p-6 sm:p-7">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground md:justify-start">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period}
                          <span className="text-border">•</span>
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </div>
                        <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                          {exp.role}
                        </h3>
                        <div className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-primary md:justify-start">
                          <Building2 className="h-4 w-4" />
                          {exp.company}
                        </div>
                        <ul className="mt-4 space-y-2 text-left text-sm leading-relaxed text-muted-foreground">
                          {exp.highlights.map((h) => (
                            <li
                              key={h}
                              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-br before:from-primary before:to-accent"
                            >
                              {h}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5 flex flex-wrap gap-2 md:justify-start">
                          {exp.stack.map((tech) => (
                            <Badge key={tech} variant="glass">
                              <Sparkles className="mr-1 h-3 w-3 text-primary" />
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div
                    className={`hidden md:block ${isLeft ? "md:pl-10" : "md:pr-10 md:text-right"}`}
                  >
                    <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur-md">
                      <Briefcase className="h-3.5 w-3.5 text-primary" />
                      {exp.role} • {exp.period.split("–")[0].trim()}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
