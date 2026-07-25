"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, TrendingUp, Settings2 } from "lucide-react";
import { SectionArrow } from "@/components/ui/section-arrow";

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
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-[40%] max-w-[400px] mx-auto lg:mx-0 lg:mt-4 order-2 lg:order-1"
          >
            <div className="relative group rounded-xl overflow-hidden shadow-[0_0_40px_rgba(29,185,84,0.15)] border border-surface-border p-2 bg-surface">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
              <div className="relative aspect-square md:aspect-[4/5] w-full overflow-hidden rounded-lg bg-surface-border">
                <Image
                  src="/quem-sou-eu.jpeg"
                  alt="Vinícius Valente"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
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
            className="w-full lg:w-[60%] flex flex-col order-1 lg:order-2"
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
                Meu trabalho não é criar campanhas bonitinhas para gerar curtidas. Meu trabalho é construir ecossistemas de aquisição que compram clientes por um valor menor do que eles deixam no seu caixa.
              </p>
              <p>
                Trato o seu dinheiro com o respeito de um investidor. Antes de subir qualquer campanha, identifico por onde a sua margem atual está vazando, estruturo a jornada de compra e implemento rastreamento preciso. Sem isso, tráfego é apenas aposta.
              </p>
              <p>
                O meu objetivo não é te entregar relatórios confusos para justificar gastos. É entregar previsibilidade financeira, onde a tecnologia e os dados trabalham a favor do seu faturamento, protegendo o seu tempo e a sua escala.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <SectionArrow />
    </section>
  );
}
