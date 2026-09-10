'use client';

import { ProposalConfig } from '@/app/proposta-comercial/config/types';
import { Section } from './ui';

export function TrackingSection({ config }: { config: ProposalConfig }) {
  const niche = config.niches[config.client.niche];
  const steps = ['Visita', 'Pixel registra', 'Ação', 'Evento', 'Aprendizado', 'Otimização'];
  return (
    <Section id="aquisicao" eyebrow="04 — AQUISIÇÃO & DADOS" title="Cada interação útil deve deixar um sinal." description="A campanha melhora quando conseguimos enxergar o que acontece depois do clique.">
      <div className="tracking-flow">{steps.map((step, i) => <div key={step}><span>{i+1}</span><strong>{step}</strong>{i < steps.length-1 && <b>→</b>}</div>)}</div>
      <div className="tool-grid">{config.tracking.tools.map(tool => <div className="tool-card" key={tool}><span className="tool-dot"></span><strong>{tool}</strong><p>{tool === 'CRM' ? 'Acompanha oportunidade e estágio comercial.' : 'Ajuda a registrar comportamento e atribuição.'}</p></div>)}</div>
      <div className="niche-note"><span>Conversões prioritárias para {niche.label}</span><strong>{niche.conversionTypes.join(' • ')}</strong></div>
    </Section>
  );
}
