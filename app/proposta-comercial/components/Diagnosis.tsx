'use client';

import { Section } from './ui';

const steps = [
  ['ATENÇÃO', 'As pessoas certas estão conhecendo sua empresa?'],
  ['INTERESSE', 'Seu anúncio apresenta um motivo forte para a pessoa continuar?'],
  ['CONVERSÃO', 'Existe estrutura para transformar interesse em oportunidade?'],
  ['ATENDIMENTO', 'Os leads estão sendo respondidos rapidamente?'],
  ['VENDA', 'Existe acompanhamento do lead até a decisão?'],
  ['RECORRÊNCIA', 'O cliente volta, indica ou compra novamente?']
];

export function Diagnosis() {
  return (
    <Section id="diagnostico" eyebrow="02 — DIAGNÓSTICO" title="Antes de anunciar, precisamos entender onde estão os gargalos." description="Tráfego pago acelera o que já existe. Por isso, analisamos o caminho inteiro entre atenção e receita.">
      <div className="journey-line">{steps.map(([title, text], i) => <div className="journey-item" key={title}><div className="journey-number">{String(i + 1).padStart(2,'0')}</div><strong>{title}</strong><p>{text}</p>{i < steps.length - 1 && <span className="journey-arrow">→</span>}</div>)}</div>
    </Section>
  );
}
