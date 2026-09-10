import { ProposalConfig } from './types';
import { niches } from '@/app/proposta-comercial/data/niches';

export const proposalConfig: ProposalConfig = {
  niches,
  brand: {
    primary: '#040403',
    accent: '#35C44F',
    name: 'Vinícius Valente',
    descriptor: 'Marketing de Performance'
  },
  client: {
    name: 'Cliente Exemplo',
    company: 'Empresa Exemplo',
    niche: 'negocioLocal',
    city: 'Belém, PA',
    responsible: 'Vinícius Valente',
    date: 'Setembro de 2026'
  },
  proposal: {
    managementFee: 1500,
    recommendedAdSpend: 3000,
    deadline: '30 dias iniciais de estruturação e validação',
    conditions: 'Mensalidade recorrente. Mídia paga diretamente às plataformas.',
    discount: 0,
    validity: '7 dias',
    servicesIncluded: ['Estratégia', 'Gestão de tráfego', 'Rastreamento', 'Landing page', 'Relatórios']
  },
  metrics: {
    investment: 3000,
    reach: 42000,
    impressions: 68000,
    leads: 60,
    cpl: 50,
    opportunities: 18,
    sales: 5,
    revenue: 25000,
    roas: 8.3
  },
  calculator: {
    adSpend: 3000,
    averageTicket: 5000,
    estimatedCPL: 50,
    leadToOpportunity: 30,
    opportunityToSale: 28,
    margin: 40,
    managementFee: 1500,
    additionalCosts: 0,
    minSpend: 1000,
    maxSpend: 20000
  },
  landingPage: {
    enabled: true,
    headline: 'Uma página criada para converter atenção em oportunidade.',
    description: 'Mensagem, prova, rastreamento e ação em uma experiência controlada.'
  },
  tracking: {
    tools: ['Meta Pixel', 'API de Conversões', 'Google Analytics', 'UTMs', 'Eventos personalizados', 'CRM']
  },
  cta: {
    start: '#contato',
    question: '#contato',
    approve: '#contato'
  },
  plans: [
    {
      name: 'Essencial', price: 1200, description: 'Para validar aquisição com uma operação enxuta.',
      items: ['Gestão de tráfego', '1 canal principal', 'Relatório mensal', 'Suporte assíncrono'], cta: 'Escolher Essencial'
    },
    {
      name: 'Performance', price: 1800, description: 'Gestão + estrutura para medir e otimizar o funil.', featured: true, badge: 'Recomendado',
      items: ['Gestão de tráfego', 'Landing page', 'Pixel + eventos', 'Dashboard', 'Reunião mensal'], cta: 'Escolher Performance'
    },
    {
      name: 'Estrutura Completa', price: 2800, description: 'Aquisição, rastreamento e suporte comercial mais completo.',
      items: ['Meta + Google', 'Landing pages', 'Pixel + API', 'Dashboard avançado', 'Reuniões quinzenais'], cta: 'Escolher Completo'
    }
  ]
};
