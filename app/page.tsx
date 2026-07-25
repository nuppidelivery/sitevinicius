import { Hero } from "@/components/sections/hero";
import { MarqueeText } from "@/components/sections/marquee-text";
import { Problem } from "@/components/sections/problem";
import { Comparison } from "@/components/sections/comparison";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Results } from "@/components/sections/results";
import { About } from "@/components/sections/about";
import { FAQ } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full">
      <Hero />
      <MarqueeText phrases={[
        "Decidir depois é decidir perder dinheiro.", 
        "Atenção custa caro, mas a invisibilidade custa a sua empresa.", 
        "O cliente que você perdeu hoje não volta amanhã.", 
        "Orçamento sem estratégia é doação para as plataformas.", 
        "Lucro não acontece por sorte, acontece por engenharia."
      ]} />
      <Problem />
      <Comparison />
      <Services />
      <MarqueeText phrases={[
        "Menos promessa mágica, mais matemática de vendas.", 
        "Investimento real se paga com fluxo de caixa previsível.", 
        "Parar de adivinhar é o primeiro passo para começar a escalar.", 
        "Nenhuma campanha salva uma oferta que o mercado rejeita.", 
        "Transformamos a complexidade tecnológica em dinheiro na conta."
      ]} />
      <Process />
      <Results />
      <About />
      <FAQ />
      <MarqueeText phrases={[
        "Você pode aprender errando ou escalar com processo validado.", 
        "A tecnologia pune quem hesita e recompensa quem antecipa.", 
        "Não é sobre investir mais, é sobre investir onde retorna.", 
        "O dinheiro flui para onde a conversão é mais fácil.", 
        "O próximo passo do seu concorrente não vai esperar por você."
      ]} />
      <Cta />
    </main>
  );
}
