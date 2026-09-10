export type NicheKey =
  | 'negocioLocal'
  | 'clinica'
  | 'energiaSolar'
  | 'segurancaEletronica'
  | 'petshop'
  | 'imobiliario'
  | 'automotivo'
  | 'b2b'
  | 'educacao'
  | 'outro';

export type NicheConfig = {
  label: string;
  eyebrow: string;
  headline: string;
  problem: string;
  argument: string;
  strategy: string[];
  journey: string[];
  metrics: string[];
  adExample: string;
  landingHeadline: string;
  landingSubheadline: string;
  conversionTypes: string[];
};

export type ProposalConfig = {
  niches: Record<NicheKey, NicheConfig>;
  brand: {
    primary: string;
    accent: string;
    name: string;
    descriptor: string;
  };
  client: {
    name: string;
    company: string;
    niche: NicheKey;
    city: string;
    logo?: string;
    responsible: string;
    date: string;
  };
  proposal: {
    managementFee: number;
    recommendedAdSpend: number;
    deadline: string;
    conditions: string;
    discount: number;
    validity: string;
    servicesIncluded: string[];
  };
  metrics: {
    investment: number;
    reach: number;
    impressions: number;
    leads: number;
    cpl: number;
    opportunities: number;
    sales: number;
    revenue: number;
    roas: number;
  };
  calculator: {
    adSpend: number;
    averageTicket: number;
    estimatedCPL: number;
    leadToOpportunity: number;
    opportunityToSale: number;
    margin: number;
    managementFee: number;
    additionalCosts: number;
    minSpend: number;
    maxSpend: number;
  };
  landingPage: {
    enabled: boolean;
    headline: string;
    description: string;
  };
  tracking: {
    tools: string[];
  };
  cta: {
    start: string;
    question: string;
    approve: string;
  };
  plans: {
    name: string;
    price: number;
    description: string;
    featured?: boolean;
    badge?: string;
    items: string[];
    cta: string;
  }[];
};
