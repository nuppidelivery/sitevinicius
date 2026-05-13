"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Qual é o investimento mínimo em mídia que vocês trabalham?",
      a: "Trabalhamos com clientes a partir de R$5.000/mês em investimento de mídia. Abaixo disso, o volume de dados é insuficiente para otimizações consistentes e os resultados ficam limitados. Se você está abaixo desse valor, posso indicar uma trilha de crescimento para chegar lá primeiro."
    },
    {
      q: "Quanto tempo leva para ver resultados?",
      a: "Depende do histórico da conta e do segmento. Contas novas passam por um período de aprendizado de 30 a 45 dias — é o algoritmo coletando dados. A partir do 2º mês, os resultados começam a se consolidar. Projetamos metas realistas para 30, 60 e 90 dias logo no diagnóstico."
    },
    {
      q: "Vocês também criam os criativos (artes e vídeos)?",
      a: "Sim. Temos uma equipe interna de criação focada em performance — não em estética. Cada peça é desenvolvida com um ângulo de copy claro, testada contra variações e substituída quando começa a saturar. Também treinamos equipes internas do cliente que preferem produzir internamente."
    },
    {
      q: "Como funciona o contrato? Tem fidelidade?",
      a: "Temos contratos mínimos de 3 meses — o tempo mínimo para estruturar uma operação com dados e entregar resultados consistentes. Não acreditamos em contratos longos: preferimos que você fique porque os resultados justificam, não porque está preso."
    },
    {
      q: "Tenho acesso às minhas próprias campanhas e dados?",
      a: "Sempre. As contas de mídia são suas — você tem acesso total a todo momento. Nunca gerenciamos contas que não pertencem ao cliente. Além disso, entregamos um dashboard personalizado com os KPIs principais atualizado em tempo real."
    }
  ];

  return (
    <section id="faq" className="py-24 border-b border-surface-border relative z-10">
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mb-6 leading-[1.1] text-balance">
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
                className="w-full py-8 flex items-center justify-between text-left focus:outline-none group"
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
