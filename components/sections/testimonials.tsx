"use client";

import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      text: "Em 60 dias eles reverteram uma operação que estava queimando R$30k/mês sem retorno. Hoje temos processo, previsibilidade e um ROAS que nosso time não acreditava ser possível.",
      initials: "MF",
      name: "Marcos Ferreira",
      role: "CEO · [Empresa do segmento]"
    },
    {
      text: "A automação de leads transformou nosso comercial. Os leads chegam quentes, qualificados e com contexto. O time de vendas fecha muito mais sem precisar fazer aquelas 10 tentativas de contato.",
      initials: "AC",
      name: "Ana Carvalho",
      role: "Diretora Comercial · [Empresa do segmento]"
    },
    {
      text: "Primeira agência que me mostrou o dashboard antes de assinar o contrato. Transparência total — sei exatamente onde cada real está sendo investido e qual é o retorno.",
      initials: "RP",
      name: "Ricardo Pinto",
      role: "Fundador · [Empresa do segmento]"
    },
    {
      text: "Já trabalhei com 4 agências antes. Essa é a única que fala o idioma do negócio — não de impressões e cliques, mas de receita, margem e LTV. É diferente de tudo que testei antes.",
      initials: "JP",
      name: "Julia Pereira",
      role: "CMO · [Empresa do segmento]"
    }
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 border-b border-surface-border relative z-10">
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
            <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase font-bold">O que os clientes dizem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mb-6 leading-[1.1] text-balance">
            Não acredite em nós. <em className="italic font-normal text-primary">Acredite neles.</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface border border-surface-border p-8 md:p-10 rounded-sm hover:border-primary/30 transition-colors duration-300 flex flex-col"
            >
              <span className="font-heading text-6xl text-primary leading-[0.5] block mb-6 opacity-60">"</span>
              <p className="text-base leading-[1.8] text-foreground mb-8 grow text-pretty">
                {item.text}
              </p>
              <div className="flex items-center gap-4 border-t border-surface-border pt-6 mt-auto">
                <div className="w-11 h-11 rounded-full bg-surface-border border border-surface-border flex items-center justify-center font-mono text-[13px] text-primary shrink-0">
                  {item.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground mb-1">{item.name}</div>
                  <div className="font-mono text-[11px] text-muted tracking-[0.05em]">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
