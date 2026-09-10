'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

export function Section({ id, eyebrow, title, description, children }: { id: string; eyebrow?: string; title: string; description?: string; children: ReactNode }) {
  return (
    <section id={id} className="section-shell scroll-mt-8">
      <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h2 className="section-title">{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </motion.div>
      {children}
    </section>
  );
}

export function MetricCard({ label, value, note }: { label: string; value: ReactNode; note?: string }) {
  return (
    <motion.div className="metric-card" whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
      <span>{label}</span>
      <strong>{value}</strong>
      {note && <small>{note}</small>}
    </motion.div>
  );
}

export function CountUp({ value, prefix = '', suffix = '', decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const duration = 520;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setShown(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);
  const formatted = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(shown);
  return <>{prefix}{formatted}{suffix}</>;
}

export function Pill({ children }: { children: ReactNode }) {
  return <span className="pill">{children}</span>;
}
