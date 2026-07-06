/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

// ── Per-character animated span driven by a shared scrollYProgress ──────────
interface AnimatedCharProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function AnimatedChar({ char, index, total, progress }: AnimatedCharProps) {
  // Each character starts and finishes its reveal at a slightly different
  // scroll position, creating a left-to-right stagger across the full range.
  const start = (index / total) * 0.75;
  const end = start + 0.25;

  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [28, 0]);

  return (
    <motion.span
      style={{ opacity, y, display: 'inline-block', whiteSpace: 'pre' }}
    >
      {char === ' ' ? '\u00a0' : char}
    </motion.span>
  );
}

// ── Main About section ───────────────────────────────────────────────────────
const HEADLINE =
  "AETHERIS gives you a complete control of your digital presence — from layout architecture and neural design systems to copy generation and code synthesis. Every interface compiles automatically, so you always stay ahead of what's happening.";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  // scrollYProgress goes 0 → 1 as the section scrolls from just below the
  // viewport fold ("start end") to its own vertical center ("center center").
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  const chars = HEADLINE.split('');

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-10 py-24 md:py-32 border-t border-zinc-900 flex flex-col items-center justify-center min-h-[70vh]"
    >
      {/* Subtle dark scrim so the section reads over the faint background video */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.55)',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-4xl mx-auto text-center px-4">

        {/* Category tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-mono tracking-[0.2em] text-zinc-400 uppercase mb-8"
        >
          <Sparkles className="w-3 h-3 text-white" />
          <span>THE COGNITIVE AGENCY DESIGN FLOW</span>
        </motion.div>

        {/* Scroll-driven per-character headline */}
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-display mb-10">
          {chars.map((char, i) => (
            <AnimatedChar
              key={i}
              char={char}
              index={i}
              total={chars.length}
              progress={scrollYProgress}
            />
          ))}
        </h3>

        {/* Structured details cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16 pt-12 border-t border-zinc-900">

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">01 / BRAND DISCOVERY</span>
            <h4 className="text-sm font-semibold text-white tracking-tight font-display">Neural Theme Matrix</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We ingest your basic brand ideas, aesthetics, and goals to generate customized architectural guides, fonts, and grid dimensions tailored strictly to you.
            </p>
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">02 / INTERACTION BUILDING</span>
            <h4 className="text-sm font-semibold text-white tracking-tight font-display">Deterministic Code Generation</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Our advanced Vectra model translates fluid visual themes directly into clean, modular React units styled with responsive Tailwind CSS. Zero placeholder clutter.
            </p>
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">03 / CONTINUOUS EVOLUTION</span>
            <h4 className="text-sm font-semibold text-white tracking-tight font-display">Real-Time Compilation</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Enjoy absolute control with instantaneous compiler runs. Edit content, tweak code assets, and monitor performance grids on the fly.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
