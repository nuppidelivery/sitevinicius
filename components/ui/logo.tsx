import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Icon */}
      <svg 
        width="60" 
        height="44" 
        viewBox="0 0 70 45" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* V Esquerdo (Outline) */}
        <path 
          d="M 2 2 L 16 2 L 28 32 L 40 2 L 54 2 L 28 44 Z" 
          fill="none" 
          stroke="#F5F5F5" 
          strokeWidth="1.5" 
          strokeLinejoin="round"
        />
        {/* V Direito (Verde Sólido com borda escura para criar o recorte) */}
        <path 
          d="M 22 22 L 32 22 L 44 44 L 56 2 L 68 2 L 44 56 Z" 
          fill="#1DB954" 
          stroke="#0D0D0D" 
          strokeWidth="4" 
          strokeLinejoin="round"
        />
      </svg>

      {/* Textos */}
      <div className="flex flex-col justify-center pt-1">
        <span 
          className="font-heading font-bold text-xl leading-none tracking-[0.15em] text-transparent" 
          style={{ WebkitTextStroke: '1px #F5F5F5' }}
        >
          VINÍCIUS
        </span>
        <span 
          className="font-heading font-bold text-xl leading-[1.1] tracking-[0.15em] text-transparent" 
          style={{ WebkitTextStroke: '1px #F5F5F5' }}
        >
          VALENTE
        </span>
        <span className="text-primary text-[0.55rem] font-bold tracking-[0.12em] mt-0.5">
          MARKETING DE PERFORMANCE
        </span>
      </div>
    </div>
  );
}
