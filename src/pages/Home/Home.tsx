import { useEffect } from "react";

import HeroArea from "./components/HeroArea";
import AboutArea from "./components/AboutArea";
import ExperienceArea from "./components/ExperienceArea";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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
