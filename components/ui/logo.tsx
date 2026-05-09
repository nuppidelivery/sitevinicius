import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-[280px] h-[72px] ${className}`}>
      <Image
        src="/VV_LOGO_01.png"
        alt="Vinícius Valente - Marketing de Performance"
        fill
        className="object-contain object-left"
        priority
      />
    </div>
  );
}
