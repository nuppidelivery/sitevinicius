import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface/20 py-10 relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 flex-wrap">
          
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <Logo className="scale-75 origin-left" />
            </Link>
            <div className="font-mono text-xs text-muted tracking-[0.1em] border-l border-surface-border pl-4">
              © {new Date().getFullYear()} — Todos os direitos reservados
            </div>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-6 list-none">
            <li>
              <Link href="#" className="text-xs text-muted hover:text-primary transition-colors tracking-[0.05em] uppercase">
                Política de privacidade
              </Link>
            </li>
            <li>
              <Link href="#" className="text-xs text-muted hover:text-primary transition-colors tracking-[0.05em] uppercase">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="#" className="text-xs text-muted hover:text-primary transition-colors tracking-[0.05em] uppercase">
                LinkedIn
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </footer>
  );
}
