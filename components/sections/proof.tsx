"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10x", label: "Aumento médio em ROAS" },
  { value: "+50k", label: "Leads qualificados gerados" },
  { value: "150+", label: "Projetos de alta performance" },
  { value: "98%", label: "Taxa de conversão otimizada" },
];

export function Proof() {
  return (
    <section className="py-20 border-y border-surface-border bg-surface/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider text-muted uppercase mb-4">Empresas que confiam na nossa tecnologia</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Logos Fictícios */}
            <div className="text-xl font-bold font-heading">TechCorp</div>
            <div className="text-xl font-bold font-heading">Innova.io</div>
            <div className="text-xl font-bold font-heading">GlobalScale</div>
            <div className="text-xl font-bold font-heading">NexusPay</div>
            <div className="text-xl font-bold font-heading">Stratos</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</h3>
              <p className="text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
