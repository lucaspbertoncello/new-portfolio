import moldPar from "../assets/images/moldpar.png";
import myContacts from "../assets/images/mycontacts.png";

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
];
