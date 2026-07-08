"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { useState } from "react";
import { QualifyModal } from "@/components/ui/qualify-modal";

export function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-surface-border bg-background/80 backdrop-blur-md"
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#servicos" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Serviços</Link>
            <Link href="#processo" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Processo</Link>
            <Link href="#resultados" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Resultados</Link>
            <Link href="#faq" className="text-sm font-medium text-muted hover:text-foreground transition-colors">FAQ</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button size="sm" onClick={() => setIsModalOpen(true)} className="bg-primary text-primary-foreground hover:bg-primary/90 min-h-[44px]">
              <span className="hidden md:inline font-bold">Falar no WhatsApp</span>
              <span className="md:hidden font-bold">WhatsApp</span>
            </Button>
          </div>
        </div>
      </motion.header>

      <QualifyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
