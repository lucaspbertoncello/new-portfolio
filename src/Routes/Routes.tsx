import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
    ],
  },
]);
