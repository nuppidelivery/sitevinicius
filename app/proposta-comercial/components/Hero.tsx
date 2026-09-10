'use client';

import { motion } from 'framer-motion';
import { ProposalConfig } from '@/app/proposta-comercial/config/types';

export function Hero({ config, onStart }: { config: ProposalConfig; onStart: () => void }) {
  const niche = config.niches[config.client.niche];
  return (
    <section id="inicio" className="hero section-shell">
      <motion.div className="hero-grid" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
        <div>
          <motion.div className="eyebrow" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>PROPOSTA COMERCIAL • {niche.label}</motion.div>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>Uma estrutura pensada para transformar investimento em <span>oportunidades de negócio.</span></motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>Esta proposta foi construída com base no seu mercado, no comportamento do seu cliente e nas oportunidades de crescimento que podemos explorar através de mídia paga.</motion.p>
          <motion.button className="primary-btn" onClick={onStart} variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>Conhecer a estratégia <span>→</span></motion.button>
        </div>
        <motion.div className="hero-card" variants={{ hidden: { opacity: 0, scale: 0.97 }, show: { opacity: 1, scale: 1 } }}>
          <div className="hero-card-top"><span>PROPOSTA PARA</span><span className="status-dot">Personalizada</span></div>
          <h3>{config.client.company}</h3>
          <div className="hero-meta"><div><span>Cliente</span><strong>{config.client.name}</strong></div><div><span>Segmento</span><strong>{niche.label}</strong></div><div><span>Responsável</span><strong>{config.client.responsible}</strong></div><div><span>Data</span><strong>{config.client.date}</strong></div></div>
          <div className="hero-signal"><span></span><p>Estratégia • Aquisição • Rastreamento • Otimização</p></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
