'use client';

import { useEffect, useMemo, useState } from 'react';
import { Navigation } from '@/app/proposta-comercial/components/Navigation';
import { Hero } from '@/app/proposta-comercial/components/Hero';
import { NicheSelector } from '@/app/proposta-comercial/components/NicheSelector';
import { Diagnosis } from '@/app/proposta-comercial/components/Diagnosis';
import { StrategyFlow } from '@/app/proposta-comercial/components/StrategyFlow';
import { TrackingSection } from '@/app/proposta-comercial/components/TrackingSection';
import { LandingPageDemo } from '@/app/proposta-comercial/components/LandingPageDemo';
import { ResultsDashboard } from '@/app/proposta-comercial/components/ResultsDashboard';
import { ROICalculator } from '@/app/proposta-comercial/components/ROICalculator';
import { Pricing } from '@/app/proposta-comercial/components/Pricing';
import { NextSteps } from '@/app/proposta-comercial/components/NextSteps';
import { AdminPanel } from '@/app/proposta-comercial/components/AdminPanel';
import { useProposal } from '@/app/proposta-comercial/hooks/useProposal';
import { NicheKey } from '@/app/proposta-comercial/config/types';

import { Inter } from 'next/font/google';
import './proposta.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const sectionIds=['inicio','negocio','diagnostico','estrategia','aquisicao','landing','resultados','investimento','proximos'];

export default function Home(){
  const {config,setConfig,reset,exportJSON}=useProposal();
  const [admin,setAdmin]=useState(false);
  const [presentation,setPresentation]=useState(false);
  const [active,setActive]=useState(0);
  const [scenario,setScenario]=useState<'conservative'|'realistic'|'optimistic'>('realistic');

  const cssVars=useMemo(()=>({ '--primary':config.brand.primary,'--accent':config.brand.accent } as React.CSSProperties),[config.brand]);

  useEffect(()=>{
    const observers=sectionIds.map((id,index)=>{
      const el=document.getElementById(id); if(!el)return null;
      const obs=new IntersectionObserver(([entry])=>{if(entry.isIntersecting)setActive(index)},{threshold:.35}); obs.observe(el); return obs;
    });
    return()=>observers.forEach(o=>o?.disconnect());
  },[]);

  useEffect(()=>{
    const onKey=(e:KeyboardEvent)=>{
      if(!presentation)return;
      if(['ArrowDown','ArrowRight','PageDown'].includes(e.key)){e.preventDefault();document.getElementById(sectionIds[Math.min(sectionIds.length-1,active+1)])?.scrollIntoView({behavior:'smooth'});}
      if(['ArrowUp','ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();document.getElementById(sectionIds[Math.max(0,active-1)])?.scrollIntoView({behavior:'smooth'});}
      if(e.key==='Escape') setPresentation(false);
    }; window.addEventListener('keydown',onKey); return()=>window.removeEventListener('keydown',onKey);
  },[presentation,active]);

  const togglePresentation=async()=>{
    const next=!presentation; setPresentation(next); setAdmin(false);
    try{if(next&&!document.fullscreenElement) await document.documentElement.requestFullscreen(); else if(!next&&document.fullscreenElement) await document.exitFullscreen();}catch{}
  };
  const setNiche=(key:NicheKey)=>setConfig(prev=>({...prev,client:{...prev.client,niche:key}}));

  return (
    <div className={`proposta-page ${inter.className}`}>
      <main style={cssVars} className={presentation?'presentation-mode':''}>
    <div className="ambient one"></div><div className="ambient two"></div>
    <Navigation active={active} presentation={presentation} onAdmin={()=>setAdmin(true)} onPresentation={togglePresentation}/>
    {presentation&&<button className="exit-presentation" onClick={togglePresentation}>Sair da apresentação</button>}
    <div className="content-shell">
      <Hero config={config} onStart={()=>document.getElementById('negocio')?.scrollIntoView({behavior:'smooth'})}/>
      <NicheSelector config={config} selected={config.client.niche} onChange={setNiche}/>
      <Diagnosis/>
      <StrategyFlow/>
      <TrackingSection config={config}/>
      <LandingPageDemo config={config}/>
      <ResultsDashboard config={config}/>
      <ROICalculator config={config} onConfigChange={setConfig} scenario={scenario} onScenario={setScenario}/>
      <section className="section-shell pricing-section"><div className="eyebrow">08 — ESCOPO & PLANOS</div><h2 className="section-title">Uma proposta clara sobre o que está incluso.</h2><p className="section-description">Os planos abaixo são editáveis e servem como estrutura comercial, não como regra fixa.</p><Pricing config={config}/></section>
      <NextSteps config={config}/>
    </div>
    {!presentation&&<div className="progress-rail"><span style={{height:`${((active+1)/sectionIds.length)*100}%`}}></span></div>}
    <AdminPanel open={admin} onClose={()=>setAdmin(false)} config={config} setConfig={setConfig} onReset={reset} onExport={exportJSON}/>
  </main>
  </div>
  )
}
