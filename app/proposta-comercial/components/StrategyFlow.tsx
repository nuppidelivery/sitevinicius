'use client';

import { useState } from 'react';
import { Section } from './ui';

const flow = [
  ['Criativo', 'A mensagem que interrompe a atenção e apresenta um motivo para continuar.'],
  ['Anúncio', 'Distribuição estruturada por objetivo, fase do funil e oferta.'],
  ['Público', 'Quem vê, onde vê e em qual contexto a mensagem aparece.'],
  ['Landing / WhatsApp', 'Ambiente em que o interesse vira uma ação mensurável.'],
  ['Pixel + API', 'Camada de dados usada para registrar eventos e melhorar leitura das campanhas.'],
  ['CRM / Atendimento', 'Onde a oportunidade recebe acompanhamento comercial.'],
  ['Venda', 'Conversão real do esforço de aquisição em receita.'],
  ['Dados', 'Informações usadas para identificar gargalos e padrões.'],
  ['Otimização', 'Decisões de orçamento, criativo, público e oferta baseadas em evidências.']
];

export function StrategyFlow() {
  const [selected, setSelected] = useState(0);
  return (
    <Section id="estrategia" eyebrow="03 — ESTRATÉGIA" title="Não estamos contratando apenas anúncios." description="Estamos construindo uma estrutura capaz de gerar dados, identificar gargalos e melhorar continuamente a aquisição de clientes.">
      <div className="strategy-layout"><div className="flow-grid">{flow.map(([name], i) => <button key={name} onClick={() => setSelected(i)} className={selected === i ? 'selected' : ''}><span>{String(i+1).padStart(2,'0')}</span><strong>{name}</strong></button>)}</div><div className="strategy-detail"><span>ETAPA {String(selected + 1).padStart(2,'0')}</span><h3>{flow[selected][0]}</h3><p>{flow[selected][1]}</p><div className="live-chip"><i></i> Estrutura conectada</div></div></div>
    </Section>
  );
}
