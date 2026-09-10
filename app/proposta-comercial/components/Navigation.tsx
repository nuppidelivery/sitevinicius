'use client';

const items = [
  ['inicio', 'Início'], ['negocio', 'Seu negócio'], ['diagnostico', 'Diagnóstico'], ['estrategia', 'Estratégia'],
  ['aquisicao', 'Aquisição'], ['landing', 'Landing Page'], ['resultados', 'Resultados'], ['investimento', 'Investimento'], ['proximos', 'Próximos passos']
];

export function Navigation({ active, presentation, onAdmin, onPresentation }: { active: number; presentation: boolean; onAdmin: () => void; onPresentation: () => void }) {
  if (presentation) return null;
  return (
    <aside className="nav-shell">
      <div>
        <div className="brand-mark">VV</div>
        <div className="brand-copy"><strong>Vinícius Valente</strong><span>Marketing de Performance</span></div>
      </div>
      <nav>
        {items.map(([id, label], i) => (
          <a key={id} href={`#${id}`} className={active === i ? 'active' : ''}>
            <span>{String(i + 1).padStart(2, '0')}</span>{label}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <button onClick={onPresentation}>Modo apresentação</button>
        <button onClick={onAdmin} className="ghost">Editar proposta</button>
      </div>
    </aside>
  );
}
