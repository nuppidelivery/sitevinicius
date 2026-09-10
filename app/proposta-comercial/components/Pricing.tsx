'use client';

import { ProposalConfig } from '@/app/proposta-comercial/config/types';
import { Section } from './ui';

const included = [
  ['Estratégia','Planejamento das campanhas, oferta e funil.'],['Gestão de tráfego','Criação, acompanhamento e otimização das campanhas.'],['Rastreamento','Pixel, eventos e acompanhamento das conversões.'],['Landing page','Estrutura preparada para receber e converter tráfego.'],['Criativos','Escopo ajustável por contrato.'],['Relatórios','Dashboard e leitura dos principais indicadores.'],['Reuniões','Cadência editável conforme o plano.'],['Suporte','Canal e SLA definidos na proposta.']
];
const brl=(v:number)=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0}).format(v);

export function Pricing({ config }: { config: ProposalConfig }) {
  return (
    <div className="pricing-wrap"><div className="included-grid">{included.map(([a,b])=><div className="include-card" key={a}><span>✓</span><strong>{a}</strong><p>{b}</p></div>)}</div><div className="plans-grid">{config.plans.map(plan=><div className={`plan-card ${plan.featured?'featured':''}`} key={plan.name}>{plan.badge&&<span className="plan-badge">{plan.badge}</span>}<span className="plan-name">{plan.name}</span><strong className="plan-price">{brl(plan.price)}<small>/mês</small></strong><p>{plan.description}</p><ul>{plan.items.map(i=><li key={i}>✓ {i}</li>)}</ul><button>{plan.cta}</button></div>)}</div></div>
  );
}
