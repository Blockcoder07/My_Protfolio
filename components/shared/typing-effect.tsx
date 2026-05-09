"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypingEffectProps {
  words: string[];
  className?: string;
  cursorClassName?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

export function TypingEffect({
  words,
  className,
  cursorClassName,
  typeSpeed = 90,
  deleteSpeed = 45,
  pauseTime = 1400,
}: TypingEffectProps) {
  const [text, setText] = React.useState("");
  const [wordIndex, setWordIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (!deleting && text === currentWord) {
      timeoutId = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeoutId = setTimeout(
        () => {
          setText((t) =>
            deleting
              ? currentWord.substring(0, t.length - 1)
              : currentWord.substring(0, t.length + 1),
          );
        },
        deleting ? deleteSpeed : typeSpeed,
      );
    }
    return () => clearTimeout(timeoutId);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span className="gradient-text">{text}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
        className={cn(
          "ml-1 inline-block h-[1em] w-[3px] translate-y-[2px] rounded-full bg-gradient-to-b from-primary to-accent",
          cursorClassName,
        )}
      />
    </span>
  );
}
