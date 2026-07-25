"use client";

interface MarqueeTextProps {
  phrases: string[];
}

export function MarqueeText({ phrases }: MarqueeTextProps) {
  return (
    <div className="bg-primary py-4 overflow-hidden relative z-10">
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-primary to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-primary to-transparent z-20 pointer-events-none" />
      
      <div className="flex gap-12 animate-marquee w-max items-center">
        {/* Renderizamos a lista 4 vezes para garantir a rolagem infinita */}
        {[...phrases, ...phrases, ...phrases, ...phrases].map((phrase, i) => (
          <div
            key={i}
            className="font-mono text-sm md:text-base font-bold tracking-widest uppercase text-primary-foreground whitespace-nowrap opacity-90 flex items-center gap-12"
          >
            <span>{phrase}</span>
            <span className="text-primary-foreground/50 text-xl">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
