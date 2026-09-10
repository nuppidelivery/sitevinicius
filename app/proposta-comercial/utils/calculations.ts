export type CalculatorInput = {
  adSpend: number;
  averageTicket: number;
  estimatedCPL: number;
  leadToOpportunity: number;
  opportunityToSale: number;
  margin: number;
  managementFee: number;
  additionalCosts: number;
};

const safe = (value: number, min = 0, max = 1_000_000_000) => {
  if (!Number.isFinite(value)) return 0;
  return Math.min(Math.max(value, min), max);
};

export function calculateProjection(input: CalculatorInput) {
  const adSpend = safe(input.adSpend);
  const cpl = safe(input.estimatedCPL, 0.01);
  const avgTicket = safe(input.averageTicket);
  const leadRate = safe(input.leadToOpportunity, 0, 100) / 100;
  const saleRate = safe(input.opportunityToSale, 0, 100) / 100;
  const margin = safe(input.margin, 0, 100) / 100;
  const managementFee = safe(input.managementFee);
  const additionalCosts = safe(input.additionalCosts);

  const estimatedLeads = adSpend / cpl;
  const estimatedOpportunities = estimatedLeads * leadRate;
  const estimatedSales = estimatedOpportunities * saleRate;
  const estimatedRevenue = estimatedSales * avgTicket;
  const totalInvestment = adSpend + managementFee + additionalCosts;
  const estimatedROAS = adSpend > 0 ? estimatedRevenue / adSpend : 0;
  const contribution = estimatedRevenue * margin;
  const estimatedROI = totalInvestment > 0 ? (contribution - totalInvestment) / totalInvestment : 0;
  const paybackDays = contribution > 0 ? Math.min(365, Math.max(1, (totalInvestment / contribution) * 30)) : 365;

  return {
    estimatedLeads,
    estimatedOpportunities,
    estimatedSales,
    estimatedRevenue,
    totalInvestment,
    estimatedROAS,
    estimatedROI,
    paybackDays
  };
}
