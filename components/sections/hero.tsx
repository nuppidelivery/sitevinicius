"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { QualifyModal } from "@/components/ui/qualify-modal";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 pb-16 md:pt-20 md:pb-32">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-glow opacity-30 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-6 md:mb-8"
        >
          <span className="flex h-[2px] w-8 bg-primary mr-3"></span>
          <span className="font-mono text-xs md:text-sm tracking-[0.25em] text-primary uppercase font-bold">Performance Marketing · Automação</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-8 max-w-[1000px] leading-[1.1] text-foreground mx-auto"
        >
          Transformamos seu negócio em uma <span className="text-primary">máquina de vendas.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-xl text-muted mb-8 md:mb-12 max-w-2xl leading-[1.6] text-pretty mx-auto hidden sm:block"
        >
          Escalamos o faturamento da sua empresa através de tráfego pago focado em ROI e previsibilidade de caixa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2 sm:mt-0"
        >
          <Button size="lg" className="h-14 min-h-[56px] w-full sm:w-auto px-8 text-sm font-bold tracking-[0.1em] uppercase shadow-[0_0_20px_rgba(29,185,84,0.3)] hover:shadow-[0_0_30px_rgba(29,185,84,0.5)] transition-all" onClick={() => setIsModalOpen(true)}>
            Começar a escalar agora
          </Button>
          <Button variant="ghost" size="lg" className="h-14 min-h-[56px] w-full sm:w-auto px-6 text-sm font-bold tracking-[0.05em] group border border-transparent hover:border-surface-border" onClick={() => document.getElementById('resultados')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver prova de resultados
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        {/* Hero Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-12 mt-12 md:mt-20 pt-8 md:pt-12 border-t border-surface-border text-left"
        >
          <div>
            <div className="font-heading text-3xl md:text-5xl font-bold mb-1 md:mb-2">+<span className="text-primary">320</span>%</div>
            <div className="font-mono text-[10px] md:text-[11px] text-muted tracking-[0.15em] uppercase">Média de ROI<br/>nos 90 dias</div>
          </div>
          <div>
            <div className="font-heading text-3xl md:text-5xl font-bold mb-1 md:mb-2"><span className="text-primary">R$</span>12M+</div>
            <div className="font-mono text-[10px] md:text-[11px] text-muted tracking-[0.15em] uppercase">Investimento<br/>gerenciado</div>
          </div>
          <div>
            <div className="font-heading text-3xl md:text-5xl font-bold mb-1 md:mb-2">87<span className="text-primary">%</span></div>
            <div className="font-mono text-[10px] md:text-[11px] text-muted tracking-[0.15em] uppercase">Taxa de<br/>retenção</div>
          </div>
          <div>
            <div className="font-heading text-3xl md:text-5xl font-bold mb-1 md:mb-2"><span className="text-primary">+</span>140</div>
            <div className="font-mono text-[10px] md:text-[11px] text-muted tracking-[0.15em] uppercase">Campanhas<br/>ativas</div>
          </div>
        </motion.div>
      </div>

      {/* Grid overlay for tech feel */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <QualifyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
