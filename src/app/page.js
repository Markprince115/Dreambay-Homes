import About from "@/components/sections/About";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Service from "@/components/sections/Service";

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <About />
      <Faq/>
    </main>
  );
}
