"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export function Cta() {
  return (
    <section id="contato" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-8 md:p-16 border border-primary/20 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Enquanto seus concorrentes brigam por atenção, sua empresa pode <span className="text-gradient">dominar o mercado.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto"
          >
            Pare de perder leads qualificados devido a uma infraestrutura fraca. Está na hora de elevar o nível do jogo.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-lg shadow-[0_0_40px_rgba(37,99,235,0.4)]" onClick={() => window.open('https://wa.me/5591996286994?text=Olá%2C%20vim%20pelo%20site%20da%20Vorté%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços.', '_blank')}>
              <Zap className="mr-2 h-5 w-5 fill-current" />
              Solicitar diagnóstico gratuito
            </Button>
            <p className="mt-4 text-xs text-muted">Apenas para empresas faturando R$50k+/mês. Vagas limitadas.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
