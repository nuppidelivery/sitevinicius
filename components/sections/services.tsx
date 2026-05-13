"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      number: "01",
      title: "Gestão de Tráfego Pago",
      desc: "Google Ads e Meta Ads gerenciados com estratégia de funil completo — da prospecção ao remarketing, com otimização diária baseada em dados reais."
    },
    {
      number: "02",
      title: "Criativos de Alta Conversão",
      desc: "Briefing, produção e teste de peças com copy e visual orientados a conversão — não a estética. Rotina de testes A/B contínua para identificar o que vende."
    },
    {
      number: "03",
      title: "Automação Comercial",
      desc: "Fluxos automáticos de nutrição e qualificação de leads via WhatsApp, e-mail e CRM — para que nenhuma oportunidade esfrie enquanto o time está ocupado."
    },
    {
      number: "04",
      title: "Analytics e Business Intelligence",
      desc: "Dashboard centralizado com as métricas que realmente importam para o seu negócio — visibilidade total da operação em tempo real, sem depender de ninguém."
    }
  ];

  return (
    <section id="servicos" className="py-24 border-b border-surface-border relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <span className="flex h-[1px] w-8 bg-primary mr-3"></span>
              <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase font-bold">O que fazemos</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-balance">
              Performance que <em className="italic font-normal text-primary">escala</em> com inteligência
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted leading-[1.7] text-pretty">
              Não vendemos pacotes genéricos. Construímos uma operação de tráfego sob medida para o momento e objetivo do seu negócio — com tecnologia, dados e processo.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-[2px] bg-surface-border">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-background hover:bg-surface transition-all duration-300 p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-l-[3px] border-transparent hover:border-primary cursor-pointer"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-12 flex-1">
                <div className="font-mono text-sm text-primary tracking-[0.1em]">{service.number}</div>
                <div className="flex-1 max-w-3xl">
                  <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted leading-[1.6] text-sm md:text-base text-pretty">{service.desc}</p>
                </div>
              </div>
              <ArrowRight className="text-primary w-6 h-6 transition-transform duration-300 group-hover:translate-x-2 shrink-0 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
