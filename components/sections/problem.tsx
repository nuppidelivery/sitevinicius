"use client";

import { motion } from "framer-motion";
import { Flame, Target, TrendingDown, Settings } from "lucide-react";

export function Problem() {
  const problems = [
    {
      icon: <Flame className="w-8 h-8 text-primary" />,
      title: "Orçamento queimando sem retorno",
      desc: "Campanhas no ar há meses, CPA subindo, ROAS despencando — e ninguém sabe exatamente por quê. Os relatórios existem mas não dizem o que fazer."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Leads que não convertem",
      desc: "Você gera lead, o comercial liga, não fecha. O problema não é volume — é qualidade e timing. Sem automação, você perde a janela de ouro."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-primary" />,
      title: "Criativos que cansam rápido",
      desc: "O mesmo criativo funciona por 2 semanas e então o custo explode. Sem processo de produção e teste contínuo, você fica refém da fadiga criativa."
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Dependência total do gestor",
      desc: "Se o gestor some, a operação para. Você não tem visibilidade real, não tem processos documentados, não tem controle sobre o que está acontecendo."
    }
  ];

  return (
    <section id="problema" className="py-16 md:py-24 border-b border-surface-border relative z-10">
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
            <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase font-bold">O problema que você enfrenta</span>
            <span className="flex h-[1px] w-8 bg-primary ml-3"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mb-6 leading-[1.1] text-balance mx-auto">
            Você investe em tráfego, mas o <em className="italic font-normal text-primary">caixa não fecha.</em>
          </h2>
          <p className="text-lg text-muted max-w-2xl leading-[1.7] text-pretty mx-auto">
            A maioria das empresas joga dinheiro em anúncios sem estrutura, sem processo e sem dados — e depois culpa a plataforma.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-6 mt-12">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-surface border border-surface-border hover:border-primary/50 transition-all duration-500 p-6 sm:p-8 md:p-10 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(29,185,84,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="mb-6 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 transform origin-left">
                  {problem.icon}
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 leading-snug group-hover:text-primary transition-colors duration-300">{problem.title}</h3>
                <p className="text-muted leading-[1.7] text-pretty">{problem.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
