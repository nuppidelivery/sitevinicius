"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./button";
import { useState, useEffect } from "react";

interface QualifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QualifyModal({ isOpen, onClose }: QualifyModalProps) {
  const [selectedRange, setSelectedRange] = useState<string | null>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const ranges = [
    "Até R$ 2.000/mês",
    "De R$ 2.000 a R$ 5.000/mês",
    "De R$ 5.000 a R$ 10.000/mês",
    "Acima de R$ 10.000/mês"
  ];

  const handleSelect = (range: string) => {
    setSelectedRange(range);
    
    // Create WhatsApp URL with pre-filled message including the selected range
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre a gestão de tráfego. Meu investimento atual em mídia é: ${range}`);
    const wppUrl = `https://wa.me/5591996286994?text=${message}`;
    
    // Redirect to WhatsApp after a brief delay
    setTimeout(() => {
      window.open(wppUrl, '_blank');
      onClose();
      setSelectedRange(null); // Reset for next time
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-[90vw] md:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-surface-border bg-surface p-6 shadow-lg sm:rounded-lg"
          >
            <div className="flex flex-col space-y-2 text-center sm:text-left relative">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground pr-8 text-balance">
                Qual o seu investimento mensal em mídia hoje?
              </h2>
              <p className="text-sm text-muted">
                Isso nos ajuda a direcionar você para o especialista certo.
              </p>
              
              <button 
                onClick={onClose}
                className="absolute right-0 top-0 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Fechar</span>
              </button>
            </div>

            <div className="grid gap-3 py-4">
              {ranges.map((range) => (
                <Button
                  key={range}
                  variant="outline"
                  className={`h-14 justify-start px-6 text-sm md:text-base border-surface-border hover:border-primary/50 hover:bg-primary/5 transition-all ${selectedRange === range ? 'border-primary bg-primary/10' : ''}`}
                  onClick={() => handleSelect(range)}
                >
                  {range}
                </Button>
              ))}
            </div>
            <div className="text-xs text-center text-muted">
              Não se preocupe, seus dados estão seguros.
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
