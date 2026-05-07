"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Plataforma SaaS FinTech",
    category: "Web App & UI/UX",
    metrics: "+300% de aumento em signups",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "E-commerce High-End",
    category: "Performance & CRO",
    metrics: "Conversão de 1.2% para 4.5%",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Startup de IA B2B",
    category: "Tráfego & Landing Pages",
    metrics: "CPA reduzido em 60%",
    color: "from-orange-500/20 to-red-500/20",
  },
];

export function Portfolio() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Resultados que <span className="text-gradient">falam por si</span></h2>
            <p className="text-lg text-muted">
              Veja como transformamos negócios comuns em líderes de mercado através de design e tecnologia de alta performance.
            </p>
          </div>
          <button className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors flex items-center gap-2 pb-2">
            Ver todos os cases <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="h-full p-0 overflow-hidden group cursor-pointer border border-surface-border">
                {/* Image Placeholder with Gradient */}
                <div className={`h-64 w-full bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-surface/10 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-500" />
                  <span className="font-heading text-xl font-bold text-foreground/50 group-hover:scale-110 transition-transform duration-500">Visualizar Case</span>
                </div>
                
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <div className="inline-flex items-center rounded-full bg-surface-border/50 px-3 py-1 text-sm font-medium text-foreground">
                    <span className="text-emerald-400 mr-2">↗</span> {project.metrics}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
