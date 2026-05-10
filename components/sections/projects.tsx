"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Star,
  Check,
  Lock,
} from "lucide-react";
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
          description="A live commercial product I'm shipping at Pulse Software Solutions, plus open-source full-stack .NET projects on GitHub."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
  const hasGithub = Boolean(project.github);
  const hasDemo = Boolean(project.demo);

  const visibleTech = project.tech.slice(0, 4);
  const hiddenTechCount = Math.max(project.tech.length - visibleTech.length, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Card className="group relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_50px_-20px_hsl(var(--primary)/0.45)]">
        {/* Compact gradient cover */}
        <div
          className={`relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br ${project.imageGradient}`}
        >
          <div className="absolute inset-0 bg-grid-pattern bg-[size:20px_20px] opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)] sm:text-6xl">
              {project.emoji}
            </div>
          </div>

          {/* Top-left badges */}
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {isFeatured && (
              <span className="inline-flex items-center gap-1 rounded-full border border-white/30 bg-white/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                <Star className="h-2.5 w-2.5" /> Featured
              </span>
            )}
            {hasDemo && (
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/50 bg-emerald-500/30 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-80" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
                </span>
                Live
              </span>
            )}
          </div>

          {/* Top-right round icons */}
          <div className="absolute right-3 top-3 flex gap-1.5">
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} GitHub repo`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-md transition hover:bg-black/55"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            )}
            {hasDemo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} live demo`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-md transition hover:bg-black/55"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Compact card body */}
        <CardContent className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-semibold leading-tight tracking-tight">
              {project.title}
            </h3>
            <ArrowUpRight className="mt-0.5 h-4 w-4 -translate-x-1 -translate-y-1 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-primary group-hover:opacity-100" />
          </div>

          <p className="mt-1 text-xs font-medium text-primary/90">
            {project.tagline}
          </p>

          <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Just 2 highlight features for compact cards */}
          <ul className="mt-3 space-y-1 text-xs">
            {project.features.slice(0, 2).map((f) => (
              <li
                key={f}
                className="flex items-start gap-1.5 text-muted-foreground"
              >
                <Check className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                <span className="line-clamp-1">{f}</span>
              </li>
            ))}
          </ul>

          {/* Tech chips — max 4 visible + overflow counter */}
          <div className="mt-3 flex flex-wrap gap-1">
            {visibleTech.map((t) => (
              <Badge
                key={t}
                variant="outline"
                className="px-1.5 py-0 text-[9.5px] font-medium"
              >
                {t}
              </Badge>
            ))}
            {hiddenTechCount > 0 && (
              <Badge
                variant="outline"
                className="px-1.5 py-0 text-[9.5px] font-medium"
              >
                +{hiddenTechCount}
              </Badge>
            )}
          </div>

          {project.sourceNote && (
            <p className="mt-3 inline-flex items-center gap-1 text-[10px] text-muted-foreground">
              <Lock className="h-2.5 w-2.5" />
              {project.sourceNote}
            </p>
          )}

          {/* Action buttons — full-width row at bottom */}
          <div className="mt-auto flex items-center gap-1.5 pt-4">
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex-1"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-full px-3 text-[11px]"
                >
                  <Github className="h-3 w-3" />
                  Code
                </Button>
              </a>
            )}
            {hasDemo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="flex-1"
              >
                <Button
                  size="sm"
                  className="h-8 w-full px-3 text-[11px]"
                >
                  <ExternalLink className="h-3 w-3" />
                  Live Demo
                </Button>
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
