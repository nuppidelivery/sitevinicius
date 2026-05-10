import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Problem } from "@/components/sections/problem";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Results } from "@/components/sections/results";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full overflow-x-hidden">
      <Hero />
      <Marquee />
      <Problem />
      <Services />
      <Process />
      <Results />
      <Testimonials />
      <FAQ />
      <Cta />
    </main>
  );
}
