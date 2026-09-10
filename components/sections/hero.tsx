"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      
      const tl = gsap.timeline();
      
      // Reveal Text (blur out)
      tl.fromTo(".hero-reveal", 
        { filter: "blur(20px)", opacity: 0, y: 40 },
        { filter: "blur(0px)", opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.15 }
      );

      // Buttons
      tl.fromTo(".btn-reveal",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );

      // Scroll Indicator
      gsap.to(".scroll-indicator", {
        opacity: 0,
        y: 20,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "20% top",
          scrub: true,
        }
      });
      
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const whatsappMessage = "Olá, Vinícius! Quero parar de jogar dinheiro fora com anúncios e ter lucro previsível.";

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-24 bg-background">
      {/* Background Video & Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          src="/0725.mp4" 
          loop  
          muted 
          playsInline 
          autoPlay 
          className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-hero-glow blur-[120px] rounded-full mix-blend-screen pointer-events-none opacity-40 animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Main Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
        
        {/* Label */}
        <div className="hero-reveal flex items-center justify-center w-full mb-8">
          <span className="flex h-[2px] w-6 md:w-8 bg-primary mr-3 md:mr-4" />
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-primary uppercase font-bold">Engenharia de Aquisição</span>
          <span className="flex h-[2px] w-6 md:w-8 bg-primary ml-3 md:ml-4" />
        </div>

        {/* Headline */}
        <h1 className="hero-reveal font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 leading-[1.1] text-foreground max-w-4xl mx-auto text-balance">
          Tenha <span className="text-primary">lucro previsível</span> com uma estrutura de atendimento validada
        </h1>

        {/* Subheadline */}
        <p className="hero-reveal text-base sm:text-lg md:text-xl text-muted mb-12 leading-[1.6] max-w-2xl mx-auto text-pretty font-light">
          Esteja a frente da concorrência e se torne a primeira opção do mercado.
        </p>

        {/* CTA */}
        <div className="btn-reveal w-full sm:w-auto relative z-30">
          <a 
            href={`https://wa.me/5591996286994?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex px-8 py-5 bg-primary text-white border border-primary hover:bg-primary/90 rounded-xl transition-all duration-500 shadow-[0_0_20px_rgba(29,185,84,0.4)] hover:shadow-[0_0_40px_rgba(29,185,84,0.7)] text-center items-center justify-center drop-shadow-md w-full sm:w-auto"
          >
            <span className="relative font-bold text-sm sm:text-base tracking-widest uppercase flex items-center justify-center font-heading">
              Falar no WhatsApp
            </span>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted animate-pulse z-30">
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}
