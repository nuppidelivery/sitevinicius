"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function PixelEvents() {
  const pathname = usePathname();
  const trackedScrolls = useRef<Set<number>>(new Set());
  const DEBUG = process.env.NODE_ENV === "development"; // Log apenas em dev

  const log = (msg: string, data?: any) => {
    if (DEBUG) console.log(`[Meta Pixel Tracker] ${msg}`, data || "");
  };

  const safeFbq = (action: string, eventName: string, data?: any) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq(action, eventName, data);
      log(`Fired ${eventName}`, data);
    } else {
      log(`fbq not found, missed ${eventName}`, data);
    }
  };

  // Disparar ViewContent e registrar PageView a cada mudança de rota (SPA)
  useEffect(() => {
    // Em SPAs como Next.js, o carregamento inicial dispara o PageView no layout, 
    // mas precisamos garantir que disparos em novas páginas funcionem.
    // O ViewContent acompanha cada nova visualização.
    safeFbq("track", "PageView");
    safeFbq("track", "ViewContent", { content_name: document.title, content_url: window.location.href });
    
    // Resetar o tracking de scroll ao mudar de página
    trackedScrolls.current.clear();
  }, [pathname]);

  // Scroll Tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const maxScroll = docHeight - winHeight;
      
      if (maxScroll <= 0) return;

      const percentage = (scrollY / maxScroll) * 100;
      const thresholds = [25, 50, 75, 90, 100];

      thresholds.forEach((threshold) => {
        if (percentage >= threshold && !trackedScrolls.current.has(threshold)) {
          trackedScrolls.current.add(threshold);
          safeFbq("trackCustom", `Scroll${threshold}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // CTA Click Tracking
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Encontrar o elemento clicado que seja botão ou link
      const cta = target.closest("a, button, input[type='submit'], input[type='button']") as HTMLElement;
      
      if (!cta) return;

      const tagName = cta.tagName.toLowerCase();
      const href = cta.getAttribute("href") || "";
      const text = (cta.innerText || cta.getAttribute("value") || cta.getAttribute("aria-label") || "").trim();
      const id = cta.id || "";
      
      let category = "navigation";
      let isCta = false;

      // 1. Verificar se é WhatsApp
      if (href.includes("wa.me") || href.includes("api.whatsapp.com") || text.toLowerCase().includes("whatsapp")) {
        category = "whatsapp";
        isCta = true;
      } 
      // 2. Verificar se é Email
      else if (href.includes("mailto:")) {
        category = "email";
        isCta = true;
      }
      // 3. Verificar se é botão explícito
      else if (tagName === "button" || tagName === "input") {
        category = "button_click";
        isCta = true;
      }
      // 4. Verificar se tem texto forte de CTA em links
      else if (/falar|quero|saiba mais|agendar|comprar|assinar|ver casos/i.test(text)) {
        category = "cta_link";
        isCta = true;
      }

      if (isCta) {
        const eventData = {
          button_text: text.substring(0, 50),
          page_url: window.location.href,
          button_id: id,
          category: category,
          timestamp: new Date().toISOString(),
        };

        // Disparo Customizado de CTA
        safeFbq("trackCustom", "CTA_Click", eventData);

        // Disparos Padrão (Standard Events) dependendo da categoria
        if (category === "whatsapp" || category === "email") {
          safeFbq("track", "Contact", eventData);
        } else if (category === "button_click" && /agendar|enviar|quero|resultados/i.test(text)) {
          safeFbq("track", "Lead", eventData);
        }
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
