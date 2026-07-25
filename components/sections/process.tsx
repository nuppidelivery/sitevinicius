"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const steps = [
    {
      number: "01",
      title: "Auditoria e Estancamento",
      desc: "Antes de injetar dinheiro novo, identificamos por onde o lucro atual está vazando. Analisamos a saúde das suas campanhas atuais e cortamos o desperdício imediatamente."
    },
    {
      number: "02",
      title: "Arquitetura da Oferta",
      desc: "O anúncio só funciona se a oferta fizer sentido. Alinhamos sua mensagem de vendas para tocar nas dores exatas do cliente, reduzindo o esforço do time comercial."
    },
    {
      number: "03",
      title: "Automação e Velocidade",
      desc: "Implementamos a infraestrutura invisível: rastreamento preciso (pixels) e respostas instantâneas no WhatsApp. Cada lead capturado entra em um funil imediato e implacável."
    },
    {
      number: "04",
      title: "Escala Calculada",
      desc: "Com a esteira de vendas validada, nós não apenas dobramos o orçamento; nós injetamos capital apenas nos ângulos que já provaram trazer lucro de volta. Dinheiro que trabalha pelo negócio."
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: "+=150%", // scroll height
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 1.5, // 1.5s delay to smooth out the scrub
        }
      });

      // Cards stagger animation tied to scroll
      tl.fromTo(".process-card", 
        { opacity: 0, y: 100, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2 
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="processo" ref={containerRef} className="py-16 md:py-24 border-b border-surface-border relative z-10 bg-background overflow-hidden min-h-[100svh] flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center flex flex-col items-center">
          <div className="flex items-center justify-center mb-6">
            <span className="flex h-[1px] w-8 bg-primary mr-3"></span>
            <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase font-bold">Como funciona</span>
            <span className="flex h-[1px] w-8 bg-primary ml-3"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mb-6 leading-[1.1] text-balance mx-auto text-foreground">
            A engenharia por trás do lucro não aceita <em className="italic font-normal text-primary">atalhos.</em>
          </h2>
          <p className="text-lg text-muted max-w-2xl leading-[1.7] text-pretty mx-auto">
            Não acredito em modelos prontos que servem para todo mundo. Cada etapa do processo foi criada com um único objetivo: proteger e multiplicar a sua margem.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-surface-border mt-16 p-[1px] rounded-lg overflow-hidden">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="process-card bg-surface p-6 sm:p-8 md:p-10 lg:p-8 relative group"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary transform scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100" />
              <div className="font-mono text-5xl font-medium text-surface-light mb-8 leading-none" style={{ WebkitTextStroke: '1px var(--border)' }}>
                {step.number}
              </div>
              <h3 className="font-heading text-lg font-bold mb-4 text-foreground">{step.title}</h3>
              <p className="text-muted text-sm leading-[1.65] text-pretty">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
