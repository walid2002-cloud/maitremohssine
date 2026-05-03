"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

interface IntroSceneProps {
  onEnter: () => void;
}

function useHorrorAudio() {
  const [audioStarted, setAudioStarted] = useState(false);

  const startAudio = useCallback(() => {
    if (audioStarted) return;
    setAudioStarted(true);

    try {
      const ctx = new AudioContext();
      const now = ctx.currentTime;

      // Quiet breath-like noise (filtered white noise)
      const noiseLength = 30;
      const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * noiseLength, ctx.sampleRate);
      const noiseData = noiseBuffer.getChannelData(0);
      for (let i = 0; i < noiseData.length; i++) {
        noiseData[i] = (Math.random() * 2 - 1) * 0.18;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuffer;
      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = "lowpass";
      noiseFilter.frequency.setValueAtTime(160, now);
      noiseFilter.frequency.linearRampToValueAtTime(100, now + 25);
      noiseFilter.Q.setValueAtTime(1, now);
      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0, now);
      noiseGain.gain.linearRampToValueAtTime(0.012, now + 5);
      noiseGain.gain.setValueAtTime(0.012, now + 22);
      noiseGain.gain.linearRampToValueAtTime(0, now + 28);
      noise.connect(noiseFilter).connect(noiseGain).connect(ctx.destination);
      noise.start(now);
      noise.stop(now + 28);

      // Very soft, slow drone — like a whisper from far away
      const drone = ctx.createOscillator();
      drone.type = "sine";
      drone.frequency.setValueAtTime(55, now);
      drone.frequency.linearRampToValueAtTime(52, now + 25);
      const droneGain = ctx.createGain();
      droneGain.gain.setValueAtTime(0, now);
      droneGain.gain.linearRampToValueAtTime(0.014, now + 8);
      droneGain.gain.setValueAtTime(0.014, now + 22);
      droneGain.gain.linearRampToValueAtTime(0, now + 28);
      drone.connect(droneGain).connect(ctx.destination);
      drone.start(now);
      drone.stop(now + 28);

      // Ghost fifth — haunting perfect fifth above the drone
      const fifth = ctx.createOscillator();
      fifth.type = "sine";
      fifth.frequency.setValueAtTime(82.5, now + 3);
      fifth.frequency.linearRampToValueAtTime(78, now + 25);
      const fifthGain = ctx.createGain();
      fifthGain.gain.setValueAtTime(0, now + 3);
      fifthGain.gain.linearRampToValueAtTime(0.006, now + 10);
      fifthGain.gain.setValueAtTime(0.006, now + 22);
      fifthGain.gain.linearRampToValueAtTime(0, now + 27);
      fifth.connect(fifthGain).connect(ctx.destination);
      fifth.start(now + 3);
      fifth.stop(now + 27);

      // Note aiguë très douce, grave (pas d'aigu strident)
      const cry = ctx.createOscillator();
      cry.type = "sine";
      cry.frequency.setValueAtTime(174.6, now + 8);
      cry.frequency.linearRampToValueAtTime(185, now + 20);
      cry.frequency.linearRampToValueAtTime(174.6, now + 25);
      const cryGain = ctx.createGain();
      cryGain.gain.setValueAtTime(0, now + 8);
      cryGain.gain.linearRampToValueAtTime(0.0025, now + 14);
      cryGain.gain.linearRampToValueAtTime(0.003, now + 18);
      cryGain.gain.linearRampToValueAtTime(0, now + 25);
      const cryFilter = ctx.createBiquadFilter();
      cryFilter.type = "lowpass";
      cryFilter.frequency.setValueAtTime(420, now + 8);
      cry.connect(cryFilter).connect(cryGain).connect(ctx.destination);
      cry.start(now + 8);
      cry.stop(now + 25);

    } catch {
      // Web Audio not available
    }
  }, [audioStarted]);

  return { startAudio, audioStarted };
}

export default function IntroScene({ onEnter }: IntroSceneProps) {
  const { lang, setLang } = useLang();
  const t = translations.intro[lang];
  const [phase, setPhase] = useState(-1);
  const [showButton, setShowButton] = useState(false);
  const { startAudio } = useHorrorAudio();

  const handleStart = useCallback(() => {
    startAudio();
    setPhase(0);
  }, [startAudio]);

  useEffect(() => {
    if (phase < 0) return;

    const timers = [
      setTimeout(() => setPhase(1), 1200),
      setTimeout(() => setPhase(2), 4500),
      setTimeout(() => setPhase(3), 8000),
      setTimeout(() => setPhase(4), 11500),
      setTimeout(() => setPhase(5), 15000),
      setTimeout(() => setShowButton(true), 18000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [phase >= 0]); // eslint-disable-line react-hooks/exhaustive-deps

  const dramaticLines = [
    { text: t.dramatic1, style: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white" },
    { text: t.dramatic2, style: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-400" },
    { text: t.dramatic3, style: "text-xl sm:text-2xl md:text-3xl font-bold text-white/60" },
    { text: t.dramatic4, style: "text-lg sm:text-xl md:text-2xl font-semibold text-white/40" },
    { text: t.dramatic5, style: "text-3xl sm:text-4xl md:text-5xl font-black text-red-500 animate-flicker" },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      onClick={phase < 0 ? handleStart : undefined}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#020108]" />

      {/* Red ambient glow - appears gradually */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 0 ? 1 : 0 }}
        transition={{ duration: 5 }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-950/15 rounded-full blur-[200px]"
          animate={phase >= 1 ? { scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] } : {}}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-violet-950/10 rounded-full blur-[150px]"
          animate={phase >= 2 ? { scale: [1.2, 1, 1.2] } : {}}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-red-900/8 rounded-full blur-[120px]"
          animate={phase >= 3 ? { opacity: [0.3, 0.8, 0.3] } : {}}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      {/* Red pulse on impact */}
      <AnimatePresence>
        {phase === 1 && (
          <motion.div
            className="absolute inset-0 bg-red-900/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.15, 0] }}
            transition={{ duration: 1.5 }}
          />
        )}
      </AnimatePresence>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,1,8,0.9)_100%)]" />

      {/* Scan lines */}
      {phase >= 0 && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute left-0 right-0 h-[1px] bg-red-500/15"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}

      {/* Language switcher */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        onClick={(e) => {
          e.stopPropagation();
          setLang(lang === "fr" ? "ar" : "fr");
        }}
        className="absolute top-6 right-6 z-10 px-4 py-2 text-sm font-semibold rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 backdrop-blur-sm transition-all duration-300"
      >
        {lang === "fr" ? "الدارجة" : "FR"}
      </motion.button>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* "Click to start" prompt */}
        <AnimatePresence>
          {phase < 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-20 h-20 mx-auto rounded-full border-2 border-white/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </motion.div>
              <p className="text-white/30 text-lg font-light tracking-wide">
                {lang === "fr" ? "Cliquez pour commencer" : "كليكي باش تبدا"}
              </p>
              <span className="inline-block px-5 py-2 text-xs font-bold tracking-[0.3em] uppercase text-violet-300/50 border border-violet-500/20 rounded-full">
                {t.edition}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dramatic text sequence */}
        {phase >= 0 && (
          <div className="space-y-8">
            {dramaticLines.map((line, i) => (
              <AnimatePresence key={i}>
                {phase >= i + 1 && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 60,
                      scale: i === 0 ? 1.2 : 1,
                      filter: "blur(15px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: i === 0 ? 2 : 1.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative"
                  >
                    {/* Glitch layers for dramatic lines */}
                    {(i === 0 || i === 4) && (
                      <>
                        <p
                          className={`absolute inset-0 ${line.style} animate-glitch-1 text-red-500/20`}
                          aria-hidden="true"
                          style={
                            i === 0
                              ? { textShadow: "0 0 60px rgba(239, 68, 68, 0.3)" }
                              : {}
                          }
                        >
                          {line.text}
                        </p>
                        <p
                          className={`absolute inset-0 ${line.style} animate-glitch-2 text-cyan-500/10`}
                          aria-hidden="true"
                        >
                          {line.text}
                        </p>
                      </>
                    )}

                    <p
                      className={`relative ${line.style}`}
                      dir={lang === "ar" ? "rtl" : "ltr"}
                      style={
                        i === 0
                          ? { textShadow: "0 0 40px rgba(255, 255, 255, 0.15)" }
                          : i === 1
                          ? { textShadow: "0 0 30px rgba(239, 68, 68, 0.3)" }
                          : i === 4
                          ? { textShadow: "0 0 40px rgba(239, 68, 68, 0.5), 0 0 80px rgba(239, 68, 68, 0.2)" }
                          : {}
                      }
                    >
                      {line.text}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        )}

        {/* Enter button */}
        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mt-14"
            >
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  onEnter();
                }}
                className="group relative inline-flex items-center gap-3 px-12 py-6 text-lg font-bold text-white rounded-2xl overflow-hidden transition-all duration-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  boxShadow: "0 0 30px rgba(239, 68, 68, 0.2), 0 0 60px rgba(124, 58, 237, 0.15)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-800 via-violet-700 to-red-800 bg-[length:200%_100%] animate-shimmer" />
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                <span className="relative z-10">{t.enter}</span>
                <motion.svg
                  className="relative z-10 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={phase >= 1 ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ delay: 1, duration: 3 }}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      </motion.div>
    </motion.div>
  );
}
