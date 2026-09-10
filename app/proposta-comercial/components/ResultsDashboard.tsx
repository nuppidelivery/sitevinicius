'use client';

import { useMemo, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ProposalConfig } from '@/app/proposta-comercial/config/types';
import { Section, MetricCard, CountUp } from './ui';

const baseTrend = [
  { d: '01', leads: 4, receita: 1500, investimento: 350, cpl: 87 },
  { d: '05', leads: 7, receita: 3000, investimento: 720, cpl: 78 },
  { d: '10', leads: 11, receita: 5000, investimento: 1100, cpl: 68 },
  { d: '15', leads: 16, receita: 8000, investimento: 1550, cpl: 61 },
  { d: '20', leads: 28, receita: 12000, investimento: 2050, cpl: 57 },
  { d: '25', leads: 43, receita: 18000, investimento: 2500, cpl: 53 },
  { d: '30', leads: 60, receita: 25000, investimento: 3000, cpl: 50 }
];
const campaignData = [{ name: 'Captação', value: 31 }, { name: 'Remarketing', value: 17 }, { name: 'Pesquisa', value: 12 }];
const conversionData = [{ name: 'Visitas', value: 375 }, { name: 'Leads', value: 60 }, { name: 'Oportunidades', value: 18 }, { name: 'Vendas', value: 5 }];
const originData = [{ name: 'Meta', value: 28 }, { name: 'Google', value: 19 }, { name: 'Direto', value: 8 }, { name: 'Retorno', value: 5 }];

export function ResultsDashboard({ config }: { config: ProposalConfig }) {
  const [period, setPeriod] = useState<'7'|'30'|'90'|'custom'>('30');
  const [customDates, setCustomDates] = useState({ from: '2026-09-01', to: '2026-09-30' });
  const factor = period === '7' ? .28 : period === '90' ? 2.65 : period === 'custom' ? 1.15 : 1;
  const m = config.metrics;
  const display = {
    investment: m.investment * factor,
    reach: m.reach * factor,
    impressions: m.impressions * factor,
    leads: m.leads * factor,
    cpl: m.cpl,
    opportunities: m.opportunities * factor,
    sales: m.sales * factor,
    revenue: m.revenue * factor,
    roas: m.roas
  };
  const trend = useMemo(() => baseTrend.map(row => ({...row, leads: Math.max(1,Math.round(row.leads*factor)), receita: Math.round(row.receita*factor), investimento: Math.round(row.investimento*factor)})), [factor]);
  const funnel = [
    ['Pessoas alcançadas', display.reach], ['Visitantes', Math.max(1, Math.round(display.leads / .16))], ['Leads', display.leads], ['Oportunidades', display.opportunities], ['Vendas', display.sales]
  ];
  const currency = (v:number) => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0}).format(v);
  return (
    <Section id="resultados" eyebrow="06 — RESULTADOS" title="Dados para decidir. Não números para impressionar." description="Abaixo, um dashboard demonstrativo. Na operação real, os indicadores são substituídos pelos dados efetivos do cliente.">
      <div className="dashboard-toolbar"><div className="demo-label">DADOS DEMONSTRATIVOS — EDITÁVEIS NO PAINEL ADMIN</div><div className="period-tabs">{[['7','7 dias'],['30','30 dias'],['90','90 dias'],['custom','Personalizado']].map(([key,label])=><button key={key} className={period===key?'active':''} onClick={()=>setPeriod(key as typeof period)}>{label}</button>)}</div></div>
      {period==='custom'&&<div className="custom-dates"><label>De <input type="date" value={customDates.from} onChange={e=>setCustomDates({...customDates,from:e.target.value})}/></label><label>Até <input type="date" value={customDates.to} onChange={e=>setCustomDates({...customDates,to:e.target.value})}/></label></div>}
      <div className="metric-grid">
        <MetricCard label="Investimento" value={<CountUp value={display.investment} prefix="R$ " />} />
        <MetricCard label="Alcance" value={<CountUp value={display.reach} />} />
        <MetricCard label="Impressões" value={<CountUp value={display.impressions} />} />
        <MetricCard label="Leads" value={<CountUp value={display.leads} />} />
        <MetricCard label="Custo por lead" value={<CountUp value={display.cpl} prefix="R$ " />} />
        <MetricCard label="Oportunidades" value={<CountUp value={display.opportunities} />} />
        <MetricCard label="Vendas" value={<CountUp value={display.sales} decimals={1} />} />
        <MetricCard label="Receita atribuída" value={<CountUp value={display.revenue} prefix="R$ " />} />
        <MetricCard label="ROAS" value={<CountUp value={display.roas} suffix="x" decimals={1} />} />
      </div>
      <div className="chart-grid three">
        <ChartCard title="Evolução de leads" note="Acumulado"><AreaChart data={trend}><defs><linearGradient id="greenFade" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#35C44F" stopOpacity={0.45}/><stop offset="95%" stopColor="#35C44F" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="#222" vertical={false}/><XAxis dataKey="d" stroke="#777"/><YAxis stroke="#777"/><Tooltip contentStyle={tooltipStyle}/><Area type="monotone" dataKey="leads" stroke="#35C44F" fill="url(#greenFade)" strokeWidth={2}/></AreaChart></ChartCard>
        <ChartCard title="Investimento x receita" note="R$"><BarChart data={trend.slice(-4)}><CartesianGrid stroke="#222" vertical={false}/><XAxis dataKey="d" stroke="#777"/><YAxis stroke="#777"/><Tooltip contentStyle={tooltipStyle}/><Bar dataKey="investimento" fill="#666" radius={[6,6,0,0]}/><Bar dataKey="receita" fill="#35C44F" radius={[6,6,0,0]}/></BarChart></ChartCard>
        <ChartCard title="Custo por lead" note="Tendência"><AreaChart data={trend}><CartesianGrid stroke="#222" vertical={false}/><XAxis dataKey="d" stroke="#777"/><YAxis stroke="#777"/><Tooltip contentStyle={tooltipStyle}/><Area type="monotone" dataKey="cpl" stroke="#d8d8d8" fill="#1b1b19" strokeWidth={2}/></AreaChart></ChartCard>
        <ChartCard title="Conversões" note="Funil"><BarChart data={conversionData}><CartesianGrid stroke="#222" vertical={false}/><XAxis dataKey="name" stroke="#777"/><YAxis stroke="#777"/><Tooltip contentStyle={tooltipStyle}/><Bar dataKey="value" fill="#35C44F" radius={[7,7,0,0]}/></BarChart></ChartCard>
        <ChartCard title="Origem das oportunidades" note="Canais"><BarChart data={originData}><CartesianGrid stroke="#222" vertical={false}/><XAxis dataKey="name" stroke="#777"/><YAxis stroke="#777"/><Tooltip contentStyle={tooltipStyle}/><Bar dataKey="value" fill="#d8d8d8" radius={[7,7,0,0]}/></BarChart></ChartCard>
        <ChartCard title="Performance por campanha" note="Leads"><BarChart data={campaignData}><CartesianGrid stroke="#222" vertical={false}/><XAxis dataKey="name" stroke="#777"/><YAxis stroke="#777"/><Tooltip contentStyle={tooltipStyle}/><Bar dataKey="value" fill="#35C44F" radius={[7,7,0,0]}/></BarChart></ChartCard>
      </div>
      <div className="funnel-card"><div><span>VISÃO DO FUNIL</span><h3>Da atenção à receita.</h3></div><div className="funnel-row">{funnel.map(([label, value], i) => { const prev = i > 0 ? Number(funnel[i-1][1]) : 0; const rate = i > 0 && prev ? Math.round((Number(value)/prev)*100) : 100; return <div className="funnel-step" key={String(label)}><strong>{Math.round(Number(value)).toLocaleString('pt-BR')}</strong><span>{label}</span>{i > 0 && <small>{rate}% da etapa anterior</small>}</div>; })}<div className="funnel-step revenue"><strong>{currency(display.revenue)}</strong><span>Receita</span></div></div></div>
    </Section>
  );
}

const tooltipStyle = {background:'#0c0c0c',border:'1px solid #252525'};
function ChartCard({title,note,children}:{title:string;note:string;children:React.ReactNode}){return <div className="chart-card"><div className="chart-title"><strong>{title}</strong><span>{note}</span></div><ResponsiveContainer width="100%" height={230}>{children as any}</ResponsiveContainer></div>}
