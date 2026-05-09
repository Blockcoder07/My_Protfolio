"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Code2,
  Layers3,
  Rocket,
  ShieldCheck,
  Cloud,
  Database,
  Boxes,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personal } from "@/lib/data/personal";

const pillars = [
  {
    icon: Code2,
    title: "Backend Engineering",
    description:
      "Designing clean, layered ASP.NET Core APIs and MVC apps with SOLID principles.",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Boxes,
    title: "Full-Stack Delivery",
    description:
      "From Angular UI down to SQL Server schemas — owning features end-to-end.",
    accent: "from-sky-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Performant Data",
    description:
      "Tuning T-SQL, designing schemas, and shipping production-grade stored procedures.",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    icon: Cloud,
    title: "Azure DevOps & CI/CD",
    description:
      "Reliable releases via pipelines, Git workflows, and automated deployments.",
    accent: "from-amber-500 to-orange-500",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Engineer who turns{" "}
              <span className="gradient-text">complex problems</span> into clean
              software.
            </>
          }
          description={personal.about}
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
              <CardContent className="p-7 sm:p-8">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> What I do
                </div>
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Building modern .NET products with{" "}
                  <span className="gradient-text">purpose</span>.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {personal.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {personal.highlights.map((h) => (
                    <Badge key={h} variant="glass">
                      <ShieldCheck className="mr-1.5 h-3 w-3 text-primary" />
                      {h}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 transition group-hover:opacity-100" />
                  <CardContent className="p-6">
                    <div
                      className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${p.accent} text-white shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.4)]`}
                    >
                      <p.icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-semibold tracking-tight">
                      {p.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="sm:col-span-2"
            >
              <Card className="relative overflow-hidden border-primary/30">
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/15 via-fuchsia-500/10 to-accent/15" />
                <CardContent className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                      <Rocket className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold tracking-tight">
                        Ready to ship your next .NET product?
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Let&apos;s collaborate to build something fast,
                        beautiful and reliable.
                      </p>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/20"
                  >
                    <Layers3 className="h-4 w-4" />
                    Start a project
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
