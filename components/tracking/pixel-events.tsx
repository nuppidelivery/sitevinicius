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

  const fireMetaEvent = (eventName: string, data: any = {}, custom: boolean = false) => {
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
  };

  // Disparar ViewContent e registrar PageView a cada mudança de rota (SPA)
  useEffect(() => {
    // Como removemos do layout.tsx, sempre disparamos aqui com event_id
    fireMetaEvent("PageView");
    fireMetaEvent("ViewContent", { content_name: document.title, content_url: window.location.href });
    
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
          fireMetaEvent(`Scroll${threshold}`, {}, true);
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
      let standardEvent = "";

      // 1. Verificar se é WhatsApp
      if (href.includes("wa.me") || href.includes("api.whatsapp.com") || text.toLowerCase().includes("whatsapp")) {
        category = "whatsapp";
        isCta = true;
        standardEvent = "Contact";
      } 
      // 2. Verificar se é Email
      else if (href.includes("mailto:")) {
        category = "email";
        isCta = true;
        standardEvent = "Contact";
      }
      // 3. Verificar se é compra (Purchase)
      else if (/comprar|checkout|pagamento/i.test(text) || href.includes("checkout")) {
        category = "purchase_click";
        isCta = true;
        standardEvent = "Purchase";
      }
      // 4. Verificar se é cadastro (CompleteRegistration)
      else if (/cadastrar|criar conta|assinar/i.test(text)) {
        category = "registration_click";
        isCta = true;
        standardEvent = "CompleteRegistration";
      }
      // 5. Verificar se é botão explícito de Lead
      else if (tagName === "button" || tagName === "input" || /agendar|enviar|quero|resultados|saiba mais/i.test(text)) {
        category = "lead_click";
        isCta = true;
        standardEvent = "Lead";
      }

      if (isCta) {
        const eventData = {
          button_text: text.substring(0, 50),
          page_url: window.location.href,
          button_id: id,
          category: category,
        };

        // Disparo Customizado de CTA
        fireMetaEvent("CTA_Click", eventData, true);

        // Disparo Padrão (Standard Event)
        if (standardEvent) {
          fireMetaEvent(standardEvent, eventData);
        }
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
