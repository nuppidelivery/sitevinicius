"use client";

import { SectionArrow } from "@/components/ui/section-arrow";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      number: "01",
      title: "Gestão de Tráfego Pago",
      desc: "Compra de atenção qualificada usando Google e Meta. O foco não é gerar cliques, é comprar tráfego por um valor menor do que o cliente deixa no seu caixa."
    },
    {
      number: "02",
      title: "Criativos de Alta Conversão",
      desc: "Design não vende, contraste e dor vendem. Produção contínua de anúncios desenhados estritamente para parar o dedo do cliente e forçar a conversão."
    },
    {
      number: "03",
      title: "Automação Comercial",
      desc: "Implementação de respostas em 2 segundos e nutrição via IA. Um lead que esfria custa caro. A automação garante que nenhuma venda se perca por atraso."
    },
    {
      number: "04",
      title: "Analytics e Business Intelligence",
      desc: "Você não pode escalar o que não consegue medir. Criação de painéis que mostram exatamente qual campanha traz lucro, permitindo decisões rápidas e seguras."
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 border-b border-surface-border relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 mb-12 lg:mb-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <span className="flex h-[1px] w-8 bg-primary mr-3"></span>
              <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase font-bold">O que eu faço</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-balance">
              Infraestrutura focada no <em className="italic font-normal text-primary">retorno</em> do capital
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted leading-[1.7] text-pretty">
              Não existem milagres na aquisição de clientes. Existe processo validado, tecnologia para rastrear e matemática para garantir que o dinheiro volte.
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
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-background hover:bg-surface transition-all duration-700 p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 border-l-[3px] border-transparent hover:border-primary cursor-pointer"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-12 flex-1">
                <div className="font-mono text-sm text-primary tracking-[0.1em]">{service.number}</div>
                <div className="flex-1 max-w-3xl">
                  <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted leading-[1.6] text-sm md:text-base text-pretty">{service.desc}</p>
                </div>
              </div>
              <ArrowRight className="text-primary w-6 h-6 transition-transform duration-700 group-hover:translate-x-2 shrink-0 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
      <SectionArrow />
    </section>
  );
}
