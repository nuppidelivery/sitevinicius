"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Diagnóstico Profundo",
    desc: "Analisamos seu funil, tráfego, design atual e gargalos tecnológicos para identificar oportunidades ocultas."
  },
  {
    num: "02",
    title: "Planejamento Estratégico",
    desc: "Desenhamos a arquitetura da solução perfeita, aliando UX/UI premium, automações e estratégias de aquisição."
  },
  {
    num: "03",
    title: "Execução Tecnológica",
    desc: "Nossos engenheiros e designers constroem sua máquina de vendas com performance extrema e código limpo."
  },
  {
    num: "04",
    title: "Otimização e Escala",
    desc: "Lançamos, medimos com dados granulares e otimizamos a conversão para multiplicar seus resultados."
  }
];

export function Process() {
  return (
    <section id="metodo" className="py-32 bg-surface/20 border-y border-surface-border relative">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Engenharia de <span className="text-gradient">Conversão</span></h2>
          <p className="text-lg text-muted">
            Um processo testado e validado inspirado nas startups que mais crescem no Vale do Silício. Sem achismos, apenas dados e execução.
          </p>
        </div>

        <div className="relative">
          {/* Linha de conexão */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-surface-border -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative z-10"
              >
                <div className="glass-card rounded-2xl p-8 h-full flex flex-col relative overflow-hidden group">
                  <div className="absolute top-0 right-0 text-8xl font-black text-surface-border/30 -mt-4 -mr-4 group-hover:text-primary/10 transition-colors duration-500 pointer-events-none">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold mb-4 relative z-10">{step.title}</h3>
                  <p className="text-muted relative z-10 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
