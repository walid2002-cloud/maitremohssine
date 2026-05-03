"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MagicBoxTransitionProps {
  onComplete: () => void;
}

/** Très léger souffle de tension (cinéma) — volume bas pour ne pas fatiguer l'oreille */
function playTransitionSwell() {
  try {
    const ctx = new AudioContext();
    const now = ctx.currentTime;
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.035, now);
    master.connect(ctx.destination);

    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(48, now);
    osc.frequency.exponentialRampToValueAtTime(70, now + 1.4);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(0.06, now + 0.9);
    g.gain.linearRampToValueAtTime(0, now + 2.4);
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.setValueAtTime(180, now);
    lp.frequency.linearRampToValueAtTime(320, now + 1.2);
    osc.connect(lp).connect(g).connect(master);
    osc.start(now);
    osc.stop(now + 2.3);
  } catch {
    /* ignore */
  }
}

type Phase = "breathe" | "tighten" | "bloom" | "done";

export default function MagicBoxTransition({ onComplete }: MagicBoxTransitionProps) {
  const [phase, setPhase] = useState<Phase>("breathe");

  const finish = useCallback(() => {
    setPhase("done");
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("tighten"), 2200);
    const t2 = setTimeout(() => {
      playTransitionSwell();
      setPhase("bloom");
    }, 4200);
    const t3 = setTimeout(finish, 6200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [finish]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={phase === "done" ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-[#030208]" />

      {/* Vignette cinéma */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.75)_100%)] pointer-events-none" />

      {/* Lueur centrale qui respire */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,520px)] h-[min(90vw,520px)] rounded-full pointer-events-none"
        animate={{
          scale: phase === "breathe" ? [1, 1.08, 1] : phase === "tighten" ? [1, 0.92, 1.02] : [1.02, 2.8],
          opacity: phase === "bloom" ? [0.35, 0] : [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: phase === "breathe" ? 4 : phase === "tighten" ? 2 : 1.8,
          repeat: phase === "breathe" ? Infinity : 0,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(49,46,129,0.08) 40%, transparent 70%)",
        }}
      />

      {/* Anneaux concentriques — rotation lente, suspense */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] pointer-events-none"
          style={{
            width: `${120 + i * 56}px`,
            height: `${120 + i * 56}px`,
          }}
          animate={{
            rotate: phase === "bloom" ? i % 2 === 0 ? 180 : -180 : [0, i % 2 === 0 ? 8 : -8, 0],
            scale: phase === "tighten" ? 0.88 + i * 0.02 : phase === "bloom" ? 2.2 : 1,
            opacity: phase === "bloom" ? [0.4, 0] : [0.15 - i * 0.02, 0.35 - i * 0.03, 0.15 - i * 0.02],
            borderColor:
              phase === "tighten"
                ? "rgba(167,139,250,0.25)"
                : "rgba(255,255,255,0.06)",
          }}
          transition={{
            duration: phase === "bloom" ? 1.6 : 5 + i * 0.8,
            repeat: phase === "breathe" ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Rayons très subtils */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-[45vh] origin-bottom bg-gradient-to-t from-transparent via-violet-500/20 to-transparent"
            style={{ rotate: `${i * 45}deg`, bottom: "50%" }}
            animate={{
              opacity: phase === "bloom" ? [0.2, 0] : [0.05, 0.15, 0.05],
              scaleY: phase === "tighten" ? 0.85 : 1,
            }}
            transition={{ duration: 4, repeat: phase === "bloom" ? 0 : Infinity, delay: i * 0.1 }}
          />
        ))}
      </div>

      {/* Particules fines (poussière de lumière) */}
      <AnimatePresence>
        {phase === "bloom" && (
          <div className="absolute inset-0 z-10 pointer-events-none">
            {Array.from({ length: 48 }).map((_, i) => {
              const angle = (i / 48) * Math.PI * 2 + Math.random() * 0.4;
              const distance = 180 + Math.random() * 320;
              return (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full"
                  style={{
                    background:
                      i % 4 === 0
                        ? "rgba(196,181,253,0.7)"
                        : i % 4 === 1
                          ? "rgba(129,140,248,0.5)"
                          : "rgba(255,255,255,0.35)",
                    boxShadow: "0 0 6px rgba(167,139,250,0.4)",
                  }}
                  initial={{ x: 0, y: 0, scale: 1, opacity: 0.9 }}
                  animate={{
                    x: Math.cos(angle) * distance,
                    y: Math.sin(angle) * distance,
                    scale: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1.4 + Math.random() * 0.4,
                    ease: [0.22, 1, 0.36, 1],
                    delay: Math.random() * 0.15,
                  }}
                />
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Noyau central — portail */}
      <motion.div
        className="relative z-20 flex items-center justify-center"
        animate={
          phase === "breathe"
            ? { scale: [1, 1.03, 1] }
            : phase === "tighten"
              ? { scale: [1, 0.94, 1.06] }
              : { scale: [1.06, 14], opacity: [1, 0] }
        }
        transition={
          phase === "breathe"
            ? { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
            : phase === "tighten"
              ? { duration: 2, ease: [0.45, 0, 0.55, 1] }
              : { duration: 1.65, ease: [0.22, 1, 0.36, 1] }
        }
      >
        <div className="relative w-32 h-32 sm:w-40 sm:h-40">
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow:
                phase === "tighten"
                  ? "0 0 60px rgba(124,58,237,0.45), inset 0 0 40px rgba(0,0,0,0.5)"
                  : "0 0 80px rgba(124,58,237,0.25), inset 0 0 30px rgba(0,0,0,0.4)",
            }}
            transition={{ duration: 1.5 }}
          />

          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-950/90 via-[#0f0a1f] to-indigo-950/90 border border-violet-500/20 backdrop-blur-md overflow-hidden shadow-2xl shadow-violet-950/50">
            <motion.div
              className="absolute inset-0 opacity-40"
              animate={{ rotate: phase === "bloom" ? 90 : 360 }}
              transition={{
                duration: phase === "bloom" ? 1.5 : 24,
                repeat: phase === "bloom" ? 0 : Infinity,
                ease: "linear",
              }}
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, rgba(167,139,253,0.15), transparent, rgba(99,102,241,0.12), transparent)",
              }}
            />
            <div className="absolute inset-[18%] rounded-full border border-white/10 bg-black/40" />
            {/* Étoile géométrique SVG — pro */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.svg
                width="44"
                height="44"
                viewBox="0 0 48 48"
                fill="none"
                className="text-violet-300/90"
                animate={{
                  scale: phase === "tighten" ? [1, 1.12, 1.05] : [1, 1.05, 1],
                  opacity: phase === "bloom" ? [1, 0] : [0.85, 1, 0.85],
                }}
                transition={{ duration: phase === "tighten" ? 2 : 3, repeat: phase === "bloom" ? 0 : Infinity }}
              >
                <path
                  d="M24 4 L28 18 L42 18 L31 26 L35 40 L24 32 L13 40 L17 26 L6 18 L20 18 Z"
                  fill="currentColor"
                  fillOpacity="0.35"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </motion.svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Anneau d'expansion doux */}
      <AnimatePresence>
        {phase === "bloom" && (
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-violet-400/30 z-[5] pointer-events-none"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 22, opacity: 0 }}
            transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </AnimatePresence>

      {/* Flash blanc très court — cinéma */}
      <AnimatePresence>
        {phase === "bloom" && (
          <motion.div
            className="absolute inset-0 bg-white z-[15] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.05, 0] }}
            transition={{ duration: 0.45, times: [0, 0.35, 1] }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
