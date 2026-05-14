"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="contato" className="py-20 md:py-32 relative overflow-hidden text-center z-10 border-b border-surface-border px-4 md:px-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(29,185,84,0.06)_0%,transparent_70%)] pointer-events-none" />
      
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
            Agende uma conversa de 30 minutos sem compromisso. Vamos analisar sua operação atual e te dizer honestamente se — e como — podemos ajudar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full sm:w-auto">
            <Button size="lg" className="h-14 px-8 text-sm font-bold tracking-[0.1em] uppercase w-full sm:w-auto" onClick={() => window.open('https://wa.me/5591996286994?text=Olá!%20Quero%20saber%20mais%20sobre%20gestão%20de%20tráfego', '_blank')}>
              Falar no WhatsApp agora
            </Button>
            <Button variant="ghost" size="lg" className="h-14 px-6 text-sm font-bold tracking-[0.05em] w-full sm:w-auto" onClick={() => window.location.href = 'mailto:contato@viniciusvalente.com.br'}>
              Prefiro e-mail
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
