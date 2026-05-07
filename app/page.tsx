import { Hero } from "@/components/sections/hero";
import { Proof } from "@/components/sections/proof";
import { Services } from "@/components/sections/services";
import { Differentials } from "@/components/sections/differentials";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full overflow-x-hidden">
      <Hero />
      <Proof />
      <Services />
      <Differentials />
      <Portfolio />
      <Process />
      <Cta />
    </main>
  );
}
