"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function PixelEvents() {
  const pathname = usePathname();
  const trackedScrolls = useRef<Set<number>>(new Set());
  const DEBUG = process.env.NODE_ENV === "development";

  const log = (msg: string, data?: any) => {
    if (DEBUG) console.log(`[Meta Pixel Tracker] ${msg}`, data || "");
  };

  const getCookie = (name: string) => {
    if (typeof document === "undefined") return undefined;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
    return undefined;
  };

  const generateEventId = () => {
    return Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
  };

  const fireMetaEvent = (eventName: string, data: any = {}, custom: boolean = false, browserOnly: boolean = false) => {
    const eventId = generateEventId();
    const action = custom ? "trackCustom" : "track";

    // 1. Disparo Frontend (Pixel)
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq(action, eventName, data, { eventID: eventId });
      log(`Fired ${eventName} (Pixel)`, { data, eventId });
    } else {
      log(`fbq not found, missed ${eventName} (Pixel)`, data);
    }

    // 2. Disparo Backend (CAPI)
    if (!browserOnly) {
      const fbp = getCookie("_fbp");
      const fbc = getCookie("_fbc");

      fetch("/api/capi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_source_url: window.location.href,
          event_id: eventId,
          user_data: {
            fbp,
            fbc,
          },
          custom_data: data,
        }),
      }).catch(err => {
        log(`Failed to send CAPI for ${eventName}`, err);
      });
    }
  };

  // Disparar ViewContent e registrar PageView a cada mudança de rota (SPA)
  useEffect(() => {
    fireMetaEvent("PageView");
    fireMetaEvent("ViewContent", { content_name: document.title, content_url: window.location.href });
    
    // Resetar o tracking de scroll ao mudar de página
    trackedScrolls.current.clear();
  }, [pathname]);

  // Timer Tracking (30s, 60s, 120s) - Limpo na desmontagem ou troca de rota
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    const thresholds = [30, 60, 120];
    
    thresholds.forEach((time) => {
      const timer = setTimeout(() => {
        // Apenas browser-side
        fireMetaEvent(`Time${time}s`, { page_url: window.location.href }, true, true);
      }, time * 1000);
      timers.push(timer);
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [pathname]);

  // Scroll Tracking com Throttle (50%, 75%, 90%)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const docHeight = document.documentElement.scrollHeight;
          const winHeight = window.innerHeight;
          const maxScroll = docHeight - winHeight;
          
          if (maxScroll <= 0) {
            ticking = false;
            return;
          }

          const percentage = (scrollY / maxScroll) * 100;
          const thresholds = [50, 75, 90];

          thresholds.forEach((threshold) => {
            if (percentage >= threshold && !trackedScrolls.current.has(threshold)) {
              trackedScrolls.current.add(threshold);
              // Apenas browser-side
              fireMetaEvent(`Scroll${threshold}`, { page_url: window.location.href }, true, true);
            }
          });
          
          ticking = false;
        });
        ticking = true;
      }
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
      
      // Detecção de clique no WhatsApp (separado de conversões de lead genéricas)
      if (href.includes("wa.me") || href.includes("api.whatsapp.com") || text.toLowerCase().includes("whatsapp")) {
        const buttonLocation = cta.closest('section')?.id || 'undefined';
        const eventData = {
          button_text: text.substring(0, 50),
          page_url: window.location.href,
          page_path: window.location.pathname,
          button_location: buttonLocation
        };
        // Dual-tracking (CAPI + Pixel)
        fireMetaEvent("WhatsAppClick", eventData, true, false);
        return; // Interrompe para não disparar outras lógicas
      }

      // Lógicas secundárias e eventos genéricos
      let category = "navigation";
      let isCta = false;
      let standardEvent = "";

      if (href.includes("mailto:")) {
        category = "email";
        isCta = true;
        standardEvent = "Contact";
      } else if (/comprar|checkout|pagamento/i.test(text) || href.includes("checkout")) {
        category = "purchase_click";
        isCta = true;
        standardEvent = "Purchase";
      } else if (/cadastrar|criar conta|assinar/i.test(text)) {
        category = "registration_click";
        isCta = true;
        standardEvent = "CompleteRegistration";
      }

      if (isCta) {
        const eventData = {
          button_text: text.substring(0, 50),
          page_url: window.location.href,
          category: category,
        };

        // Disparo Customizado de CTA e Padrão para itens legados
        fireMetaEvent("CTA_Click", eventData, true, false);
        if (standardEvent) {
          fireMetaEvent(standardEvent, eventData, false, false);
        }
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
