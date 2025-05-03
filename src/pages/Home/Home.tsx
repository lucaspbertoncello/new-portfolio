import HeroArea from "./components/HeroArea";
import AboutArea from "./components/AboutArea";
import ExperienceArea from "./components/ExperienceArea";

export default function Home() {
  return (
    <main className="pt-40">
      <HeroArea />
      <AboutArea />
      <ExperienceArea />
    </main>
  );
}
