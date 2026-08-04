import HomeHero from "@/components/home/HomeHero";
import HomeAbout from "@/components/home/HomeAbout";
import HomeServices from "@/components/home/HomeServices";
import HomeProcess from "@/components/home/HomeProcess";
import HomeCases from "@/components/home/HomeCases";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeCta from "@/components/home/HomeCta";

export default function HomeScreen() {
  return (
    <main id="contenido-principal">
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeProcess />
      <HomeCases />
      <HomeTestimonials />
      <HomeCta />
    </main>
  );
}
