"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/lib/data/education";

export function EducationSection() {
  return (
    <section id="education" className="section-padding relative">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              Foundation in{" "}
              <span className="gradient-text">Computer Science</span>
            </>
          }
          description="Strong fundamentals in software engineering, algorithms, and database design — the bedrock of my full-stack journey."
        />

        <div className="mx-auto max-w-3xl space-y-5">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <Card className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-60" />
                <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:p-8">
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.5)]">
                    <GraduationCap className="h-7 w-7" />
                    <span className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-30 blur-xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {edu.period}
                      </span>
                      <span className="text-border">•</span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        India
                      </span>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-primary">
                      <BookOpen className="h-4 w-4" />
                      {edu.institution}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {edu.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
