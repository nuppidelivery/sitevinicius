"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, TrendingUp, Settings2 } from "lucide-react";

export function About() {
  const badges = [
    { text: "Gestor desde 2021", icon: <CheckCircle2 className="w-4 h-4 text-primary" /> },
    { text: "Especializado em automação", icon: <Settings2 className="w-4 h-4 text-primary" /> },
    { text: "Desenvolvedor de estruturas validadas", icon: <TrendingUp className="w-4 h-4 text-primary" /> }
  ];

  return (
    <section id="sobre" className="py-16 md:py-32 border-b border-surface-border relative z-10 overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[45%] max-w-[500px] mx-auto lg:mx-0"
          >
            <div className="relative group rounded-xl overflow-hidden shadow-[0_0_40px_rgba(29,185,84,0.15)] border border-surface-border p-2 bg-surface">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-surface-border">
                <Image
                  src="/quem-sou-eu.jpeg"
                  alt="Vinícius Valente"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[55%] flex flex-col"
          >
            <div className="flex items-center mb-6">
              <span className="flex h-[1px] w-8 bg-primary mr-3"></span>
              <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase font-bold">Quem sou eu</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-[1.1] text-balance">
              Muito além de <em className="italic font-normal text-primary">apertar botões.</em>
            </h2>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {badges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-surface-border/50 border border-primary/20 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-[0_0_10px_rgba(29,185,84,0.05)] hover:shadow-[0_0_15px_rgba(29,185,84,0.15)] transition-shadow">
                  {badge.icon}
                  <span className="font-mono text-xs font-semibold text-foreground/90">{badge.text}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-muted text-lg leading-[1.7] text-pretty">
              <p>
                Meu trabalho é ajudar empresas a transformar investimento em aquisição de clientes por meio de uma operação orientada por dados, testes e otimização contínua. Antes de pensar em anúncios, busco entender o negócio, identificar gargalos e construir uma estratégia capaz de gerar resultados consistentes.
              </p>
              <p>
                Cada projeto é tratado de forma única. Não trabalho com fórmulas prontas, porque cada empresa possui um mercado, um público e desafios diferentes. Por isso, desenvolvo estratégias personalizadas que unem tráfego pago, análise de dados e melhoria da jornada do cliente para aumentar o retorno sobre o investimento.
              </p>
              <p>
                Mais do que gerir campanhas, meu objetivo é construir um sistema previsível de crescimento, onde cada decisão é tomada com base em dados e cada investimento precisa fazer sentido para o negócio.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
