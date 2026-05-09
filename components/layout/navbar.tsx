"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/data/nav";
import { personal } from "@/lib/data/personal";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [activeId, setActiveId] = React.useState<string>("home");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const ids = navItems.map((n) => n.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-5">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 sm:px-4",
          scrolled
            ? "border-border/60 bg-background/70 shadow-[0_10px_40px_-12px_hsl(var(--primary)/0.25)] backdrop-blur-xl"
            : "border-transparent bg-background/40 backdrop-blur-md",
        )}
      >
        <a
          href="#home"
          className="group flex items-center gap-2 pl-2 text-sm font-semibold tracking-tight"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[0_4px_16px_-4px_hsl(var(--primary)/0.6)]">
            <Sparkles className="h-4 w-4" />
            <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-primary to-accent opacity-60 blur-md transition group-hover:opacity-90" />
          </span>
          <span className="hidden sm:inline">
            <span className="gradient-text">Vishal</span>
            <span className="text-foreground/80">.dev</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "relative inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-primary/10 ring-1 ring-primary/30"
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 30,
                      }}
                    />
                  )}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/40 backdrop-blur-md transition-all hover:border-primary/60 hover:text-primary md:inline-flex"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/40 backdrop-blur-md transition-all hover:border-primary/60 hover:text-primary md:inline-flex"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <ThemeToggle />
          <Button
            size="sm"
            className="hidden md:inline-flex"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Hire Me
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/40 backdrop-blur-md transition-all hover:border-primary/60 hover:text-primary lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-3 right-3 top-[68px] rounded-2xl border border-border/60 bg-background/90 p-3 shadow-xl backdrop-blur-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
