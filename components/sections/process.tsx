"use client";

import { motion } from "framer-motion";

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico Completo",
      desc: "Auditoria das campanhas atuais, análise de concorrência, mapeamento do funil e identificação das maiores oportunidades de crescimento."
    },
    {
      number: "02",
      title: "Estratégia Personalizada",
      desc: "Definição de canais, orçamento, público e oferta — com metas claras de CAC, ROAS e CPL alinhadas com a margem do seu negócio."
    },
    {
      number: "03",
      title: "Estruturação e Lançamento",
      desc: "Criação das campanhas, automações e tracking com rastreamento completo. Primeiros 30 dias de otimização acelerada para encontrar os melhores ângulos."
    },
    {
      number: "04",
      title: "Escala e Governança",
      desc: "Aumento de orçamento nos ângulos vencedores, documentação de processos e reuniões de alinhamento semanais com acesso ao dashboard em tempo real."
    }
  ];

  return (
    <section id="processo" className="py-24 border-b border-surface-border relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center mb-6">
            <span className="flex h-[1px] w-8 bg-primary mr-3"></span>
            <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase font-bold">Como funciona</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mb-6 leading-[1.1]">
            Do <em className="italic font-normal text-primary">diagnóstico</em> ao resultado em 4 etapas
          </h2>
          <p className="text-lg text-muted max-w-2xl leading-[1.7]">
            Nenhum projeto começa sem entender profundamente o seu negócio, mercado e metas. Sem atalhos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-surface-border mt-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface p-10 lg:p-8 relative group"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary transform scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
              <div className="font-mono text-5xl font-medium text-surface-light mb-8 leading-none" style={{ WebkitTextStroke: '1px var(--border)' }}>
                {step.number}
              </div>
              <h3 className="font-heading text-lg font-bold mb-4 text-foreground">{step.title}</h3>
              <p className="text-muted text-sm leading-[1.65]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
