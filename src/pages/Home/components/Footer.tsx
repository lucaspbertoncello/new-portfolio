import Container from "../../../components/Container";

import reactIcon from "../../../assets/icons/react.svg";
import tailwindIcon from "../../../assets/icons/tailwind.svg";

export default function Footer() {
  return (
    <footer className="dark:bg-dark-800 p-8">
      <Container>
        <div className="flex gap-4 justify-between items-center flex-col lg:flex-row">
          <p>
            Copyright © 2025{" "}
            <span className="dark:text-main-dark text-main-light">
              lucasbertoncello.com
            </span>
            {". "}
            Todos os direitos reservados.
          </p>

          <p className="flex gap-1">
            Feito com <img className="w-5" src={reactIcon} alt="ReactJS" /> e{" "}
            <img className="w-5" src={tailwindIcon} alt="TailwindCSS" />
          </p>
        </div>
      </Container>
    </footer>
  );
}
