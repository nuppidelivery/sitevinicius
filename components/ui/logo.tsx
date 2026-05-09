import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 bg-white px-4 py-2 rounded-lg ${className}`}>
      {/* SVG Icon */}
      <svg 
        width="60" 
        height="44" 
        viewBox="0 0 70 45" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* V Esquerdo (Vazado com contorno preto) */}
        <path 
          d="M 2 2 L 16 2 L 28 32 L 40 2 L 54 2 L 28 44 Z" 
          fill="transparent" 
          stroke="#000000" 
          strokeWidth="1.5" 
          strokeLinejoin="round"
        />
        {/* V Direito (Verde Sólido, sem stroke) */}
        <path 
          d="M 22 22 L 32 22 L 44 44 L 56 2 L 68 2 L 44 56 Z" 
          fill="#1DB954" 
        />
      </svg>

      {/* Textos */}
      <div className="flex flex-col justify-center pt-1">
        <span 
          className="font-heading font-bold text-xl leading-none tracking-[0.15em] text-transparent" 
          style={{ WebkitTextStroke: '1px #000000' }}
        >
          VINÍCIUS
        </span>
        <span 
          className="font-heading font-bold text-xl leading-[1.1] tracking-[0.15em] text-transparent" 
          style={{ WebkitTextStroke: '1px #000000' }}
        >
          VALENTE
        </span>
        <span className="text-[#1DB954] text-[0.55rem] font-bold tracking-[0.12em] mt-0.5">
          MARKETING DE PERFORMANCE
        </span>
      </div>
    </div>
  );
}
