"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

function useAudioOnView() {
  const ref = useRef<HTMLElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true);
      try {
        const ctx = new AudioContext();
        const now = ctx.currentTime;

        // Quiet wind-like breath (filtered noise)
        const windLen = 22;
        const windBuf = ctx.createBuffer(1, ctx.sampleRate * windLen, ctx.sampleRate);
        const windData = windBuf.getChannelData(0);
        for (let i = 0; i < windData.length; i++) {
          windData[i] = (Math.random() * 2 - 1) * 0.2;
        }
        const wind = ctx.createBufferSource();
        wind.buffer = windBuf;
        const windFilter = ctx.createBiquadFilter();
        windFilter.type = "bandpass";
        windFilter.frequency.setValueAtTime(150, now);
        windFilter.frequency.linearRampToValueAtTime(250, now + 10);
        windFilter.frequency.linearRampToValueAtTime(100, now + 20);
        windFilter.Q.setValueAtTime(2, now);
        const windGain = ctx.createGain();
        windGain.gain.setValueAtTime(0, now);
        windGain.gain.linearRampToValueAtTime(0.018, now + 5);
        windGain.gain.setValueAtTime(0.018, now + 18);
        windGain.gain.linearRampToValueAtTime(0, now + 22);
        wind.connect(windFilter).connect(windGain).connect(ctx.destination);
        wind.start(now);
        wind.stop(now + 22);

        // Dark minor drone — very soft, unsettling
        const drone = ctx.createOscillator();
        drone.type = "sine";
        drone.frequency.setValueAtTime(73.4, now); // D2
        const droneGain = ctx.createGain();
        droneGain.gain.setValueAtTime(0, now);
        droneGain.gain.linearRampToValueAtTime(0.012, now + 6);
        droneGain.gain.setValueAtTime(0.012, now + 18);
        droneGain.gain.linearRampToValueAtTime(0, now + 22);
        drone.connect(droneGain).connect(ctx.destination);
        drone.start(now);
        drone.stop(now + 22);

        // Minor third above — creates sad/eerie minor chord
        const minor = ctx.createOscillator();
        minor.type = "sine";
        minor.frequency.setValueAtTime(87.3, now + 2); // F2
        const minorGain = ctx.createGain();
        minorGain.gain.setValueAtTime(0, now + 2);
        minorGain.gain.linearRampToValueAtTime(0.007, now + 8);
        minorGain.gain.setValueAtTime(0.007, now + 17);
        minorGain.gain.linearRampToValueAtTime(0, now + 22);
        minor.connect(minorGain).connect(ctx.destination);
        minor.start(now + 2);
        minor.stop(now + 22);

        // Ghost note — tritone (devil's interval), barely audible
        const ghost = ctx.createOscillator();
        ghost.type = "sine";
        ghost.frequency.setValueAtTime(103.8, now + 5); // Ab2
        ghost.frequency.linearRampToValueAtTime(104.5, now + 18);
        const ghostGain = ctx.createGain();
        ghostGain.gain.setValueAtTime(0, now + 5);
        ghostGain.gain.linearRampToValueAtTime(0.004, now + 11);
        ghostGain.gain.linearRampToValueAtTime(0.005, now + 16);
        ghostGain.gain.linearRampToValueAtTime(0, now + 22);
        ghost.connect(ghostGain).connect(ctx.destination);
        ghost.start(now + 5);
        ghost.stop(now + 22);

        // Very quiet, slow heartbeat — like hearing your own pulse in silence
        const scheduleHeartbeat = (time: number) => {
          const beat = ctx.createOscillator();
          beat.type = "sine";
          beat.frequency.setValueAtTime(40, time);
          beat.frequency.exponentialRampToValueAtTime(25, time + 0.3);
          const g = ctx.createGain();
          g.gain.setValueAtTime(0, time);
          g.gain.linearRampToValueAtTime(0.018, time + 0.04);
          g.gain.exponentialRampToValueAtTime(0.001, time + 0.5);
          beat.connect(g).connect(ctx.destination);
          beat.start(time);
          beat.stop(time + 0.6);
        };

        for (let i = 0; i < 10; i++) {
          scheduleHeartbeat(now + 3 + i * 1.8);
        }

        // Breathing LFO on wind
        const breathe = ctx.createOscillator();
        breathe.type = "sine";
        breathe.frequency.setValueAtTime(0.12, now);
        const breatheGain = ctx.createGain();
        breatheGain.gain.setValueAtTime(0.01, now);
        breathe.connect(breatheGain).connect(windGain.gain);
        breathe.start(now);
        breathe.stop(now + 22);

        audioRef.current = null;
      } catch {
        // Web Audio not supported
      }
    }
  }, [isInView, started]);

  return ref;
}

function Clock() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const secondAngle = (seconds % 60) * 6;

  return (
    <div className="relative w-32 h-32 sm:w-40 sm:h-40">
      {/* Clock face */}
      <div className="absolute inset-0 rounded-full border-2 border-red-500/20" />
      <div className="absolute inset-2 rounded-full border border-red-500/10" />

      {/* Hour marks */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = i * 30;
        return (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-0.5 h-3 bg-red-500/30 origin-bottom"
            style={{
              transform: `translate(-50%, -100%) rotate(${angle}deg) translateY(-${i % 3 === 0 ? 52 : 54}px)`,
              height: i % 3 === 0 ? "8px" : "4px",
              opacity: i % 3 === 0 ? 0.5 : 0.2,
            }}
          />
        );
      })}

      {/* Second hand - ticking ominously */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[1px] bg-red-500/80 origin-bottom"
        style={{
          height: "45%",
          transform: `translate(-50%, -100%) rotate(${secondAngle}deg)`,
        }}
        animate={{ rotate: secondAngle }}
        transition={{ type: "tween", duration: 0.1 }}
      />

      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-500/60" />
    </div>
  );
}

export default function StorySection() {
  const { lang, isRtl } = useLang();
  const t = translations.story[lang];
  const sectionRef = useAudioOnView();
  const [shakeActive, setShakeActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShakeActive(true);
      setTimeout(() => setShakeActive(false), 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      dir={isRtl ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020108] via-[#100008] to-[#0f0a2e]" />

      {/* Red pulse overlay */}
      <div className="absolute inset-0 bg-red-900/5 animate-red-pulse" />

      {/* Atmospheric glows - red-shifted */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-red-800/8 rounded-full blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-950/15 rounded-full blur-[100px]"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Dark vignette - stronger */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,1,8,0.85)_100%)]" />

      {/* Blood drip lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[10, 25, 45, 65, 80, 92].map((left, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] bg-gradient-to-b from-red-800/40 via-red-600/20 to-transparent"
            style={{ left: `${left}%`, top: 0, height: "30%" }}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: ["−100%", "400%"], opacity: [0, 0.6, 0] }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Glitch overlay lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-red-500/20"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-red-400/10"
          animate={{ top: ["100%", "0%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div
        className={`relative z-10 max-w-3xl mx-auto px-6 text-center ${
          shakeActive ? "animate-screen-shake" : ""
        }`}
      >
        {/* Clock */}
        <motion.div
          className="flex justify-center mb-14"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Clock />
        </motion.div>

        {/* Story lines with horror effects */}
        <div className="space-y-8 sm:space-y-10">
          {t.lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1.5,
                delay: i * 0.5,
                ease: "easeOut",
              }}
              className="relative"
            >
              {/* Glitch duplicate - red */}
              <p
                className={`absolute inset-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-relaxed text-red-500/30 animate-glitch-1`}
                aria-hidden="true"
              >
                {line}
              </p>
              {/* Glitch duplicate - cyan */}
              <p
                className={`absolute inset-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-relaxed text-cyan-500/20 animate-glitch-2`}
                aria-hidden="true"
              >
                {line}
              </p>
              {/* Main text */}
              <p
                className={`relative text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-relaxed animate-text-distort ${
                  i === t.lines.length - 1
                    ? "text-red-500 animate-flicker"
                    : i === t.lines.length - 2
                    ? "text-red-300/90"
                    : i === 0
                    ? "text-white/50"
                    : "text-white/70"
                }`}
                style={
                  i === t.lines.length - 1
                    ? {
                        textShadow:
                          "0 0 20px rgba(239, 68, 68, 0.5), 0 0 40px rgba(239, 68, 68, 0.3), 0 0 80px rgba(239, 68, 68, 0.1)",
                      }
                    : {}
                }
              >
                {line}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tension line */}
        <motion.div
          className="mt-20 mx-auto w-40 h-[2px]"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-red-500/60 to-transparent"
            animate={{ scaleX: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Ticking counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-10"
        >
          <motion.p
            className="text-red-500/40 text-sm font-mono tracking-[0.5em] uppercase"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {lang === "fr" ? "le temps passe..." : "الوقت كيمشي..."}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
