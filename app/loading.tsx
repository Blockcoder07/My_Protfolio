import { Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-background">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px] opacity-[0.18]" />
      <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
      <div className="relative flex flex-col items-center">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <span className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,hsl(var(--primary)),hsl(var(--accent)),transparent_60%)]" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-background/80 backdrop-blur-xl">
            <Sparkles className="h-7 w-7 text-primary" />
          </span>
        </div>
        <div className="mt-6 text-sm font-medium uppercase tracking-[0.4em]">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Vishal
          </span>
          <span className="text-muted-foreground"> · loading</span>
        </div>
      </div>
    </div>
  );
}
