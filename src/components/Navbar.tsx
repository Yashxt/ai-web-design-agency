/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface NavbarProps {
  onContactOpen: () => void;
}

export default function Navbar({ onContactOpen }: NavbarProps) {
  return (
    <header className="relative z-20 w-full max-w-[1800px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">

      {/* Brand — left */}
      <div
        className="flex items-center gap-2 cursor-pointer select-none group"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {/* Tiny logo mark */}
        <div className="w-5 h-5 border border-white/60 rounded-sm flex items-center justify-center group-hover:border-white transition-colors duration-300">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
        <h1 className="text-[13px] font-bold tracking-[0.3em] font-display text-white uppercase">
          Aetheris
        </h1>
      </div>

      {/* Nav links — center */}
      <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-[0.2em] text-zinc-500">
        <a href="#" className="hover:text-white transition-colors duration-200 uppercase">Home</a>
        <a href="#services" className="hover:text-white transition-colors duration-200 uppercase">Services</a>
        <a href="#about" className="hover:text-white transition-colors duration-200 uppercase">About</a>
        <a href="#explorations" className="hover:text-white transition-colors duration-200 uppercase">Work</a>
      </nav>

      {/* CTA — right */}
      <button
        onClick={onContactOpen}
        className="text-[11px] font-mono tracking-[0.2em] uppercase text-black bg-white px-4 py-2 hover:bg-zinc-200 transition-colors duration-200 cursor-pointer"
      >
        Start a project
      </button>

    </header>
  );
}
