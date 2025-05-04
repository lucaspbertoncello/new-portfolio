import HeroArea from "./components/HeroArea";
import AboutArea from "./components/AboutArea";
import ExperienceArea from "./components/ExperienceArea";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

import AOS from "aos";

export default function Home() {
  return (
    <main className="pt-40">
      <HeroArea />
      <AboutArea />
      <ExperienceArea />
      <Skills />
      <Footer />
    </main>
  );
}
