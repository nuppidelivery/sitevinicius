"use client";

import { motion } from "framer-motion";
import { Triangle, Activity, ShoppingBag, Cpu, Compass, Globe, Shield, BookOpen } from "lucide-react";

export function Marquee() {
  const clients = [
    { name: "Apex Group", color: "text-blue-500", icon: <Triangle className="w-5 h-5 mr-3 fill-current" /> },
    { name: "Lumina Saúde", color: "text-emerald-500", icon: <Activity className="w-5 h-5 mr-3" /> },
    { name: "Nexus Varejo", color: "text-purple-500", icon: <ShoppingBag className="w-5 h-5 mr-3" /> },
    { name: "Elevate Tech", color: "text-cyan-500", icon: <Cpu className="w-5 h-5 mr-3" /> },
    { name: "Horizon Motors", color: "text-amber-500", icon: <Compass className="w-5 h-5 mr-3" /> },
    { name: "GlobalTech", color: "text-rose-500", icon: <Globe className="w-5 h-5 mr-3" /> },
    { name: "Vanguard Seguros", color: "text-indigo-500", icon: <Shield className="w-5 h-5 mr-3 fill-current" /> },
    { name: "Quantum Educação", color: "text-fuchsia-500", icon: <BookOpen className="w-5 h-5 mr-3" /> },
  ];

  return (
    <div className="bg-surface py-8 overflow-hidden relative z-10 border-y border-surface-border">
      <div className="container mx-auto px-4 mb-6 text-center">
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
            className={`font-heading text-lg md:text-xl font-bold tracking-wider flex items-center whitespace-nowrap opacity-60 hover:opacity-100 transition-all hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] ${client.color}`}
          >
            {client.icon}
            {client.name}
          </div>
        ))}
      </div>
    </div>
  );
}
