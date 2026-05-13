"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Estratégias baseadas em Dados reais",
  "Design voltado para Conversão",
  "Escalabilidade tecnológica",
  "Performance e velocidade extrema",
  "Atendimento 1-a-1 personalizado",
  "Integrações nativas com CRMs",
];

export function Differentials() {
  return (
    <section id="sobre" className="py-32 bg-surface/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Por que somos a escolha de <span className="text-gradient">líderes</span> do mercado?</h2>
            <p className="text-lg text-muted mb-8 leading-relaxed text-pretty">
              O modelo tradicional de agências está quebrado. Nós unimos inteligência artificial, engenharia de software e copy persuasiva para criar soluções que geram resultados concretos e escaláveis.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-square md:aspect-video rounded-2xl glass-card overflow-hidden relative border border-surface-border">
              {/* Fake dashboard UI para ilustrar tecnologia */}
              <div className="absolute inset-0 bg-surface/50 p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-surface-border pb-4">
                  <div className="h-4 w-24 bg-surface-border rounded animate-pulse" />
                  <div className="h-4 w-8 bg-primary/40 rounded animate-pulse" />
                </div>
                <div className="flex-1 flex items-end gap-2">
                  {[40, 65, 45, 80, 55, 90, 75, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary/20 rounded-t" style={{ height: `${h}%` }}>
                      <div className="w-full h-full bg-gradient-to-t from-primary/50 to-primary rounded-t opacity-50" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
