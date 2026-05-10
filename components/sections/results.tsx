"use client";

import { motion } from "framer-motion";

export function Results() {
  const results = [
    {
      tag: "E-commerce · Moda",
      metricValue: "8.2",
      metricSymbol: "x",
      label: "ROAS médio em 4 meses de operação com Google Shopping + Meta Advantage+",
      client: "// Cliente A · Segmento: varejo online"
    },
    {
      tag: "Saúde · Clínica",
      metricValue: "-61",
      metricSymbol: "%",
      label: "Redução no custo por agendamento com automação de qualificação via WhatsApp",
      client: "// Cliente B · Segmento: saúde preventiva"
    },
    {
      tag: "SaaS · B2B",
      metricValue: "+480",
      metricSymbol: "%",
      label: "Crescimento em MQLs qualificados após reestruturação completa de funil e criativos",
      client: "// Cliente C · Segmento: tecnologia"
    }
  ];

  return (
    <section id="resultados" className="py-24 border-b border-surface-border relative z-10">
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
            <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase font-bold">Prova de resultado</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mb-6 leading-[1.1]">
            Números que o <em className="italic font-normal text-primary">mercado</em> respeita
          </h2>
          <p className="text-lg text-muted max-w-2xl leading-[1.7]">
            Cases reais, dados verificáveis. Cada resultado tem nome, contexto e estratégia por trás.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mt-16">
          {results.map((result, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface border border-surface-border p-10 rounded-sm hover:border-primary/40 transition-colors duration-300 flex flex-col"
            >
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary bg-primary/10 py-1.5 px-3 rounded-sm self-start mb-8">
                {result.tag}
              </div>
              <div className="font-heading text-6xl font-bold text-foreground leading-none mb-3">
                {result.metricValue.includes('+') || result.metricValue.includes('-') ? (
                  <>
                    <span className="text-primary">{result.metricValue[0]}</span>
                    {result.metricValue.slice(1)}
                  </>
                ) : (
                  result.metricValue
                )}
                <span className="text-primary">{result.metricSymbol}</span>
              </div>
              <div className="text-[15px] text-muted mb-8 leading-relaxed flex-grow">
                {result.label}
              </div>
              <div className="pt-6 border-t border-surface-border font-mono text-[11px] text-muted tracking-[0.1em]">
                {result.client}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
