"use client";

import { motion } from "framer-motion";

export function Marquee() {
  const clients = [
    "Apex Group",
    "Lumina Saúde",
    "Nexus Varejo",
    "Elevate Tech",
    "Horizon Motors",
    "GlobalTech",
    "Vanguard Seguros",
    "Quantum Educação",
  ];

  return (
    <div className="bg-surface py-8 overflow-hidden relative z-10 border-y border-surface-border">
      <div className="container mx-auto px-4 mb-4 text-center">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted">Empresas que confiam na engenharia de aquisição</span>
      </div>
      
      {/* Gradient masks for smooth fade effect on edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent z-20 pointer-events-none" />
      
      <div className="flex gap-16 animate-marquee w-max mt-4">
        {/* Renderizamos a lista 3 vezes para garantir a rolagem infinita contínua */}
        {[...clients, ...clients, ...clients].map((client, i) => (
          <div
            key={i}
            className="font-heading text-lg md:text-xl font-bold tracking-wider text-muted/40 hover:text-primary/60 transition-colors flex items-center whitespace-nowrap"
          >
            {client}
          </div>
        ))}
      </div>
    </div>
  );
}
