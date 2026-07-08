"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export function Comparison() {
  const withoutService = [
    "Verba queimada sem saber o ROI exato",
    "Dependência de indicações ou panfletagem digital",
    "Campanhas genéricas que não convertem",
    "Falta de previsibilidade no caixa",
    "Vendedor parado esperando cliente",
    "Zero acompanhamento estratégico"
  ];

  const withService = [
    "ROI rastreado em cada centavo investido",
    "Aquisição previsível e escalável todos os dias",
    "Estratégia focada no comportamento do seu cliente",
    "Previsibilidade de faturamento mensal",
    "WhatsApp do time comercial sempre com leads",
    "Reuniões de alinhamento e dashboard de resultados"
  ];

  return (
    <section className="py-16 md:py-24 border-b border-surface-border relative z-10 bg-surface/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase font-bold">O Custo da Inércia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl mb-6 leading-[1.1] text-balance mx-auto">
            A diferença entre <em className="italic font-normal text-destructive">gastar</em> e <em className="italic font-normal text-primary">investir</em>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 mt-12">
          {/* Without Service */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-surface border border-surface-border p-6 sm:p-8 md:p-10 rounded-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 blur-[50px] -mr-16 -mt-16 rounded-full" />
            <h3 className="text-xl md:text-2xl font-bold mb-8 text-foreground flex items-center">
              Como é <span className="text-destructive ml-2">hoje</span>
            </h3>
            <ul className="space-y-4 md:space-y-6">
              {withoutService.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5 mr-3" />
                  <span className="text-muted leading-relaxed text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With Service */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-surface border border-primary/30 p-6 sm:p-8 md:p-10 rounded-sm relative overflow-hidden shadow-[0_0_30px_rgba(29,185,84,0.05)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] -mr-16 -mt-16 rounded-full" />
            <h3 className="text-xl md:text-2xl font-bold mb-8 text-foreground flex items-center">
              Como será <span className="text-primary ml-2">com a Valente</span>
            </h3>
            <ul className="space-y-4 md:space-y-6">
              {withService.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-foreground leading-relaxed text-[15px] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
