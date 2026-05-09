"use client";

import * as React from "react";
import { Github, Linkedin, Mail, Heart, Sparkles } from "lucide-react";
import { personal } from "@/lib/data/personal";
import { navItems } from "@/lib/data/nav";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-10 border-t border-border/50">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-base font-semibold tracking-tight"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="gradient-text">Vishal</span>
              <span className="text-foreground/80">.dev</span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Full Stack .NET Developer crafting scalable, AI-ready digital
              products with ASP.NET Core, Angular, and SQL Server.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/40 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
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
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                Navigate
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                Explore
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                {navItems.slice(4).map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                Contact
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href={`mailto:${personal.email}`}
                    className="break-all text-muted-foreground transition-colors hover:text-primary"
                  >
                    {personal.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${personal.phone}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {personal.phone}
                  </a>
                </li>
                <li className="text-muted-foreground">{personal.location}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Designed & developed with{" "}
            <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" /> by{" "}
            <span className="gradient-text font-semibold">{personal.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
