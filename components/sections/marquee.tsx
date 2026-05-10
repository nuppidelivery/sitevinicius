"use client";

export function Marquee() {
  const items = [
    "Google Ads",
    "Meta Ads",
    "Automação Comercial",
    "Captação de Leads",
    "CRO",
    "Analytics Avançado",
    "Criativos de Performance",
    "WhatsApp Automation",
  ];

  return (
    <div className="bg-primary py-3.5 overflow-hidden relative z-10 border-y border-primary/20">
      <div className="flex gap-12 animate-marquee w-max">
        {/* Renderizamos a lista 3 vezes para garantir a rolagem infinita contínua */}
        {[...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-background flex items-center gap-4 whitespace-nowrap"
          >
            {item}
            <span className="text-[8px] opacity-70">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
