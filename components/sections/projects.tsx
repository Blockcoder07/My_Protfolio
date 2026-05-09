"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Star, Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/lib/data/projects";

export function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Selected work{" "}
              <span className="gradient-text">I&apos;m proud of</span>
            </>
          }
          description="Hand-picked projects spanning enterprise dashboards, logistics platforms, payroll automation, and secure API services."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFeatured = project.featured;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className={isFeatured ? "lg:col-span-2" : ""}
    >
      <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.4)]">
        {/* Gradient cover */}
        <div
          className={`relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br ${project.imageGradient}`}
        >
          <div className="absolute inset-0 bg-grid-pattern bg-[size:24px_24px] opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-7xl drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)] sm:text-8xl">
              {project.emoji}
            </div>
          </div>
          {isFeatured && (
            <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
              <Star className="h-3 w-3" /> Featured
            </div>
          )}
          <div className="absolute right-4 top-4 flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} GitHub repo`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md transition hover:bg-black/50"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} live demo`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md transition hover:bg-black/50"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <CardContent className="flex flex-col p-6">
          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold tracking-tight">
              {project.title}
            </h3>
            <ArrowUpRight className="h-4 w-4 -translate-x-1 -translate-y-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-primary group-hover:opacity-100" />
          </div>
          <p className="text-sm font-medium text-primary/90">
            {project.tagline}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-4 space-y-1.5 text-sm">
            {project.features.slice(0, 3).map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-muted-foreground"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Badge key={t} variant="outline" className="text-[10.5px]">
                {t}
              </Badge>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex-1"
            >
              <Button variant="outline" size="sm" className="w-full">
                <Github className="h-4 w-4" />
                Code
              </Button>
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="flex-1"
            >
              <Button size="sm" className="w-full">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
