"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Loader() {
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background"
        >
          <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px] opacity-[0.18]" />
          <div className="absolute -left-32 top-1/3 h-72 w-72 animate-blob-move rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -right-24 bottom-20 h-72 w-72 animate-blob-move rounded-full bg-accent/30 blur-3xl [animation-delay:-6s]" />

          <div className="relative flex flex-col items-center">
            <div className="relative flex h-20 w-20 items-center justify-center">
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.9, 1.05, 0.9], opacity: 1 }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-50 blur-xl"
              />
              <span className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,hsl(var(--primary)),hsl(var(--accent)),transparent_60%)]" />
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-background/80 backdrop-blur-xl">
                <Sparkles className="h-7 w-7 text-primary" />
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-6 text-sm font-medium uppercase tracking-[0.4em]"
            >
              <span className="gradient-text">Vishal</span>
              <span className="text-muted-foreground"> · loading</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
