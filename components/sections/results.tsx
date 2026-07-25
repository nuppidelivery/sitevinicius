"use client";

import { motion } from "framer-motion";

export function Results() {
  const results = [
    {
      tag: "Varejo · Local",
      metricValue: "8.2",
      metricSymbol: "x",
      label: "Retorno sobre o investimento gerado em 4 meses com engenharia de conversão regional.",
      client: "// Cliente · Segmento: varejo físico e online"
    },
    {
      tag: "Saúde · Clínica",
      metricValue: "-61",
      metricSymbol: "%",
      label: "Queda de desperdício no custo de aquisição através de inteligência artificial.",
      client: "// Cliente · Segmento: saúde preventiva"
    },
    {
      tag: "SaaS · B2B",
      metricValue: "+480",
      metricSymbol: "%",
      label: "Aumento em fluxo de clientes prontos para compra após funil automatizado.",
      client: "// Cliente · Segmento: tecnologia"
    }
  ];

  return (
    <section id="resultados" className="py-16 md:py-24 border-b border-surface-border relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <div className="flex items-center justify-center mb-6">
            <span className="flex h-[1px] w-8 bg-primary mr-3"></span>
            <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase font-bold">Prova de resultado</span>
            <span className="flex h-[1px] w-8 bg-primary ml-3"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mb-6 leading-[1.1] text-balance mx-auto">
            Números que provam o <em className="italic font-normal text-primary">retorno</em> do capital
          </h2>
          <p className="text-lg text-muted max-w-2xl leading-[1.7] text-pretty mx-auto">
            Matemática pura. Sem projeções inventadas, apenas dados reais de negócios que pararam de gastar para começar a investir.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mt-16">
          {results.map((result, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-surface border border-surface-border p-6 sm:p-8 md:p-10 rounded-xl hover:border-primary/50 transition-all duration-700 flex flex-col overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(29,185,84,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary bg-primary/10 py-1.5 px-3 rounded-full self-start mb-8 border border-primary/20 shadow-[0_0_10px_rgba(29,185,84,0.1)] relative z-10">
                {result.tag}
              </div>
              <div className="font-heading text-5xl md:text-6xl font-bold text-foreground leading-none mb-3">
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
              <div className="text-[15px] text-muted mb-8 leading-relaxed flex-grow text-pretty">
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
