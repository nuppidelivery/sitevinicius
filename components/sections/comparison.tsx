"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export function Comparison() {
  const withoutService = [
    "Dinheiro injetado em anúncios sem saber se volta",
    "Comercial refém de indicações que demoram a chegar",
    "Mensagens vazias que o cliente apenas ignora",
    "Vendas na montanha-russa: um mês bom, três ruins",
    "Vendedores implorando atenção de curiosos",
    "Falta de controle, dados e governança estratégica"
  ];

  const withService = [
    "Retorno medido sobre cada real investido",
    "Esteira de aquisição que funciona todos os dias",
    "Comunicação baseada no comportamento e dor do cliente",
    "Faturamento escalável e margem protegida",
    "WhatsApp com fluxo contínuo de clientes qualificados",
    "Total visibilidade da operação em painéis ao vivo"
  ];

  return (
    <section className="py-16 md:py-24 border-b border-surface-border relative z-10 bg-surface/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase font-bold">O Custo da Inércia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl mb-6 leading-[1.1] text-balance mx-auto">
            A diferença entre <em className="italic font-normal text-destructive">gastar</em> e <em className="italic font-normal text-primary">investir</em>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 mt-12">
          {/* Without Service */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-surface border border-surface-border p-6 sm:p-8 md:p-10 rounded-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 blur-[50px] -mr-16 -mt-16 rounded-full" />
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-foreground flex items-center">
              Como é <span className="text-destructive ml-2">hoje</span>
            </h3>
            <ul className="space-y-4 md:space-y-6">
              {withoutService.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="bg-destructive/10 p-1 rounded-full shrink-0 mt-0.5 mr-3">
                    <X strokeWidth={3} className="w-5 h-5 text-destructive" />
                  </div>
                  <span className="text-muted leading-relaxed text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With Service */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface border border-primary/30 p-6 sm:p-8 md:p-10 rounded-sm relative overflow-hidden shadow-[0_0_30px_rgba(29,185,84,0.05)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] -mr-16 -mt-16 rounded-full" />
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-foreground flex items-center">
              Como será <span className="text-primary ml-2">comigo</span>
            </h3>
            <ul className="space-y-4 md:space-y-6">
              {withService.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="bg-primary/10 p-1 rounded-full shrink-0 mt-0.5 mr-3">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground leading-relaxed text-[15px] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
