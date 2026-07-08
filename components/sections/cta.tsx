"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { QualifyModal } from "@/components/ui/qualify-modal";

export function Cta() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contato" className="py-20 md:py-32 relative overflow-hidden text-center z-10 border-b border-surface-border px-4 md:px-0">
      <motion.div 
        animate={{ opacity: [0.06, 0.15, 0.06], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(29,185,84,1)_0%,transparent_70%)] pointer-events-none blur-[50px]" 
      />
      
      <div className="container mx-auto px-4 max-w-[800px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-6">
            <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase font-bold">Próximo passo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-bold mb-6 leading-[1.1] text-balance mx-auto">
            Pronto para parar de <em className="italic font-normal text-primary">adivinhar</em> e começar a crescer?
          </h2>
          
          <p className="text-lg md:text-xl text-muted mb-12 max-w-2xl mx-auto leading-[1.7] text-pretty">
            Uma análise estratégica de 30 minutos sem compromisso para diagnosticar a maturidade do funil comercial e revelar as alavancas ocultas de escala do seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto">
            <Button size="lg" className="h-14 min-h-[56px] px-8 text-sm font-bold tracking-[0.1em] uppercase w-full sm:w-auto shadow-[0_0_20px_rgba(29,185,84,0.3)] hover:shadow-[0_0_30px_rgba(29,185,84,0.5)] transition-all" onClick={() => setIsModalOpen(true)}>
              Falar no WhatsApp agora
            </Button>
            <Button variant="ghost" size="lg" className="h-14 min-h-[56px] px-6 text-sm font-bold tracking-[0.05em] w-full sm:w-auto border border-transparent hover:border-surface-border" onClick={() => window.location.href = 'mailto:contato@viniciusvalente.com.br'}>
              Prefiro e-mail
            </Button>
          </div>
        </motion.div>
      </div>

      <QualifyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
