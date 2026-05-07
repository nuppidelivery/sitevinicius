"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Megaphone, Bot, Video, PenTool, LayoutTemplate } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-6 h-6 text-primary" />,
    title: "Desenvolvimento Web",
    description: "Sistemas e plataformas ultrarrápidas, otimizadas para conversão extrema.",
  },
  {
    icon: <Megaphone className="w-6 h-6 text-primary" />,
    title: "Tráfego Pago",
    description: "Gestão orientada a dados focada em reduzir CPA e escalar seu faturamento.",
  },
  {
    icon: <Bot className="w-6 h-6 text-primary" />,
    title: "Automação Inteligente",
    description: "Automação de processos e atendimento via IA para reduzir custos.",
  },
  {
    icon: <LayoutTemplate className="w-6 h-6 text-primary" />,
    title: "Landing Pages",
    description: "Páginas persuasivas estruturadas com princípios de neuromarketing.",
  },
  {
    icon: <Video className="w-6 h-6 text-primary" />,
    title: "Edição de Vídeos",
    description: "Vídeos curtos e VSLs cinematográficos que retêm a atenção do lead.",
  },
  {
    icon: <PenTool className="w-6 h-6 text-primary" />,
    title: "Branding Premium",
    description: "Identidade visual que eleva a percepção de valor e justifica o alto ticket.",
  },
];

export function Services() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ecossistema Completo de <span className="text-gradient">Crescimento</span></h2>
          <p className="text-lg text-muted">
            Não somos apenas uma agência. Somos seu parceiro tecnológico estratégico, cuidando de cada etapa do seu funil de vendas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="h-12 w-12 rounded-lg bg-surface flex items-center justify-center border border-surface-border mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted leading-relaxed flex-grow">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
