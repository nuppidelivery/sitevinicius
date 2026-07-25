"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
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
    <section ref={containerRef} className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden pt-24 pb-0 bg-background">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          src="/0725.mp4" 
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

      {/* Container Principal */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col lg:flex-row items-center lg:items-end justify-between mt-4">
        
        {/* Lado Esquerdo - Textos e Botões */}
        <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-24 relative z-30">
          
          {/* Label */}
          <div className="hero-reveal flex items-center justify-center lg:justify-start w-full mb-8">
            <span className="flex h-[2px] w-6 md:w-8 bg-primary mr-3 md:mr-4" />
            <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-primary uppercase font-bold">Engenharia de Aquisição</span>
            <span className="flex h-[2px] w-6 md:w-8 bg-primary ml-3 md:ml-4 lg:hidden" />
          </div>

          <h1 className="hero-reveal text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight mb-5 leading-[1.15] text-foreground text-balance max-w-xl mx-auto lg:mx-0">
            O seu próximo cliente está sendo comprado pelo seu <span className="text-primary italic font-normal">concorrente.</span>
          </h1>

          <div className="hero-reveal text-sm md:text-base text-muted mb-8 leading-[1.6] text-pretty max-w-xl mx-auto lg:mx-0">
            <p>
              Não vendo cliques, estruturo engenharia de aquisição. O mercado chama de tráfego pago; eu chamo de comprar clientes por um valor menor do que eles deixam no seu caixa. Identifico o vazamento de dinheiro no seu funil e transformo o que antes era custo em investimento que se paga sozinho.
            </p>
          </div>

          {/* Action Groups */}
          <div className="w-full flex flex-col gap-6 relative z-30 max-w-xl mx-auto lg:mx-0">
            <div className="flex flex-col gap-3">
              <h3 className="hero-reveal font-mono text-[10px] tracking-[0.2em] uppercase text-muted text-center lg:text-left">Para empresas: delegue a aquisição</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {services.filter(s => s.group === 'contratar').map(service => (
                  <a 
                    key={service.id}
                    href={`https://wa.me/5591996286994?text=${encodeURIComponent(service.whatsapp)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-reveal group relative px-4 py-3.5 bg-primary text-white border border-primary hover:bg-primary/80 rounded-xl transition-all duration-500 overflow-hidden shadow-[0_0_15px_rgba(29,185,84,0.3)] hover:shadow-[0_0_30px_rgba(29,185,84,0.6)] w-full text-center flex items-center justify-center drop-shadow-md"
                  >
                    <span className="relative font-bold uppercase tracking-widest text-[10px] sm:text-xs transition-colors duration-500 flex items-center justify-center">
                      {service.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <h3 className="hero-reveal font-mono text-[10px] tracking-[0.2em] uppercase text-muted text-center lg:text-left">Para profissionais: domine e lucre</h3>
              <div className="flex justify-center lg:justify-start w-full">
                {services.filter(s => s.group === 'aprender').map(service => (
                  <a 
                    key={service.id}
                    href={`https://wa.me/5591996286994?text=${encodeURIComponent(service.whatsapp)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-reveal group relative px-6 py-4 bg-primary text-white border border-primary hover:bg-primary/90 rounded-xl transition-all duration-500 shadow-[0_0_20px_rgba(29,185,84,0.4)] hover:shadow-[0_0_40px_rgba(29,185,84,0.7)] w-full text-center flex items-center justify-center drop-shadow-md"
                  >
                    <span className="relative font-black text-xs sm:text-sm tracking-widest uppercase flex items-center justify-center">
                      {service.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito - Imagem dos Sócios */}
        {/* Usamos absolute alignment na base via lg:h-[85vh] para garantir que ela sempre toque o final da section */}
        <div className="w-full lg:w-[50%] xl:w-[55%] lg:absolute lg:right-[-2%] lg:bottom-0 relative h-[450px] sm:h-[550px] lg:h-[90vh] flex items-end justify-center z-20 hero-reveal mt-12 lg:mt-0 pointer-events-none">
           <div className="relative w-[100%] sm:w-[85%] lg:w-full h-full flex items-end justify-center lg:justify-end">
              <Image 
                src="/VINICIUS_GLAUBER.png" 
                alt="Vinícius Valente e Glauber Luciano" 
                fill 
                className="object-contain object-bottom drop-shadow-[0_0_40px_rgba(0,0,0,0.6)]" 
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              
              {/* Tags de Nome Flutuantes */}
              <div className="absolute left-[2%] bottom-[35%] lg:left-[5%] lg:bottom-[45%] flex items-center gap-2.5 z-30 animate-in fade-in zoom-in duration-1000 delay-500 drop-shadow-md">
                 <div className="w-1.5 h-8 sm:h-9 bg-primary rounded-full"></div>
                 <div className="flex flex-col text-left justify-center">
                    <span className="font-heading font-normal text-white text-[10px] sm:text-xs tracking-[0.2em] uppercase leading-none mb-1">VINÍCIUS</span>
                    <span className="font-heading font-black text-white text-xs sm:text-sm tracking-[0.2em] uppercase leading-none">VALENTE</span>
                 </div>
              </div>
              <div className="absolute right-[2%] bottom-[20%] lg:right-[15%] lg:bottom-[30%] flex items-center gap-2.5 z-30 animate-in fade-in zoom-in duration-1000 delay-700 drop-shadow-md">
                 <div className="w-1.5 h-8 sm:h-9 bg-primary rounded-full"></div>
                 <div className="flex flex-col text-left justify-center">
                    <span className="font-heading font-normal text-white text-[10px] sm:text-xs tracking-[0.2em] uppercase leading-none mb-1">GLAUBER</span>
                    <span className="font-heading font-black text-white text-xs sm:text-sm tracking-[0.2em] uppercase leading-none">LUCIANO</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
      
      {/* Scroll Indicator agora fica à esquerda no desktop para não sumir atrás da foto */}
      <div className="scroll-indicator absolute bottom-6 left-1/2 lg:left-[25%] -translate-x-1/2 flex flex-col items-center gap-2 text-muted animate-pulse z-30">
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}
