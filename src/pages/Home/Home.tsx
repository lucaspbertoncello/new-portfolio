import HeroArea from "./components/HeroArea";
import AboutArea from "./components/AboutArea";
import ExperienceArea from "./components/ExperienceArea";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="pt-40">
      <div data-aos="fade-right">
        <HeroArea />
      </div>

      <div data-aos="fade-left">
        <AboutArea />
      </div>

      <div data-aos="fade-right">
        <ExperienceArea />
      </div>

      <div data-aos="fade-left">
        <Skills />
      </div>

      <Footer />
    </main>
  );
}
