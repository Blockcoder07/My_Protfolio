"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Award, ArrowUpRight, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { certifications } from "@/lib/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-32 h-72 w-72 animate-blob-move rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-72 w-72 animate-blob-move rounded-full bg-accent/15 blur-3xl [animation-delay:-8s]" />
      </div>

      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Certifications"
          title={
            <>
              Continuous <span className="gradient-text">learning</span> &
              certifications
            </>
          }
          description="Hand-picked certifications and training that sharpen my .NET, frontend, database, and DevOps craft."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${cert.accent} opacity-[0.07] transition-opacity group-hover:opacity-[0.16]`}
                />
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cert.accent} text-2xl shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.5)]`}
                    >
                      {cert.icon}
                    </div>
                    <ArrowUpRight className="h-4 w-4 -translate-x-1 -translate-y-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-primary group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-tight tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="mt-1 inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4 text-primary" />
                    {cert.issuer}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {cert.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> {cert.year}
                    </span>
                    <span className="font-medium text-primary/80">
                      Verified
                    </span>
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
