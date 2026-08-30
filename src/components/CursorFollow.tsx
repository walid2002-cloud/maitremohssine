"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsMobile, usePrefersReducedMotion } from "@/hooks/useMedia";

export default function CursorFollow() {
  const mobile = useIsMobile();
  const reduced = usePrefersReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (mobile || reduced) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mobile, reduced]);

  if (mobile || reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[80] h-8 w-8 rounded-full border border-gold/40 mix-blend-difference"
      animate={{ x: pos.x - 16, y: pos.y - 16 }}
      transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.4 }}
    />
  );
}
