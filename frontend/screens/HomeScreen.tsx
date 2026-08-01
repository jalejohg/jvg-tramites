import HomeHero from "@/components/home/HomeHero";
import HomeServices from "@/components/home/HomeServices";
import HomePillars from "@/components/home/HomePillars";
import HomeProcess from "@/components/home/HomeProcess";
import HomeDirector from "@/components/home/HomeDirector";
import HomeCounters from "@/components/home/HomeCounters";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeCta from "@/components/home/HomeCta";

export default function HomeScreen() {
  return (
    <main id="contenido-principal">
      <HomeHero />
      <HomeServices />
      <HomePillars />
      <HomeProcess />
      <HomeDirector />
      <HomeCounters />
      <HomeTestimonials />
      <HomeCta />
    </main>
  );
}
