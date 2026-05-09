"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { skillCategories } from "@/lib/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-1/3 h-72 w-72 animate-blob-move rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 animate-blob-move rounded-full bg-accent/15 blur-3xl [animation-delay:-8s]" />
      </div>

      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              The tech I use to{" "}
              <span className="gradient-text">build & ship</span>
            </>
          }
          description="A curated stack covering backend, frontend, database, and DevOps — refined across 2.5+ years of production work."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${cat.accent} opacity-[0.06] transition-opacity group-hover:opacity-[0.12]`}
                />
                <CardContent className="p-6 sm:p-7">
                  <div className="mb-6 flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cat.accent} text-white shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.5)]`}
                    >
                      <cat.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {cat.skills.map((skill, i) => (
                      <SkillRow
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        accent={cat.accent}
                        Icon={skill.icon}
                        delay={idx * 0.05 + i * 0.05}
                      />
                    ))}
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

interface SkillRowProps {
  name: string;
  level: number;
  accent: string;
  Icon: React.ComponentType<{ className?: string }>;
  delay?: number;
}

function SkillRow({ name, level, accent, Icon, delay = 0 }: SkillRowProps) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="inline-flex items-center gap-2 font-medium">
          <Icon className="h-4 w-4 text-primary" />
          {name}
        </span>
        <span className="text-xs tabular-nums text-muted-foreground">
          {level}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted/60">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${accent}`}
        />
      </div>
    </div>
  );
}
