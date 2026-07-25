"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, MessageCircle } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const services = [
  { id: 'trafego', label: 'Tráfego Pago', group: 'contratar', whatsapp: 'Olá, Vinícius! Quero parar de jogar dinheiro fora com anúncios e implementar um tráfego que traga lucro previsível.', hover: 'Criação de campanhas baseadas em dados reais de conversão. Serve para injetar previsibilidade no seu fluxo de caixa. Sem isso, você concorre pela atenção no grito enquanto seus concorrentes compram a fatia mais lucrativa do mercado.' },
  { id: 'funil', label: 'Funis de Venda', group: 'contratar', whatsapp: 'Olá, Vinícius! Preciso estruturar um funil de vendas que não desperdice os leads que eu já gero.', hover: 'Arquitetura da jornada que transforma o clique em faturamento. Serve para aumentar o valor extraído de cada visitante. Um tráfego excelente jogado em um funil amador é apenas doação de dinheiro para as plataformas.' },
  { id: 'agente', label: 'Agentes de IA', group: 'contratar', whatsapp: 'Olá, Vinícius! Quero implementar Inteligência Artificial para não perder mais vendas por atraso no atendimento.', hover: 'Atendentes inteligentes que não dormem, não tiram férias e respondem em 2 segundos. Serve para estancar a perda de leads fora do horário comercial. Quando você demora 2 horas para responder, o cliente já comprou com o concorrente.' },
  { id: 'saas', label: 'Criação de SaaS', group: 'contratar', whatsapp: 'Olá, Vinícius! Tenho interesse em desenvolver um SaaS e transformar minha ideia em um ativo de receita recorrente.', hover: 'Desenvolvimento de software focado em receita recorrente e retenção. Serve para transformar um modelo de negócios manual em uma máquina automática de assinaturas. Retardar a tecnologia é abrir espaço para a obsolescência.' },
  { id: 'site', label: 'Criação de Site', group: 'contratar', whatsapp: 'Olá, Vinícius! Meu site não converte e preciso de uma nova estrutura focada em vendas.', hover: 'Uma vitrine digital desenvolvida unicamente com foco em conversão e usabilidade. Serve para ancorar a confiança de quem pesquisa pelo seu nome. Ter um site amador faz o cliente deduzir que o seu serviço também é.' },
  { id: 'app', label: 'Criação de App', group: 'contratar', whatsapp: 'Olá, Vinícius! Quero desenvolver um aplicativo focado em reter meus clientes atuais.', hover: 'Seu negócio no bolso do cliente com foco extremo em retenção e LTV (ciclo de vida). Serve para fechar as portas para a concorrência. Não ter um aplicativo hoje é abrir mão dos clientes mais fiéis da sua base.' },
  { id: 'mentoria', label: 'Mentoria Especializada', group: 'aprender', whatsapp: 'Olá, Vinícius! Quero entender como a Mentoria vai me ajudar a dominar a aquisição de clientes sem depender de terceiros.', hover: 'Transferência direta dos processos de aquisição que utilizo em bastidores. Serve para você parar de depender de terceiros e ter controle estratégico da própria escala. A ignorância tecnológica é o maior custo oculto da sua empresa.' },
];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [hoveredService, setHoveredService] = useState<typeof services[0] | null>(null);

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

      // Buttons Stagger
      tl.fromTo(".btn-reveal",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.05 },
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

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-background">
        <video 
          src="/hero-bg.mp4" 
          loop 
          muted 
          playsInline 
          autoPlay 
          className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-screen"
        />
        {/* Fallback glow if video fails or loads slowly */}
        <div className="absolute inset-0 bg-hero-glow blur-[120px] rounded-full mix-blend-screen pointer-events-none opacity-40 animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
        {/* Tech Grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col pt-8 md:pt-12">
        
        {/* Label Centralizado no Topo */}
        <div className="hero-reveal flex items-center justify-center w-full mb-12 lg:mb-16">
          <span className="flex h-[2px] w-6 md:w-8 bg-primary mr-3 md:mr-4" />
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-primary uppercase font-bold">Engenharia de Aquisição</span>
          <span className="flex h-[2px] w-6 md:w-8 bg-primary ml-3 md:ml-4" />
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-12 w-full">
          
          {/* Lado Esquerdo - Textos */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-[95%] sm:max-w-[85%] lg:max-w-[600px] xl:max-w-[700px] mx-auto lg:mx-0">
            
            <h1 className="hero-reveal text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight mb-8 leading-[1.1] text-foreground text-balance">
              O seu próximo cliente está sendo comprado pelo seu <span className="text-primary italic font-normal">concorrente.</span>
            </h1>

            <div className="hero-reveal text-base md:text-lg text-muted mb-10 leading-[1.7] text-pretty max-w-[90%] sm:max-w-full">
              <p>
                Não vendo cliques, estruturo engenharia de aquisição. O mercado chama de tráfego pago; eu chamo de comprar clientes por um valor menor do que eles deixam no seu caixa. Identifico o vazamento de dinheiro no seu funil e transformo o que antes era custo em investimento que se paga sozinho.
              </p>
            </div>

            {/* Hover Card Display (Desktop) - Agora posicionado no lado esquerdo sob o texto */}
            <div className="hidden lg:block w-full h-[120px] pointer-events-none z-20 mt-4">
              {hoveredService && (
                <div className="bg-surface/90 backdrop-blur-xl border border-primary/30 p-5 rounded-2xl shadow-[0_0_40px_rgba(29,185,84,0.15)] animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="font-bold text-primary mb-1 text-sm">{hoveredService.label}</div>
                  <p className="text-sm text-foreground/90 leading-relaxed font-medium">
                    {hoveredService.hover}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Lado Direito - Action Groups */}
          <div className="flex-1 w-full max-w-[95%] sm:max-w-2xl lg:max-w-md xl:max-w-lg mx-auto flex flex-col gap-10 relative lg:mt-4">
            
            <div className="flex flex-col gap-5">
              <h3 className="hero-reveal font-mono text-[11px] tracking-[0.2em] uppercase text-muted text-center lg:text-left">Para empresas: delegue a aquisição</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                {services.filter(s => s.group === 'contratar').map(service => (
                  <a 
                    key={service.id}
                    href={`https://wa.me/5591996286994?text=${encodeURIComponent(service.whatsapp)}`}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => setHoveredService(service)}
                    onMouseLeave={() => setHoveredService(null)}
                    className="btn-reveal group relative px-4 py-4 bg-background/50 backdrop-blur-sm border-2 border-primary hover:bg-primary/20 rounded-full transition-all duration-700 overflow-hidden shadow-[0_0_15px_rgba(29,185,84,0.3)] hover:shadow-[0_0_30px_rgba(29,185,84,0.6)] w-full text-center flex items-center justify-center"
                  >
                    <span className="relative font-bold text-[13px] sm:text-sm text-primary transition-colors duration-700 flex items-center justify-center gap-2">
                      {service.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 mt-2">
              <h3 className="hero-reveal font-mono text-[11px] tracking-[0.2em] uppercase text-muted text-center lg:text-left">Para profissionais: domine e lucre</h3>
              <div className="flex justify-center lg:justify-start w-full">
                {services.filter(s => s.group === 'aprender').map(service => (
                  <a 
                    key={service.id}
                    href={`https://wa.me/5591996286994?text=${encodeURIComponent(service.whatsapp)}`}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => setHoveredService(service)}
                    onMouseLeave={() => setHoveredService(null)}
                    className="btn-reveal group relative px-6 py-5 bg-primary text-primary-foreground border-2 border-primary hover:bg-primary/90 rounded-full transition-all duration-700 shadow-[0_0_20px_rgba(29,185,84,0.5)] hover:shadow-[0_0_40px_rgba(29,185,84,0.8)] w-full text-center flex items-center justify-center"
                  >
                    <span className="relative font-bold text-sm sm:text-base tracking-wide uppercase flex items-center justify-center gap-2">
                      {service.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Hover Feedback */}
            <div className="lg:hidden mt-2 min-h-[140px] w-full">
              {hoveredService && (
                <div className="bg-surface border border-primary/40 p-5 rounded-2xl text-left animate-in fade-in duration-700 shadow-[0_0_20px_rgba(29,185,84,0.2)]">
                  <div className="font-bold text-primary mb-2 text-sm">{hoveredService.label}</div>
                  <p className="text-sm text-muted leading-relaxed">
                    {hoveredService.hover}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted animate-pulse z-10">
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}
