"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personal } from "@/lib/data/personal";
import { cn } from "@/lib/utils";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
    accent: "from-emerald-500 to-teal-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Blockcoder07",
    href: personal.socials.github,
    accent: "from-zinc-500 to-zinc-700",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/vishal-kumar-rameshwar",
    href: personal.socials.linkedin,
    accent: "from-sky-500 to-blue-600",
  },
];

// FormSubmit endpoint (no signup, free, unlimited).
// First-ever submission triggers a confirmation email — click the link
// in your inbox to activate, then real messages start arriving.
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${personal.email}`;

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? "New message from portfolio"),
      message: String(formData.get("message") ?? ""),
      // FormSubmit configuration fields:
      _subject: `Portfolio · ${formData.get("subject") || "New message"}`,
      _template: "table",
      _captcha: "false",
    };

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      const ok =
        res.ok && (data?.success === "true" || data?.success === true);

      if (!ok) {
        throw new Error(
          data?.message ||
            "We couldn't send your message right now. Please try again or email me directly.",
        );
      }

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 4500);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setErrorMessage(message);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-1/3 h-72 w-72 animate-blob-move rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 animate-blob-move rounded-full bg-accent/20 blur-3xl [animation-delay:-8s]" />
      </div>

      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Get in touch"
          title={
            <>
              Let&apos;s build something{" "}
              <span className="gradient-text">amazing together</span>
            </>
          }
          description="Have a project, role, or idea in mind? Drop a message — I usually respond within a day."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:col-span-5"
          >
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              <CardContent className="p-6 sm:p-7">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> Reach out
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  Available for freelance, full-time & collaborations
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Based in {personal.location}. Open to remote, on-site, and
                  hybrid roles where I can ship great .NET products.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500 dark:text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  {personal.availability}
                </div>
                <div className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {personal.location}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                  className="group"
                >
                  <Card className="h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40">
                    <CardContent className="flex items-center gap-3 p-4">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} text-white`}
                      >
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </div>
                        <div className="truncate text-sm font-medium">
                          {item.value}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <Card className="relative h-full overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Send me a message
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Messages are delivered straight to my inbox. I usually reply
                  within a day.
                </p>

                <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                        disabled={status === "submitting"}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project / Role / Collaboration"
                      disabled={status === "submitting"}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell me a bit about your project or opportunity…"
                      rows={5}
                      disabled={status === "submitting"}
                    />
                  </div>

                  {/* Inline status banner for success / error */}
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2.5 text-sm text-emerald-600 dark:text-emerald-400"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>
                        Thanks! Your message is on its way to my inbox — I&apos;ll
                        get back to you soon.
                      </span>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2.5 text-sm text-red-600 dark:text-red-400"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>
                        {errorMessage}{" "}
                        <a
                          href={`mailto:${personal.email}`}
                          className="underline underline-offset-2"
                        >
                          Email me directly
                        </a>{" "}
                        instead.
                      </span>
                    </motion.div>
                  )}

                  <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                      By submitting, you agree to be contacted via the email
                      provided.
                    </p>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "submitting"}
                      className={cn(status === "submitting" && "opacity-80")}
                    >
                      {status === "success" ? (
                        <>
                          <CheckCircle2 className="h-4 w-4" />
                          Sent!
                        </>
                      ) : status === "submitting" ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
