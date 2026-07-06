/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { Layers, ChevronRight } from 'lucide-react';
import orangeLavaVideo from '../asset/Futuristic_structure_orange_lava…_202607062226.mp4';

interface ExplorationProps {
  onContactOpen: () => void;
}

export default function Exploration({ onContactOpen }: ExplorationProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoad = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  };

  return (
    <section id="explorations" className="relative z-10 py-24 md:py-32 border-t border-zinc-900 min-h-[90vh] flex flex-col justify-center">

      {/* Main Grid Container with thin borders and meeting crosshairs */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[91vh]">

        {/* CROSSHAIR MEETING ANCHORS */}
        <div className="absolute -top-[5px] -left-[5px] text-[10px] font-mono text-zinc-600 select-none pointer-events-none">+</div>
        <div className="absolute -top-[5px] -right-[5px] text-[10px] font-mono text-zinc-600 select-none pointer-events-none">+</div>
        <div className="absolute -bottom-[9px] -left-[5px] text-[10px] font-mono text-zinc-600 select-none pointer-events-none">+</div>
        <div className="absolute -bottom-[9px] -right-[5px] text-[10px] font-mono text-zinc-600 select-none pointer-events-none">+</div>

        {/* LEFT SIDEBAR (3/12 Width) */}
        <div className="lg:col-span-3 p-6 flex flex-col justify-between space-y-12">

          {/* Top Block: Journal/Exploration Detail */}
          <div className="space-y-4">
            {/* Simulated mini wireframe book cover */}
            <div className="w-24 h-32 bg-zinc-950 border border-zinc-800 rounded p-3 flex flex-col justify-between relative group hover:border-white transition-all duration-300">
              <div className="flex justify-between items-start text-[6px] font-mono text-zinc-500">
                <span>AETHERIS_REV_4</span>
                <span>06/26</span>
              </div>

              {/* Wireframe geometric layout graphic */}
              <div className="my-auto border-t border-b border-zinc-850 py-1 flex flex-col space-y-1">
                <div className="w-full h-1 bg-zinc-900" />
                <div className="w-3/4 h-1 bg-zinc-900" />
                <div className="w-1/2 h-1 bg-zinc-900" />
              </div>

              <div className="text-[7px] font-mono text-white tracking-widest uppercase">
                Layout Journal
              </div>
            </div>

            <div className="space-y-1">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                The Design Journal
              </h4>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                Documenting our mathematical discoveries in responsive coordinate flex engines and adaptive layouts.
              </p>
            </div>
          </div>

          {/* Bottom Block: Historic portrait wireframe sketch */}
          <div className="pt-6 border-t border-zinc-900 space-y-4">
            <div className="relative w-full aspect-[4/3] bg-zinc-950 border border-zinc-900 rounded p-4 flex flex-col items-center justify-center overflow-hidden group">
              {/* Subtle geometric radar scope */}
              <div className="absolute inset-2 border border-zinc-900/40 rounded-full animate-spin [animation-duration:15s]" />
              <div className="absolute inset-6 border border-dashed border-zinc-900/30 rounded-full" />

              {/* Vector Outline Icon */}
              <Layers className="w-8 h-8 text-white opacity-40 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="text-[8px] font-mono text-zinc-600 tracking-wider uppercase mt-3">
                Dieter Rams Grid System
              </span>
            </div>
            <p className="text-[10px] text-zinc-500 leading-normal">
              Fusing classic Swiss typography systems with modern, deep learning coordinate synthesizers.
            </p>
          </div>

        </div>

        {/* CENTER MAIN COLUMN (6/12 Width) — video fills this panel */}
        <div className="lg:col-span-6 relative overflow-hidden min-h-[50vh] lg:min-h-0">

          {/* ── Orange lava video fills the entire centre panel ── */}
          <video
            ref={videoRef}
            src={orangeLavaVideo}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoad}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
            }}
          />

          {/* Dark scrim — strong on left/top so text stays readable, lighter on right */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(135deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.20) 100%)',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />

          {/* Subtle cross guidelines */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 pointer-events-none z-10" />
          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/5 pointer-events-none z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-mono text-zinc-700 select-none pointer-events-none z-10">+</div>

          {/* Content — sits above the video */}
          <div className="relative z-20 p-8 h-full flex flex-col justify-between">

            {/* Main Content Info */}
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none font-display">
                Neural web design framework
              </h3>

              <div className="flex items-center space-x-3 text-[10px] font-mono text-zinc-400">
                <span>JULY 06</span>
                <span>|</span>
                <span>ENGINE PATTERN NO. 542</span>
              </div>
            </div>

            {/* Action Button CTA */}
            <div className="pt-12">
              <button
                onClick={onContactOpen}
                className="px-8 py-4 bg-white text-black hover:bg-zinc-200 transition-colors font-mono text-xs font-bold tracking-widest uppercase rounded flex items-center gap-3.5 cursor-pointer"
              >
                <span>Explore Case Files</span>
                <ChevronRight className="w-4 h-4 text-black" />
              </button>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN (3/12 Width) */}
        <div className="lg:col-span-3 p-6 flex flex-col justify-between space-y-12">

          {/* Top Block: Endorsement / Credibility */}
          <div className="space-y-3">
            <h5 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
              Credibility Vector
            </h5>
            <p className="text-xs text-zinc-400 font-semibold leading-relaxed">
              Endorsed by leading technical founders, venture teams, and system architects.
            </p>
            <div className="w-12 h-[1px] bg-zinc-800 pt-1" />
          </div>

          {/* Bottom Block: Simplified Core Metadata */}
          <div className="space-y-4 pt-6 border-t border-zinc-900">
            <div className="flex items-center -space-x-2">
              <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white flex items-center justify-center text-[10px] font-mono text-white font-bold">
                AI
              </div>
              <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white flex items-center justify-center text-[10px] font-mono text-zinc-300 font-bold">
                DR
              </div>
              <div className="w-8 h-8 rounded-full bg-zinc-950 border border-white flex items-center justify-center text-[10px] font-mono text-zinc-400 font-bold">
                KB
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-semibold">
                SYSTEM AUTHORIZED
              </span>
              <p className="text-xs text-zinc-400 leading-normal">
                Secure neural design system pipelines are verified under strict protocol.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
