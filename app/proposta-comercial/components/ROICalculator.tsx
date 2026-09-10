'use client';

import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { ProposalConfig } from '@/app/proposta-comercial/config/types';
import { calculateProjection } from '@/app/proposta-comercial/utils/calculations';
import { Section, MetricCard } from './ui';

const brl = (v: number) => new Intl.NumberFormat('pt-BR', { style:'currency', currency:'BRL', maximumFractionDigits:0 }).format(v);

const scenarios = {
  conservative: { label: 'Conservador', cpl: 1.25, lead: .8, sale: .8 },
  realistic: { label: 'Realista', cpl: 1, lead: 1, sale: 1 },
  optimistic: { label: 'Otimista', cpl: .82, lead: 1.12, sale: 1.12 }
} as const;

type ScenarioKey = keyof typeof scenarios;

export function ROICalculator({ config, onConfigChange, scenario, onScenario }: { config: ProposalConfig; onConfigChange: (next: ProposalConfig) => void; scenario: ScenarioKey; onScenario: (s: ScenarioKey) => void }) {
  const c = config.calculator;
  const s = scenarios[scenario];
  const adjusted = { ...c, estimatedCPL: c.estimatedCPL * s.cpl, leadToOpportunity: c.leadToOpportunity * s.lead, opportunityToSale: c.opportunityToSale * s.sale };
  const p = calculateProjection(adjusted);
  const set = (key: keyof ProposalConfig['calculator'], value: number) => onConfigChange({ ...config, calculator: { ...config.calculator, [key]: value } });
  const budgetData = [
    { name: 'Mídia', value: c.adSpend }, { name: 'Gestão', value: c.managementFee }, { name: 'Ferramentas / estrutura', value: c.additionalCosts || 1 }
  ];
  return (
    <Section id="investimento" eyebrow="07 — INVESTIMENTO" title="Vamos transformar investimento em uma projeção compreensível." description="As premissas abaixo podem ser ajustadas em tempo real durante a reunião. Elas são cenários, não garantias.">
      <div className="scenario-tabs">{(Object.entries(scenarios) as [ScenarioKey, typeof s][]).map(([key, item]) => <button key={key} onClick={() => onScenario(key)} className={scenario===key?'active':''}>{item.label}</button>)}</div>
      <div className="calculator-grid"><div className="calculator-panel"><label><span>Investimento mensal em mídia</span><strong>{brl(c.adSpend)}</strong></label><input type="range" min={c.minSpend} max={c.maxSpend} step={250} value={c.adSpend} onChange={e=>set('adSpend',Number(e.target.value))}/><div className="range-ends"><span>{brl(c.minSpend)}</span><span>{brl(c.maxSpend)}</span></div><div className="input-grid"><NumberField label="Ticket médio" value={c.averageTicket} onChange={v=>set('averageTicket',v)} prefix="R$"/><NumberField label="Custo estimado por lead" value={c.estimatedCPL} onChange={v=>set('estimatedCPL',v)} prefix="R$"/><NumberField label="Lead → oportunidade" value={c.leadToOpportunity} onChange={v=>set('leadToOpportunity',v)} suffix="%"/><NumberField label="Oportunidade → venda" value={c.opportunityToSale} onChange={v=>set('opportunityToSale',v)} suffix="%"/><NumberField label="Margem estimada" value={c.margin} onChange={v=>set('margin',v)} suffix="%"/><NumberField label="Mensalidade de gestão" value={c.managementFee} onChange={v=>set('managementFee',v)} prefix="R$"/><NumberField label="Outros custos" value={c.additionalCosts} onChange={v=>set('additionalCosts',v)} prefix="R$"/></div></div><div className="projection-panel"><div className="projection-kicker">CENÁRIO {s.label.toUpperCase()}</div><div className="projection-grid"><MetricCard label="Leads estimados" value={Math.round(p.estimatedLeads).toLocaleString('pt-BR')} /><MetricCard label="Oportunidades" value={Math.round(p.estimatedOpportunities).toLocaleString('pt-BR')} /><MetricCard label="Vendas estimadas" value={p.estimatedSales.toFixed(1).replace('.',',')} /><MetricCard label="Receita potencial" value={brl(p.estimatedRevenue)} /><MetricCard label="ROAS projetado" value={`${p.estimatedROAS.toFixed(1).replace('.',',')}x`} /><MetricCard label="Payback estimado" value={`~${Math.round(p.paybackDays)} dias`} /></div></div></div>
      <div className="payback-card"><div className="payback-copy"><span>TEMPO ESTIMADO PARA RETORNO</span><h3>Uma leitura de maturação, não uma promessa.</h3><p>O marcador se desloca conforme as premissas do simulador.</p></div><div className="timeline"><div className="timeline-line"><div className="payback-marker" style={{left:`${Math.min(100,(p.paybackDays/90)*100)}%`}}><span>Retorno estimado</span></div></div><div className="timeline-labels"><span>0 dias<br/><b>Estruturação</b></span><span>30 dias<br/><b>Dados</b></span><span>60 dias<br/><b>Otimização</b></span><span>90 dias<br/><b>Escala</b></span></div></div></div>
      <div className="budget-card"><div><span>COMO O ORÇAMENTO É DISTRIBUÍDO</span><h3>Separação clara entre mídia e serviço.</h3><p>O investimento nas plataformas não é confundido com a remuneração da gestão.</p></div><div className="budget-chart"><ResponsiveContainer width="100%" height={220}><PieChart><Pie data={budgetData} dataKey="value" nameKey="name" innerRadius={58} outerRadius={86} paddingAngle={3}>{budgetData.map((_,i)=><Cell key={i} fill={['#35C44F','#d8d8d8','#626262'][i]}/>)}</Pie><Tooltip contentStyle={{background:'#0c0c0c',border:'1px solid #252525'}}/></PieChart></ResponsiveContainer></div><div className="budget-legend">{budgetData.map((item,i)=><div key={item.name}><i style={{background:['#35C44F','#d8d8d8','#626262'][i]}}></i><span>{item.name}</span><strong>{brl(item.value)}</strong></div>)}</div></div>
      <p className="disclaimer">Os valores apresentados são projeções baseadas nas premissas selecionadas. Resultados reais dependem de mercado, oferta, atendimento, concorrência, investimento e capacidade comercial.</p>
    </Section>
  );
}

function NumberField({label,value,onChange,prefix,suffix}:{label:string;value:number;onChange:(v:number)=>void;prefix?:string;suffix?:string}){
  return <label className="number-field"><span>{label}</span><div>{prefix && <b>{prefix}</b>}<input type="number" value={value} onChange={e=>onChange(Number(e.target.value)||0)}/>{suffix && <b>{suffix}</b>}</div></label>
}
