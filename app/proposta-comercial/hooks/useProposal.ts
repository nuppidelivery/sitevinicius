'use client';

import { useEffect, useState } from 'react';
import { proposalConfig as defaultConfig } from '@/app/proposta-comercial/config/proposal';
import { ProposalConfig } from '@/app/proposta-comercial/config/types';

const STORAGE_KEY = 'vv-proposta-config-v1';

export function useProposal() {
  const [config, setConfig] = useState<ProposalConfig>(defaultConfig);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setConfig(JSON.parse(saved));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  }, [config, hydrated]);

  const reset = () => setConfig(defaultConfig);
  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `proposta-${config.client.company.toLowerCase().replace(/\s+/g, '-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return { config, setConfig, reset, exportJSON };
}
