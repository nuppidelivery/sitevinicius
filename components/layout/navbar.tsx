"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-surface-border bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
            V
          </div>
          <span className="font-heading font-bold text-xl tracking-wide">Vorté</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#servicos" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Serviços</Link>
          <Link href="#cases" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Cases</Link>
          <Link href="#metodo" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Método</Link>
          <Link href="#sobre" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Sobre</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>Entrar</Button>
          <Button size="sm" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>Começar Agora</Button>
        </div>
      </div>
    </motion.header>
  );
}
