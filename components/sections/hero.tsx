"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Sparkles,
  Github,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Particles } from "@/components/shared/particles";
import { TypingEffect } from "@/components/shared/typing-effect";
import { personal } from "@/lib/data/personal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden pb-16 pt-28 sm:pt-32"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px] opacity-[0.16] dark:opacity-[0.1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background" />
        <div className="absolute -left-32 top-20 h-[28rem] w-[28rem] animate-blob-move rounded-full bg-primary/30 opacity-50 blur-[120px]" />
        <div className="absolute -right-24 top-40 h-[26rem] w-[26rem] animate-blob-move rounded-full bg-accent/30 opacity-50 blur-[120px] [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/2 h-[20rem] w-[20rem] -translate-x-1/2 animate-blob-move rounded-full bg-fuchsia-500/20 opacity-40 blur-[120px] [animation-delay:-12s]" />
      </div>
      <Particles className="-z-10" quantity={90} />

      <div className="container relative mx-auto flex flex-col items-center text-center">
        {/* Avatar — TOP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:h-[360px] md:w-[360px]">
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,hsl(var(--primary)),hsl(var(--accent)),hsl(var(--primary)))] opacity-70 blur-2xl" />
            <div className="absolute inset-3 rounded-full bg-background/70 backdrop-blur-xl" />
            <div className="absolute inset-5 overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-primary/20 via-background to-accent/20 shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.5)]">
              <Image
                src={personal.avatar}
                alt={personal.name}
                fill
                priority
                sizes="(min-width: 768px) 360px, (min-width: 640px) 320px, 260px"
                className="object-cover object-top"
              />
            </div>

            {/* Floating tech chips */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="glass-card absolute -left-6 top-8 hidden items-center gap-2 rounded-full px-3 py-2 text-xs font-medium sm:flex md:-left-10"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
                #
              </span>
              .NET Core
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="glass-card absolute -right-6 top-12 hidden items-center gap-2 rounded-full px-3 py-2 text-xs font-medium sm:flex md:-right-10"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-orange-500 text-white">
                A
              </span>
              Angular
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="glass-card absolute -left-8 bottom-10 hidden items-center gap-2 rounded-full px-3 py-2 text-xs font-medium sm:flex md:-left-14"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
                S
              </span>
              SQL Server
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity }}
              className="glass-card absolute -right-8 bottom-16 hidden items-center gap-2 rounded-full px-3 py-2 text-xs font-medium sm:flex md:-right-14"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 text-white">
                ☁
              </span>
              Azure DevOps
            </motion.div>
          </div>
        </motion.div>

        {/* Status badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          <Badge variant="glass" className="gap-2 px-3 py-1 text-[11px]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {personal.availability}
          </Badge>
          <Badge variant="outline" className="gap-1.5 text-[11px]">
            <MapPin className="h-3 w-3" /> {personal.location}
          </Badge>
          <Badge variant="outline" className="gap-1.5 text-[11px]">
            <Sparkles className="h-3 w-3" /> {personal.experience}
          </Badge>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m <span className="gradient-text">{personal.name}</span>
          <span className="mt-3 block text-2xl font-semibold text-muted-foreground sm:text-3xl md:text-4xl">
            I build{" "}
            <TypingEffect
              words={[
                "Full Stack .NET apps",
                "ASP.NET Core APIs",
                "Angular interfaces",
                "Scalable systems",
                "Clean architectures",
              ]}
            />
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          {personal.tagline} I help teams ship production-ready .NET & Angular
          products — backed by 2.5 years of hands-on engineering across ASP.NET
          Core, Web API, SQL Server, and Azure DevOps.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={personal.resumeUrl}
            download={personal.resumeFileName}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button size="lg">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </a>
          <a href="#projects">
            <Button size="lg" variant="outline">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="glass">
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-3 text-sm text-muted-foreground"
        >
          <span>Find me on</span>
          <a
            href={personal.socials.github}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/40 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={personal.socials.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/40 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/40 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 grid w-full max-w-2xl grid-cols-3 gap-3 sm:gap-6"
        >
          {[
            { value: "2.5+", label: "Years Experience" },
            { value: "10+", label: "Projects Delivered" },
            { value: "15+", label: "Tech Stack" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card relative overflow-hidden rounded-2xl p-4 text-center"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-60" />
              <div className="text-2xl font-bold sm:text-3xl">
                <span className="gradient-text">{stat.value}</span>
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute inset-x-0 bottom-6 mx-auto hidden w-fit text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-primary md:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          Scroll
          <span className="block h-8 w-[1px] bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </a>
    </section>
  );
}
