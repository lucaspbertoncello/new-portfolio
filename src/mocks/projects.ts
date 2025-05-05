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
      "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
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
      "This is a Full Stack project using React on the front-end and Node.js + Express on the back-end. The application allows managing a list of contacts and categories with full Create, Read, Update, and Delete (CRUD) operations.",
  },
];
