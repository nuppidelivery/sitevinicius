REGRAS DE ANIMAÇÃO DESTE PROJETO

1. Todo scroll da página passa por Lenis. Nenhuma animação de scroll usa
   o scroll nativo do navegador diretamente.
2. GSAP controla todo movimento (entradas, saídas, transformações,
   sequenciamento). Lenis controla apenas a suavização do scroll.
3. ScrollTrigger deve ser sincronizado manualmente com o Lenis via
   `lenis.on('scroll', ScrollTrigger.update)` e `gsap.ticker`, para
   evitar dessincronização entre os dois sistemas — especialmente em
   mobile, onde é a causa mais comum de "pulos" de animação.
4. Nenhuma entrada ou saída de elemento dura menos de 0.6s. Sites
   cinematográficos são lentos com intenção — rapidez demais quebra
   a sensação de câmera controlada.
5. Easing permitido: apenas `power3.out`, `power3.inOut` ou `expo.out`.
   Qualquer outro easing encontrado no código deve ser substituído por
   um destes três, mantendo o mesmo propósito da animação.
6. Antes de qualquer correção de bug de animação, ler este arquivo
   primeiro.
