import Container from "../../components/Container";
import Title from "../../components/Title";

import { Mail, Instagram, MessageCircle } from "lucide-react";

import ContactItem from "./components/ContactItem";

export default function Contact() {
  return (
    <main className="my-20">
      <Container>
        <Title text="Entre em contato" />

        <p className="text-lg">
          Procurando por um desenvolvedor ou companheiro de equipe para
          trabalhar junto? Me procure nas redes sociais a seguir e darei uma
          resposta em menos de 24 horas.
        </p>

        <ContactItem
          link={`mailto:lucasbertoncello1@gmail.com?subject=Contato%20via%20site&body=Olá%20Lucas%2C%0D%0A`}
          placeholder="lucasbertoncello1@gmail.com"
        >
          <Mail />
        </ContactItem>

        <ContactItem
          link={`https://www.instagram.com/lucas.bertoncello/`}
          placeholder="lucas.bertoncello"
        >
          <Instagram />
        </ContactItem>

        <ContactItem
          link={`https://wa.me/41995257119`}
          placeholder="+55 (41) 99525-7119"
        >
          <MessageCircle />
        </ContactItem>
      </Container>
    </main>
  );
}
