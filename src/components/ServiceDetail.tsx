/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import futuristicVideo from '../asset/Futuristic_structure_with_molten…_202607062206 (2).mp4';

interface ServiceDetailProps {
  onContactOpen: () => void;
}

export default function ServiceDetail({ onContactOpen }: ServiceDetailProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoad = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  };

  return (
    <section id="services" className="relative z-10 py-24 md:py-32 border-t border-zinc-900 min-h-[80vh] flex flex-col justify-center">

      {/* Main Top Header */}
      <div className="mb-12 md:mb-16">
        <span className="text-[10px] font-mono tracking-[0.3em] text-zinc-500 uppercase block mb-3">
          [ DIRECTIVES &amp; ENGINE RELEASES ]
        </span>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-display max-w-2xl">
          Discover our generative canvases
        </h3>
      </div>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Column: Video fills the entire square edge-to-edge */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <div className="w-full max-w-md aspect-square rounded-lg relative overflow-hidden select-none">

            {/* ── Video — absolute, fills 100% ── */}
            <video
              ref={videoRef}
              src={futuristicVideo}
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
              }}
            />

            {/* Gradient scrim so top & bottom text stays readable */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, transparent 30%, transparent 65%, rgba(0,0,0,0.70) 100%)',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />

            {/* 4 Corner Crosshairs */}
            <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-white/60 z-20" />
            <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-white/60 z-20" />
            <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-white/60 z-20" />
            <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-white/60 z-20" />

            {/* Top overlay labels */}
            <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 py-3 z-20">
              <span className="text-[8px] font-mono text-white/70 tracking-widest uppercase">
                SYSTEM_MODEL // AETHERIS_LUMINA
              </span>
              <span className="text-[8px] font-mono text-white/50 tracking-widest uppercase">
                OP_LATENCY: 0.04ms
              </span>
            </div>

            {/* Bottom overlay labels */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 py-3 z-20">
              <span className="text-[10px] font-mono text-white tracking-widest font-semibold uppercase">
                AETHERIS // MODEL_LABS
              </span>
              <span className="text-[9px] font-mono text-white/50 uppercase tracking-wider">
                SECURE_ENGINE
              </span>
            </div>

          </div>
        </div>

        {/* Right Column: Detailed copy and CTA */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase font-semibold">
              GENERATIVE FRONTIER
            </span>
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight font-display">
              Aetheris Generative Labs
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Aetheris operates at the extreme frontier of modern web design, empowering founders to build the next era of digital experiences. Our proprietary systems combine generative intelligence, mathematical grid layouts, and advanced content pipelines to create bespoke web interfaces. We build responsive platforms that redefine how brands tell stories, engage audiences, and compile custom code assets in the decade ahead.
            </p>
          </div>

          {/* Action Button & Stats Row */}
          <div className="pt-4 flex flex-wrap items-center gap-6">
            <button
              onClick={onContactOpen}
              className="px-6 py-3 bg-white text-black hover:bg-zinc-200 transition-colors font-mono text-[11px] font-bold tracking-widest uppercase rounded flex items-center gap-2 cursor-pointer"
            >
              <span>Request Custom Model</span>
              <ChevronRight className="w-4 h-4 text-black" />
            </button>
            <div className="text-[10px] font-mono text-zinc-500 tracking-wider">
              MODEL INSTANCE: <span className="text-zinc-300 font-semibold">ACTIVE</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
