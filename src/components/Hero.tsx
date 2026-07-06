/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Capability } from './Tag';
import blackRockVideo from '../asset/Black_rock_with_glowing_cracks_202607061655.mp4';

interface HeroProps {
  capabilities: Capability[];
  activeFeature: string | null;
  setActiveFeature: (id: string | null) => void;
}

const statusBadges = ['AUTONOMOUS', '10X SPEED', 'USER-CENTRIC', 'FUTURE-READY', 'DYNAMIC ASSETS'];
const leftTags = ['AI STRATEGY', 'GENERATIVE UI', 'UX EVOLUTION'];

export default function Hero({ capabilities, activeFeature, setActiveFeature }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative z-10 min-h-[88vh] flex flex-col justify-between pt-8 pb-12 overflow-hidden"
    >
      {/* ── Background Video — Vibrant, Catchy & Centered like Reference ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <video
          src={blackRockVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            /* Boost saturation and contrast so the molten orange lava pops vibrantly */
            filter: 'contrast(1.18) saturate(1.45) brightness(1.08)',
          }}
        />

        {/* Very soft radial vignette — keeps the center 100% crystal clear and glowing */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 45%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.65) 100%)',
          }}
        />

        {/* Smooth bottom transition to pure black for the next section */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '30%',
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 65%, #000 100%)',
          }}
        />
      </div>

      {/* Top spacer to balance vertical distribution */}
      <div className="w-full h-8 md:h-16 relative z-10" />

      {/* ── Main Foreground Content — Floating Left & Right over Background Video ── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto py-8">
        
        {/* LEFT COLUMN: Agency Info & Strategy Tags */}
        <div className="lg:col-span-6 flex flex-col justify-end space-y-6 max-w-lg">
          <div className="space-y-3">
            <span className="text-[10px] font-mono text-zinc-400 tracking-[0.25em] uppercase block font-semibold">
              // CREATIVE INTELLIGENCE AGENCY
            </span>
            <p className="text-sm md:text-base text-zinc-200 font-normal leading-relaxed">
              We leverage generative AI to craft websites that evolve with your users. Bridging the gap between code and imagination.
            </p>
          </div>

          {/* Left Tag Pills */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            {leftTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full bg-zinc-950/80 border border-zinc-700/80 text-white text-[10px] font-mono tracking-widest uppercase shadow-lg backdrop-blur-sm select-none"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CENTER SPACER: Leaves the glowing rock visible in the middle */}
        <div className="hidden lg:block lg:col-span-1" />

        {/* RIGHT COLUMN: Metric & Status Pills */}
        <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-end space-y-6">
          
          {/* Big Metric Display */}
          <div className="text-left lg:text-right">
            <div className="text-6xl md:text-7xl font-black text-white tracking-tight leading-none font-display drop-shadow-md">
              0.5s
            </div>
            <div className="text-[10px] font-mono text-zinc-400 tracking-[0.25em] uppercase mt-1 font-semibold">
              LOAD VELOCITY
            </div>
          </div>

          {/* Status Badges Cluster */}
          <div className="flex flex-wrap justify-start lg:justify-end gap-2 max-w-sm">
            {statusBadges.map((badge) => (
              <span
                key={badge}
                className="px-3.5 py-1.5 rounded-full bg-zinc-950/90 border border-zinc-800 text-zinc-300 text-[9px] font-mono tracking-widest uppercase shadow-md backdrop-blur-sm select-none hover:border-zinc-600 transition-colors"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* ── Bottom Section: Minimal Interactive Telemetry & Scroll Cue ── */}
      <div className="relative z-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Compact Engine Selector */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mr-2">
            Engines:
          </span>
          {capabilities.map((cap) => (
            <button
              key={cap.id}
              onClick={() => setActiveFeature(activeFeature === cap.id ? null : cap.id)}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-full border text-[9px] font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                activeFeature === cap.id
                  ? 'bg-white text-black border-white font-semibold'
                  : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeFeature === cap.id ? 'bg-black' : 'bg-zinc-500'}`} />
              <span>{cap.name}</span>
            </button>
          ))}
        </div>

        {/* Center/Right: Scroll Cue */}
        <div className="flex items-center space-x-3">
          <div className="h-6 w-[1px] bg-gradient-to-b from-transparent via-zinc-500 to-white animate-pulse" />
          <span className="text-[9px] font-mono tracking-[0.3em] text-zinc-400 uppercase font-semibold">
            SCROLL TO EXPLORE
          </span>
        </div>

      </div>

      {/* Telemetry popup if an engine is selected */}
      <AnimatePresence>
        {activeFeature && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-20 left-4 md:left-8 z-20 max-w-md bg-zinc-950/95 border border-zinc-700 p-4 rounded-lg shadow-2xl backdrop-blur-md text-xs text-zinc-300"
          >
            <div className="flex justify-between items-center mb-1 pb-1 border-b border-zinc-800">
              <span className="font-mono text-[10px] text-white font-bold uppercase tracking-wider">
                {capabilities.find(c => c.id === activeFeature)?.role}
              </span>
              <span className="font-mono text-[9px] text-zinc-400">
                {capabilities.find(c => c.id === activeFeature)?.metric}
              </span>
            </div>
            <p className="text-[11px] text-zinc-300 leading-normal">
              {capabilities.find(c => c.id === activeFeature)?.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
