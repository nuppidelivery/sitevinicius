'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { NicheKey, ProposalConfig } from '@/app/proposta-comercial/config/types';
import { Section, Pill } from './ui';

export function NicheSelector({ config, selected, onChange }: { config: ProposalConfig; selected: NicheKey; onChange: (key: NicheKey) => void }) {
  const current = config.niches[selected];
  return (
    <Section id="negocio" eyebrow="01 — SEU NEGÓCIO" title="Primeiro, vamos falar sobre o seu negócio." description="Selecione o segmento e toda a narrativa da proposta se adapta ao contexto comercial.">
      <div className="niche-grid">
        {(Object.entries(config.niches) as [NicheKey, typeof current][]).map(([key, niche]) => (
          <button key={key} onClick={() => onChange(key)} className={`niche-button ${selected === key ? 'selected' : ''}`}><span>{niche.eyebrow}</span><strong>{niche.label}</strong></button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={selected} className="context-card" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
          <div><div className="eyebrow">CONTEXTO DO SEGMENTO</div><h3>{current.headline}</h3><p>{current.problem}</p></div>
          <div className="context-side"><p>{current.argument}</p><div className="pill-wrap">{current.strategy.map(s => <Pill key={s}>{s}</Pill>)}</div></div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
