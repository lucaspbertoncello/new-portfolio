import Container from "../../components/Container";

import HeroArea from "./components/HeroArea";
import AboutArea from "./components/AboutArea";

export default function Home() {
  return (
    <main className="py-40">
      <Container>
        <HeroArea />
        <AboutArea />
      </Container>
    </main>
  );
}
