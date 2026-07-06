/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Cpu, Layers, Type, Code } from 'lucide-react';
import { Capability } from './components/Tag';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServiceDetail from './components/ServiceDetail';
import Exploration from './components/Exploration';
import Footer from './components/Footer';

export default function App() {
  // State for active tooltips/details on the AI operations
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  // Custom contact form states
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  // Agency capabilities matrix
  const capabilities: Capability[] = [
    {
      id: 'layout',
      name: 'Neural Grid Optimizer',
      role: 'Mathematical Flex Networks',
      version: 'v5.0-Flex',
      metric: '9.8k ops/s',
      icon: <Cpu className="w-4 h-4 text-white" />,
      description: 'Calculates high-density, mathematical responsive grids. Adapts screen proportions, layout flow, and coordinate matrices dynamically.'
    },
    {
      id: 'aesthetics',
      name: 'Aesthetic Core',
      role: 'Visual Design Engine',
      version: 'v4.2-Neural',
      metric: '12.4k ops/s',
      icon: <Layers className="w-4 h-4 text-white" />,
      description: 'Generates cohesive visual structures, premium dark palettes, high-contrast monochrome styles, and display typography hierarchies.'
    },
    {
      id: 'copy',
      name: 'Logos Engine',
      role: 'Semantic Copy Synthesizer',
      version: 'v3.9-Semantic',
      metric: '18.2k ops/s',
      icon: <Type className="w-4 h-4 text-white" />,
      description: 'Writes contextually precise, highly-engaging agency copy. Dynamically adjusts reading complexity and brand-aligned messaging.'
    },
    {
      id: 'compiler',
      name: 'Vectra Compiler',
      role: 'Code & Build Synthesizer',
      version: 'v6.1-React',
      metric: '24.0k ops/s',
      icon: <Code className="w-4 h-4 text-white" />,
      description: 'Assembles clean, modular React structures and compiles Tailwind utility styling classes with absolute semantic code purity.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col justify-between overflow-x-hidden font-sans selection:bg-white selection:text-black">

      {/* 1. HEADER / NAVIGATION */}
      <Navbar onContactOpen={() => setIsContactOpen(true)} />

      {/* MAIN CONTAINER */}
      <main className="flex-1 w-full max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col justify-center">

        {/* SECTION 1: HERO — has its own self-contained background video */}
        <Hero
          capabilities={capabilities}
          activeFeature={activeFeature}
          setActiveFeature={setActiveFeature}
        />

        {/* SECTION 2: ABOUT */}
        <About />

        {/* SECTION 3: GENERATIVE MODELS & CANVASES */}
        <ServiceDetail onContactOpen={() => setIsContactOpen(true)} />

        {/* SECTION 4: EDITORIAL GRID & RESEARCH */}
        <Exploration onContactOpen={() => setIsContactOpen(true)} />

      </main>

      {/* FOOTER + CONTACT DRAWER */}
      <Footer
        contactName={contactName}
        isContactOpen={isContactOpen}
        contactSubmitted={contactSubmitted}
        contactEmail={contactEmail}
        setContactEmail={setContactEmail}
        setContactName={setContactName}
        setContactSubmitted={setContactSubmitted}
        onContactOpen={() => setIsContactOpen(true)}
        onContactClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
