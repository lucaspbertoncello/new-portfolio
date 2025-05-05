import moldPar from "../assets/images/moldpar.png";
import myContacts from "../assets/images/mycontacts.png";
import getkcal from "../assets/images/getkcal.png";
import burgerLp from "../assets/images/burger-lp.png";

export const projects = [
  {
    image: moldPar,
    projectName: "MoldPar",
    projectLink: "https://www.moldpar.com.br",
    githubLink: "",
    techStack: ["Html", "Css", "JavaScript"],
    description:
      "Landing page desenvolvida com Html, Css e JavaScript. Com foco na melhor experiência para o usuário, dei ênfase no design responsivo e interatividade. Otimizei o SEO para proporcionar o melhor mecanismo de busca possível para a empresa.",
  },
  {
    image: myContacts,
    projectName: "myContacts",
    projectLink: "",
    githubLink: "https://github.com/lucaspbertoncello/my-contacts",
    techStack: [
      "ReactJS",
      "NodeJS",
      "Express",
      "Docker",
      "Tailwind",
      "PostgreSQL",
    ],
    description:
      "Este é um projeto Full Stack utilizando React no front-end e Node.js com Express no back-end. A aplicação permite o gerenciamento de uma lista de contatos e categorias, com operações completas de Criar, Ler, Atualizar e Excluir (CRUD).",
  },
  {
    image: burgerLp,
    projectName: "Burguer",
    projectLink: "",
    githubLink: "https://github.com/lucaspbertoncello/burguer-landing-page",
    techStack: ["Html", "Css"],
    description:
      "Landing page estática criada para venda de hambúrgers, realizada para fins de aprendizado.",
  },
  {
    image: getkcal,
    projectName: "getkcal",
    projectLink: "",
    githubLink: "https://github.com/lucaspbertoncello/getkcal",
    techStack: ["Html", "Css", "JavaScript"],
    description:
      "Projeto simples criado com JavaScript, para medir o índice de massa corporal (IMC), com base nos dados fornecidos no formulário da aplicação",
  },
];
