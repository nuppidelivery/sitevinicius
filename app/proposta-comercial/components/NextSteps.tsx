'use client';

import { ProposalConfig } from '@/app/proposta-comercial/config/types';
import { Section } from './ui';

const steps=['Aprovação da proposta','Contrato','Onboarding','Acessos','Estruturação','Rastreamento','Campanhas','Otimização'];

export function NextSteps({config}:{config:ProposalConfig}){
  return <Section id="proximos" eyebrow="08 — PRÓXIMOS PASSOS" title="Da aprovação à primeira campanha." description="Um processo simples, visível e organizado do início da parceria até a rotina de otimização."><div className="next-grid">{steps.map((s,i)=><div key={s}><span>{String(i+1).padStart(2,'0')}</span><strong>{s}</strong></div>)}</div><div id="contato" className="closing-card"><div><span>{config.brand.descriptor}</span><h3>O próximo passo é construir uma aquisição de clientes mais estruturada.</h3><p>{config.brand.name}</p></div><div className="closing-actions"><a href={config.cta.approve}>Aprovar proposta</a><a href={config.cta.question} className="secondary">Tenho uma dúvida</a><a href={config.cta.start} className="secondary">Quero começar</a></div></div></Section>
}
