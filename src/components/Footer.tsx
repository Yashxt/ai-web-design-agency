/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FooterProps {
  contactName: string;
  isContactOpen: boolean;
  contactSubmitted: boolean;
  contactEmail: string;
  setContactEmail: (v: string) => void;
  setContactName: (v: string) => void;
  setContactSubmitted: (v: boolean) => void;
  onContactOpen: () => void;
  onContactClose: () => void;
}

export default function Footer({
  contactName,
  isContactOpen,
  contactSubmitted,
  contactEmail,
  setContactEmail,
  setContactName,
  setContactSubmitted,
  onContactOpen,
  onContactClose,
}: FooterProps) {
  return (
    <>
      {/* FOOTER */}
      <footer className="relative z-10 w-full max-w-[1800px] mx-auto border-t border-zinc-900 pt-16 pb-12 px-6 md:px-12 mt-16 bg-black">

        {/* Top brand & profile row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-12 border-b border-zinc-900 gap-6">
          {/* Logo & Slogan */}
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <span className="text-black font-black text-[10px] font-mono">Æ</span>
            </div>
            <div>
              <span className="font-display font-bold text-sm tracking-widest text-white">AETHERIS</span>
              <span className="text-[9px] font-mono text-zinc-500 ml-3 uppercase tracking-wider">// Neural Web Architectures</span>
            </div>
          </div>

          {/* User connection state indicator */}
          <div className="flex items-center space-x-3 bg-zinc-950 border border-zinc-900 px-4 py-2 rounded-full text-[10px] font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Connection Secure: {contactName ? contactName : 'Guest Ingress'}</span>
          </div>
        </div>

        {/* Six-Column Links Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 py-16">

          {/* Col 1 */}
          <div className="space-y-4">
            <h6 className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] font-bold">Services</h6>
            <ul className="space-y-2.5 text-xs text-zinc-500 font-medium">
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Neural Layouts</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors duration-200">Design Systems</a></li>
              <li><a href="#explorations" className="hover:text-white transition-colors duration-200">Semantic Copy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Vectra Compile</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors duration-200">Custom APIs</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-200">Continuous Sync</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-4">
            <h6 className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] font-bold">Agency</h6>
            <ul className="space-y-2.5 text-xs text-zinc-500 font-medium">
              <li><a href="#about" className="hover:text-white transition-colors duration-200">About us</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-200">Core Operations</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors duration-200">Neural Models</a></li>
              <li><a href="#explorations" className="hover:text-white transition-colors duration-200">Case Files</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Research Labs</a></li>
              <li><button onClick={onContactOpen} className="hover:text-white transition-colors duration-200 text-left">Partners</button></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-4">
            <h6 className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] font-bold">Resources</h6>
            <ul className="space-y-2.5 text-xs text-zinc-500 font-medium">
              <li><a href="#explorations" className="hover:text-white transition-colors duration-200">Layout Journal</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors duration-200">System Docs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Token Calculators</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors duration-200">API Reference</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors duration-200">Status Logs</a></li>
              <li><button onClick={onContactOpen} className="hover:text-white transition-colors duration-200 text-left">Help Desk</button></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-4">
            <h6 className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] font-bold">Core Models</h6>
            <ul className="space-y-2.5 text-xs text-zinc-500 font-medium">
              <li><a href="#capabilities" className="hover:text-white transition-colors duration-200">Aetheria Core</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors duration-200">Kortex Flex</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors duration-200">Logos Semantic</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors duration-200">Vectra Build</a></li>
              <li><a href="#explorations" className="hover:text-white transition-colors duration-200">Lumina UI</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Chronos Sync</a></li>
            </ul>
          </div>

          {/* Col 5 */}
          <div className="space-y-4">
            <h6 className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] font-bold">Connect</h6>
            <ul className="space-y-2.5 text-xs text-zinc-500 font-medium">
              <li><button onClick={onContactOpen} className="hover:text-white transition-colors duration-200 text-left">Request Model</button></li>
              <li><button onClick={onContactOpen} className="hover:text-white transition-colors duration-200 text-left">Connection Portal</button></li>
              <li><button onClick={onContactOpen} className="hover:text-white transition-colors duration-200 text-left">Secure Terminal</button></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors duration-200">SSL Protocol</a></li>
              <li><button onClick={onContactOpen} className="hover:text-white transition-colors duration-200 text-left">Developer Ingress</button></li>
              <li><button onClick={onContactOpen} className="hover:text-white transition-colors duration-200 text-left font-semibold">Contact Us</button></li>
            </ul>
          </div>

          {/* Col 6 */}
          <div className="space-y-4">
            <h6 className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] font-bold">Legal</h6>
            <ul className="space-y-2.5 text-xs text-zinc-500 font-medium">
              <li><a href="#about" className="hover:text-white transition-colors duration-200">Terms of Ingress</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-200">Privacy Vectors</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-200">Cookie Policy</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-200">Neural License</a></li>
              <li><button onClick={onContactOpen} className="hover:text-white transition-colors duration-200 text-left">Workspace Settings</button></li>
              <li><button onClick={onContactOpen} className="hover:text-white transition-colors duration-200 text-left">Contact Security</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-zinc-900 gap-4">
          {/* Copyright text */}
          <div className="text-[10px] font-mono text-zinc-600">
            © 2026 Aetheris. Neural Systems Architecture. All rights reserved.
          </div>

          {/* Sleek minimal vector button circles */}
          <div className="flex items-center space-x-2.5">
            {['X', 'GH', 'DC', 'LI', 'FG', 'MD'].map((symbol) => (
              <button
                key={symbol}
                onClick={onContactOpen}
                className="w-7 h-7 bg-transparent border border-zinc-900 hover:border-white rounded-full flex items-center justify-center text-[8px] font-mono text-zinc-500 hover:text-white transition-all cursor-pointer"
              >
                {symbol}
              </button>
            ))}
          </div>
        </div>

      </footer>

      {/* CONTACT DRAWER */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex justify-end backdrop-blur-sm"
            onClick={onContactClose}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="bg-black border-l border-zinc-850 w-full max-w-md h-full p-8 flex flex-col justify-between shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                  <div className="space-y-1">
                    <h2 className="font-display font-bold text-lg tracking-widest text-white uppercase">
                      Contact Aetheris
                    </h2>
                    <p className="text-[9px] font-mono text-zinc-400 uppercase font-semibold">
                      Establish Secure Comm Channel
                    </p>
                  </div>
                  <button
                    onClick={onContactClose}
                    className="p-2 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-zinc-450 hover:text-white rounded-lg transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Form or success message */}
                {contactSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-5 text-center py-10"
                  >
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white flex items-center justify-center mx-auto">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-mono text-xs text-white uppercase font-bold">Transmission Secured</h3>
                      <p className="text-[11px] text-zinc-400 leading-relaxed max-w-xs mx-auto">
                        Your prompt design request has been funneled to our collaborative AI agents. A human representative will follow up via email within 2 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setContactSubmitted(false);
                        setContactName('');
                        setContactEmail('');
                      }}
                      className="px-4 py-2 bg-white text-black border border-white text-[10px] font-mono uppercase tracking-wider rounded-lg hover:bg-zinc-200 transition-colors cursor-pointer font-bold"
                    >
                      New Transmission
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setContactSubmitted(true);
                    }}
                    className="space-y-6"
                  >
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-450 block">Your Name / Agency</label>
                      <input
                        required
                        type="text"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="E.g., Dexter Joshi"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-450 block">Communication Email</label>
                      <input
                        required
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="E.g., developer@agency.com"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-450 block">Project Vision Prompt</label>
                      <textarea
                        required
                        placeholder="Briefly describe what websites or services you want our AI agency to build for you..."
                        className="w-full h-28 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-white hover:bg-zinc-200 text-black text-[11px] font-mono uppercase tracking-widest font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Transmit Design Prompt</span>
                      <ChevronRight className="w-3.5 h-3.5 text-black" />
                    </button>
                  </form>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-zinc-900 pt-6 mt-auto text-[10px] font-mono text-zinc-500 space-y-1.5">
                <p>Aetheris Neural Agency Workspace v4.2</p>
                <p>Secure SSL Encrypted Connection Protocols</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
