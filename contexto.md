# Contexto do Projeto: Site Vorté

Este documento serve para guiar futuras expansões, manutenções ou criações de novas páginas no site da agência Vorté.

## 1. Posicionamento e Público-Alvo
- **Público**: Pequenas, médias e grandes empresas interessadas em captação de leads qualificados. O filtro mínimo é "empresas faturando R$50k+/mês".
- **Objetivo**: Transmitir autoridade, sofisticação, alta performance e confiança. O site precisa convencer o cliente de que a Vorté é uma parceira tecnológica estratégica, não "apenas mais uma agência".
- **Tom de Voz**: Premium, assertivo, orientado a resultados e dados. Uso de gatilhos mentais de exclusividade e urgência.

## 2. Decisões de Design (UX/UI)
- **Estilo**: "Dark Mode" elegante, inspirado no minimalismo das maiores startups do Vale do Silício.
- **Paleta de Cores**:
  - `Background`: Preto profundo e cinzas escuros.
  - `Superfícies`: Glassmorphism (efeito de vidro fosco com transparência e desfoque).
  - `Acentos`: Azul e Roxo (para botões, glows e textos com gradientes).
- **Tipografia**: Fonte principal "Inter" (clean e moderna).
- **Micro-interações**: Hover effects nos cards, textos flutuando ao fazer scroll e glows sutis nos botões criados com `Framer Motion`.

## 3. Arquitetura e Componentização
O código foi escrito de forma componentizada para facilitar alterações e reaproveitamento.
- `app/`: Contém as páginas principais e o layout global (inclui configurações de SEO e Meta Tags).
- `components/ui/`: Componentes genéricos e reaproveitáveis (como `Button` e `Card`).
- `components/sections/`: Pedaços maiores da interface, divididos logicamente (ex: `Hero`, `Services`, `Portfolio`, `CTA`).
- `components/layout/`: Elementos globais como `Navbar` e `Footer`.

## 4. Evoluções e Melhorias Futuras (Roadmap)
- **Integração de Contato**: O formulário do rodapé e os botões de CTA ainda precisam ser linkados a uma ferramenta (ex: envio direto para um número do WhatsApp, ou Webhook do Typeform/ActiveCampaign).
- **Blog para SEO Orgânico**: Criar a rota `/blog` e consumir dados de um CMS Headless (como Sanity ou Contentful).
- **Botões Flutuantes**: Adicionar futuramente integração com assistentes virtuais por voz ou chatbots de conversão.
