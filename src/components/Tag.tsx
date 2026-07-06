/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export interface Capability {
  id: string;
  name: string;
  role: string;
  version: string;
  metric: string;
  icon: React.ReactNode;
  description: string;
}

interface TagProps extends React.Attributes {
  cap: Capability;
  isActive: boolean;
  onClick: () => void;
}

export default function Tag({ cap, isActive, onClick }: TagProps) {
  return (
    <button
      key={cap.id}
      onClick={onClick}
      className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border text-[10px] font-mono tracking-wider transition-all duration-300 cursor-pointer ${
        isActive
          ? 'bg-white text-black border-white font-medium'
          : 'bg-transparent border-zinc-800 text-zinc-400 hover:border-zinc-500 hover:text-white'
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-black' : 'bg-zinc-500'}`} />
      <span>{cap.name}</span>
    </button>
  );
}
