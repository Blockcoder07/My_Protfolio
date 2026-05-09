import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
}

export function GridBackground({ className }: GridBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px] opacity-[0.18] dark:opacity-[0.12]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background" />
      <div className="absolute -left-32 top-1/3 h-72 w-72 animate-blob-move rounded-full bg-primary/30 opacity-40 blur-3xl" />
      <div className="absolute -right-24 top-10 h-72 w-72 animate-blob-move rounded-full bg-accent/30 opacity-40 blur-3xl [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 animate-blob-move rounded-full bg-fuchsia-500/20 opacity-30 blur-3xl [animation-delay:-12s]" />
    </div>
  );
}
