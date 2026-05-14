"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Qual é o investimento mínimo em mídia que vocês trabalham?",
      a: "O investimento varia conforme o momento, objetivo e demanda de cada negócio. A partir disso, montamos uma proposta personalizada e alinhada ao cenário do cliente."
    },
    {
      q: "Quanto tempo leva para ver resultados?",
      a: "O tempo pode variar de acordo com o nicho, posicionamento e estrutura do negócio. Em muitos casos, os primeiros sinais de evolução aparecem nas primeiras semanas."
    },
    {
      q: "Vocês também criam os criativos (artes e vídeos)?",
      a: "Sim. Desenvolvemos os criativos estratégicos utilizados nas campanhas."
    },
    {
      q: "Como funciona o contrato? Tem fidelidade?",
      a: "Os detalhes contratuais são apresentados durante a proposta comercial, sempre alinhados ao escopo e necessidade de cada projeto. Nosso objetivo é construir parcerias de longo prazo através de resultado e confiança."
    },
    {
      q: "Tenho acesso às minhas próprias campanhas e dados?",
      a: "Sim. Prezamos pela transparência em toda a operação."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 border-b border-surface-border relative z-10">
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
            <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase font-bold">Perguntas frequentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mb-6 leading-[1.1] text-balance">
            Dúvidas comuns antes de <em className="italic font-normal text-primary">fechar.</em>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto mt-16 border-t border-surface-border">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border-b border-surface-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-6 md:py-8 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className="text-lg md:text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                  {faq.q}
                </span>
                <Plus className={`w-6 h-6 text-primary shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-45' : ''}`} />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-muted leading-[1.8] text-base pr-8 text-pretty">
                  {faq.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
