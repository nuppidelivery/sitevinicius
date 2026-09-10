'use client';

import { ProposalConfig } from '@/app/proposta-comercial/config/types';
import { Section } from './ui';

export function LandingPageDemo({ config }: { config: ProposalConfig }) {
  const niche = config.niches[config.client.niche];
  return (
    <Section id="landing" eyebrow="05 — LANDING PAGE" title="O anúncio conquista o clique. A página precisa transformar esse interesse em ação." description="Uma página própria aumenta o controle sobre mensagem, rastreamento e experiência antes do atendimento.">
      <div className="landing-layout">
        <div className="browser"><div className="browser-bar"><span></span><span></span><span></span><div>seudominio.com.br</div></div><div className="browser-body"><div className="mock-badge">{niche.label}</div><h3>{niche.landingHeadline}</h3><p>{niche.landingSubheadline}</p><div className="mock-benefits"><span>✓ Clareza</span><span>✓ Prova</span><span>✓ Rastreamento</span></div><div className="mock-cta">Solicitar atendimento →</div><div className="mock-proof"><span></span><span></span><span></span></div></div></div>
        <div className="landing-copy"><h3>Mais controle entre anúncio e atendimento.</h3><p>Enviar todo o tráfego diretamente para uma rede social ou WhatsApp pode limitar a quantidade de informações que conseguimos utilizar para otimizar as campanhas.</p><div className="compare-box"><div><span>SEM LANDING PAGE</span><strong>Anúncio → WhatsApp → Poucos dados</strong></div><div className="good"><span>COM LANDING PAGE</span><strong>Anúncio → Página → Pixel → Evento → Lead → Remarketing</strong></div></div><blockquote>“Cada visita ajuda a construir inteligência para as próximas campanhas.”</blockquote></div>
      </div>
    </Section>
  );
}
